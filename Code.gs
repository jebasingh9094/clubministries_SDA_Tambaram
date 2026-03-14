// ============================================================
// Club Ministries — Google Apps Script Backend
// ============================================================
// INSTRUCTIONS:
//  1. Create a new Google Sheet with 3 tabs: Members, Requirements, Progress
//  2. Go to Extensions > Apps Script
//  3. Paste this entire code into Code.gs
//  4. Click Deploy > New Deployment > Web App
//     - Execute as: Me
//     - Who has access: Anyone
//  5. Copy the Web App URL and paste it in config.js (APPS_SCRIPT_URL)
//  6. Set USE_DEMO_DATA = false in config.js
// ============================================================

const SHEET_NAMES = {
  MEMBERS: 'Members',
  REQUIREMENTS: 'Requirements',
  PROGRESS: 'Progress'
};

// ——— GET handler ———
function doGet(e) {
  const action = e.parameter.action;
  let result;

  switch (action) {
    case 'getMembers':
      result = getMembers(e.parameter);
      break;
    case 'getRequirements':
      result = getRequirements(e.parameter);
      break;
    case 'getProgress':
      result = getProgress(e.parameter);
      break;
    default:
      result = { error: 'Unknown action' };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ——— POST handler ———
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const action = body.action;
  let result;

  switch (action) {
    case 'addMember':
      result = addMember(body);
      break;
    case 'updateMember':
      result = updateMember(body);
      break;
    case 'deleteMember':
      result = deleteMember(body);
      break;
    case 'addRequirement':
      result = addRequirement(body);
      break;
    case 'updateProgress':
      result = updateProgress(body);
      break;
    default:
      result = { error: 'Unknown action' };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ——— Helpers ———
function getSheet(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

function sheetToJSON(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  });
}

// ——— Members ———
function getMembers(params) {
  const sheet = getSheet(SHEET_NAMES.MEMBERS);
  let data = sheetToJSON(sheet);

  if (params && params.division) {
    data = data.filter(m => m.Division === params.division);
  }
  if (params && params.group) {
    data = data.filter(m => m.Group === params.group);
  }

  // Normalize keys
  data = data.map(m => ({
    id: String(m.MemberID),
    name: m.Name,
    division: m.Division,
    group: m.Group,
    joinDate: m.JoinDate
  }));

  return { data };
}

function addMember(body) {
  const sheet = getSheet(SHEET_NAMES.MEMBERS);
  const id = 'M' + new Date().getTime().toString().slice(-6);
  sheet.appendRow([id, body.name, body.division, body.group, body.joinDate || new Date().toISOString().split('T')[0]]);
  return { success: true, id };
}

function updateMember(body) {
  const sheet = getSheet(SHEET_NAMES.MEMBERS);
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(body.id)) {
      sheet.getRange(i + 1, 2).setValue(body.name);
      sheet.getRange(i + 1, 3).setValue(body.division);
      sheet.getRange(i + 1, 4).setValue(body.group);
      sheet.getRange(i + 1, 5).setValue(body.joinDate);
      return { success: true };
    }
  }

  return { error: 'Member not found' };
}

function deleteMember(body) {
  const sheet = getSheet(SHEET_NAMES.MEMBERS);
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(body.id)) {
      sheet.deleteRow(i + 1);

      // Also delete progress entries
      const progressSheet = getSheet(SHEET_NAMES.PROGRESS);
      const pData = progressSheet.getDataRange().getValues();
      for (let j = pData.length - 1; j >= 1; j--) {
        if (String(pData[j][0]) === String(body.id)) {
          progressSheet.deleteRow(j + 1);
        }
      }

      return { success: true };
    }
  }

  return { error: 'Member not found' };
}

// ——— Requirements ———
function getRequirements(params) {
  const sheet = getSheet(SHEET_NAMES.REQUIREMENTS);
  let data = sheetToJSON(sheet);

  if (params && params.division) {
    data = data.filter(r => r.Division === params.division);
  }
  if (params && params.group) {
    data = data.filter(r => r.Group === params.group);
  }

  data = data.map(r => ({
    id: String(r.ReqID),
    division: r.Division,
    group: r.Group,
    name: r.RequirementName,
    category: r.Category
  }));

  return { data };
}

function addRequirement(body) {
  const sheet = getSheet(SHEET_NAMES.REQUIREMENTS);
  
  // body expects { id, name, category, division, group }
  sheet.appendRow([
    body.id,
    body.division,
    body.group,
    body.name,
    body.category
  ]);
  
  return { success: true, id: body.id };
}

// ——— Progress ———
function getProgress(params) {
  const sheet = getSheet(SHEET_NAMES.PROGRESS);
  let data = sheetToJSON(sheet);

  if (params && params.memberId) {
    data = data.filter(p => String(p.MemberID) === String(params.memberId));
  }

  data = data.map(p => ({
    memberId: String(p.MemberID),
    reqId: String(p.ReqID),
    status: p.Status,
    completedDate: p.CompletedDate || '',
    notes: p.Notes || ''
  }));

  return { data };
}

function updateProgress(body) {
  const sheet = getSheet(SHEET_NAMES.PROGRESS);
  const data = sheet.getDataRange().getValues();

  // Try to find existing entry
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(body.memberId) && String(data[i][1]) === String(body.reqId)) {
      sheet.getRange(i + 1, 3).setValue(body.status);
      sheet.getRange(i + 1, 4).setValue(body.completedDate || '');
      sheet.getRange(i + 1, 5).setValue(body.notes || '');
      return { success: true };
    }
  }

  // Create new entry
  sheet.appendRow([body.memberId, body.reqId, body.status, body.completedDate || '', body.notes || '']);
  return { success: true };
}
