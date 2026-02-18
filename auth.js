// auth.js

const ADMIN_PIN = "11302024";
const TL_PINS = {
  "TL-Emon": "820156",
  "TL-LeoLiza": "872982",
  "TL-Onemen": "872941",
  "TL-RC": "872964",
  "TL-Emon": "872994",
  "TL-JAVED": "872741",
  "TL-SHARIFLUX": "872264",
  "TL-KING": "872914",
  "TL-DAJAS": "872441",
  "TL-KAHC": "872354",
  "TL-RAYHEX": "872332",
  "TL-MRLEE": "872994",
  "TL-NUMM": "872621",
  "TL-NOS": "872656",
  "TL-LEWEJ": "872443",
  "TL-SEXELA": "872882",
  "TL-INOR": "872431",
  "TL-RAIRA": "872557",
  "TL-NOMIL": "872229",
  "TL-LASAR": "872659",
  "TL-KCAJ": "872454",
  "TL-URMAK": "872323",
  "TL-VORUOS": "872922",
  "TL-NAJUS": "872375",
  "TL-DEAN": "872897",
  "TL-ALEXVENUS": "872326",
  "TL-YOB": "872919",
  "TL-DARAZ": "872439"
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
















