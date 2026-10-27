/**
 * CampusConnect AI — Reusable Components, Modals, Digital Pass Generator & AI Utilities
 */

window.CampusComponents = {
  // Toast Alert Notification System
  showToast(type, message, title = "") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast-msg toast-${type}`;
    
    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "error") icon = "fa-triangle-exclamation";
    if (type === "warning") icon = "fa-bell";

    toast.innerHTML = `
      <i class="fa-solid ${icon}" style="font-size: 1.25rem; color: ${type === 'success' ? 'var(--accent-emerald)' : type === 'error' ? 'var(--accent-rose)' : 'var(--accent-cyan)'}; margin-top: 2px;"></i>
      <div style="flex: 1;">
        ${title ? `<div style="font-weight: 700; font-size: 0.88rem; margin-bottom: 2px; color: var(--text-primary);">${title}</div>` : ""}
        <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.4;">${message}</div>
      </div>
      <button onclick="this.parentElement.remove()" style="background:none; border:none; color: var(--text-muted); cursor:pointer; font-size: 0.9rem;">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 5500);
  },

  // Calculate Countdown
  formatCountdown(targetIsoDate) {
    const target = new Date(targetIsoDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true, text: "Closed / Completed" };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    let text = "";
    if (days > 0) text = `${days}d ${hours}h left`;
    else if (hours > 0) text = `${hours}h ${minutes}m left`;
    else text = `${minutes}m ${seconds}s left`;

    return { days, hours, minutes, seconds, isExpired: false, text };
  },

  // Generate SVG QR Code Representation
  generateQrSvg(codeString) {
    // Generate an aesthetically authentic SVG pattern based on string hash
    let hash = 0;
    for (let i = 0; i < codeString.length; i++) {
      hash = (hash << 5) - hash + codeString.charCodeAt(i);
      hash |= 0;
    }
    
    // 21x21 QR Grid layout with corner positioning squares
    const size = 21;
    let rects = '';
    
    // Corner Position Detectors (Top-Left, Top-Right, Bottom-Left)
    function addPositionMarker(x, y) {
      rects += `<rect x="${x}" y="${y}" width="7" height="7" fill="#0f172a" rx="1.5"/>`;
      rects += `<rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#ffffff" rx="1"/>`;
      rects += `<rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#0f172a" rx="0.5"/>`;
    }
    addPositionMarker(0, 0);
    addPositionMarker(14, 0);
    addPositionMarker(0, 14);

    // Pseudorandom internal data dots based on string
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        // Skip corner finder zones
        if ((r < 8 && c < 8) || (r < 8 && c > 12) || (r > 12 && c < 8)) continue;
        const val = Math.abs(Math.sin((r * 31 + c * 17 + hash)) * 10000) % 1;
        if (val > 0.48) {
          rects += `<rect x="${c}" y="${r}" width="0.9" height="0.9" fill="#0f172a" rx="0.2"/>`;
        }
      }
    }

    return `
      <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
        <rect width="21" height="21" fill="#ffffff" rx="1"/>
        ${rects}
      </svg>
    `;
  },

  // Modal Dialog Container
  openModal(htmlContent, maxWidth = "680px") {
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal-root";
      document.body.appendChild(modalRoot);
    }

    modalRoot.innerHTML = `
      <div class="modal-overlay" id="global-modal-overlay" onclick="if(event.target.id === 'global-modal-overlay') CampusComponents.closeModal()">
        <div class="modal-container" style="max-width: ${maxWidth}">
          <button class="modal-close-btn" onclick="CampusComponents.closeModal()" title="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          ${htmlContent}
        </div>
      </div>
    `;
  },

  closeModal() {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) modalRoot.innerHTML = "";
  },

  // Security Verification Modal for Role Switching
  promptRolePassword(targetRole, onSuccess) {
    const roleLabels = {
      coordinator: { name: "Coordinator", icon: "fa-chalkboard-user", hint: "coordinator123", color: "var(--accent-violet)" },
      admin: { name: "Administrator", icon: "fa-shield-halved", hint: "admin123", color: "var(--accent-cyan)" },
      student: { name: "Student", icon: "fa-graduation-cap", hint: "student123", color: "var(--accent-emerald)" }
    };

    const info = roleLabels[targetRole] || roleLabels.coordinator;

    const html = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(139, 92, 246, 0.15); border: 2px solid ${info.color}; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; font-size: 1.5rem; color: ${info.color};">
          <i class="fa-solid ${info.icon}"></i>
        </div>
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 4px;">Security Verification Required</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">
          You are accessing the <strong>${info.name}</strong> privileged portal. Please enter the authorization password.
        </p>
      </div>

      <form onsubmit="event.preventDefault(); CampusComponents.verifyPromptPassword('${targetRole}');">
        <div class="form-group">
          <label class="form-label">Authorization Password</label>
          <div class="password-field-wrapper">
            <input type="password" id="modal-role-password" class="form-control" placeholder="Enter password (e.g. ${info.hint})" required autofocus>
            <button type="button" class="password-toggle-btn" onclick="CampusViews.togglePasswordVisibility('modal-role-password')">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
          <div style="font-size: 0.78rem; color: var(--accent-cyan); margin-top: 8px; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <span><i class="fa-solid fa-key"></i> Default Demo Password: <code>${info.hint}</code></span>
            <button type="button" style="background:none; border:none; color:var(--accent-cyan); font-weight:700; cursor:pointer;" onclick="document.getElementById('modal-role-password').value='${info.hint}'">Auto-Fill</button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 24px;">
          <button type="button" class="btn btn-secondary" onclick="CampusComponents.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">
            <i class="fa-solid fa-lock-open"></i> Unlock & Continue
          </button>
        </div>
      </form>
    `;

    this._pendingRoleSwitch = onSuccess;
    this.openModal(html, "460px");
  },

  verifyPromptPassword(targetRole) {
    const pwdInput = document.getElementById("modal-role-password");
    const pwd = pwdInput ? pwdInput.value : "";
    if (CampusData.verifyPassword(targetRole, pwd)) {
      this.closeModal();
      this.showToast("success", `Security clearance verified for ${targetRole.toUpperCase()}!`, "Access Granted");
      if (typeof this._pendingRoleSwitch === "function") {
        this._pendingRoleSwitch();
      }
    } else {
      const hint = targetRole === "admin" ? "admin123" : "coordinator123";
      this.showToast("error", `Incorrect password for ${targetRole.toUpperCase()}. Default demo password is: ${hint}`, "Access Denied");
      if (pwdInput) {
        pwdInput.style.borderColor = "var(--accent-rose)";
        pwdInput.focus();
      }
    }
  },

  // Show Digital Pass Modal
  showDigitalPass(registrationId) {
    const reg = CampusData.getRegistrations().find(r => r.id === registrationId);
    if (!reg) {
      this.showToast("error", "Registration record not found.");
      return;
    }

    const event = CampusData.getEventById(reg.eventId) || {};
    const qrSvg = this.generateQrSvg(reg.id + "|" + reg.studentId + "|" + reg.eventId);

    const formattedDate = new Date(reg.eventDate || event.startDate).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    const formattedTime = new Date(reg.eventDate || event.startDate).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    });

    const statusBadge = `
      <span class="badge badge-${reg.status.toLowerCase()}">
        <i class="fa-solid ${reg.status === 'Approved' ? 'fa-circle-check' : 'fa-clock'}"></i>
        ${reg.status}
      </span>
    `;

    const html = `
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 4px;">Official Digital Event Pass</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Present this QR pass at the entrance registration desk for instant check-in verification.</p>
      </div>

      <div class="digital-pass" id="printable-ticket">
        <div class="pass-header">
          <div>
            <div class="pass-header-title">${reg.eventTitle}</div>
            <div style="font-size: 0.78rem; opacity: 0.9; margin-top: 2px;">
              <i class="fa-solid fa-building-columns"></i> ${reg.collegeName || event.collegeName}
            </div>
          </div>
          <div class="pass-id-tag">${reg.id}</div>
        </div>

        <div class="pass-body">
          <div class="pass-details-grid">
            <div>
              <div class="pass-field-label">Participant / Captain</div>
              <div class="pass-field-value">${reg.studentName}</div>
            </div>
            <div>
              <div class="pass-field-label">Student ID</div>
              <div class="pass-field-value" style="font-family: var(--font-mono);">${reg.studentId}</div>
            </div>
            <div>
              <div class="pass-field-label">Institution</div>
              <div class="pass-field-value">${reg.studentCollege}</div>
            </div>
            <div>
              <div class="pass-field-label">Participation Type</div>
              <div class="pass-field-value" style="text-transform: capitalize;">
                ${reg.participationType === 'team' ? `<i class="fa-solid fa-users" style="color:var(--accent-cyan)"></i> Team (${reg.teamName || 'Squad'})` : `<i class="fa-solid fa-user"></i> Individual`}
              </div>
            </div>
            <div>
              <div class="pass-field-label">Date & Time</div>
              <div class="pass-field-value">${formattedDate} at ${formattedTime}</div>
            </div>
            <div>
              <div class="pass-field-label">Current Status</div>
              <div class="pass-field-value">${statusBadge}</div>
            </div>
          </div>

          <div class="pass-qr-box">
            ${qrSvg}
            <span>SCAN FOR ENTRY</span>
          </div>
        </div>

        <div class="pass-footer">
          <div><i class="fa-solid fa-location-dot" style="color:var(--accent-cyan)"></i> ${reg.venue || event.venue}</div>
          <div>Issued: ${new Date(reg.registeredAt).toLocaleDateString()}</div>
        </div>
      </div>

      <div style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-secondary" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print Pass
        </button>
        <button class="btn btn-primary" onclick="CampusComponents.downloadPassText('${reg.id}')">
          <i class="fa-solid fa-download"></i> Download Receipt
        </button>
      </div>
    `;

    this.openModal(html, "720px");
  },

  downloadPassText(regId) {
    const reg = CampusData.getRegistrations().find(r => r.id === regId);
    if (!reg) return;

    const content = `
=====================================================
CAMPUSCONNECT AI — OFFICIAL REGISTRATION RECEIPT
=====================================================
Registration ID : ${reg.id}
Event Name      : ${reg.eventTitle}
Organizing Host : ${reg.collegeName}
Venue           : ${reg.venue}
Event Date      : ${reg.eventDate}
-----------------------------------------------------
PARTICIPANT DETAILS:
Name            : ${reg.studentName}
Student ID      : ${reg.studentId}
College         : ${reg.studentCollege}
Department      : ${reg.department}
Email           : ${reg.studentEmail}
Phone           : ${reg.studentPhone}
Type            : ${reg.participationType.toUpperCase()} ${reg.teamName ? `(Team: ${reg.teamName})` : ''}
Current Status  : ${reg.status}
Registered At   : ${reg.registeredAt}
-----------------------------------------------------
Please present your College ID and this confirmation receipt at the venue desk.
Generated by CampusConnect AI Kerala Higher Education Platform.
=====================================================
    `.trim();

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CampusConnect_${reg.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("success", "Registration receipt downloaded successfully!");
  },

  // Export Participant list to CSV for Coordinators
  exportParticipantsCSV(eventId) {
    const event = CampusData.getEventById(eventId);
    const regs = CampusData.getRegistrations().filter(r => r.eventId === eventId);
    
    if (regs.length === 0) {
      this.showToast("warning", "No participant registrations found to export.");
      return;
    }

    let csv = "Registration ID,Student Name,Student ID,College,Department,Year,Email,Phone,Type,Team Name,Status,Registered At,Attendance\n";
    regs.forEach(r => {
      csv += `"${r.id}","${r.studentName}","${r.studentId}","${r.studentCollege}","${r.department || ''}","${r.year || ''}","${r.studentEmail}","${r.studentPhone}","${r.participationType}","${r.teamName || 'N/A'}","${r.status}","${r.registeredAt}","${r.attendanceRecorded ? 'Present' : 'Absent'}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Participants_${(event ? event.slug : eventId)}_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("success", `Exported ${regs.length} participant records to CSV!`);
  },

  // AI Assistant Generator for Coordinators
  generateAiEventContent(title, category) {
    const templates = {
      tech: {
        short: `A state-level premier tech symposium & competition designed to foster cutting-edge innovations in software, AI, and hardware development among student developers.`,
        desc: `Join us for an electrifying showcase of collegiate engineering brilliance! Participants will compete across rigorous technical problem tracks, receive mentorship from industry pioneers, and pitch working prototypes before an expert jury. Exciting prize pool and recruitment credits included.`,
        rules: [
          "Open to all full-time undergraduate engineering and computer science students.",
          "Original open-source or freshly authored code only; pre-built proprietary software will be disqualified.",
          "Teams must provide valid student credentials and bonafide institutional certificates."
        ]
      },
      arts: {
        short: `A celebration of rhythm, aesthetic grace, and Kerala's theatrical heritage bringing the most gifted collegiate artists to the limelight.`,
        desc: `Experience the grand vibrancy of campus arts! Featuring classical, contemporary, and folk disciplines evaluated by veteran stage and film artists. Trophy rolls, gold medals, and state youth festival recommendation points will be awarded.`,
        rules: [
          "Strict adherence to stage timing limits and designated green room schedules.",
          "Sound and light track queues must be tested during the morning rehearsal slot.",
          "Bonafide college identification mandatory for all performers."
        ]
      },
      sports: {
        short: `High-octane collegiate athletic tournament testing stamina, strategy, and championship sportsmanship.`,
        desc: `Calling the finest university athletes! Compete under certified state sports federation referees on state-of-the-art facilities with live scoreboard tracking and trophies for best player and fair-play.`,
        rules: [
          "Standard federation tournament rules and knockout match format apply.",
          "Teams must wear numbered jerseys and bring required personal protective equipment.",
          "Disciplinary infractions will lead to immediate match forfeiture."
        ]
      },
      celebrations: {
        short: `A grand festive carnival fostering campus harmony, cultural traditions, food feasts, and student camaraderie.`,
        desc: `Come celebrate this auspicious campus milestone! Featuring traditional music bands, inter-department challenges, photography contests, and traditional Kerala festive celebrations.`,
        rules: [
          "Respect environmental guidelines: eco-friendly materials only.",
          "Campus code of conduct and safety regulations must be upheld at all times.",
          "Participation open to all enrolled students and faculty members."
        ]
      },
      social: {
        short: `Community empowerment and environmental sustainability initiative driven by socially committed youth.`,
        desc: `Join hands with fellow changemakers! Volunteers will engage in grassroots service, ecological regeneration, and social welfare awareness to create tangible positive impact.`,
        rules: [
          "Participants will receive verified NSS Activity Credit points upon completion.",
          "Report in safety attire; field tools and safety gear will be provided on-site."
        ]
      }
    };

    const chosen = templates[category] || templates.tech;
    return chosen;
  },

  // Natural Language Search Parser
  parseNaturalLanguageQuery(query) {
    const q = query.toLowerCase();
    let filters = {
      category: "",
      collegeId: "",
      scope: "",
      freeOnly: false,
      searchKeyword: ""
    };

    // Category matching
    if (q.includes("hackathon") || q.includes("code") || q.includes("robot") || q.includes("tech")) filters.category = "tech";
    else if (q.includes("art") || q.includes("dance") || q.includes("sing") || q.includes("music") || q.includes("drama")) filters.category = "arts";
    else if (q.includes("football") || q.includes("cricket") || q.includes("sport") || q.includes("athletic")) filters.category = "sports";
    else if (q.includes("onam") || q.includes("christmas") || q.includes("carnival") || q.includes("celebration")) filters.category = "celebrations";
    else if (q.includes("nss") || q.includes("clean") || q.includes("volunteer") || q.includes("social")) filters.category = "social";

    // College matching
    if (q.includes("kmct")) filters.collegeId = "col-kmct";
    else if (q.includes("mesce") || q.includes("kuttippuram")) filters.collegeId = "col-mesce";
    else if (q.includes("mes") || q.includes("mampad")) filters.collegeId = "col-mes";
    else if (q.includes("farook") || q.includes("feroke")) filters.collegeId = "col-farook";
    else if (q.includes("gasc") || q.includes("meenchanda") || q.includes("arts and science")) filters.collegeId = "col-gasc";
    else if (q.includes("tkm") || q.includes("kollam")) filters.collegeId = "col-tkm";

    // Scope & Pricing
    if (q.includes("inter-college") || q.includes("inter college") || q.includes("all kerala")) filters.scope = "inter";
    if (q.includes("intra-college") || q.includes("department")) filters.scope = "intra";
    if (q.includes("free") || q.includes("no fee")) filters.freeOnly = true;

    filters.searchKeyword = q.replace(/(find|show|me|events|in|at|all|free|inter-college|kerala)/gi, "").trim();

    return filters;
  }
};
