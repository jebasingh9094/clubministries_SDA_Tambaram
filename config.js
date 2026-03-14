// ============================================
// Club Ministries Dashboard — Configuration
// ============================================

const CONFIG = {
  // ——— Google Apps Script Web App URL ———
  // After deploying your Apps Script, paste the URL here:
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzDZn6j_mWRnI0RV3OcBUKOWN1OlPBwyh0IYKU0nSI9lQ8fxZkdzq0ZhATj4f-8yZkO/exec',

  // Set to false once you've connected a real Google Sheet
  USE_DEMO_DATA: false,

  // Director PIN (change this!)
  PIN: '1234',

  // Division & Group definitions
  DIVISIONS: {
    Adventurers: {
      color: '#00c9a7',        // teal accent
      colorLight: 'rgba(0, 201, 167, 0.15)',
      icon: '⛺',
      groups: [
        'LITTLE LAMB',
        'EAGER BEAVER',
        'BUSY BEE',
        'SUNBEAM',
        'BUILDER',
        'HELPING HAND'
      ]
    },
    Pathfinders: {
      color: '#845ef7',        // purple accent
      colorLight: 'rgba(132, 94, 247, 0.15)',
      icon: '🧭',
      groups: [
        'FRIEND',
        'COMPANION',
        'EXPLORER',
        'RANGER',
        'VOYAGER',
        'GUIDE'
      ]
    }
  }
};
