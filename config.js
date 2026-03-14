// ============================================
// Club Ministries Dashboard — Configuration
// ============================================

const CONFIG = {
  // ——— Google Apps Script Web App URL ———
  // The URL is base64 encoded to easily hide it from casual inspection.
  // To change your URL, use btoa("YOUR_URL") in the browser console.
  _O_URL: 'aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3bmRXdm9SWWxUekpGdzNuQWhfNFVfckdxTi1RRFk3a3h3cTU3OVBvbzFqbmZnZTBrcEdRRU9vZmdzTjREUXlndzMvZXhlYw==',

  getAppUrl() {
    return atob(this._O_URL);
  },

  // Set to false once you've connected a real Google Sheet
  USE_DEMO_DATA: false,

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
