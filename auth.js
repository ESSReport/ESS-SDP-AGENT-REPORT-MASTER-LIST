// auth.js

const ADMIN_PIN = "11302024";
const TL_PINS = {
  "TL-Emon": "820156",
  "TL-LeoLiza": "758482",
  "TL-Onemen": "758482",
  "TL-RC": "872564"
};

// -------------------------
// Admin Access
// -------------------------
window.requireAdmin = async function() {
  if (sessionStorage.getItem("isAdmin") === "true") return true;
  const entered = prompt("🔐 Enter Admin PIN:");
  if (entered === ADMIN_PIN) {
    sessionStorage.setItem("isAdmin", "true");
    return true;
  }
  throw new Error("Invalid Admin PIN");
};

// -------------------------
// Team Leader Access
// -------------------------
window.requireTeamLeader = async function(tlName) {
  const tl = tlName.toUpperCase();
  if (!TL_PINS[tl]) throw new Error("Team Leader not registered");

  // Check session
  if (sessionStorage.getItem("currentTL") === tl) return true;

  const entered = prompt(`🔐 Enter PIN for Team Leader: ${tl}`);
  if (entered === TL_PINS[tl]) {
    sessionStorage.setItem("currentTL", tl);
    return true;
  }
  throw new Error("Invalid TL PIN");
};

// Unified check
window.checkTLAccess = async function(tlName) {
  if (!tlName) throw new Error("Team Leader not specified");
  return await window.requireTeamLeader(tlName);
};














