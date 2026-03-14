// ============================================
// Club Ministries Dashboard — Application Logic
// ============================================

// ——— Demo Data ———
const DEMO_DATA = {
  members: [
    { id: 'M001', name: 'Aarav Sharma',    division: 'Adventurers', group: 'LITTLE LAMB',   joinDate: '2025-01-10' },
    { id: 'M002', name: 'Priya Patel',     division: 'Adventurers', group: 'LITTLE LAMB',   joinDate: '2025-02-05' },
    { id: 'M003', name: 'Ethan Johnson',   division: 'Adventurers', group: 'EAGER BEAVER',  joinDate: '2025-01-20' },
    { id: 'M004', name: 'Sophia Williams', division: 'Adventurers', group: 'BUSY BEE',      joinDate: '2025-03-01' },
    { id: 'M005', name: 'Liam Brown',      division: 'Adventurers', group: 'SUNBEAM',       joinDate: '2025-01-15' },
    { id: 'M006', name: 'Olivia Davis',    division: 'Adventurers', group: 'BUILDER',       joinDate: '2025-02-10' },
    { id: 'M007', name: 'Noah Martinez',   division: 'Adventurers', group: 'HELPING HAND',  joinDate: '2025-03-15' },
    { id: 'M008', name: 'Emma Wilson',     division: 'Pathfinders', group: 'FRIEND',        joinDate: '2025-01-08' },
    { id: 'M009', name: 'James Anderson',  division: 'Pathfinders', group: 'FRIEND',        joinDate: '2025-02-20' },
    { id: 'M010', name: 'Isabella Thomas', division: 'Pathfinders', group: 'COMPANION',     joinDate: '2025-01-30' },
    { id: 'M011', name: 'Benjamin Lee',    division: 'Pathfinders', group: 'EXPLORER',      joinDate: '2025-03-05' },
    { id: 'M012', name: 'Mia Harris',      division: 'Pathfinders', group: 'RANGER',        joinDate: '2025-02-15' },
    { id: 'M013', name: 'Lucas Clark',     division: 'Pathfinders', group: 'VOYAGER',       joinDate: '2025-01-25' },
    { id: 'M014', name: 'Charlotte Lewis',  division: 'Pathfinders', group: 'GUIDE',         joinDate: '2025-03-10' },
    { id: 'M015', name: 'Daniel Robinson', division: 'Adventurers', group: 'EAGER BEAVER',  joinDate: '2025-02-28' },
    { id: 'M016', name: 'Amelia Walker',   division: 'Adventurers', group: 'SUNBEAM',       joinDate: '2025-01-18' },
  ],

  requirements: [
    // ——— Adventurers ———
    // LITTLE LAMB
    { id: 'R001', division: 'Adventurers', group: 'LITTLE LAMB', name: 'Know the Little Lamb Pledge',    category: 'Basic' },
    { id: 'R002', division: 'Adventurers', group: 'LITTLE LAMB', name: 'Learn a Bible verse',            category: 'Basic' },
    { id: 'R003', division: 'Adventurers', group: 'LITTLE LAMB', name: 'Create a nature craft',          category: 'Nature' },
    { id: 'R004', division: 'Adventurers', group: 'LITTLE LAMB', name: 'Participate in a group activity', category: 'Social' },
    // EAGER BEAVER
    { id: 'R005', division: 'Adventurers', group: 'EAGER BEAVER', name: 'Know the Eager Beaver Pledge',  category: 'Basic' },
    { id: 'R006', division: 'Adventurers', group: 'EAGER BEAVER', name: 'Learn about God\'s creation',   category: 'Spiritual' },
    { id: 'R007', division: 'Adventurers', group: 'EAGER BEAVER', name: 'Complete a service project',    category: 'Service' },
    { id: 'R008', division: 'Adventurers', group: 'EAGER BEAVER', name: 'Learn basic first aid',         category: 'Life Skills' },
    // BUSY BEE
    { id: 'R009', division: 'Adventurers', group: 'BUSY BEE', name: 'Know the Busy Bee Pledge',          category: 'Basic' },
    { id: 'R010', division: 'Adventurers', group: 'BUSY BEE', name: 'Memorize two Bible verses',         category: 'Spiritual' },
    { id: 'R011', division: 'Adventurers', group: 'BUSY BEE', name: 'Identify five birds',               category: 'Nature' },
    { id: 'R012', division: 'Adventurers', group: 'BUSY BEE', name: 'Help with a home chore for a week', category: 'Service' },
    // SUNBEAM
    { id: 'R013', division: 'Adventurers', group: 'SUNBEAM', name: 'Know the Sunbeam Pledge',           category: 'Basic' },
    { id: 'R014', division: 'Adventurers', group: 'SUNBEAM', name: 'Tell a Bible story',                 category: 'Spiritual' },
    { id: 'R015', division: 'Adventurers', group: 'SUNBEAM', name: 'Plant a seed and watch it grow',     category: 'Nature' },
    { id: 'R016', division: 'Adventurers', group: 'SUNBEAM', name: 'Complete a safety drill',            category: 'Life Skills' },
    // BUILDER
    { id: 'R017', division: 'Adventurers', group: 'BUILDER', name: 'Know the Builder Pledge',            category: 'Basic' },
    { id: 'R018', division: 'Adventurers', group: 'BUILDER', name: 'Build a simple project',             category: 'Craft' },
    { id: 'R019', division: 'Adventurers', group: 'BUILDER', name: 'Learn about community helpers',      category: 'Social' },
    { id: 'R020', division: 'Adventurers', group: 'BUILDER', name: 'Memorize the Adventurer law',        category: 'Spiritual' },
    // HELPING HAND
    { id: 'R021', division: 'Adventurers', group: 'HELPING HAND', name: 'Know the Helping Hand Pledge',  category: 'Basic' },
    { id: 'R022', division: 'Adventurers', group: 'HELPING HAND', name: 'Complete a community service',  category: 'Service' },
    { id: 'R023', division: 'Adventurers', group: 'HELPING HAND', name: 'Learn to tie two knots',        category: 'Life Skills' },
    { id: 'R024', division: 'Adventurers', group: 'HELPING HAND', name: 'Share a testimony',             category: 'Spiritual' },

    // ——— Pathfinders ———
    // FRIEND
    { id: 'R025', division: 'Pathfinders', group: 'FRIEND', name: 'Know the Pathfinder Pledge and Law',  category: 'Basic' },
    { id: 'R026', division: 'Pathfinders', group: 'FRIEND', name: 'Earn the Christian Grooming honor',   category: 'Honor' },
    { id: 'R027', division: 'Pathfinders', group: 'FRIEND', name: 'Learn about the Bible books',         category: 'Spiritual' },
    { id: 'R028', division: 'Pathfinders', group: 'FRIEND', name: 'Complete a nature study',             category: 'Nature' },
    { id: 'R029', division: 'Pathfinders', group: 'FRIEND', name: 'Participate in a group hike',         category: 'Outdoor' },
    // COMPANION
    { id: 'R030', division: 'Pathfinders', group: 'COMPANION', name: 'Complete the Companion requirements', category: 'Basic' },
    { id: 'R031', division: 'Pathfinders', group: 'COMPANION', name: 'Earn two honors',                    category: 'Honor' },
    { id: 'R032', division: 'Pathfinders', group: 'COMPANION', name: 'Memorize 10 Bible verses',           category: 'Spiritual' },
    { id: 'R033', division: 'Pathfinders', group: 'COMPANION', name: 'Plan a group worship',               category: 'Leadership' },
    { id: 'R034', division: 'Pathfinders', group: 'COMPANION', name: 'Complete a camping trip',             category: 'Outdoor' },
    // EXPLORER
    { id: 'R035', division: 'Pathfinders', group: 'EXPLORER', name: 'Complete Explorer basic requirements', category: 'Basic' },
    { id: 'R036', division: 'Pathfinders', group: 'EXPLORER', name: 'Earn three honors',                   category: 'Honor' },
    { id: 'R037', division: 'Pathfinders', group: 'EXPLORER', name: 'Learn advanced first aid',             category: 'Life Skills' },
    { id: 'R038', division: 'Pathfinders', group: 'EXPLORER', name: 'Lead a group activity',               category: 'Leadership' },
    { id: 'R039', division: 'Pathfinders', group: 'EXPLORER', name: 'Complete a mission project',           category: 'Service' },
    // RANGER
    { id: 'R040', division: 'Pathfinders', group: 'RANGER', name: 'Complete Ranger requirements',          category: 'Basic' },
    { id: 'R041', division: 'Pathfinders', group: 'RANGER', name: 'Earn four honors',                      category: 'Honor' },
    { id: 'R042', division: 'Pathfinders', group: 'RANGER', name: 'Learn wilderness survival basics',      category: 'Outdoor' },
    { id: 'R043', division: 'Pathfinders', group: 'RANGER', name: 'Teach a skill to others',               category: 'Leadership' },
    { id: 'R044', division: 'Pathfinders', group: 'RANGER', name: 'Complete an outreach project',           category: 'Service' },
    // VOYAGER
    { id: 'R045', division: 'Pathfinders', group: 'VOYAGER', name: 'Complete Voyager requirements',        category: 'Basic' },
    { id: 'R046', division: 'Pathfinders', group: 'VOYAGER', name: 'Earn five honors',                     category: 'Honor' },
    { id: 'R047', division: 'Pathfinders', group: 'VOYAGER', name: 'Plan and lead a campout',              category: 'Outdoor' },
    { id: 'R048', division: 'Pathfinders', group: 'VOYAGER', name: 'Complete a community project',         category: 'Service' },
    { id: 'R049', division: 'Pathfinders', group: 'VOYAGER', name: 'Write a personal testimony',           category: 'Spiritual' },
    // GUIDE
    { id: 'R050', division: 'Pathfinders', group: 'GUIDE', name: 'Complete Guide requirements',            category: 'Basic' },
    { id: 'R051', division: 'Pathfinders', group: 'GUIDE', name: 'Earn six honors',                        category: 'Honor' },
    { id: 'R052', division: 'Pathfinders', group: 'GUIDE', name: 'Mentor a younger Pathfinder',            category: 'Leadership' },
    { id: 'R053', division: 'Pathfinders', group: 'GUIDE', name: 'Lead a week of worship',                 category: 'Spiritual' },
    { id: 'R054', division: 'Pathfinders', group: 'GUIDE', name: 'Organize a community outreach event',    category: 'Service' },
  ],

  progress: [
    // Little Lamb members
    { memberId: 'M001', reqId: 'R001', status: 'completed',   completedDate: '2025-03-15' },
    { memberId: 'M001', reqId: 'R002', status: 'completed',   completedDate: '2025-04-10' },
    { memberId: 'M001', reqId: 'R003', status: 'in_progress', completedDate: '' },
    { memberId: 'M002', reqId: 'R001', status: 'completed',   completedDate: '2025-03-20' },
    { memberId: 'M002', reqId: 'R002', status: 'in_progress', completedDate: '' },
    // Eager Beaver
    { memberId: 'M003', reqId: 'R005', status: 'completed',   completedDate: '2025-04-01' },
    { memberId: 'M003', reqId: 'R006', status: 'completed',   completedDate: '2025-05-10' },
    { memberId: 'M003', reqId: 'R007', status: 'in_progress', completedDate: '' },
    { memberId: 'M015', reqId: 'R005', status: 'completed',   completedDate: '2025-04-05' },
    // Busy Bee
    { memberId: 'M004', reqId: 'R009', status: 'completed',   completedDate: '2025-04-15' },
    { memberId: 'M004', reqId: 'R010', status: 'completed',   completedDate: '2025-05-20' },
    { memberId: 'M004', reqId: 'R011', status: 'completed',   completedDate: '2025-06-01' },
    { memberId: 'M004', reqId: 'R012', status: 'in_progress', completedDate: '' },
    // Sunbeam
    { memberId: 'M005', reqId: 'R013', status: 'completed',   completedDate: '2025-02-20' },
    { memberId: 'M005', reqId: 'R014', status: 'completed',   completedDate: '2025-03-10' },
    { memberId: 'M016', reqId: 'R013', status: 'completed',   completedDate: '2025-03-01' },
    { memberId: 'M016', reqId: 'R014', status: 'in_progress', completedDate: '' },
    // Builder
    { memberId: 'M006', reqId: 'R017', status: 'completed',   completedDate: '2025-03-30' },
    { memberId: 'M006', reqId: 'R018', status: 'in_progress', completedDate: '' },
    // Helping Hand
    { memberId: 'M007', reqId: 'R021', status: 'completed',   completedDate: '2025-04-20' },
    { memberId: 'M007', reqId: 'R022', status: 'completed',   completedDate: '2025-05-15' },
    { memberId: 'M007', reqId: 'R023', status: 'completed',   completedDate: '2025-06-05' },
    // Pathfinders
    { memberId: 'M008', reqId: 'R025', status: 'completed',   completedDate: '2025-02-01' },
    { memberId: 'M008', reqId: 'R026', status: 'completed',   completedDate: '2025-03-15' },
    { memberId: 'M008', reqId: 'R027', status: 'completed',   completedDate: '2025-04-20' },
    { memberId: 'M008', reqId: 'R028', status: 'in_progress', completedDate: '' },
    { memberId: 'M009', reqId: 'R025', status: 'completed',   completedDate: '2025-03-10' },
    { memberId: 'M009', reqId: 'R026', status: 'in_progress', completedDate: '' },
    { memberId: 'M010', reqId: 'R030', status: 'completed',   completedDate: '2025-03-25' },
    { memberId: 'M010', reqId: 'R031', status: 'completed',   completedDate: '2025-04-30' },
    { memberId: 'M010', reqId: 'R032', status: 'in_progress', completedDate: '' },
    { memberId: 'M011', reqId: 'R035', status: 'completed',   completedDate: '2025-04-10' },
    { memberId: 'M011', reqId: 'R036', status: 'in_progress', completedDate: '' },
    { memberId: 'M012', reqId: 'R040', status: 'completed',   completedDate: '2025-03-05' },
    { memberId: 'M012', reqId: 'R041', status: 'completed',   completedDate: '2025-04-15' },
    { memberId: 'M012', reqId: 'R042', status: 'completed',   completedDate: '2025-05-10' },
    { memberId: 'M012', reqId: 'R043', status: 'completed',   completedDate: '2025-06-01' },
    { memberId: 'M013', reqId: 'R045', status: 'completed',   completedDate: '2025-02-28' },
    { memberId: 'M013', reqId: 'R046', status: 'completed',   completedDate: '2025-04-05' },
    { memberId: 'M013', reqId: 'R047', status: 'in_progress', completedDate: '' },
    { memberId: 'M014', reqId: 'R050', status: 'completed',   completedDate: '2025-04-10' },
    { memberId: 'M014', reqId: 'R051', status: 'completed',   completedDate: '2025-05-20' },
    { memberId: 'M014', reqId: 'R052', status: 'completed',   completedDate: '2025-06-15' },
    { memberId: 'M014', reqId: 'R053', status: 'in_progress', completedDate: '' },
  ]
};


// ============================================
// SheetAPI — Google Sheets integration
// ============================================
class SheetAPI {
  constructor(url, pin) {
    this.url = url;
    this.pin = pin;
  }

  async get(action, params = {}) {
    const queryStr = new URLSearchParams({ action, pin: this.pin, ...params }).toString();
    const res = await fetch(`${this.url}?${queryStr}`);
    const data = await res.json();
    if (data.error === 'Invalid PIN') throw new Error('Invalid PIN');
    return data;
  }

  async post(action, data) {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action, pin: this.pin, ...data })
    });
    const result = await res.json();
    if (result.error === 'Invalid PIN') throw new Error('Invalid PIN');
    return result;
  }
}


// ============================================
// DashboardApp — Main Application
// ============================================
class DashboardApp {
  constructor() {
    // Data stores
    this.members = [];
    this.requirements = [];
    this.progress = [];

    // State
    this.currentView = 'dashboard';
    this.currentDivision = null;
    this.currentGroup = null;
    this.currentMemberId = null;
    this.searchQuery = '';

    // API
    this.api = null; // Instantiated after successful PIN

    // Init
    this.cacheDOM();
    this.bindEvents();
    this.checkAuth();
  }

  // ——— DOM Cache ———
  cacheDOM() {
    // PIN
    this.pinOverlay   = document.getElementById('pinOverlay');
    this.pinInputs    = document.querySelectorAll('#pinInputGroup input');
    this.pinError     = document.getElementById('pinError');
    this.btnPinSubmit = document.getElementById('btnPinSubmit');

    // App
    this.appContainer   = document.getElementById('appContainer');
    this.sidebar        = document.getElementById('sidebar');
    this.mobileMenuBtn  = document.getElementById('mobileMenuBtn');

    // Top bar
    this.pageTitle    = document.getElementById('pageTitle');
    this.pageSubtitle = document.getElementById('pageSubtitle');
    this.searchInput  = document.getElementById('searchInput');
    this.btnLogout    = document.getElementById('btnLogout');

    // Views
    this.viewDashboard = document.getElementById('viewDashboard');
    this.viewGroup     = document.getElementById('viewGroup');
    this.viewDetail    = document.getElementById('viewDetail');

    // Dashboard
    this.overviewGrid  = document.getElementById('overviewGrid');
    this.divisionGrid  = document.getElementById('divisionGrid');

    // Group view
    this.groupTitle      = document.getElementById('groupTitle');
    this.memberTableBody = document.getElementById('memberTableBody');
    this.emptyMembers    = document.getElementById('emptyMembers');

    // Detail view
    this.detailAvatar     = document.getElementById('detailAvatar');
    this.detailName       = document.getElementById('detailName');
    this.detailMeta       = document.getElementById('detailMeta');
    this.detailCompleted  = document.getElementById('detailCompleted');
    this.detailInProgress = document.getElementById('detailInProgress');
    this.detailNotStarted = document.getElementById('detailNotStarted');
    this.detailPercent    = document.getElementById('detailPercent');
    this.detailProgressBar = document.getElementById('detailProgressBar');
    this.reqChecklist     = document.getElementById('reqChecklist');
    this.btnBack          = document.getElementById('btnBack');
    this.btnAssignReq     = document.getElementById('btnAssignReq');

    // Modal
    this.memberModal   = document.getElementById('memberModal');
    this.modalTitle    = document.getElementById('modalTitle');
    this.memberForm    = document.getElementById('memberForm');
    this.editMemberId  = document.getElementById('editMemberId');
    this.memberName    = document.getElementById('memberName');
    this.memberDivision = document.getElementById('memberDivision');
    this.memberGroup   = document.getElementById('memberGroup');
    this.memberJoinDate = document.getElementById('memberJoinDate');
    this.btnAddMember  = document.getElementById('btnAddMember');
    this.btnCancelModal = document.getElementById('btnCancelModal');
    this.btnDeleteMember = document.getElementById('btnDeleteMember');
    this.btnSaveMember  = document.getElementById('btnSaveMember');

    // Assign Req Modal
    this.assignReqModal      = document.getElementById('assignReqModal');
    this.assignReqMemberName = document.getElementById('assignReqMemberName');
    this.assignReqSearch     = document.getElementById('assignReqSearch');
    this.assignReqList       = document.getElementById('assignReqList');
    this.assignReqEmpty      = document.getElementById('assignReqEmpty');
    this.btnCancelAssignReq  = document.getElementById('btnCancelAssignReq');
    this.btnSaveAssignReq    = document.getElementById('btnSaveAssignReq');
    this.btnOpenCreateReq    = document.getElementById('btnOpenCreateReq');

    // Create Req Modal
    this.createReqModal     = document.getElementById('createReqModal');
    this.createReqForm      = document.getElementById('createReqForm');
    this.newReqName         = document.getElementById('newReqName');
    this.newReqCategory     = document.getElementById('newReqCategory');
    this.newReqDivision     = document.getElementById('newReqDivision');
    this.newReqGroup        = document.getElementById('newReqGroup');
    this.btnCancelCreateReq = document.getElementById('btnCancelCreateReq');

    // Toast
    this.toastContainer = document.getElementById('toastContainer');
  }

  // ——— Event Binding ———
  bindEvents() {
    // PIN
    this.pinInputs.forEach((input, i) => {
      input.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.length >= 1) {
          e.target.value = val.charAt(val.length - 1);
          if (i < this.pinInputs.length - 1) {
            this.pinInputs[i + 1].focus();
          }
        }
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && i > 0) {
          this.pinInputs[i - 1].focus();
        }
        if (e.key === 'Enter') {
          this.verifyPin();
        }
      });
    });
    this.btnPinSubmit.addEventListener('click', () => this.verifyPin());

    // Sidebar nav
    document.getElementById('sidebarNav').addEventListener('click', (e) => {
      const navItem = e.target.closest('.nav-item');
      if (navItem) {
        const view = navItem.dataset.view;
        const division = navItem.dataset.division;
        const group = navItem.dataset.group;

        if (view === 'dashboard') {
          this.showDashboard();
        } else if (group) {
          this.showGroup(division, group);
        }

        // Close mobile sidebar
        this.sidebar.classList.remove('open');
      }
    });

    // Mobile menu
    this.mobileMenuBtn.addEventListener('click', () => {
      this.sidebar.classList.toggle('open');
    });

    // Search
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      if (this.currentView === 'group') {
        this.renderMemberTable();
      }
    });

    // Logout
    this.btnLogout.addEventListener('click', () => this.logout());

    // Back button
    this.btnBack.addEventListener('click', () => {
      if (this.currentGroup) {
        this.showGroup(this.currentDivision, this.currentGroup);
      } else {
        this.showDashboard();
      }
    });

    // Add member
    this.btnAddMember.addEventListener('click', () => this.openMemberModal());

    // Modal
    this.btnCancelModal.addEventListener('click', () => this.closeMemberModal());
    this.memberModal.addEventListener('click', (e) => {
      if (e.target === this.memberModal) this.closeMemberModal();
    });

    // Division → Group dropdown filter
    this.memberDivision.addEventListener('change', () => this.updateGroupDropdown());

    // Form submit
    this.memberForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveMember();
    });

    // Delete member
    this.btnDeleteMember.addEventListener('click', () => this.deleteMember());

    // Assign Requirements
    this.btnAssignReq.addEventListener('click', () => this.openAssignReqModal());
    this.btnCancelAssignReq.addEventListener('click', () => this.closeAssignReqModal());
    this.assignReqModal.addEventListener('click', (e) => {
      if (e.target === this.assignReqModal) this.closeAssignReqModal();
    });
    this.assignReqSearch.addEventListener('input', () => this.renderAssignReqList());
    this.btnSaveAssignReq.addEventListener('click', () => this.saveAssignedReqs());

    // Create Requirements
    this.btnOpenCreateReq.addEventListener('click', () => {
      this.closeAssignReqModal();
      this.openCreateReqModal();
    });
    this.btnCancelCreateReq.addEventListener('click', () => {
      this.closeCreateReqModal();
      this.openAssignReqModal();
    });
    this.createReqModal.addEventListener('click', (e) => {
      if (e.target === this.createReqModal) {
        this.closeCreateReqModal();
        this.openAssignReqModal();
      }
    });
    this.newReqDivision.addEventListener('change', () => this.updateNewReqGroupDropdown());
    this.createReqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveNewReq();
    });
  }

  // ——— Auth ———
  checkAuth() {
    const authed = sessionStorage.getItem('cm_auth');
    if (authed === 'true') {
      this.unlockApp();
    }
  }

  verifyPin() {
    const pin = Array.from(this.pinInputs).map(i => i.value).join('');
    
    // We now instantiate the API with the entered PIN
    this.api = CONFIG._O_URL ? new SheetAPI(CONFIG.getAppUrl(), pin) : null;
    
    if (CONFIG.USE_DEMO_DATA) {
      if (pin === '1234') { // Fallback demo PIN
        sessionStorage.setItem('cm_auth', 'true');
        sessionStorage.setItem('cm_pin', pin);
        this.pinError.textContent = '';
        this.unlockApp();
      } else {
        this.showPinError();
      }
      return;
    }

    // Actually check with the backend
    this.btnPinSubmit.textContent = 'Verifying...';
    this.btnPinSubmit.disabled = true;

    this.api.get('verifyPin')
      .then(res => {
        if (res.success) {
          sessionStorage.setItem('cm_auth', 'true');
          sessionStorage.setItem('cm_pin', pin);
          this.pinError.textContent = '';
          this.unlockApp();
        } else {
          this.showPinError();
        }
      })
      .catch(err => {
        console.error(err);
        this.showPinError();
        this.showToast('Failed to connect to backend', 'error');
      })
      .finally(() => {
        this.btnPinSubmit.textContent = 'Unlock Dashboard';
        this.btnPinSubmit.disabled = false;
      });
  }

  showPinError() {
    this.pinError.textContent = 'Incorrect PIN. Please try again.';
    this.pinInputs.forEach(i => { i.value = ''; });
    this.pinInputs[0].focus();
    this.pinOverlay.querySelector('.pin-box').style.animation = 'none';
    void this.pinOverlay.querySelector('.pin-box').offsetWidth;
    this.pinOverlay.querySelector('.pin-box').style.animation = '';
  }

  unlockApp() {
    this.pinOverlay.classList.add('hidden');
    this.appContainer.style.display = 'flex';
    this.loadData();
  }

  logout() {
    sessionStorage.removeItem('cm_auth');
    sessionStorage.removeItem('cm_pin');
    this.pinOverlay.classList.remove('hidden');
    this.appContainer.style.display = 'none';
    this.pinInputs.forEach(i => { i.value = ''; });
    this.pinInputs[0].focus();
    this.api = null;
  }

  // ——— Data ———
  async loadData() {
    if (CONFIG.USE_DEMO_DATA) {
      this.members = [...DEMO_DATA.members];
      this.requirements = [...DEMO_DATA.requirements];
      this.progress = [...DEMO_DATA.progress];
    } else {
      try {
        const [members, requirements, progress] = await Promise.all([
          this.api.get('getMembers'),
          this.api.get('getRequirements'),
          this.api.get('getProgress')
        ]);
        this.members = members.data || [];
        this.requirements = requirements.data || [];
        this.progress = progress.data || [];
      } catch (err) {
        this.showToast('Failed to load data from Google Sheets', 'error');
        // Fallback to demo
        this.members = [...DEMO_DATA.members];
        this.requirements = [...DEMO_DATA.requirements];
        this.progress = [...DEMO_DATA.progress];
      }
    }

    this.updateSidebarCounts();
    this.showDashboard();
  }

  // ——— Sidebar Counts ———
  updateSidebarCounts() {
    const allGroups = [
      ...CONFIG.DIVISIONS.Adventurers.groups,
      ...CONFIG.DIVISIONS.Pathfinders.groups
    ];

    allGroups.forEach(g => {
      const count = this.members.filter(m => m.group === g).length;
      const el = document.getElementById('count-' + g.replace(/\s/g, '-'));
      if (el) el.textContent = count;
    });
  }

  // ——— View Switching ———
  switchView(viewName) {
    this.currentView = viewName;
    [this.viewDashboard, this.viewGroup, this.viewDetail].forEach(v => v.classList.remove('active'));

    if (viewName === 'dashboard') this.viewDashboard.classList.add('active');
    else if (viewName === 'group') this.viewGroup.classList.add('active');
    else if (viewName === 'detail') this.viewDetail.classList.add('active');

    // Update active nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  }

  // ——— Dashboard ———
  showDashboard() {
    this.currentDivision = null;
    this.currentGroup = null;
    this.switchView('dashboard');

    this.pageTitle.textContent = 'Dashboard';
    this.pageSubtitle.textContent = 'Overview of all divisions and groups';
    document.querySelector('.nav-item[data-view="dashboard"]').classList.add('active');

    this.renderOverviewCards();
    this.renderDivisionCards();
  }

  renderOverviewCards() {
    const totalMembers = this.members.length;
    const advMembers = this.members.filter(m => m.division === 'Adventurers').length;
    const pfMembers = this.members.filter(m => m.division === 'Pathfinders').length;

    // Overall progress
    const overallPct = this.calcOverallProgress();

    this.overviewGrid.innerHTML = `
      <div class="stat-card" style="--card-accent: var(--accent-adventurer)">
        <div class="card-icon">👥</div>
        <div class="card-value">${totalMembers}</div>
        <div class="card-label">Total Members</div>
        <div class="card-sub"><span>Across all groups</span></div>
      </div>
      <div class="stat-card" style="--card-accent: var(--accent-adventurer)">
        <div class="card-icon">⛺</div>
        <div class="card-value">${advMembers}</div>
        <div class="card-label">Adventurers</div>
        <div class="card-sub"><span>${CONFIG.DIVISIONS.Adventurers.groups.length} groups</span></div>
      </div>
      <div class="stat-card" style="--card-accent: var(--accent-pathfinder)">
        <div class="card-icon">🧭</div>
        <div class="card-value">${pfMembers}</div>
        <div class="card-label">Pathfinders</div>
        <div class="card-sub"><span>${CONFIG.DIVISIONS.Pathfinders.groups.length} groups</span></div>
      </div>
      <div class="stat-card" style="--card-accent: var(--status-completed)">
        <div class="card-icon">📊</div>
        <div class="card-value">${overallPct}%</div>
        <div class="card-label">Overall Completion</div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width:${overallPct}%"></div>
        </div>
      </div>
    `;
  }

  renderDivisionCards() {
    let html = '';

    for (const [divName, divConf] of Object.entries(CONFIG.DIVISIONS)) {
      const divMembers = this.members.filter(m => m.division === divName);

      divConf.groups.forEach(group => {
        const groupMembers = divMembers.filter(m => m.group === group);
        const pct = this.calcGroupProgress(divName, group);
        const barClass = divName === 'Pathfinders' ? 'pathfinder' : '';
        const memberCount = groupMembers.length;

        html += `
          <div class="stat-card group-card" style="--card-accent: ${divConf.color}; cursor: pointer;"
               data-division="${divName}" data-group="${group}">
            <div class="card-icon">${divConf.icon}</div>
            <div class="card-value" style="font-size:1.1rem;">${group}</div>
            <div class="card-label">${divName}</div>
            <div class="card-sub"><span>${memberCount} member${memberCount !== 1 ? 's' : ''} · ${pct}% done</span></div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill ${barClass}" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      });
    }

    this.divisionGrid.innerHTML = html;

    // Click handler on group cards
    this.divisionGrid.querySelectorAll('.group-card').forEach(card => {
      card.addEventListener('click', () => {
        this.showGroup(card.dataset.division, card.dataset.group);
      });
    });
  }

  // ——— Group View ———
  showGroup(division, group) {
    this.currentDivision = division;
    this.currentGroup = group;
    this.switchView('group');

    const divConf = CONFIG.DIVISIONS[division];
    const displayGroup = group.charAt(0) + group.slice(1).toLowerCase();

    this.pageTitle.textContent = displayGroup;
    this.pageSubtitle.textContent = `${divConf.icon} ${division} Division`;
    this.groupTitle.textContent = `Members — ${displayGroup}`;

    // Update accent
    document.documentElement.style.setProperty('--accent-active', divConf.color);

    // Highlight nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(n => {
      n.classList.remove('active');
      if (n.dataset.group === group && n.dataset.division === division) {
        n.classList.add('active');
      }
    });

    this.renderMemberTable();
  }

  renderMemberTable() {
    let members = this.members;

    if (this.currentGroup) {
      members = members.filter(m => m.group === this.currentGroup && m.division === this.currentDivision);
    }

    if (this.searchQuery) {
      members = members.filter(m => m.name.toLowerCase().includes(this.searchQuery));
    }

    if (members.length === 0) {
      this.memberTableBody.innerHTML = '';
      this.emptyMembers.style.display = 'block';
      return;
    }

    this.emptyMembers.style.display = 'none';

    this.memberTableBody.innerHTML = members.map(m => {
      const pct = this.calcMemberProgress(m.id);
      const status = pct === 100 ? 'completed' : pct > 0 ? 'in-progress' : 'not-started';
      const statusLabel = pct === 100 ? 'Completed' : pct > 0 ? 'In Progress' : 'Not Started';
      const initials = m.name.split(' ').map(n => n[0]).join('').toUpperCase();
      const divConf = CONFIG.DIVISIONS[m.division];
      const barClass = m.division === 'Pathfinders' ? 'pathfinder' : '';

      return `
        <tr data-member-id="${m.id}">
          <td>
            <div class="member-name-cell">
              <div class="member-avatar" style="background:${divConf.color}">${initials}</div>
              <span class="member-name-text">${m.name}</span>
            </div>
          </td>
          <td>${m.group}</td>
          <td>${m.division}</td>
          <td>
            <div class="progress-cell">
              <div class="progress-bar-container">
                <div class="progress-bar-fill ${barClass}" style="width:${pct}%"></div>
              </div>
              <span class="progress-pct">${pct}%</span>
            </div>
          </td>
          <td><span class="status-badge ${status}">● ${statusLabel}</span></td>
          <td>
            <div class="actions-cell">
              <button class="btn-icon btn-view" title="View details" data-id="${m.id}">👁</button>
              <button class="btn-icon btn-edit" title="Edit member" data-id="${m.id}">✏️</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Row click → detail view
    this.memberTableBody.querySelectorAll('tr').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.btn-edit')) {
          this.openMemberModal(e.target.closest('.btn-edit').dataset.id);
        } else {
          const id = row.dataset.memberId;
          this.showMemberDetail(id);
        }
      });
    });
  }

  // ——— Member Detail ———
  showMemberDetail(memberId) {
    this.currentMemberId = memberId;
    this.switchView('detail');

    const member = this.members.find(m => m.id === memberId);
    if (!member) return;

    const divConf = CONFIG.DIVISIONS[member.division];
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();

    this.pageTitle.textContent = member.name;
    this.pageSubtitle.textContent = `${member.division} · ${member.group}`;

    this.detailAvatar.textContent = initials;
    this.detailAvatar.style.background = divConf.color;
    this.detailName.textContent = member.name;
    this.detailMeta.textContent = `${member.division} · ${member.group} · Joined ${member.joinDate}`;

    // Requirements for this member
    // Find all requirements that are either:
    // 1. Explicitly assigned to this member in the progress array
    // 2. Part of their default group requirements and not explicitly unassigned 
    //    (to maintain backward compatibility with the auto-assign behavior)
    
    // Get all req IDs that have progress entries for this member
    const memberProgress = this.progress.filter(p => p.memberId === memberId);
    const assignedReqIds = new Set(memberProgress.map(p => p.reqId));
    
    // Get default reqs for their group
    const defaultGroupReqs = this.requirements.filter(r => r.group === member.group && r.division === member.division);
    
    // Combine them to get the full list of requirements for this member
    const reqs = this.requirements.filter(r => 
      assignedReqIds.has(r.id) || (r.group === member.group && r.division === member.division)
    );

    let completed = 0, inProgress = 0, notStarted = 0;

    reqs.forEach(r => {
      const p = memberProgress.find(p => p.reqId === r.id);
      if (p && p.status === 'completed') completed++;
      else if (p && p.status === 'in_progress') inProgress++;
      else notStarted++;
    });

    const total = reqs.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    this.detailCompleted.textContent = completed;
    this.detailInProgress.textContent = inProgress;
    this.detailNotStarted.textContent = notStarted;
    this.detailPercent.textContent = pct + '%';
    this.detailProgressBar.style.width = pct + '%';
    this.detailProgressBar.className = 'progress-bar-fill' + (member.division === 'Pathfinders' ? ' pathfinder' : '');

    // Group requirements by category
    const categories = {};
    reqs.forEach(r => {
      if (!categories[r.category]) categories[r.category] = [];
      const p = memberProgress.find(p => p.reqId === r.id);
      categories[r.category].push({
        ...r,
        status: p ? p.status : 'not_started',
        completedDate: p ? p.completedDate : ''
      });
    });

    let html = '';
    for (const [cat, items] of Object.entries(categories)) {
      html += `<div class="req-category"><h3>${cat}</h3><div class="req-list">`;
      items.forEach(item => {
        const statusClass = item.status === 'completed' ? 'completed' : item.status === 'in_progress' ? 'in-progress' : '';
        const checkIcon = item.status === 'completed' ? '✓' : item.status === 'in_progress' ? '◔' : '';
        const dateStr = item.completedDate ? ` · ${item.completedDate}` : '';

        html += `
          <div class="req-item ${statusClass}" data-req-id="${item.id}" data-member-id="${memberId}">
            <div class="req-checkbox">${checkIcon}</div>
            <span class="req-item-text">${item.name}</span>
            <span class="req-item-status">${item.status.replace('_', ' ')}${dateStr}</span>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    this.reqChecklist.innerHTML = html;

    // Checklist toggle
    this.reqChecklist.querySelectorAll('.req-item').forEach(item => {
      item.addEventListener('click', () => this.cycleReqStatus(item));
    });
  }

  cycleReqStatus(itemEl) {
    const reqId = itemEl.dataset.reqId;
    const memberId = itemEl.dataset.memberId;

    // Find current progress entry
    let entry = this.progress.find(p => p.memberId === memberId && p.reqId === reqId);

    const nextStatus = {
      'not_started': 'in_progress',
      'in_progress': 'completed',
      'completed': 'not_started'
    };

    if (entry) {
      entry.status = nextStatus[entry.status];
      entry.completedDate = entry.status === 'completed' ? new Date().toISOString().split('T')[0] : '';
    } else {
      this.progress.push({
        memberId,
        reqId,
        status: 'in_progress',
        completedDate: ''
      });
    }

    // Re-render detail
    this.showMemberDetail(memberId);
    this.showToast('Status updated', 'success');

    // Persist to Google Sheets if connected
    if (!CONFIG.USE_DEMO_DATA && this.api) {
      const current = this.progress.find(p => p.memberId === memberId && p.reqId === reqId);
      this.api.post('updateProgress', {
        memberId,
        reqId,
        status: current.status,
        completedDate: current.completedDate
      }).catch(() => this.showToast('Failed to save to Google Sheets', 'error'));
    }
  }

  // ——— Assign Requirements Modal ———
  openAssignReqModal() {
    const member = this.members.find(m => m.id === this.currentMemberId);
    if (!member) return;

    this.assignReqMemberName.textContent = member.name;
    this.assignReqSearch.value = '';
    this.renderAssignReqList();
    this.assignReqModal.classList.add('active');
  }

  closeAssignReqModal() {
    this.assignReqModal.classList.remove('active');
  }

  renderAssignReqList() {
    const member = this.members.find(m => m.id === this.currentMemberId);
    if (!member) return;

    // Get current progress entries to check what's already assigned
    const memberProgress = this.progress.filter(p => p.memberId === this.currentMemberId);
    const explicitlyAssigned = new Set(memberProgress.map(p => p.reqId));
    
    // Default group requirements
    const defaultGroupReqs = new Set(
      this.requirements
        .filter(r => r.group === member.group && r.division === member.division)
        .map(r => r.id)
    );

    const query = this.assignReqSearch.value.toLowerCase();
    
    // Filter requirements based on search text
    const filteredReqs = this.requirements.filter(r => {
      const matchSearch = String(r.name).toLowerCase().includes(query) || 
                          String(r.category).toLowerCase().includes(query) ||
                          String(r.group).toLowerCase().includes(query) ||
                          String(r.division).toLowerCase().includes(query);
      return matchSearch;
    });

    if (filteredReqs.length === 0) {
      this.assignReqList.innerHTML = '';
      this.assignReqList.style.display = 'none';
      this.assignReqEmpty.style.display = 'block';
      return;
    }

    this.assignReqList.style.display = 'block';
    this.assignReqEmpty.style.display = 'none';

    let html = '';
    
    // Group by division/group for better display
    const groups = {};
    filteredReqs.forEach(r => {
      const key = `${r.division} — ${r.group}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(r);
    });

    for (const [groupName, reqs] of Object.entries(groups)) {
      html += `<div style="margin-bottom: 0.5rem; padding: 0.25rem 0.5rem; background: var(--bg-secondary); font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">${groupName}</div>`;
      
      reqs.forEach(r => {
        // A requirement is "assigned" if it has a progress entry OR is part of the default group
        const isAssigned = explicitlyAssigned.has(r.id) || defaultGroupReqs.has(r.id);
        const checkIcon = isAssigned ? '✓' : '';
        const itemClass = isAssigned ? 'completed' : '';
        const itemStyle = isAssigned ? 'opacity: 0.6; pointer-events: none;' : '';
        
        html += `
          <div class="req-item ${itemClass}" style="margin-bottom: 0.25rem; padding: 0.5rem; ${itemStyle}" data-req-id="${r.id}">
            <div class="req-checkbox" style="width:18px; height:18px; border-radius:4px;">${checkIcon}</div>
            <div style="display: flex; flex-direction: column; flex: 1;">
              <span class="req-item-text" style="font-size: 0.8rem; text-decoration: none !important; color: var(--text-primary);">${r.name}</span>
              <span class="req-item-status" style="font-size: 0.65rem;">${r.category}</span>
            </div>
            ${isAssigned ? '<span style="font-size: 0.7rem; color: var(--text-muted);">Assigned</span>' : ''}
          </div>
        `;
      });
    }

    this.assignReqList.innerHTML = html;

    // Toggle selection
    this.assignReqList.querySelectorAll('.req-item:not(.completed)').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('selected');
        const checkbox = item.querySelector('.req-checkbox');
        if (item.classList.contains('selected')) {
          checkbox.textContent = '✓';
          checkbox.style.background = 'var(--accent-active)';
          checkbox.style.borderColor = 'var(--accent-active)';
          checkbox.style.color = '#fff';
        } else {
          checkbox.textContent = '';
          checkbox.style.background = 'transparent';
          checkbox.style.borderColor = 'var(--text-muted)';
        }
      });
    });
  }

  saveAssignedReqs() {
    const selectedItems = this.assignReqList.querySelectorAll('.req-item.selected');
    if (selectedItems.length === 0) {
      this.closeAssignReqModal();
      return;
    }

    const memberId = this.currentMemberId;
    let addedCount = 0;

    selectedItems.forEach(item => {
      const reqId = item.dataset.reqId;
      
      // Check if already assigned
      const exists = this.progress.find(p => p.memberId === memberId && p.reqId === reqId);
      
      if (!exists) {
        this.progress.push({
          memberId,
          reqId,
          status: 'not_started',
          completedDate: ''
        });
        addedCount++;
        
        // Persist
        if (!CONFIG.USE_DEMO_DATA && this.api) {
          this.api.post('updateProgress', {
            memberId,
            reqId,
            status: 'not_started',
            completedDate: ''
          }).catch(() => console.error('Failed to save assignment to Google Sheets'));
        }
      }
    });

    this.showToast(`Assigned ${addedCount} requirement(s)`, 'success');
    this.closeAssignReqModal();
    this.showMemberDetail(memberId); // Refresh detail view
  }

  // ——— Create Custom Requirement Modal ———
  openCreateReqModal() {
    this.createReqModal.classList.add('active');
    this.createReqForm.reset();
    
    // Pre-fill division/group based on current member
    const member = this.members.find(m => m.id === this.currentMemberId);
    if (member) {
      this.newReqDivision.value = member.division;
      this.updateNewReqGroupDropdown();
      this.newReqGroup.value = member.group;
    }
  }

  closeCreateReqModal() {
    this.createReqModal.classList.remove('active');
  }

  updateNewReqGroupDropdown() {
    const div = this.newReqDivision.value;
    this.newReqGroup.innerHTML = '<option value="">Select Group</option>';

    if (div && CONFIG.DIVISIONS[div]) {
      CONFIG.DIVISIONS[div].groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g.charAt(0) + g.slice(1).toLowerCase();
        this.newReqGroup.appendChild(opt);
      });
    }
  }

  saveNewReq() {
    const name = this.newReqName.value.trim();
    const category = this.newReqCategory.value.trim();
    const division = this.newReqDivision.value;
    const group = this.newReqGroup.value;
    const memberId = this.currentMemberId;

    if (!name || !category || !division || !group) {
      this.showToast('Please fill in all required fields', 'error');
      return;
    }

    // Generate specific ID for custom requirements so they don't clash
    const newReqId = 'RC' + String(Date.now()).slice(-6);

    const newReq = {
      id: newReqId,
      name,
      category,
      division,
      group
    };

    // Add to local state
    this.requirements.push(newReq);

    // Automatically assign to this member
    this.progress.push({
      memberId,
      reqId: newReqId,
      status: 'not_started',
      completedDate: ''
    });

    this.showToast('Custom requirement created and assigned', 'success');
    this.closeCreateReqModal();
    this.showMemberDetail(memberId); // Refresh

    // Persist API Calls
    if (!CONFIG.USE_DEMO_DATA && this.api) {
      // 1. Add requirement
      this.api.post('addRequirement', newReq).catch(() => {
        this.showToast('Failed to save requirement to Google Sheets', 'error');
      });

      // 2. Add progress assignment
      this.api.post('updateProgress', {
        memberId,
        reqId: newReqId,
        status: 'not_started',
        completedDate: ''
      }).catch(e => console.error(e));
    }
  }

  // ——— Member Modal (Add/Edit) ———
  openMemberModal(editId = null) {
    this.memberModal.classList.add('active');

    if (editId) {
      const member = this.members.find(m => m.id === editId);
      if (!member) return;

      this.modalTitle.textContent = 'Edit Member';
      this.btnSaveMember.textContent = 'Save Changes';
      this.btnDeleteMember.style.display = 'block';
      this.editMemberId.value = editId;
      this.memberName.value = member.name;
      this.memberDivision.value = member.division;
      this.updateGroupDropdown();
      this.memberGroup.value = member.group;
      this.memberJoinDate.value = member.joinDate;
    } else {
      this.modalTitle.textContent = 'Add New Member';
      this.btnSaveMember.textContent = 'Add Member';
      this.btnDeleteMember.style.display = 'none';
      this.editMemberId.value = '';
      this.memberForm.reset();
      this.memberGroup.innerHTML = '<option value="">Select Group</option>';

      // Pre-fill division/group if viewing a specific group
      if (this.currentDivision && this.currentGroup) {
        this.memberDivision.value = this.currentDivision;
        this.updateGroupDropdown();
        this.memberGroup.value = this.currentGroup;
      }
    }
  }

  closeMemberModal() {
    this.memberModal.classList.remove('active');
  }

  updateGroupDropdown() {
    const div = this.memberDivision.value;
    this.memberGroup.innerHTML = '<option value="">Select Group</option>';

    if (div && CONFIG.DIVISIONS[div]) {
      CONFIG.DIVISIONS[div].groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g.charAt(0) + g.slice(1).toLowerCase();
        this.memberGroup.appendChild(opt);
      });
    }
  }

  saveMember() {
    const name = this.memberName.value.trim();
    const division = this.memberDivision.value;
    const group = this.memberGroup.value;
    const joinDate = this.memberJoinDate.value || new Date().toISOString().split('T')[0];
    const editId = this.editMemberId.value;

    if (!name || !division || !group) {
      this.showToast('Please fill in all required fields', 'error');
      return;
    }

    if (editId) {
      // Edit
      const member = this.members.find(m => m.id === editId);
      if (member) {
        member.name = name;
        member.division = division;
        member.group = group;
        member.joinDate = joinDate;
        this.showToast('Member updated successfully', 'success');
      }
    } else {
      // Add
      const newId = 'M' + String(Date.now()).slice(-6);
      this.members.push({ id: newId, name, division, group, joinDate });
      this.showToast('Member added successfully', 'success');
    }

    // Persist
    if (!CONFIG.USE_DEMO_DATA && this.api) {
      this.api.post(editId ? 'updateMember' : 'addMember', {
        id: editId || undefined,
        name, division, group, joinDate
      }).catch(() => this.showToast('Failed to save to Google Sheets', 'error'));
    }

    this.closeMemberModal();
    this.updateSidebarCounts();

    // Refresh current view
    if (this.currentView === 'dashboard') this.showDashboard();
    else if (this.currentView === 'group') this.renderMemberTable();
  }

  deleteMember() {
    const editId = this.editMemberId.value;
    if (!editId) return;

    if (!confirm('Are you sure you want to delete this member? This action cannot be undone.')) return;

    this.members = this.members.filter(m => m.id !== editId);
    this.progress = this.progress.filter(p => p.memberId !== editId);

    if (!CONFIG.USE_DEMO_DATA && this.api) {
      this.api.post('deleteMember', { id: editId })
        .catch(() => this.showToast('Failed to delete from Google Sheets', 'error'));
    }

    this.showToast('Member deleted', 'success');
    this.closeMemberModal();
    this.updateSidebarCounts();

    if (this.currentView === 'dashboard') this.showDashboard();
    else if (this.currentView === 'group') this.renderMemberTable();
    else this.showDashboard();
  }

  // ——— Progress Calculations ———
  calcMemberProgress(memberId) {
    const member = this.members.find(m => m.id === memberId);
    if (!member) return 0;

    const reqs = this.requirements.filter(r => r.group === member.group && r.division === member.division);
    if (reqs.length === 0) return 0;

    const completed = reqs.filter(r => {
      const p = this.progress.find(p => p.memberId === memberId && p.reqId === r.id);
      return p && p.status === 'completed';
    }).length;

    return Math.round((completed / reqs.length) * 100);
  }

  calcGroupProgress(division, group) {
    const groupMembers = this.members.filter(m => m.group === group && m.division === division);
    if (groupMembers.length === 0) return 0;

    const reqs = this.requirements.filter(r => r.group === group && r.division === division);
    if (reqs.length === 0) return 0;

    const totalPossible = groupMembers.length * reqs.length;
    let totalCompleted = 0;

    groupMembers.forEach(m => {
      reqs.forEach(r => {
        const p = this.progress.find(p => p.memberId === m.id && p.reqId === r.id);
        if (p && p.status === 'completed') totalCompleted++;
      });
    });

    return Math.round((totalCompleted / totalPossible) * 100);
  }

  calcOverallProgress() {
    if (this.members.length === 0) return 0;

    let totalPossible = 0;
    let totalCompleted = 0;

    this.members.forEach(m => {
      const reqs = this.requirements.filter(r => r.group === m.group && r.division === m.division);
      totalPossible += reqs.length;

      reqs.forEach(r => {
        const p = this.progress.find(p => p.memberId === m.id && p.reqId === r.id);
        if (p && p.status === 'completed') totalCompleted++;
      });
    });

    return totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
  }

  // ——— Toast ———
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✓' : '✗'}</span> ${message}`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
}


// ——— Initialize ———
document.addEventListener('DOMContentLoaded', () => {
  window.app = new DashboardApp();
});
