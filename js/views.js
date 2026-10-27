/**
 * CampusConnect AI — Complete Views Module (All 17 Pages)
 */

window.CampusViews = {
  // -------------------------------------------------------------
  // 1. LANDING PAGE
  // -------------------------------------------------------------
  landing() {
    const events = CampusData.getEvents().slice(0, 3);
    const colleges = CampusData.getColleges();
    const categories = CampusData.getCategories();

    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-ai-badge animate-fade-in">
          <span class="pulse-dot"></span>
          <span>Next-Gen Campus Intelligence • Kerala Collegiate Network</span>
        </div>

        <h1 class="hero-title animate-fade-in">
          One Campus. Every Event.<br>
          <span class="hero-title-highlight">Infinite Possibilities.</span>
        </h1>

        <p class="hero-subtitle animate-fade-in">
          Discover, register, organize, and celebrate campus life with one intelligent platform connecting Kerala's premier institutions.
        </p>

        <!-- Natural Language AI Search Bar -->
        <div class="hero-nl-search animate-scale-in">
          <i class="fa-solid fa-wand-magic-sparkles" style="color: var(--accent-cyan);"></i>
          <input type="text" id="landing-ai-search-input" placeholder="Ask AI: &quot;Find free hackathons in Kozhikode&quot; or &quot;Show football tourneys&quot;..." onkeydown="if(event.key==='Enter') CampusViews.handleLandingAiSearch()">
          <span class="ai-spark-tag"><i class="fa-solid fa-bolt"></i> Natural Search</span>
          <button class="btn btn-primary btn-sm" onclick="CampusViews.handleLandingAiSearch()">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div class="hero-cta-group animate-fade-in">
          <a href="#events" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-compass"></i> Explore All Events
          </a>
          <a href="#register" class="btn btn-secondary btn-lg">
            <i class="fa-solid fa-user-plus"></i> Student Registration
          </a>
          <a href="#login" class="btn btn-outline-glow btn-lg">
            <i class="fa-solid fa-right-to-bracket"></i> College Portal Login
          </a>
        </div>
      </section>

      <!-- Platform Live Statistics Bar (Sample Data Identified) -->
      <div class="platform-stats-grid">
        <div class="stat-card">
          <span class="demo-tag"><i class="fa-solid fa-chart-simple"></i> Demo Data</span>
          <div class="stat-number">18,420+</div>
          <div class="stat-label">Active Enrolled Students</div>
        </div>
        <div class="stat-card">
          <span class="demo-tag"><i class="fa-solid fa-chart-simple"></i> Demo Data</span>
          <div class="stat-number">42+</div>
          <div class="stat-label">Affiliated Kerala Colleges</div>
        </div>
        <div class="stat-card">
          <span class="demo-tag"><i class="fa-solid fa-chart-simple"></i> Demo Data</span>
          <div class="stat-number">128+</div>
          <div class="stat-label">State & College Events</div>
        </div>
        <div class="stat-card">
          <span class="demo-tag"><i class="fa-solid fa-chart-simple"></i> Demo Data</span>
          <div class="stat-number">95,000+</div>
          <div class="stat-label">Annual Festival Footfall</div>
        </div>
      </div>

      <!-- Featured Upcoming Events Section -->
      <section style="margin-bottom: 64px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Featured Upcoming Events</h2>
            <p class="section-subtitle">State-level hackathons, arts carnivals, sports tournaments, and college celebrations.</p>
          </div>
          <a href="#events" class="btn btn-secondary btn-sm">
            View All Events <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div class="events-grid">
          ${events.map(ev => CampusViews.renderEventCard(ev)).join("")}
        </div>
      </section>

      <!-- Event Categories Grid -->
      <section style="margin-bottom: 64px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Explore by Domain & Passion</h2>
            <p class="section-subtitle">Curated categories catering to technical builders, cultural artists, and athletes.</p>
          </div>
        </div>

        <div class="categories-grid">
          ${categories.map(cat => `
            <div class="category-card" onclick="window.location.hash = 'events?cat=${cat.id}'">
              <div class="category-icon-box" style="background: ${cat.color}20; color: ${cat.color};">
                <i class="fa-solid ${cat.icon}"></i>
              </div>
              <h3 class="category-title">${cat.name}</h3>
              <p class="category-desc">${cat.description}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Participating Kerala Colleges Showcase -->
      <section style="margin-bottom: 64px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Participating Kerala Colleges</h2>
            <p class="section-subtitle">Coordinated inter-college event ecosystem spanning universities and autonomous campuses.</p>
          </div>
          <a href="#admin-colleges" class="btn btn-outline-glow btn-sm">
            <i class="fa-solid fa-building-columns"></i> View Directory
          </a>
        </div>

        <div class="colleges-showcase-grid">
          ${colleges.map(col => `
            <div class="college-mini-card">
              <div class="college-avatar-box" style="color: ${col.badgeColor}; border-color: ${col.badgeColor}40;">
                ${col.code}
              </div>
              <div class="college-mini-info">
                <h4>${col.name}</h4>
                <p><i class="fa-solid fa-location-dot"></i> ${col.location.split(',')[1] || col.location}</p>
                <div style="margin-top: 4px; font-size: 0.72rem; color: var(--accent-cyan); font-weight: 600;">
                  ${col.eventsCount} Active Events • ${col.studentsCount.toLocaleString()} Students
                </div>
              </div>
            </div>
          `).join("")}
        </div>
        <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: -10px;">
          * Note: Institutional logos and names are configurable by collegiate administrators. Platform demo data reflects representative Kerala colleges.
        </p>
      </section>

      <!-- Testimonials Section -->
      <section style="margin-bottom: 64px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">What Campuses Are Saying</h2>
            <p class="section-subtitle">Transforming collegiate event engagement across students, coordinators, and directors.</p>
          </div>
        </div>

        <div class="form-row">
          <div class="glass-card" style="padding: 24px;">
            <div style="color: var(--accent-amber); margin-bottom: 12px; font-size: 0.9rem;">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
              "Registering our inter-college hackathon team used to take endless email chains and physical forms. With CampusConnect AI, our QR pass was issued in 30 seconds."
            </p>
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" alt="Student">
              <div>
                <div style="font-weight: 700; font-size: 0.88rem;">Ananya Nair</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">B.Tech Student, KMCT College of Engineering</div>
              </div>
            </div>
          </div>

          <div class="glass-card" style="padding: 24px;">
            <div style="color: var(--accent-amber); margin-bottom: 12px; font-size: 0.9rem;">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
              "Managing 32 football squads with verification, attendance marking, and real-time CSV exports saved our sports committee over 20 hours of manual work."
            </p>
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" alt="Coordinator">
              <div>
                <div style="font-weight: 700; font-size: 0.88rem;">Prof. Rajesh Varma</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Event Coordinator, MES College of Engineering</div>
              </div>
            </div>
          </div>

          <div class="glass-card" style="padding: 24px;">
            <div style="color: var(--accent-amber); margin-bottom: 12px; font-size: 0.9rem;">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
              "State-wide collegiate oversight with clear audit logging and instant inter-college approvals brings university events into the next era."
            </p>
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" alt="Admin">
              <div>
                <div style="font-weight: 700; font-size: 0.88rem;">Dr. K. Radhakrishnan</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Higher Education State Directorate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  handleLandingAiSearch() {
    const input = document.getElementById("landing-ai-search-input");
    if (!input || !input.value.trim()) return;
    const query = input.value.trim();
    window.location.hash = `events?aiQuery=${encodeURIComponent(query)}`;
  },

  renderEventCard(ev) {
    const countdown = CampusComponents.formatCountdown(ev.regCloseDate);
    const capacityPct = Math.min(100, Math.round((ev.registeredCount / ev.maxCapacity) * 100));

    return `
      <div class="event-card">
        <div class="event-poster-wrapper">
          <img src="${ev.poster}" class="event-poster-img" alt="${ev.title}" onerror="this.src='assets/images/arts_fest.jpg'">
          <div class="event-poster-overlay">
            <span class="badge badge-${ev.category}">
              ${ev.categoryLabel}
            </span>
            <div class="countdown-pill">
              <i class="fa-regular fa-clock"></i> ${countdown.text}
            </div>
          </div>
        </div>

        <div class="event-card-body">
          <div class="event-college-tag">
            <i class="fa-solid fa-building-columns"></i> ${ev.collegeName}
          </div>

          <h3 class="event-card-title">${ev.title}</h3>
          <p class="event-card-desc">${ev.shortDescription}</p>

          <div class="event-card-meta">
            <div class="meta-row">
              <div class="meta-item">
                <i class="fa-regular fa-calendar" style="color: var(--accent-violet);"></i>
                <span>${new Date(ev.startDate).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}</span>
              </div>
              <div class="meta-item">
                <i class="fa-solid fa-location-dot" style="color: var(--accent-cyan);"></i>
                <span title="${ev.venue}">${ev.venue.split(',')[0]}</span>
              </div>
            </div>

            <div class="meta-row">
              <div class="meta-item">
                <span class="badge badge-${ev.scope}">${ev.scope.toUpperCase()}-COLLEGE</span>
              </div>
              <div class="meta-item" style="font-weight: 700; color: ${ev.isFeeApplicable ? 'var(--text-primary)' : 'var(--accent-emerald)'};">
                ${ev.fee}
              </div>
            </div>

            <div>
              <div class="meta-row" style="font-size: 0.72rem; margin-top: 4px;">
                <span>Capacity (${ev.registeredCount}/${ev.maxCapacity} registered)</span>
                <span>${capacityPct}%</span>
              </div>
              <div class="capacity-bar-wrapper">
                <div class="capacity-fill" style="width: ${capacityPct}%;"></div>
              </div>
            </div>
          </div>

          <div class="event-card-actions">
            <a href="#event-details/${ev.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
              Details
            </a>
            <a href="#event-details/${ev.id}" class="btn btn-primary btn-sm" style="flex: 1;">
              Register <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // 2. LOGIN PAGE
  // -------------------------------------------------------------
  login() {
    return `
      <div class="auth-wrapper">
        <div class="glass-card auth-card">
          <div class="auth-header">
            <div class="brand-logo-icon" style="margin: 0 auto 16px; width: 48px; height: 48px;">
              <i class="fa-solid fa-atom"></i>
            </div>
            <h2>Sign In to CampusConnect</h2>
            <p>Access your student portal, events registry, or college admin console.</p>
          </div>

          <!-- Role Selector -->
          <div class="role-select-tabs" id="auth-role-tabs">
            <button class="role-tab-btn active" data-role="student" onclick="CampusViews.setLoginRole('student', this)">
              <i class="fa-solid fa-graduation-cap"></i> Student
            </button>
            <button class="role-tab-btn" data-role="coordinator" onclick="CampusViews.setLoginRole('coordinator', this)">
              <i class="fa-solid fa-chalkboard-user"></i> Coordinator
            </button>
            <button class="role-tab-btn" data-role="admin" onclick="CampusViews.setLoginRole('admin', this)">
              <i class="fa-solid fa-shield-halved"></i> Administrator
            </button>
          </div>

          <!-- Role Credentials Helper Notice -->
          <div id="login-role-notice" style="background: rgba(139, 92, 246, 0.08); border: 1px solid var(--border-glow); border-radius: var(--radius-md); padding: 12px 14px; margin-bottom: 20px; font-size: 0.82rem; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
            <div>
              <span id="role-notice-title" style="font-weight: 700; color: var(--text-primary);"><i class="fa-solid fa-graduation-cap" style="color:var(--accent-emerald)"></i> Student Access</span>
              <div id="role-notice-creds" style="color: var(--text-secondary); margin-top: 2px;">
                Password: <code style="color:var(--accent-cyan); font-weight:700;">student123</code>
              </div>
            </div>
            <button type="button" class="btn btn-outline-glow btn-sm" style="font-size: 0.74rem; padding: 3px 8px;" onclick="CampusViews.autoFillCurrentTabCredentials()">
              Auto-Fill
            </button>
          </div>

          <form id="login-form" onsubmit="event.preventDefault(); CampusViews.handleLoginSubmit();">
            <div class="form-group">
              <label class="form-label" id="login-identifier-label">Email or Student ID</label>
              <input type="text" id="login-username" class="form-control" placeholder="e.g. ananya.nair@kmct.edu.in" required value="ananya.nair@kmct.edu.in">
            </div>

            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <label class="form-label" id="login-password-label">Password</label>
                <a href="javascript:void(0)" onclick="CampusViews.showForgotPasswordModal()" style="font-size: 0.78rem; color: var(--accent-cyan);">Forgot Password?</a>
              </div>
              <div class="password-field-wrapper">
                <input type="password" id="login-password" class="form-control" placeholder="Enter password (e.g. student123)" required value="student123">
                <button type="button" class="password-toggle-btn" onclick="CampusViews.togglePasswordVisibility('login-password')">
                  <i class="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; font-size: 0.85rem;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-secondary);">
                <input type="checkbox" checked style="accent-color: var(--accent-violet);"> Remember this session
              </label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;">
              <i class="fa-solid fa-right-to-bracket"></i> Sign In to Portal
            </button>
          </form>

          <!-- 1-Click Fast Demo Fillers -->
          <div class="quick-login-pills">
            <div class="quick-login-title">AUTHORIZED DEMO CREDENTIALS:</div>
            <div class="quick-login-btns">
              <button class="btn btn-secondary btn-sm" onclick="CampusViews.fillDemoLogin('student')">
                <i class="fa-solid fa-user"></i> Student
              </button>
              <button class="btn btn-secondary btn-sm" onclick="CampusViews.fillDemoLogin('coordinator')">
                <i class="fa-solid fa-chalkboard-user"></i> Coordinator
              </button>
              <button class="btn btn-secondary btn-sm" onclick="CampusViews.fillDemoLogin('admin')">
                <i class="fa-solid fa-crown"></i> Admin
              </button>
            </div>
          </div>

          <div style="text-align: center; margin-top: 24px; font-size: 0.88rem; color: var(--text-secondary);">
            New student? <a href="#register" style="color: var(--accent-cyan); font-weight: 700;"><i class="fa-solid fa-user-plus"></i> Student Registration</a>
          </div>
        </div>
      </div>
    `;
  },

  setLoginRole(role, btn) {
    document.querySelectorAll("#auth-role-tabs .role-tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    btn.dataset.selectedRole = role;

    const label = document.getElementById("login-identifier-label");
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");
    const noticeTitle = document.getElementById("role-notice-title");
    const noticeCreds = document.getElementById("role-notice-creds");

    const user = CampusData.getUser(role);
    const pass = (user && user.password) || (role === "admin" ? "admin123" : role === "coordinator" ? "coordinator123" : "student123");

    if (role === "student") {
      if (label) label.textContent = "Email or Student ID";
      if (noticeTitle) noticeTitle.innerHTML = `<i class="fa-solid fa-graduation-cap" style="color:var(--accent-emerald)"></i> Student Access Portal`;
      if (noticeCreds) noticeCreds.innerHTML = `Email: <code>${user.email}</code> • Password: <code style="color:var(--accent-cyan); font-weight:700;">${pass}</code>`;
    } else if (role === "coordinator") {
      if (label) label.textContent = "Faculty / Coordinator Email";
      if (noticeTitle) noticeTitle.innerHTML = `<i class="fa-solid fa-chalkboard-user" style="color:var(--accent-violet)"></i> Event Coordinator Access`;
      if (noticeCreds) noticeCreds.innerHTML = `Email: <code>${user.email}</code> • Password: <code style="color:var(--accent-cyan); font-weight:700;">${pass}</code>`;
    } else if (role === "admin") {
      if (label) label.textContent = "Administrator Government Email";
      if (noticeTitle) noticeTitle.innerHTML = `<i class="fa-solid fa-shield-halved" style="color:var(--accent-cyan)"></i> State Central Directorate Access`;
      if (noticeCreds) noticeCreds.innerHTML = `Email: <code>${user.email}</code> • Password: <code style="color:var(--accent-cyan); font-weight:700;">${pass}</code>`;
    }

    if (usernameInput && user) usernameInput.value = user.email;
    if (passwordInput) {
      passwordInput.value = pass;
      passwordInput.style.borderColor = "";
      passwordInput.placeholder = `Enter password for ${role}`;
    }
  },

  autoFillCurrentTabCredentials() {
    const activeTab = document.querySelector("#auth-role-tabs .role-tab-btn.active");
    const role = (activeTab && activeTab.getAttribute("data-role")) || "student";
    this.fillDemoLogin(role);
  },

  fillDemoLogin(role) {
    const user = CampusData.getUser(role);
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");
    const pass = (user && user.password) || (role === "admin" ? "admin123" : role === "coordinator" ? "coordinator123" : "student123");

    // Activate the role tab
    const tabs = document.querySelectorAll("#auth-role-tabs .role-tab-btn");
    tabs.forEach(t => {
      if (t.getAttribute("data-role") === role) {
        document.querySelectorAll("#auth-role-tabs .role-tab-btn").forEach(b => b.classList.remove("active"));
        t.classList.add("active");
        CampusViews.setLoginRole(role, t);
      }
    });

    if (usernameInput && user) usernameInput.value = user.email;
    if (passwordInput) {
      passwordInput.value = pass;
      passwordInput.style.borderColor = "";
    }

    CampusComponents.showToast("info", `Auto-filled credentials for ${user.name} (${role.toUpperCase()}) • Password: ${pass}`);
  },

  togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.type = field.type === "password" ? "text" : "password";
  },

  showForgotPasswordModal() {
    CampusComponents.openModal(`
      <div style="text-align: center; margin-bottom: 20px;">
        <i class="fa-solid fa-key" style="font-size: 2.2rem; color: var(--accent-cyan); margin-bottom: 12px;"></i>
        <h3 style="font-size: 1.4rem; font-weight: 800;">Password Recovery</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 6px;">
          Enter your registered college email or Student ID to receive an OTP reset token.
        </p>
      </div>
      <div class="form-group">
        <label class="form-label">College Email or Student ID</label>
        <input type="text" id="recovery-input" class="form-control" placeholder="e.g. ananya.nair@kmct.edu.in" value="ananya.nair@kmct.edu.in">
      </div>
      <button class="btn btn-primary" style="width: 100%;" onclick="CampusComponents.closeModal(); CampusComponents.showToast('success', 'Recovery token link sent to your collegiate mailbox!');">
        Send OTP Verification Link
      </button>
    `, "480px");
  },

  handleLoginSubmit() {
    const activeTab = document.querySelector("#auth-role-tabs .role-tab-btn.active");
    const role = (activeTab && activeTab.getAttribute("data-role")) || "student";
    const username = document.getElementById("login-username")?.value.trim();
    const password = document.getElementById("login-password")?.value;

    const user = CampusData.getUser(role);

    // Verify Password against role credentials
    if (!CampusData.verifyPassword(role, password)) {
      const hint = role === "admin" ? "admin123" : role === "coordinator" ? "coordinator123" : "student123";
      CampusComponents.showToast("error", `Incorrect password for ${role.toUpperCase()} portal! (Valid demo password: '${hint}')`, "Authentication Failed");
      const pwdField = document.getElementById("login-password");
      if (pwdField) {
        pwdField.style.borderColor = "var(--accent-rose)";
        pwdField.focus();
      }
      return;
    }

    // Success
    CampusData.setCurrentRole(role);
    CampusRouter.updateNavbarRole();
    CampusComponents.showToast("success", `Password verified. Signed in as ${user.name} (${role.toUpperCase()})!`);

    if (role === "student") window.location.hash = "dashboard-student";
    else if (role === "coordinator") window.location.hash = "dashboard-teacher";
    else window.location.hash = "dashboard-admin";
  },

  // -------------------------------------------------------------
  // 3. STUDENT REGISTRATION & ACCOUNT CREATION
  // -------------------------------------------------------------
  register() {
    const colleges = CampusData.getColleges();

    return `
      <div class="auth-wrapper" style="max-width: 680px;">
        <div class="glass-card auth-card">
          <div class="auth-header">
            <div class="brand-logo-icon" style="margin: 0 auto 16px; width: 48px; height: 48px;">
              <i class="fa-solid fa-id-card"></i>
            </div>
            <h2>Student Account Registration</h2>
            <p>Join CampusConnect AI to participate in state-wide college events, hackathons, and cultural fests.</p>
          </div>

          <form id="student-reg-form" onsubmit="event.preventDefault(); CampusViews.handleStudentSignupSubmit();">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" id="reg-name" class="form-control" placeholder="e.g. Ananya Nair" required>
              </div>
              <div class="form-group">
                <label class="form-label">Official Student ID / Roll No *</label>
                <input type="text" id="reg-studentid" class="form-control" placeholder="e.g. KMCT-CS-2024-089" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Select Your College / Institution *</label>
              <select id="reg-college" class="form-control" required>
                <option value="">-- Choose Affiliated College --</option>
                ${colleges.map(c => `<option value="${c.id}">${c.name} (${c.location.split(',')[1] || c.location})</option>`).join("")}
              </select>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Department *</label>
                <select id="reg-department" class="form-control" required>
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Electronics & Communication">Electronics & Communication</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="B.Com Finance & Commerce">B.Com Finance & Commerce</option>
                  <option value="English Literature & Journalism">English Literature & Journalism</option>
                  <option value="Physics & Mathematics">Physics & Mathematics</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Course & Academic Year *</label>
                <select id="reg-year" class="form-control" required>
                  <option value="B.Tech - 1st Year">B.Tech - 1st Year</option>
                  <option value="B.Tech - 2nd Year">B.Tech - 2nd Year</option>
                  <option value="B.Tech - 3rd Year" selected>B.Tech - 3rd Year</option>
                  <option value="B.Tech - 4th Year">B.Tech - 4th Year</option>
                  <option value="B.Sc / B.A - Final Year">B.Sc / B.A - Final Year</option>
                  <option value="Postgraduate (M.Tech / MCA / M.Com)">Postgraduate (M.Tech / MCA / M.Com)</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Official College Email *</label>
                <input type="email" id="reg-email" class="form-control" placeholder="student@kmct.edu.in" required>
              </div>
              <div class="form-group">
                <label class="form-label">WhatsApp Mobile Number *</label>
                <input type="tel" id="reg-phone" class="form-control" placeholder="+91 98470 12345" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Create Password *</label>
                <input type="password" id="reg-pwd" class="form-control" placeholder="Minimum 8 characters" required>
              </div>
              <div class="form-group">
                <label class="form-label">Confirm Password *</label>
                <input type="password" id="reg-pwd-confirm" class="form-control" placeholder="Re-type password" required>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <label style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: var(--text-secondary); cursor: pointer;">
                <input type="checkbox" required style="accent-color: var(--accent-violet); margin-top: 3px;">
                <span>I certify that all details submitted correspond to my bona fide student enrollment at the selected institution, and I agree to the platform inter-college conduct guidelines.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;">
              <i class="fa-solid fa-user-check"></i> Complete Registration & Enter Portal
            </button>
          </form>

          <div style="text-align: center; margin-top: 24px; font-size: 0.88rem; color: var(--text-secondary);">
            Already registered? <a href="#login" style="color: var(--accent-cyan); font-weight: 700;">Sign in here</a>
          </div>
        </div>
      </div>
    `;
  },

  handleStudentSignupSubmit() {
    const name = document.getElementById("reg-name").value;
    const studentId = document.getElementById("reg-studentid").value;
    const collegeSelect = document.getElementById("reg-college");
    const collegeId = collegeSelect.value;
    const collegeName = collegeSelect.options[collegeSelect.selectedIndex].text;
    const department = document.getElementById("reg-department").value;
    const year = document.getElementById("reg-year").value;
    const email = document.getElementById("reg-email").value;
    const phone = document.getElementById("reg-phone").value;

    const newStudent = {
      id: "usr-" + Date.now(),
      role: "student",
      name,
      email,
      phone,
      collegeId,
      collegeName,
      department,
      course: year,
      year: year.split('-')[1]?.trim() || "3rd Year",
      studentId,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      interests: ["AI & Coding", "Dance", "Sports"],
      profileCompletion: 85
    };

    CampusData.setCurrentRole("student");
    CampusData.saveCurrentUser(newStudent);
    CampusRouter.updateNavbarRole();

    CampusComponents.showToast("success", `Account created successfully! Welcome to CampusConnect AI, ${name}.`);
    window.location.hash = "dashboard-student";
  },

  // -------------------------------------------------------------
  // 4. STUDENT DASHBOARD
  // -------------------------------------------------------------
  "dashboard-student"() {
    const student = CampusData.getCurrentUser();
    const myRegistrations = CampusData.getRegistrations().filter(r => r.studentId === student.studentId || r.studentEmail === student.email);
    const approvedCount = myRegistrations.filter(r => r.status === "Approved").length;
    const pendingCount = myRegistrations.filter(r => r.status === "Pending").length;
    const waitlistedCount = myRegistrations.filter(r => r.status === "Waitlisted").length;

    // Upcoming registered event
    const nextEvent = myRegistrations.find(r => r.status === "Approved");
    const nextEventData = nextEvent ? CampusData.getEventById(nextEvent.eventId) : null;
    const countdown = nextEventData ? CampusComponents.formatCountdown(nextEventData.startDate) : null;

    // Recommended Events
    const recommendations = CampusData.getEvents().slice(0, 2);

    return `
      <!-- Welcome Header -->
      <div class="student-dash-header">
        <div class="welcome-box">
          <h2>Welcome back, ${student.name.split(' ')[0]}! <span style="font-size: 1.5rem;">👋</span></h2>
          <p><i class="fa-solid fa-building-columns" style="color: var(--accent-cyan);"></i> ${student.collegeName} • ${student.department}</p>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <a href="#events" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-plus"></i> Register for Events
          </a>
          <a href="#profile" class="btn btn-secondary btn-sm">
            <i class="fa-solid fa-sliders"></i> Preferences
          </a>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="dash-metrics-grid">
        <div class="glass-card dash-metric-card">
          <div class="metric-icon-box" style="background: rgba(139, 92, 246, 0.2); color: var(--accent-violet);">
            <i class="fa-solid fa-ticket"></i>
          </div>
          <div>
            <div style="font-size: 1.8rem; font-weight: 800; line-height: 1.1;">${myRegistrations.length}</div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">Total Registrations</div>
          </div>
        </div>

        <div class="glass-card dash-metric-card">
          <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <div style="font-size: 1.8rem; font-weight: 800; line-height: 1.1;">${approvedCount}</div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">Approved Digital Passes</div>
          </div>
        </div>

        <div class="glass-card dash-metric-card">
          <div class="metric-icon-box" style="background: rgba(245, 158, 11, 0.2); color: var(--accent-amber);">
            <i class="fa-solid fa-hourglass-half"></i>
          </div>
          <div>
            <div style="font-size: 1.8rem; font-weight: 800; line-height: 1.1;">${pendingCount}</div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">Pending Verifications</div>
          </div>
        </div>

        <div class="glass-card dash-metric-card">
          <div class="metric-icon-box" style="background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan);">
            <i class="fa-solid fa-shield-cat"></i>
          </div>
          <div>
            <div style="font-size: 1.8rem; font-weight: 800; line-height: 1.1;">${student.profileCompletion || 92}%</div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">Profile Readiness</div>
          </div>
        </div>
      </div>

      <!-- Spotlight Countdown for Next Confirmed Event -->
      ${nextEventData ? `
        <div class="countdown-spotlight">
          <div class="spotlight-left">
            <span class="badge badge-approved" style="margin-bottom: 8px;">
              <i class="fa-solid fa-circle-check"></i> YOUR NEXT UPCOMING EVENT
            </span>
            <h3>${nextEventData.title}</h3>
            <p><i class="fa-solid fa-location-dot"></i> ${nextEventData.venue} • Starts ${new Date(nextEventData.startDate).toLocaleDateString()}</p>
          </div>

          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div class="countdown-digit-boxes">
              <div class="time-box">
                <div class="num">${countdown.days}</div>
                <div class="unit">Days</div>
              </div>
              <div class="time-box">
                <div class="num">${countdown.hours}</div>
                <div class="unit">Hours</div>
              </div>
              <div class="time-box">
                <div class="num">${countdown.minutes}</div>
                <div class="unit">Mins</div>
              </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="CampusComponents.showDigitalPass('${nextEvent.id}')">
              <i class="fa-solid fa-qrcode"></i> View Entry Pass
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Two Column Layout: Registrations & AI Recommendations -->
      <div class="dashboard-layout-grid">
        <!-- Left: My Active Registrations -->
        <div>
          <div class="section-header" style="margin-bottom: 16px;">
            <h3 style="font-size: 1.3rem;">My Registered Passes</h3>
            <a href="#my-registrations" style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 600;">View All & History</a>
          </div>

          <div class="glass-card" style="padding: 0; overflow: hidden;">
            ${myRegistrations.length === 0 ? `
              <div style="padding: 40px; text-align: center; color: var(--text-muted);">
                <i class="fa-regular fa-calendar-xmark" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>No event registrations yet.</p>
                <a href="#events" class="btn btn-primary btn-sm" style="margin-top: 12px;">Browse Events</a>
              </div>
            ` : `
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Participation</th>
                    <th>Status</th>
                    <th>Pass</th>
                  </tr>
                </thead>
                <tbody>
                  ${myRegistrations.slice(0, 4).map(reg => `
                    <tr>
                      <td>
                        <div style="font-weight: 700; color: var(--text-primary);">${reg.eventTitle}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${reg.id}</div>
                      </td>
                      <td>
                        <span style="text-transform: capitalize; font-size: 0.82rem;">
                          ${reg.participationType === 'team' ? `<i class="fa-solid fa-users" style="color:var(--accent-cyan)"></i> ${reg.teamName}` : `<i class="fa-solid fa-user"></i> Individual`}
                        </span>
                      </td>
                      <td>
                        <span class="badge badge-${reg.status.toLowerCase()}">${reg.status}</span>
                      </td>
                      <td>
                        <button class="btn btn-outline-glow btn-sm" onclick="CampusComponents.showDigitalPass('${reg.id}')">
                          <i class="fa-solid fa-qrcode"></i> Pass
                        </button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            `}
          </div>
        </div>

        <!-- Right: AI Smart Recommendations & Reminder Alerts -->
        <div>
          <div class="ai-recommendation-box">
            <div class="ai-box-header">
              <h3 style="font-size: 1.15rem; font-weight: 700;">AI Recommendations</h3>
              <div class="ai-badge-sm">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Matched to Interests
              </div>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 16px;">
              Based on your department (Computer Science) and declared interests in AI & Classical Arts:
            </p>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${recommendations.map(ev => `
                <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; gap: 12px; align-items: center;">
                  <img src="${ev.poster}" style="width: 52px; height: 52px; border-radius: 10px; object-fit: cover;" onerror="this.src='assets/images/arts_fest.jpg'">
                  <div style="flex: 1;">
                    <div style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary); line-height: 1.2;">${ev.title}</div>
                    <div style="font-size: 0.72rem; color: var(--accent-cyan); margin-top: 2px;">${ev.collegeName}</div>
                  </div>
                  <a href="#event-details/${ev.id}" class="btn btn-primary btn-sm" style="padding: 4px 10px; font-size: 0.75rem;">
                    Apply
                  </a>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Quick Test Notifications Trigger -->
          <div class="glass-card" style="padding: 20px;">
            <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 6px;">
              <i class="fa-solid fa-bell" style="color: var(--accent-cyan);"></i> Test Scheduled Reminders
            </div>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 12px;">
              Simulate high-priority push reminder popups triggered by scheduled background jobs:
            </p>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-secondary btn-sm" onclick="CampusComponents.showToast('warning', 'InnovateKerala Hackathon begins in 1 Hour at KMCT Campus!', '1-HOUR REMINDER ALERT')">
                <i class="fa-solid fa-bell"></i> 1-Hour Alert
              </button>
              <button class="btn btn-secondary btn-sm" onclick="CampusComponents.showToast('info', 'Your Mohiniyattam performance schedule confirmed for Nov 20.', 'VENUE UPDATE')">
                <i class="fa-solid fa-calendar-check"></i> Venue Update
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // 5. ALL EVENTS DIRECTORY & SEARCH
  // -------------------------------------------------------------
  events(param) {
    const colleges = CampusData.getColleges();
    const categories = CampusData.getCategories();
    
    // Check URL parameters for preset AI search or category
    const urlHash = window.location.hash;
    const hasAiQuery = urlHash.includes("aiQuery=");
    const presetAiQuery = hasAiQuery ? decodeURIComponent(urlHash.split("aiQuery=")[1].split("&")[0]) : "";
    const presetCat = urlHash.includes("cat=") ? urlHash.split("cat=")[1].split("&")[0] : "";

    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">Inter-College Events Directory</h1>
            <p class="section-subtitle">Search, filter, and register for state-wide tournaments, technical hackathons, and cultural fests.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary btn-sm" id="view-mode-grid" onclick="CampusViews.setEventsViewMode('grid')">
              <i class="fa-solid fa-grip"></i> Grid
            </button>
            <button class="btn btn-secondary btn-sm" id="view-mode-list" onclick="CampusViews.setEventsViewMode('list')">
              <i class="fa-solid fa-list"></i> List
            </button>
          </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="events-filter-bar">
          <div class="filter-search-row">
            <div class="filter-search-box">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" id="events-search-input" class="form-control" placeholder="Search by event title, venue, keywords..." oninput="CampusViews.filterEvents()" value="${presetAiQuery}">
            </div>

            <div style="flex: 1; min-width: 180px;">
              <select id="events-college-filter" class="form-control" onchange="CampusViews.filterEvents()">
                <option value="">All Institutions</option>
                ${colleges.map(c => `<option value="${c.id}">${c.name}</option>`).join("")}
              </select>
            </div>

            <div style="flex: 1; min-width: 160px;">
              <select id="events-scope-filter" class="form-control" onchange="CampusViews.filterEvents()">
                <option value="">All Scopes (Inter & Intra)</option>
                <option value="inter">Inter-College Events</option>
                <option value="intra">Intra-College Events</option>
              </select>
            </div>

            <div style="flex: 1; min-width: 160px;">
              <select id="events-type-filter" class="form-control" onchange="CampusViews.filterEvents()">
                <option value="">All Formats</option>
                <option value="individual">Individual Participation</option>
                <option value="team">Team Participation</option>
              </select>
            </div>

            <div style="flex: 1; min-width: 160px;">
              <select id="events-sort-filter" class="form-control" onchange="CampusViews.filterEvents()">
                <option value="upcoming">Sort: Date (Nearest First)</option>
                <option value="deadline">Sort: Registration Deadline</option>
                <option value="popularity">Sort: Most Popular</option>
              </select>
            </div>
          </div>

          <!-- Category Chips -->
          <div class="filter-pills-row" id="category-pills">
            <button class="category-filter-pill ${!presetCat ? 'active' : ''}" data-cat="" onclick="CampusViews.selectCategoryPill('', this)">
              All Categories
            </button>
            ${categories.map(c => `
              <button class="category-filter-pill ${presetCat === c.id ? 'active' : ''}" data-cat="${c.id}" onclick="CampusViews.selectCategoryPill('${c.id}', this)">
                <i class="fa-solid ${c.icon}"></i> ${c.name}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Events Grid Output -->
        <div id="events-catalog-container" class="events-grid">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;
  },

  selectCategoryPill(catId, btn) {
    document.querySelectorAll(".category-filter-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    CampusViews.filterEvents();
  },

  filterEvents() {
    const searchVal = (document.getElementById("events-search-input")?.value || "").toLowerCase().trim();
    const collegeVal = document.getElementById("events-college-filter")?.value || "";
    const scopeVal = document.getElementById("events-scope-filter")?.value || "";
    const typeVal = document.getElementById("events-type-filter")?.value || "";
    const sortVal = document.getElementById("events-sort-filter")?.value || "upcoming";
    const activePill = document.querySelector(".category-filter-pill.active");
    const catVal = activePill ? activePill.getAttribute("data-cat") : "";

    let events = CampusData.getEvents().filter(e => e.approvalStatus === "Approved");

    // Apply Natural Language Search or keywords
    if (searchVal) {
      const nl = CampusComponents.parseNaturalLanguageQuery(searchVal);
      events = events.filter(e => {
        const matchesKeyword = e.title.toLowerCase().includes(searchVal) || 
                               e.description.toLowerCase().includes(searchVal) || 
                               e.venue.toLowerCase().includes(searchVal);
        const matchesNlCategory = nl.category ? e.category === nl.category : false;
        const matchesNlCollege = nl.collegeId ? e.collegeId === nl.collegeId : false;
        const matchesFree = nl.freeOnly ? !e.isFeeApplicable : true;
        return matchesKeyword || matchesNlCategory || matchesNlCollege || matchesFree;
      });
    }

    if (collegeVal) {
      events = events.filter(e => e.collegeId === collegeVal);
    }
    if (scopeVal) {
      events = events.filter(e => e.scope === scopeVal);
    }
    if (typeVal) {
      events = events.filter(e => e.participationType === typeVal || e.participationType === "both");
    }
    if (catVal) {
      events = events.filter(e => e.category === catVal);
    }

    // Sort
    if (sortVal === "upcoming") {
      events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    } else if (sortVal === "deadline") {
      events.sort((a, b) => new Date(a.regCloseDate) - new Date(b.regCloseDate));
    } else if (sortVal === "popularity") {
      events.sort((a, b) => b.registeredCount - a.registeredCount);
    }

    const container = document.getElementById("events-catalog-container");
    if (!container) return;

    if (events.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
          <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 14px;"></i>
          <h3>No events match your current filter criteria</h3>
          <p style="margin-top: 6px;">Try clearing filters or search for another sport, arts, or tech category.</p>
          <button class="btn btn-secondary btn-sm" style="margin-top: 14px;" onclick="CampusViews.clearAllFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = events.map(ev => CampusViews.renderEventCard(ev)).join("");
  },

  clearAllFilters() {
    const s = document.getElementById("events-search-input");
    const c = document.getElementById("events-college-filter");
    const sc = document.getElementById("events-scope-filter");
    const t = document.getElementById("events-type-filter");
    if (s) s.value = "";
    if (c) c.value = "";
    if (sc) sc.value = "";
    if (t) t.value = "";
    document.querySelectorAll(".category-filter-pill").forEach(p => p.classList.remove("active"));
    const first = document.querySelector(".category-filter-pill");
    if (first) first.classList.add("active");
    this.filterEvents();
  },

  setEventsViewMode(mode) {
    const container = document.getElementById("events-catalog-container");
    if (!container) return;
    if (mode === "list") {
      container.style.gridTemplateColumns = "1fr";
    } else {
      container.style.gridTemplateColumns = "repeat(auto-fill, minmax(320px, 1fr))";
    }
  },

  // -------------------------------------------------------------
  // 6. EVENT DETAILS PAGE
  // -------------------------------------------------------------
  "event-details"(eventId) {
    const event = CampusData.getEventById(eventId);
    if (!event) {
      return `
        <div style="text-align: center; padding: 60px;">
          <h2>Event Not Found</h2>
          <p style="color: var(--text-secondary); margin: 12px 0 24px;">The requested event record does not exist.</p>
          <a href="#events" class="btn btn-primary">Back to Events Directory</a>
        </div>
      `;
    }

    const countdown = CampusComponents.formatCountdown(event.regCloseDate);
    const capacityPct = Math.min(100, Math.round((event.registeredCount / event.maxCapacity) * 100));

    // Check if current user is already registered
    const currentUser = CampusData.getCurrentUser();
    const existingReg = CampusData.getRegistrations().find(r => 
      r.eventId === event.id && 
      (r.studentId === currentUser.studentId || r.studentEmail === currentUser.email) &&
      r.status !== "Cancelled"
    );

    const formattedStartDate = new Date(event.startDate).toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const formattedStartTime = new Date(event.startDate).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    });

    const formattedRegClose = new Date(event.regCloseDate).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    return `
      <div>
        <div style="margin-bottom: 20px;">
          <a href="#events" style="color: var(--accent-cyan); font-size: 0.88rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-arrow-left"></i> Back to All Events
          </a>
        </div>

        <div class="event-details-hero">
          <img src="${event.poster}" alt="${event.title}" onerror="this.src='assets/images/arts_fest.jpg'">
          <div class="event-details-hero-overlay">
            <div class="event-details-badges">
              <span class="badge badge-${event.category}">${event.categoryLabel}</span>
              <span class="badge badge-${event.scope}">${event.scope.toUpperCase()}-COLLEGE</span>
              <span class="badge badge-approved"><i class="fa-solid fa-shield-check"></i> Verified Collegiate Event</span>
            </div>
            <h1 class="event-details-title">${event.title}</h1>
            <p style="color: rgba(255,255,255,0.85); font-size: 1.05rem; margin-top: 6px;">
              <i class="fa-solid fa-building-columns"></i> ${event.collegeName}
            </p>
          </div>
        </div>

        <div class="event-details-layout">
          <!-- Main Event Information -->
          <div>
            <div class="glass-card details-section-box">
              <h3><i class="fa-solid fa-circle-info" style="color: var(--accent-cyan);"></i> About the Event</h3>
              <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1rem; margin-bottom: 20px;">
                ${event.description}
              </p>

              <div class="form-row" style="background: rgba(255,255,255,0.03); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div>
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Date & Time</div>
                  <div style="font-weight: 700; margin-top: 4px;">${formattedStartDate}</div>
                  <div style="font-size: 0.82rem; color: var(--accent-cyan);">${formattedStartTime} IST</div>
                </div>

                <div>
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Official Venue</div>
                  <div style="font-weight: 700; margin-top: 4px;">${event.venue}</div>
                </div>

                <div>
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Format & Entry</div>
                  <div style="font-weight: 700; margin-top: 4px; text-transform: capitalize;">${event.participationType} Participation</div>
                  <div style="font-size: 0.82rem; color: var(--accent-emerald); font-weight: 700;">${event.fee}</div>
                </div>
              </div>
            </div>

            <!-- Rules & Guidelines -->
            <div class="glass-card details-section-box">
              <h3><i class="fa-solid fa-list-check" style="color: var(--accent-violet);"></i> Rules & Guidelines</h3>
              <ul class="rules-list">
                ${event.rules.map(rule => `
                  <li><i class="fa-solid fa-check"></i> <span>${rule}</span></li>
                `).join("")}
              </ul>
            </div>

            <!-- Eligibility -->
            <div class="glass-card details-section-box">
              <h3><i class="fa-solid fa-user-check" style="color: var(--accent-emerald);"></i> Eligibility Criteria</h3>
              <p style="color: var(--text-secondary); line-height: 1.6;">
                ${event.eligibility}
              </p>
            </div>

            <!-- Organizing Host & Coordinator Contact -->
            <div class="glass-card details-section-box">
              <h3><i class="fa-solid fa-address-card" style="color: var(--accent-amber);"></i> Contact Event Coordinator</h3>
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: gap; gap: 16px;">
                <div>
                  <div style="font-size: 1.05rem; font-weight: 700;">${event.contactPerson}</div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 2px;">
                    <i class="fa-solid fa-envelope"></i> ${event.contactEmail} • <i class="fa-solid fa-phone"></i> ${event.contactPhone}
                  </div>
                </div>
                <a href="mailto:${event.contactEmail}" class="btn btn-secondary btn-sm">
                  <i class="fa-solid fa-paper-plane"></i> Send Query
                </a>
              </div>
            </div>
          </div>

          <!-- Sticky Sidebar Registration Actions -->
          <div class="event-action-sidebar">
            <div class="glass-card action-box-countdown">
              <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--accent-cyan); font-weight: 700; letter-spacing: 0.05em; margin-bottom: 6px;">
                Registration Closes In
              </div>
              <div class="countdown-digit-boxes" style="justify-content: center; margin-bottom: 12px;">
                <div class="time-box">
                  <div class="num">${countdown.days}</div>
                  <div class="unit">Days</div>
                </div>
                <div class="time-box">
                  <div class="num">${countdown.hours}</div>
                  <div class="unit">Hours</div>
                </div>
                <div class="time-box">
                  <div class="num">${countdown.minutes}</div>
                  <div class="unit">Mins</div>
                </div>
              </div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">
                Deadline: ${formattedRegClose}
              </div>
            </div>

            <div class="glass-card">
              <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                  <span style="font-weight: 600;">Seats Filled</span>
                  <span style="font-weight: 700; color: var(--accent-cyan);">${event.registeredCount} / ${event.maxCapacity} (${capacityPct}%)</span>
                </div>
                <div class="capacity-bar-wrapper" style="height: 8px;">
                  <div class="capacity-fill" style="width: ${capacityPct}%;"></div>
                </div>
              </div>

              ${existingReg ? `
                <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--accent-emerald); border-radius: var(--radius-md); padding: 14px; text-align: center; margin-bottom: 16px;">
                  <div style="color: var(--accent-emerald); font-weight: 700; font-size: 0.9rem;">
                    <i class="fa-solid fa-circle-check"></i> Already Registered!
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 4px;">Pass ID: ${existingReg.id}</div>
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="CampusComponents.showDigitalPass('${existingReg.id}')">
                  <i class="fa-solid fa-qrcode"></i> View Digital Entry Pass
                </button>
              ` : countdown.isExpired ? `
                <button class="btn btn-secondary" style="width: 100%; cursor: not-allowed;" disabled>
                  <i class="fa-solid fa-lock"></i> Registration Closed
                </button>
              ` : event.participationType === "team" ? `
                <a href="#register-team/${event.id}" class="btn btn-primary" style="width: 100%; padding: 14px;">
                  <i class="fa-solid fa-users"></i> Register Squad / Team
                </a>
              ` : event.participationType === "individual" ? `
                <a href="#register-individual/${event.id}" class="btn btn-primary" style="width: 100%; padding: 14px;">
                  <i class="fa-solid fa-user-plus"></i> Register as Individual
                </a>
              ` : `
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  <a href="#register-individual/${event.id}" class="btn btn-primary" style="width: 100%;">
                    <i class="fa-solid fa-user"></i> Register as Individual
                  </a>
                  <a href="#register-team/${event.id}" class="btn btn-secondary" style="width: 100%;">
                    <i class="fa-solid fa-users"></i> Register as Team
                  </a>
                </div>
              `}

              <div style="margin-top: 20px; border-top: 1px solid var(--border-subtle); padding-top: 14px; font-size: 0.78rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 8px;">
                <div><i class="fa-solid fa-shield-halved" style="color: var(--accent-cyan);"></i> Instant Unique Registration ID Generation</div>
                <div><i class="fa-solid fa-qrcode" style="color: var(--accent-cyan);"></i> Printable QR Receipt provided upon confirmation</div>
                <div><i class="fa-solid fa-bell" style="color: var(--accent-cyan);"></i> Automated 7d, 3d, 1d, 1h reminder notifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // 7. INDIVIDUAL REGISTRATION PAGE
  // -------------------------------------------------------------
  "register-individual"(eventId) {
    const event = CampusData.getEventById(eventId) || CampusData.getEvents()[0];
    const user = CampusData.getCurrentUser();

    return `
      <div class="auth-wrapper" style="max-width: 680px;">
        <div style="margin-bottom: 16px;">
          <a href="#event-details/${event.id}" style="color: var(--accent-cyan); font-size: 0.88rem; font-weight: 600;">
            <i class="fa-solid fa-arrow-left"></i> Back to Event Details
          </a>
        </div>

        <div class="glass-card auth-card">
          <div class="auth-header">
            <span class="badge badge-primary" style="margin-bottom: 8px;">Individual Entry</span>
            <h2>Register for ${event.title}</h2>
            <p><i class="fa-solid fa-building-columns"></i> ${event.collegeName} • ${event.venue}</p>
          </div>

          <form id="ind-reg-form" onsubmit="event.preventDefault(); CampusViews.handleIndividualRegistration('${event.id}');">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Student Name</label>
                <input type="text" id="ind-name" class="form-control" value="${user.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Student ID / Roll No</label>
                <input type="text" id="ind-studentid" class="form-control" value="${user.studentId || 'KMCT-CS-2023-042'}" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">College / Institution</label>
              <input type="text" id="ind-college" class="form-control" value="${user.collegeName || 'KMCT College of Engineering'}" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Department</label>
                <input type="text" id="ind-dept" class="form-control" value="${user.department || 'Computer Science & Engineering'}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Course & Year</label>
                <input type="text" id="ind-course" class="form-control" value="${user.course || 'B.Tech Computer Science (3rd Year)'}" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" id="ind-email" class="form-control" value="${user.email}" required>
              </div>
              <div class="form-group">
                <label class="form-label">WhatsApp Mobile Phone</label>
                <input type="tel" id="ind-phone" class="form-control" value="${user.phone || '+91 98471 45098'}" required>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px;">
              <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 4px;">Registration Fee Summary</div>
              <div style="display: flex; justify-content: space-between; font-size: 0.88rem; color: var(--text-secondary);">
                <span>Event Entry Fee</span>
                <span style="font-weight: 700; color: var(--accent-emerald);">${event.fee}</span>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <label style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: var(--text-secondary); cursor: pointer;">
                <input type="checkbox" required style="accent-color: var(--accent-violet); margin-top: 3px;">
                <span>I confirm that I meet the eligibility criteria for this collegiate event and agree to follow all guidelines and safety instructions stipulated by the host institution.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;">
              <i class="fa-solid fa-ticket"></i> Confirm Registration & Generate Pass
            </button>
          </form>
        </div>
      </div>
    `;
  },

  handleIndividualRegistration(eventId) {
    const event = CampusData.getEventById(eventId);
    if (!event) return;

    const regData = {
      eventId: event.id,
      eventTitle: event.title,
      collegeName: event.collegeName,
      venue: event.venue,
      eventDate: event.startDate,
      studentName: document.getElementById("ind-name").value,
      studentId: document.getElementById("ind-studentid").value,
      studentCollege: document.getElementById("ind-college").value,
      department: document.getElementById("ind-dept").value,
      course: document.getElementById("ind-course").value,
      year: "3rd Year",
      studentEmail: document.getElementById("ind-email").value,
      studentPhone: document.getElementById("ind-phone").value,
      participationType: "individual",
      status: "Approved", // Auto-approved or pending per event policy
      notes: "Individual registration self-service confirmed."
    };

    try {
      const created = CampusData.addRegistration(regData);
      CampusComponents.showToast("success", `Registration confirmed! ID: ${created.id}`);
      CampusComponents.showDigitalPass(created.id);
      CampusRouter.navigate("my-registrations");
    } catch (err) {
      CampusComponents.showToast("error", err.message);
    }
  },

  // -------------------------------------------------------------
  // 8. TEAM REGISTRATION PAGE
  // -------------------------------------------------------------
  "register-team"(eventId) {
    const event = CampusData.getEventById(eventId) || CampusData.getEvents()[0];
    const user = CampusData.getCurrentUser();
    const colleges = CampusData.getColleges();

    return `
      <div class="auth-wrapper" style="max-width: 780px;">
        <div style="margin-bottom: 16px;">
          <a href="#event-details/${event.id}" style="color: var(--accent-cyan); font-size: 0.88rem; font-weight: 600;">
            <i class="fa-solid fa-arrow-left"></i> Back to Event Details
          </a>
        </div>

        <div class="glass-card auth-card">
          <div class="auth-header">
            <span class="badge badge-secondary" style="margin-bottom: 8px;">Squad / Team Entry</span>
            <h2>Team Registration: ${event.title}</h2>
            <p>Required Team Size: ${event.minTeamSize || 3} to ${event.maxTeamSize || 5} members. Inter-college members supported.</p>
          </div>

          <form id="team-reg-form" onsubmit="event.preventDefault(); CampusViews.handleTeamRegistration('${event.id}');">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Official Team Name *</label>
                <input type="text" id="team-name" class="form-control" placeholder="e.g. CyberKnights or Kochi Strikers" required>
              </div>
              <div class="form-group">
                <label class="form-label">Team Captain Name *</label>
                <input type="text" id="team-captain-name" class="form-control" value="${user.name}" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Captain Student ID *</label>
                <input type="text" id="team-captain-id" class="form-control" value="${user.studentId || 'KMCT-CS-2023-042'}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Captain Mobile (WhatsApp) *</label>
                <input type="tel" id="team-captain-phone" class="form-control" value="${user.phone || '+91 98471 45098'}" required>
              </div>
            </div>

            <!-- Dynamic Team Members Section -->
            <div style="margin: 24px 0 16px; border-top: 1px solid var(--border-subtle); padding-top: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                <h4 style="font-size: 1.05rem;"><i class="fa-solid fa-users" style="color: var(--accent-cyan);"></i> Team Roster (Members)</h4>
                <button type="button" class="btn btn-outline-glow btn-sm" onclick="CampusViews.addTeamMemberRow()">
                  <i class="fa-solid fa-plus"></i> Add Member
                </button>
              </div>

              <div id="team-members-container" style="display: flex; flex-direction: column; gap: 12px;">
                <!-- Pre-populated Captain Row -->
                <div class="team-member-row" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); display: grid; grid-template-columns: 2fr 2fr 1.5fr 36px; gap: 10px; align-items: center;">
                  <input type="text" class="form-control member-name" placeholder="Member Name" value="${user.name} (Captain)" readonly>
                  <input type="text" class="form-control member-college" placeholder="College Name" value="${user.collegeName}" readonly>
                  <input type="text" class="form-control member-id" placeholder="Student ID" value="${user.studentId || 'KMCT-CS-2023-042'}" readonly>
                  <div style="text-align: center; color: var(--accent-cyan); font-size: 0.9rem;" title="Captain cannot be removed"><i class="fa-solid fa-crown"></i></div>
                </div>

                <!-- Second Member Row -->
                <div class="team-member-row" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); display: grid; grid-template-columns: 2fr 2fr 1.5fr 36px; gap: 10px; align-items: center;">
                  <input type="text" class="form-control member-name" placeholder="Member 2 Name *" value="Aditya Menon" required>
                  <input type="text" class="form-control member-college" placeholder="Member 2 College *" value="KMCT College of Engineering" required>
                  <input type="text" class="form-control member-id" placeholder="Student ID *" value="KMCT-CS-2023-018" required>
                  <button type="button" class="btn btn-danger btn-sm" onclick="this.closest('.team-member-row').remove()" style="padding: 6px;"><i class="fa-solid fa-trash"></i></button>
                </div>

                <!-- Third Member Row -->
                <div class="team-member-row" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); display: grid; grid-template-columns: 2fr 2fr 1.5fr 36px; gap: 10px; align-items: center;">
                  <input type="text" class="form-control member-name" placeholder="Member 3 Name *" value="Gopika S." required>
                  <input type="text" class="form-control member-college" placeholder="Member 3 College *" value="MES College of Engineering" required>
                  <input type="text" class="form-control member-id" placeholder="Student ID *" value="MES-IT-2023-091" required>
                  <button type="button" class="btn btn-danger btn-sm" onclick="this.closest('.team-member-row').remove()" style="padding: 6px;"><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px;">
              <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 4px;">Team Registration Fee</div>
              <div style="display: flex; justify-content: space-between; font-size: 0.88rem; color: var(--text-secondary);">
                <span>Team Slot Entry Fee</span>
                <span style="font-weight: 700; color: var(--accent-emerald);">${event.fee}</span>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <label style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: var(--text-secondary); cursor: pointer;">
                <input type="checkbox" required style="accent-color: var(--accent-violet); margin-top: 3px;">
                <span>As Team Captain, I verify that each enrolled teammate is a bona fide college student with active student ID credentials and has agreed to represent this team.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;">
              <i class="fa-solid fa-users"></i> Register Squad & Generate Team Pass
            </button>
          </form>
        </div>
      </div>
    `;
  },

  addTeamMemberRow() {
    const container = document.getElementById("team-members-container");
    if (!container) return;

    const row = document.createElement("div");
    row.className = "team-member-row";
    row.style = "background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); display: grid; grid-template-columns: 2fr 2fr 1.5fr 36px; gap: 10px; align-items: center;";
    row.innerHTML = `
      <input type="text" class="form-control member-name" placeholder="Member Name *" required>
      <input type="text" class="form-control member-college" placeholder="College Name *" required>
      <input type="text" class="form-control member-id" placeholder="Student ID *" required>
      <button type="button" class="btn btn-danger btn-sm" onclick="this.closest('.team-member-row').remove()" style="padding: 6px;"><i class="fa-solid fa-trash"></i></button>
    `;
    container.appendChild(row);
  },

  handleTeamRegistration(eventId) {
    const event = CampusData.getEventById(eventId);
    if (!event) return;

    const teamName = document.getElementById("team-name").value;
    const captainName = document.getElementById("team-captain-name").value;
    const captainId = document.getElementById("team-captain-id").value;
    const captainPhone = document.getElementById("team-captain-phone").value;
    const user = CampusData.getCurrentUser();

    // Collect members
    const memberRows = document.querySelectorAll(".team-member-row");
    const members = [];
    memberRows.forEach(r => {
      const name = r.querySelector(".member-name")?.value || "";
      const college = r.querySelector(".member-college")?.value || "";
      const id = r.querySelector(".member-id")?.value || "";
      if (name) members.push({ name, college, id });
    });

    if (members.length < (event.minTeamSize || 2)) {
      CampusComponents.showToast("error", `This event requires a minimum of ${event.minTeamSize || 2} team members.`);
      return;
    }

    const regData = {
      eventId: event.id,
      eventTitle: event.title,
      collegeName: event.collegeName,
      venue: event.venue,
      eventDate: event.startDate,
      studentName: captainName,
      studentId: captainId,
      studentCollege: user.collegeName,
      department: user.department,
      studentEmail: user.email,
      studentPhone: captainPhone,
      participationType: "team",
      teamName,
      teamCaptain: captainName,
      teamSize: members.length,
      members,
      status: "Approved",
      notes: "Squad verification confirmed."
    };

    try {
      const created = CampusData.addRegistration(regData);
      CampusComponents.showToast("success", `Team ${teamName} registered successfully! ID: ${created.id}`);
      CampusComponents.showDigitalPass(created.id);
      CampusRouter.navigate("my-registrations");
    } catch (err) {
      CampusComponents.showToast("error", err.message);
    }
  },

  // -------------------------------------------------------------
  // 9. MY REGISTRATIONS PAGE
  // -------------------------------------------------------------
  "my-registrations"() {
    const student = CampusData.getCurrentUser();
    const registrations = CampusData.getRegistrations().filter(r => r.studentId === student.studentId || r.studentEmail === student.email);

    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">My Event Registrations & Passes</h1>
            <p class="section-subtitle">Manage your digital entry passes, team rosters, and track application approval statuses.</p>
          </div>
          <a href="#events" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-plus"></i> Register for More Events
          </a>
        </div>

        <!-- Status Filter Tabs -->
        <div class="status-filter-tabs" id="reg-status-tabs">
          <button class="status-tab active" data-status="all" onclick="CampusViews.filterRegistrations('all', this)">
            All (${registrations.length})
          </button>
          <button class="status-tab" data-status="Approved" onclick="CampusViews.filterRegistrations('Approved', this)">
            Approved (${registrations.filter(r => r.status === 'Approved').length})
          </button>
          <button class="status-tab" data-status="Pending" onclick="CampusViews.filterRegistrations('Pending', this)">
            Pending (${registrations.filter(r => r.status === 'Pending').length})
          </button>
          <button class="status-tab" data-status="Waitlisted" onclick="CampusViews.filterRegistrations('Waitlisted', this)">
            Waitlisted (${registrations.filter(r => r.status === 'Waitlisted').length})
          </button>
          <button class="status-tab" data-status="Cancelled" onclick="CampusViews.filterRegistrations('Cancelled', this)">
            Cancelled (${registrations.filter(r => r.status === 'Cancelled').length})
          </button>
        </div>

        <!-- Registrations Table Container -->
        <div class="glass-card registrations-table-card" style="padding: 0;">
          <table class="custom-table" id="my-registrations-table">
            <thead>
              <tr>
                <th>Registration ID</th>
                <th>Event & Organizing College</th>
                <th>Type & Roster</th>
                <th>Date & Venue</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${registrations.map(r => CampusViews.renderRegistrationRow(r)).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderRegistrationRow(reg) {
    const event = CampusData.getEventById(reg.eventId) || {};

    return `
      <tr class="reg-row" data-status="${reg.status}">
        <td>
          <div style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan); font-size: 0.85rem;">
            ${reg.id}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">
            Reg: ${new Date(reg.registeredAt).toLocaleDateString()}
          </div>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-primary);">${reg.eventTitle}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-solid fa-building-columns"></i> ${reg.collegeName || event.collegeName}</div>
        </td>
        <td>
          <div style="font-size: 0.85rem; text-transform: capitalize;">
            ${reg.participationType === 'team' ? `<i class="fa-solid fa-users" style="color:var(--accent-cyan)"></i> ${reg.teamName} (${reg.teamSize} members)` : `<i class="fa-solid fa-user"></i> Individual`}
          </div>
        </td>
        <td>
          <div style="font-size: 0.85rem;">${new Date(reg.eventDate || event.startDate).toLocaleDateString()}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${(reg.venue || event.venue || '').split(',')[0]}</div>
        </td>
        <td>
          <span class="badge badge-${reg.status.toLowerCase()}">${reg.status}</span>
        </td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-primary btn-sm" onclick="CampusComponents.showDigitalPass('${reg.id}')" title="View Digital Pass">
              <i class="fa-solid fa-qrcode"></i> Pass
            </button>
            ${reg.status !== "Cancelled" ? `
              <button class="btn btn-danger btn-sm" onclick="CampusViews.confirmCancelRegistration('${reg.id}')" title="Cancel Registration">
                <i class="fa-solid fa-xmark"></i>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  },

  filterRegistrations(status, btn) {
    document.querySelectorAll("#reg-status-tabs .status-tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");

    const rows = document.querySelectorAll("#my-registrations-table tbody .reg-row");
    rows.forEach(row => {
      const rowStatus = row.getAttribute("data-status");
      if (status === "all" || rowStatus === status) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  },

  confirmCancelRegistration(regId) {
    if (confirm("Are you sure you want to cancel this event registration? Your slot will be released back to the event pool.")) {
      CampusData.cancelRegistration(regId);
      CampusComponents.showToast("info", "Registration has been cancelled.");
      CampusRouter.handleHashChange();
    }
  },

  // -------------------------------------------------------------
  // 10. NOTIFICATIONS PAGE
  // -------------------------------------------------------------
  notifications() {
    const notifs = CampusData.getNotifications();
    const unreadCount = notifs.filter(n => !n.read).length;

    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">Notification Center & Alerts</h1>
            <p class="section-subtitle">Real-time alerts for registration approvals, deadline reminders, schedule shifts, and event notices.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary btn-sm" onclick="CampusData.markAllNotificationsRead(); CampusRouter.handleHashChange(); CampusComponents.showToast('info', 'All notifications marked as read.');">
              <i class="fa-solid fa-check-double"></i> Mark All as Read
            </button>
            <button class="btn btn-primary btn-sm" onclick="CampusViews.simulateReminderToast()">
              <i class="fa-solid fa-bell"></i> Simulate Deadline Alert
            </button>
          </div>
        </div>

        <div class="glass-card" style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 14px;">
            <div style="font-weight: 700; font-size: 1.05rem;">
              All Notifications (${notifs.length})
              ${unreadCount > 0 ? `<span class="badge badge-tech" style="margin-left: 8px;">${unreadCount} Unread</span>` : ''}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              Automated multi-college alert distribution
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${notifs.map(n => `
              <div class="glass-card" style="padding: 16px; background: ${n.read ? 'rgba(255,255,255,0.02)' : 'rgba(139,92,246,0.08)'}; border-left: 4px solid ${n.type === 'approval' ? 'var(--accent-emerald)' : n.type === 'reminder' ? 'var(--accent-amber)' : 'var(--accent-cyan)'}; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${n.title}</span>
                    <span style="font-size: 0.72rem; color: var(--text-muted);">${n.timestamp}</span>
                  </div>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${n.message}</p>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                  ${n.link ? `<a href="${n.link}" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 4px 10px;">View Details</a>` : ''}
                  ${!n.read ? `
                    <button class="btn btn-outline-glow btn-sm" style="padding: 4px 8px;" onclick="CampusData.markNotificationAsRead('${n.id}'); CampusRouter.handleHashChange();" title="Mark Read">
                      <i class="fa-solid fa-check"></i>
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  },

  simulateReminderToast() {
    CampusComponents.showToast("warning", "Registration for 'Kerala Inter-College Football' closes in 48 hours. Secure remaining slots!", "REGISTRATION DEADLINE REMINDER");
  },

  // -------------------------------------------------------------
  // 11. TEACHER & EVENT COORDINATOR DASHBOARD
  // -------------------------------------------------------------
  "dashboard-teacher"() {
    const user = CampusData.getCurrentUser();
    const allEvents = CampusData.getEvents();
    // Coordinator's college events
    const myEvents = allEvents.filter(e => e.collegeId === user.collegeId || user.role === "admin");
    const allRegistrations = CampusData.getRegistrations();
    
    // Relevant registrations
    const myEventIds = myEvents.map(e => e.id);
    const relevantRegs = allRegistrations.filter(r => myEventIds.includes(r.eventId));
    const pendingCount = relevantRegs.filter(r => r.status === "Pending").length;
    const approvedCount = relevantRegs.filter(r => r.status === "Approved").length;

    return `
      <div>
        <div class="coordinator-controls-bar">
          <div>
            <h1 class="section-title">Teacher & Event Coordinator Console</h1>
            <p class="section-subtitle"><i class="fa-solid fa-building-columns" style="color: var(--accent-cyan);"></i> ${user.collegeName} • ${user.designation || 'Faculty Coordinator'}</p>
          </div>
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-primary" onclick="CampusViews.openCreateEventModal()">
              <i class="fa-solid fa-circle-plus"></i> Create New Event
            </button>
            <button class="btn btn-secondary" onclick="CampusComponents.exportParticipantsCSV(myEvents[0]?.id || '')">
              <i class="fa-solid fa-file-excel"></i> Export All Participants
            </button>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div class="dash-metrics-grid">
          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(139, 92, 246, 0.2); color: var(--accent-violet);">
              <i class="fa-solid fa-calendar-check"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">${myEvents.length}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Organized Events</div>
            </div>
          </div>

          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(245, 158, 11, 0.2); color: var(--accent-amber);">
              <i class="fa-solid fa-user-clock"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">${pendingCount}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Pending Approval Requests</div>
            </div>
          </div>

          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">
              <i class="fa-solid fa-users"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">${approvedCount}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Approved Participants</div>
            </div>
          </div>

          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan);">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">94%</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Average Attendance Rate</div>
            </div>
          </div>
        </div>

        <!-- Registrations Approval & Review Table -->
        <div class="glass-card" style="margin-bottom: 32px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 700;">Participant Approval Queue & Review</h3>
              <p style="font-size: 0.82rem; color: var(--text-secondary);">Verify eligibility, authorize collegiate team rosters, and track live check-in attendance.</p>
            </div>
            <div style="display: flex; gap: 10px;">
              <input type="text" id="coord-reg-search" class="form-control" style="width: 240px; padding: 6px 12px; font-size: 0.85rem;" placeholder="Search participant..." oninput="CampusViews.filterCoordinatorRegs()">
              <button class="btn btn-secondary btn-sm" onclick="CampusComponents.exportParticipantsCSV(myEvents[0]?.id || '')">
                <i class="fa-solid fa-download"></i> CSV
              </button>
            </div>
          </div>

          <div class="registrations-table-card" style="padding: 0;">
            <table class="custom-table" id="coord-regs-table">
              <thead>
                <tr>
                  <th>Participant / Captain</th>
                  <th>Institution & Dept</th>
                  <th>Event</th>
                  <th>Format</th>
                  <th>Attendance</th>
                  <th>Current Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${relevantRegs.map(reg => `
                  <tr class="coord-reg-row" data-query="${(reg.studentName + ' ' + reg.studentCollege + ' ' + reg.id).toLowerCase()}">
                    <td>
                      <div style="font-weight: 700; color: var(--text-primary);">${reg.studentName}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${reg.id}</div>
                    </td>
                    <td>
                      <div style="font-size: 0.85rem;">${reg.studentCollege}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${reg.department || 'N/A'}</div>
                    </td>
                    <td>
                      <div style="font-size: 0.85rem; font-weight: 600;">${reg.eventTitle}</div>
                    </td>
                    <td>
                      <span style="text-transform: capitalize; font-size: 0.82rem;">
                        ${reg.participationType === 'team' ? `<i class="fa-solid fa-users" style="color:var(--accent-cyan)"></i> ${reg.teamName}` : `<i class="fa-solid fa-user"></i> Individual`}
                      </span>
                    </td>
                    <td>
                      <button class="btn btn-sm ${reg.attendanceRecorded ? 'btn-success' : 'btn-secondary'}" onclick="CampusData.toggleAttendance('${reg.id}'); CampusRouter.handleHashChange();" style="padding: 3px 8px; font-size: 0.72rem;">
                        <i class="fa-solid ${reg.attendanceRecorded ? 'fa-user-check' : 'fa-user-xmark'}"></i>
                        ${reg.attendanceRecorded ? 'Checked-In' : 'Mark Present'}
                      </button>
                    </td>
                    <td>
                      <span class="badge badge-${reg.status.toLowerCase()}">${reg.status}</span>
                    </td>
                    <td>
                      <div style="display: flex; gap: 6px;">
                        <button class="btn btn-success btn-sm" onclick="CampusData.updateRegistrationStatus('${reg.id}', 'Approved', 'Approved by coordinator'); CampusRouter.handleHashChange();" title="Approve Participant">
                          <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="CampusData.updateRegistrationStatus('${reg.id}', 'Rejected', 'Criteria not met'); CampusRouter.handleHashChange();" title="Reject Request">
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="CampusData.updateRegistrationStatus('${reg.id}', 'Waitlisted', 'Moved to waitlist'); CampusRouter.handleHashChange();" title="Waitlist">
                          <i class="fa-solid fa-clock"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Managed Events Grid -->
        <div>
          <div class="section-header">
            <h3 style="font-size: 1.25rem; font-weight: 700;">Events Managed by ${user.collegeName}</h3>
          </div>
          <div class="events-grid">
            ${myEvents.map(ev => CampusViews.renderEventCard(ev)).join("")}
          </div>
        </div>
      </div>
    `;
  },

  filterCoordinatorRegs() {
    const q = (document.getElementById("coord-reg-search")?.value || "").toLowerCase().trim();
    const rows = document.querySelectorAll("#coord-regs-table tbody .coord-reg-row");
    rows.forEach(r => {
      const text = r.getAttribute("data-query") || "";
      r.style.display = text.includes(q) ? "" : "none";
    });
  },

  openCreateEventModal() {
    const colleges = CampusData.getColleges();
    const categories = CampusData.getCategories();
    const user = CampusData.getCurrentUser();

    const html = `
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.4rem; font-weight: 800;">Create & Publish New Collegiate Event</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Define event scope, deadlines, team requirements, and AI-assisted descriptions.</p>
      </div>

      <!-- AI Generation Box Assist -->
      <div class="ai-prompt-box">
        <div class="ai-prompt-title">
          <i class="fa-solid fa-wand-magic-sparkles"></i> AI Assistant: Generate Title, Description & Rules
        </div>
        <div style="display: flex; gap: 8px;">
          <input type="text" id="ai-event-topic-input" class="form-control" placeholder="e.g. Inter-college Drone Racing or Malayalam Poetry Slam..." style="font-size: 0.85rem; padding: 6px 12px;">
          <button type="button" class="btn btn-primary btn-sm" onclick="CampusViews.handleAiEventGenerate()">
            <i class="fa-solid fa-bolt"></i> Auto-Generate
          </button>
        </div>
      </div>

      <form id="create-event-form" onsubmit="event.preventDefault(); CampusViews.handleCreateEventSubmit();">
        <div class="form-group">
          <label class="form-label">Event Title *</label>
          <input type="text" id="ev-form-title" class="form-control" placeholder="e.g. Kerala Collegiate AI Summit 2026" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Domain Category *</label>
            <select id="ev-form-category" class="form-control" required>
              ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Organizing Institution *</label>
            <select id="ev-form-college" class="form-control" required>
              ${colleges.map(c => `<option value="${c.id}" ${c.id === user.collegeId ? 'selected' : ''}>${c.name}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Short Tagline Description *</label>
          <input type="text" id="ev-form-shortdesc" class="form-control" placeholder="Catchy one-line synopsis" required>
        </div>

        <div class="form-group">
          <label class="form-label">Full Description & Details *</label>
          <textarea id="ev-form-desc" class="form-control" rows="3" placeholder="Comprehensive event overview..." required></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Event Start Date & Time *</label>
            <input type="datetime-local" id="ev-form-startdate" class="form-control" value="2026-11-20T09:30" required>
          </div>
          <div class="form-group">
            <label class="form-label">Registration Deadline *</label>
            <input type="datetime-local" id="ev-form-regclose" class="form-control" value="2026-11-18T23:59" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Venue Location *</label>
            <input type="text" id="ev-form-venue" class="form-control" placeholder="e.g. Main Auditorium & Quadrangle" required>
          </div>
          <div class="form-group">
            <label class="form-label">Capacity Limit (Participants / Teams) *</label>
            <input type="number" id="ev-form-capacity" class="form-control" min="1" max="1000" value="100" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Event Scope *</label>
            <select id="ev-form-scope" class="form-control" required>
              <option value="inter">Inter-College (All Kerala)</option>
              <option value="intra">Intra-College (Host Campus Only)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Participation Format *</label>
            <select id="ev-form-parttype" class="form-control" required>
              <option value="individual">Individual Participation</option>
              <option value="team">Team Participation</option>
              <option value="both">Both Individual & Team</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Registration Fee</label>
            <input type="text" id="ev-form-fee" class="form-control" value="Free Entry" placeholder="e.g. Free Entry or ₹100 per person">
          </div>
          <div class="form-group">
            <label class="form-label">Contact Person / Phone</label>
            <input type="text" id="ev-form-contact" class="form-control" value="${user.name} (+91 94460 00000)">
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
          <button type="button" class="btn btn-secondary" onclick="CampusComponents.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">
            <i class="fa-solid fa-cloud-arrow-up"></i> Publish Event
          </button>
        </div>
      </form>
    `;

    CampusComponents.openModal(html, "760px");
  },

  handleAiEventGenerate() {
    const topic = (document.getElementById("ai-event-topic-input")?.value || "").trim();
    const categorySelect = document.getElementById("ev-form-category");
    const category = categorySelect?.value || "tech";

    const ai = CampusComponents.generateAiEventContent(topic || "collegiate event", category);

    const titleEl = document.getElementById("ev-form-title");
    const shortEl = document.getElementById("ev-form-shortdesc");
    const descEl = document.getElementById("ev-form-desc");

    if (titleEl && (!titleEl.value || topic)) {
      titleEl.value = topic ? `${topic} 2026` : `Kerala Inter-College ${category.toUpperCase()} Summit 2026`;
    }
    if (shortEl) shortEl.value = ai.short;
    if (descEl) descEl.value = ai.desc + "\n\nKey Rules:\n- " + ai.rules.join("\n- ");

    CampusComponents.showToast("success", "AI generated event title, description, and rules successfully!");
  },

  handleCreateEventSubmit() {
    const title = document.getElementById("ev-form-title").value;
    const category = document.getElementById("ev-form-category").value;
    const collegeSelect = document.getElementById("ev-form-college");
    const collegeId = collegeSelect.value;
    const collegeName = collegeSelect.options[collegeSelect.selectedIndex].text;
    const shortDesc = document.getElementById("ev-form-shortdesc").value;
    const desc = document.getElementById("ev-form-desc").value;
    const startDate = document.getElementById("ev-form-startdate").value;
    const regClose = document.getElementById("ev-form-regclose").value;
    const venue = document.getElementById("ev-form-venue").value;
    const capacity = parseInt(document.getElementById("ev-form-capacity").value, 10);
    const scope = document.getElementById("ev-form-scope").value;
    const partType = document.getElementById("ev-form-parttype").value;
    const fee = document.getElementById("ev-form-fee").value;
    const contact = document.getElementById("ev-form-contact").value;

    const posterMapping = {
      tech: "assets/images/hackathon.jpg",
      arts: "assets/images/arts_fest.jpg",
      sports: "assets/images/football.jpg",
      celebrations: "assets/images/onam_fest.jpg",
      social: "assets/images/onam_fest.jpg"
    };

    const newEvent = {
      title,
      category,
      categoryLabel: category.toUpperCase(),
      collegeId,
      collegeName,
      poster: posterMapping[category] || "assets/images/hackathon.jpg",
      shortDescription: shortDesc,
      description: desc,
      startDate,
      endDate: startDate,
      regOpenDate: new Date().toISOString(),
      regCloseDate: regClose,
      venue,
      maxCapacity: capacity,
      scope,
      participationType: partType,
      fee,
      isFeeApplicable: !fee.toLowerCase().includes("free"),
      rules: [
        "Participants must display authorized collegiate identity passes.",
        "Strict adherence to schedule limits and campus code of conduct.",
        "Organizing committee decision is final."
      ],
      eligibility: "Open to recognized college students.",
      contactPerson: contact,
      contactEmail: "coordinator@campusconnect.edu",
      contactPhone: "+91 94460 11223"
    };

    CampusData.addEvent(newEvent);
    CampusComponents.closeModal();
    CampusComponents.showToast("success", `Event "${title}" published successfully!`);
    CampusRouter.handleHashChange();
  },

  // -------------------------------------------------------------
  // 12. CENTRAL ADMINISTRATOR DASHBOARD
  // -------------------------------------------------------------
  "dashboard-admin"() {
    const colleges = CampusData.getColleges();
    const events = CampusData.getEvents();
    const registrations = CampusData.getRegistrations();
    const auditLogs = CampusData.getAuditLogs();
    const pendingInterApprovals = events.filter(e => e.approvalStatus === "Pending");

    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">Central Directorate Administrator Console</h1>
            <p class="section-subtitle">State-wide oversight of colleges, student registrations, inter-college approvals, and audit trails.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <a href="#admin-colleges" class="btn btn-secondary btn-sm">
              <i class="fa-solid fa-building-columns"></i> Manage Colleges
            </a>
            <a href="#admin-users" class="btn btn-secondary btn-sm">
              <i class="fa-solid fa-users-gear"></i> Role Permissions
            </a>
            <a href="#reports" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-chart-pie"></i> State Analytics
            </a>
          </div>
        </div>

        <!-- Platform KPI Cards -->
        <div class="dash-metrics-grid">
          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(139, 92, 246, 0.2); color: var(--accent-violet);">
              <i class="fa-solid fa-building-columns"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">${colleges.length}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Affiliated Colleges</div>
            </div>
          </div>

          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan);">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">18,420+</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Enrolled Students</div>
            </div>
          </div>

          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">
              <i class="fa-solid fa-calendar-days"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">${events.length}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Published Events</div>
            </div>
          </div>

          <div class="glass-card dash-metric-card">
            <div class="metric-icon-box" style="background: rgba(245, 158, 11, 0.2); color: var(--accent-amber);">
              <i class="fa-solid fa-handshake"></i>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800;">${pendingInterApprovals.length}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Inter-College Approvals</div>
            </div>
          </div>
        </div>

        <!-- Two Interactive Analytical Charts -->
        <div class="admin-grid-layout">
          <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="font-size: 1.1rem; font-weight: 700;">Participation by Domain Category</h3>
              <span class="badge badge-tech"><i class="fa-solid fa-bolt"></i> Live Feed</span>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 16px;">Active student entries across arts, sports, tech, and celebrations.</p>

            <div class="chart-container">
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 85%;">
                  <span class="chart-bar-value">42%</span>
                </div>
                <span class="chart-label">Tech & AI</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 65%;">
                  <span class="chart-bar-value">28%</span>
                </div>
                <span class="chart-label">Arts Fest</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 55%;">
                  <span class="chart-bar-value">18%</span>
                </div>
                <span class="chart-label">Sports</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 40%;">
                  <span class="chart-bar-value">12%</span>
                </div>
                <span class="chart-label">Onam/Fest</span>
              </div>
            </div>
          </div>

          <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="font-size: 1.1rem; font-weight: 700;">Top Participating Kerala Colleges</h3>
              <span class="badge badge-social">Activity Index</span>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 16px;">Verified registration density by host campus.</p>

            <div class="chart-container">
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 90%; background: linear-gradient(180deg, #06b6d4, #3b82f6);">
                  <span class="chart-bar-value">4.2k</span>
                </div>
                <span class="chart-label">KMCT</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 82%; background: linear-gradient(180deg, #8b5cf6, #ec4899);">
                  <span class="chart-bar-value">3.8k</span>
                </div>
                <span class="chart-label">MESCE</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 70%; background: linear-gradient(180deg, #10b981, #06b6d4);">
                  <span class="chart-bar-value">3.1k</span>
                </div>
                <span class="chart-label">Farook</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 60%; background: linear-gradient(180deg, #f59e0b, #ec4899);">
                  <span class="chart-bar-value">2.4k</span>
                </div>
                <span class="chart-label">GASC</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Inter-College Approval Pipeline & Audit Logs -->
        <div class="admin-grid-layout">
          <!-- Left: Pending Inter-College Event Approvals -->
          <div class="glass-card">
            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 16px;">
              <i class="fa-solid fa-stamp" style="color: var(--accent-cyan);"></i> Inter-College Approval Requests
            </h3>

            ${pendingInterApprovals.length === 0 ? `
              <div style="padding: 30px; text-align: center; color: var(--text-muted);">
                <i class="fa-solid fa-circle-check" style="font-size: 2rem; color: var(--accent-emerald); margin-bottom: 8px;"></i>
                <p>All submitted inter-college events are approved and compliant.</p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${pendingInterApprovals.map(ev => `
                  <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
                    <div>
                      <div style="font-weight: 700;">${ev.title}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${ev.collegeName} • ${ev.categoryLabel}</div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                      <button class="btn btn-success btn-sm" onclick="CampusData.setEventApproval('${ev.id}', 'Approved'); CampusRouter.handleHashChange(); CampusComponents.showToast('success', 'Event approved for all-Kerala participation.');">
                        Approve
                      </button>
                      <button class="btn btn-danger btn-sm" onclick="CampusData.setEventApproval('${ev.id}', 'Rejected'); CampusRouter.handleHashChange();">
                        Reject
                      </button>
                    </div>
                  </div>
                `).join("")}
              </div>
            `}
          </div>

          <!-- Right: System Audit Logs -->
          <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 style="font-size: 1.15rem; font-weight: 700;">
                <i class="fa-solid fa-list-check" style="color: var(--accent-violet);"></i> Administrative Audit Trail
              </h3>
              <span style="font-size: 0.72rem; color: var(--text-muted);">Immutable state record</span>
            </div>

            <div class="timeline-list">
              ${auditLogs.slice(0, 5).map(log => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-title">${log.action}: ${log.target}</div>
                    <div class="timeline-meta">${log.actor} • ${log.timestamp} • <span style="color:var(--accent-emerald)">${log.status}</span></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // 13. COLLEGE MANAGEMENT PAGE
  // -------------------------------------------------------------
  "admin-colleges"() {
    const colleges = CampusData.getColleges();

    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">Kerala Affiliated Colleges Directory</h1>
            <p class="section-subtitle">Configure institutions, verify accreditation, assign collegiate event officers, and toggle active status.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="CampusViews.openAddCollegeModal()">
            <i class="fa-solid fa-plus"></i> Onboard New College
          </button>
        </div>

        <div class="glass-card registrations-table-card" style="padding: 0;">
          <table class="custom-table">
            <thead>
              <tr>
                <th>College Code & Name</th>
                <th>Location</th>
                <th>Affiliation / University</th>
                <th>Active Events</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${colleges.map(col => `
                <tr>
                  <td>
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <div class="college-avatar-box" style="width: 38px; height: 38px; font-size: 0.85rem; color: ${col.badgeColor}; border-color: ${col.badgeColor}40;">
                        ${col.code}
                      </div>
                      <div>
                        <div style="font-weight: 700; color: var(--text-primary);">${col.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${col.type}</div>
                      </div>
                    </div>
                  </td>
                  <td>${col.location}</td>
                  <td>${col.affiliation}</td>
                  <td>
                    <span class="badge badge-tech">${col.eventsCount} Events</span>
                  </td>
                  <td>
                    <span class="badge ${col.status === 'Active' ? 'badge-approved' : 'badge-rejected'}">${col.status}</span>
                  </td>
                  <td>
                    <div style="display: flex; gap: 8px;">
                      <button class="btn btn-secondary btn-sm" onclick="CampusData.toggleCollegeStatus('${col.id}'); CampusRouter.handleHashChange();" title="Toggle Active / Inactive">
                        <i class="fa-solid fa-power-off"></i>
                      </button>
                      <button class="btn btn-outline-glow btn-sm" onclick="CampusViews.editCollegeModal('${col.id}')" title="Edit College">
                        <i class="fa-solid fa-pen"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  openAddCollegeModal() {
    CampusComponents.openModal(`
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.4rem; font-weight: 800;">Onboard New Institution</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Add a participating university or autonomous college to the Kerala event management network.</p>
      </div>

      <form onsubmit="event.preventDefault(); CampusViews.handleAddCollegeSubmit();">
        <div class="form-group">
          <label class="form-label">College Name *</label>
          <input type="text" id="add-col-name" class="form-control" placeholder="e.g. Government Engineering College Kozhikode" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Short Code *</label>
            <input type="text" id="add-col-code" class="form-control" placeholder="e.g. GECK" required>
          </div>
          <div class="form-group">
            <label class="form-label">Location (Town / District) *</label>
            <input type="text" id="add-col-location" class="form-control" placeholder="Westhill, Kozhikode, Kerala" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Affiliated University</label>
            <input type="text" id="add-col-affil" class="form-control" value="APJ Abdul Kalam Technological University">
          </div>
          <div class="form-group">
            <label class="form-label">Institution Type</label>
            <select id="add-col-type" class="form-control">
              <option value="Engineering & Technology">Engineering & Technology</option>
              <option value="Arts & Science (Autonomous)">Arts & Science (Autonomous)</option>
              <option value="Medical & Allied">Medical & Allied</option>
              <option value="Management & Law">Management & Law</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Official Contact Email *</label>
            <input type="email" id="add-col-email" class="form-control" placeholder="events@institution.edu.in" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone *</label>
            <input type="tel" id="add-col-phone" class="form-control" placeholder="+91 495 0000000" required>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
          <button type="button" class="btn btn-secondary" onclick="CampusComponents.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save College Record</button>
        </div>
      </form>
    `, "620px");
  },

  handleAddCollegeSubmit() {
    const name = document.getElementById("add-col-name").value;
    const code = document.getElementById("add-col-code").value;
    const location = document.getElementById("add-col-location").value;
    const affiliation = document.getElementById("add-col-affil").value;
    const type = document.getElementById("add-col-type").value;
    const contactEmail = document.getElementById("add-col-email").value;
    const contactPhone = document.getElementById("add-col-phone").value;

    CampusData.addCollege({
      name,
      code,
      location,
      affiliation,
      type,
      contactEmail,
      contactPhone,
      status: "Active",
      studentsCount: 2000,
      eventsCount: 0,
      badgeColor: "#8b5cf6"
    });

    CampusComponents.closeModal();
    CampusComponents.showToast("success", `College "${name}" onboarded successfully!`);
    CampusRouter.handleHashChange();
  },

  editCollegeModal(colId) {
    const col = CampusData.getColleges().find(c => c.id === colId);
    if (!col) return;

    CampusComponents.openModal(`
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.4rem; font-weight: 800;">Edit Institution: ${col.name}</h3>
      </div>
      <form onsubmit="event.preventDefault(); CampusViews.handleEditCollegeSubmit('${col.id}');">
        <div class="form-group">
          <label class="form-label">College Name</label>
          <input type="text" id="edit-col-name" class="form-control" value="${col.name}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Location</label>
          <input type="text" id="edit-col-location" class="form-control" value="${col.location}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Official Contact Email</label>
          <input type="email" id="edit-col-email" class="form-control" value="${col.contactEmail}" required>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
          <button type="button" class="btn btn-secondary" onclick="CampusComponents.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Update Details</button>
        </div>
      </form>
    `, "540px");
  },

  handleEditCollegeSubmit(colId) {
    const name = document.getElementById("edit-col-name").value;
    const location = document.getElementById("edit-col-location").value;
    const contactEmail = document.getElementById("edit-col-email").value;

    CampusData.updateCollege({ id: colId, name, location, contactEmail });
    CampusComponents.closeModal();
    CampusComponents.showToast("success", "College details updated successfully!");
    CampusRouter.handleHashChange();
  },

  // -------------------------------------------------------------
  // 14. USER AND ROLE MANAGEMENT PAGE
  // -------------------------------------------------------------
  "admin-users"() {
    const users = [
      { name: "Ananya Nair", email: "ananya.nair@kmct.edu.in", college: "KMCT College of Engineering", role: "Student", id: "KMCT-CS-2023-042", status: "Active" },
      { name: "Prof. Rajesh Varma", email: "rajesh.varma@mesce.ac.in", college: "MES College of Engineering", role: "Coordinator", id: "MESCE-FAC-089", status: "Active" },
      { name: "Dr. K. Radhakrishnan", email: "admin@campusconnect.gov.in", college: "Higher Education Directorate", role: "Administrator", id: "KED-SUP-001", status: "Active" },
      { name: "Dr. Aysha Rahman", email: "arts@farookcollege.ac.in", college: "Farook College", role: "Coordinator", id: "FC-FAC-014", status: "Active" },
      { name: "Prof. Sreeja V. K.", email: "onam@gasckkd.ac.in", college: "Government Arts & Science College", role: "Coordinator", id: "GASC-FAC-055", status: "Active" }
    ];

    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">User Roles & Access Control</h1>
            <p class="section-subtitle">Manage RBAC (Role-Based Access Control) for students, coordinators, and state supervisors.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="CampusComponents.showToast('info', 'Invite token generated for new staff coordinator.');">
            <i class="fa-solid fa-user-plus"></i> Assign New Coordinator
          </button>
        </div>

        <div class="glass-card registrations-table-card" style="padding: 0;">
          <table class="custom-table">
            <thead>
              <tr>
                <th>User & Identifier</th>
                <th>Affiliated College</th>
                <th>Assigned Role</th>
                <th>Status</th>
                <th>Permission Actions</th>
              </tr>
            </thead>
            <tbody>
              ${users.map(u => `
                <tr>
                  <td>
                    <div style="font-weight: 700; color: var(--text-primary);">${u.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${u.email} • ID: ${u.id}</div>
                  </td>
                  <td>${u.college}</td>
                  <td>
                    <span class="badge ${u.role === 'Administrator' ? 'badge-tech' : u.role === 'Coordinator' ? 'badge-arts' : 'badge-social'}">
                      ${u.role}
                    </span>
                  </td>
                  <td>
                    <span class="badge badge-approved">${u.status}</span>
                  </td>
                  <td>
                    <select class="form-control" style="width: 140px; padding: 4px 8px; font-size: 0.8rem;" onchange="CampusComponents.showToast('success', 'Role permission updated for ' + '${u.name}');">
                      <option value="student" ${u.role === 'Student' ? 'selected' : ''}>Student</option>
                      <option value="coordinator" ${u.role === 'Coordinator' ? 'selected' : ''}>Coordinator</option>
                      <option value="admin" ${u.role === 'Administrator' ? 'selected' : ''}>Administrator</option>
                    </select>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // 15. REPORTS AND ANALYTICS PAGE
  // -------------------------------------------------------------
  reports() {
    return `
      <div>
        <div class="section-header">
          <div>
            <h1 class="section-title">Platform Reports & State Analytics</h1>
            <p class="section-subtitle">Real-time attendance metrics, inter-college cross-participation index, and exportable logs.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="CampusViews.downloadAnalyticsReport()">
            <i class="fa-solid fa-file-arrow-down"></i> Export Comprehensive CSV Report
          </button>
        </div>

        <div class="admin-grid-layout" style="margin-bottom: 24px;">
          <div class="glass-card">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Monthly Registration Velocity</h3>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px;">Verified participant signups per month across universities.</p>
            <div class="chart-container">
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 45%;"><span class="chart-bar-value">1.8k</span></div>
                <span class="chart-label">Aug</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 65%;"><span class="chart-bar-value">2.9k</span></div>
                <span class="chart-label">Sep</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 92%;"><span class="chart-bar-value">4.5k</span></div>
                <span class="chart-label">Oct</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 80%;"><span class="chart-bar-value">3.8k</span></div>
                <span class="chart-label">Nov (Est)</span>
              </div>
            </div>
          </div>

          <div class="glass-card">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Inter vs Intra-College Distribution</h3>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px;">Cross-campus collaborative teams vs local department events.</p>
            <div class="chart-container">
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 75%; background: var(--accent-cyan);"><span class="chart-bar-value">68%</span></div>
                <span class="chart-label">Inter-College</span>
              </div>
              <div class="chart-bar-group">
                <div class="chart-bar" style="height: 35%; background: var(--accent-pink);"><span class="chart-bar-value">32%</span></div>
                <span class="chart-label">Intra-College</span>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card">
          <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 16px;">Key Performance Indicators (State Higher Education Review)</h3>
          <div class="form-row">
            <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">CONVERSION RATE</div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-emerald);">88.4%</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">From registration to confirmed physical attendance</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">AVERAGE TEAM SIZE</div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-cyan);">4.2 Members</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">For hackathons & robotics leagues</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">DIGITAL PASS VERIFICATION</div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-violet);">99.8%</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">Fraud-free QR scan check-in success</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  downloadAnalyticsReport() {
    const csv = `State Higher Education Event Analytics Summary
Date Generated,${new Date().toISOString()}
Total Registered Students,18420
Affiliated Kerala Colleges,42
Total Active Events,128
Participation Rate - Tech & AI,42%
Participation Rate - Arts & Culture,28%
Participation Rate - Sports,18%
Participation Rate - Celebrations,12%
Inter-College Cross Participation,68%
Average Attendance Verification,88.4%
`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `State_Analytics_Report_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    CampusComponents.showToast("success", "Analytics CSV report downloaded successfully!");
  },

  // -------------------------------------------------------------
  // 16. CONTACT AND HELP PAGE
  // -------------------------------------------------------------
  contact() {
    return `
      <div style="max-width: 980px; margin: 0 auto;">
        <div class="section-header" style="text-align: center; justify-content: center;">
          <div>
            <h1 class="section-title">Support & Help Desk</h1>
            <p class="section-subtitle">Frequently asked questions, grievance resolutions, and collegiate nodal officer helplines.</p>
          </div>
        </div>

        <div class="dashboard-layout-grid" style="margin-bottom: 40px;">
          <!-- FAQ Accordion -->
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 16px;">Frequently Asked Questions</h3>
            <div class="faq-list">
              <div class="faq-item active">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                  <span>How do inter-college team registrations work?</span>
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                  Students from any affiliated Kerala college can form a joint team for events marked as INTER-COLLEGE (such as the InnovateKerala Hackathon). The Team Captain adds each member's Student ID and college name. All teammates will automatically receive authorized entry passes upon captain's confirmation.
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                  <span>Where do I find my digital entry pass and QR code?</span>
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                  Your official pass is generated immediately upon registration and can be viewed anytime under the <strong>My Passes</strong> tab. You can print the pass or present the dynamic QR code directly from your smartphone at the event desk.
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                  <span>Can I cancel or modify my registration?</span>
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                  Yes, registrations can be cancelled up until the event's registration closing deadline directly from the <strong>My Registrations</strong> table. Your slot will be automatically made available to waitlisted participants.
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                  <span>How are certificates and activity points awarded?</span>
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                  Once your attendance is scanned and recorded by the event coordinator, verified participation certificates and KTU/Calicut University activity points will be synchronized to your student profile within 48 hours of event completion.
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Ticket Form -->
          <div class="glass-card">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 14px;">Submit Support Ticket</h3>
            <form onsubmit="event.preventDefault(); CampusComponents.showToast('success', 'Support ticket logged! Our nodal team will respond via email within 4 hours.'); this.reset();">
              <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-control" value="${CampusData.getCurrentUser().name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">College Email</label>
                <input type="email" class="form-control" value="${CampusData.getCurrentUser().email}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-control">
                  <option>Registration / Ticket Inquiry</option>
                  <option>Team Formation Dispute</option>
                  <option>Attendance / Certificate Verification</option>
                  <option>College Coordinator Assistance</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Message Details</label>
                <textarea class="form-control" rows="3" placeholder="Explain your inquiry..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                <i class="fa-solid fa-paper-plane"></i> Submit Ticket
              </button>
            </form>
          </div>
        </div>

        <!-- Emergency Helplines -->
        <div class="glass-card" style="text-align: center; padding: 24px;">
          <h4 style="font-size: 1.1rem; margin-bottom: 6px;">Kerala Higher Education Event Coordination Cell</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">Direct helpline: <strong>+91 (471) 233-8800</strong> • Email: <strong>support@campusconnect.kerala.gov.in</strong></p>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // 17. PROFILE AND ACCOUNT SETTINGS PAGE
  // -------------------------------------------------------------
  profile() {
    const user = CampusData.getCurrentUser();
    const role = CampusData.getCurrentRole();

    return `
      <div style="max-width: 820px; margin: 0 auto;">
        <div class="section-header">
          <div>
            <h1 class="section-title">Profile & Account Settings</h1>
            <p class="section-subtitle">Manage personal information, collegiate credentials, reminder frequencies, and interface preferences.</p>
          </div>
        </div>

        <div class="glass-card" style="padding: 32px; margin-bottom: 28px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 28px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 24px;">
            <img src="${user.avatar}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid var(--accent-violet);" alt="Profile">
            <div>
              <h2 style="font-size: 1.4rem; font-weight: 800;">${user.name}</h2>
              <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.88rem;">
                <i class="fa-solid fa-building-columns"></i> ${user.collegeName}
              </p>
              <div style="display: flex; gap: 8px; margin-top: 6px;">
                <span class="badge badge-tech">${role.toUpperCase()}</span>
                <span class="badge badge-approved">ID: ${user.studentId || user.coordinatorId || user.adminId || 'VERIFIED'}</span>
              </div>
            </div>
          </div>

          <form onsubmit="event.preventDefault(); CampusViews.handleProfileSave();">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" id="prof-name" class="form-control" value="${user.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">College Email</label>
                <input type="email" id="prof-email" class="form-control" value="${user.email}" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Mobile Number</label>
                <input type="tel" id="prof-phone" class="form-control" value="${user.phone || '+91 98471 45098'}">
              </div>
              <div class="form-group">
                <label class="form-label">Department</label>
                <input type="text" id="prof-dept" class="form-control" value="${user.department || 'Computer Science & Engineering'}">
              </div>
            </div>

            <!-- Reminder Notification Settings (Section 11 Requirement) -->
            <div style="margin: 28px 0; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">
                <i class="fa-solid fa-bell" style="color: var(--accent-cyan);"></i> Scheduled Event Reminders
              </h3>
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 16px;">
                Select how far in advance you wish to receive automated deadline and start time notifications:
              </p>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); cursor: pointer;">
                  <input type="checkbox" checked style="accent-color: var(--accent-violet);">
                  <span>7 Days Before Event</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); cursor: pointer;">
                  <input type="checkbox" checked style="accent-color: var(--accent-violet);">
                  <span>3 Days Before Event</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); cursor: pointer;">
                  <input type="checkbox" checked style="accent-color: var(--accent-violet);">
                  <span>1 Day Before Event</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); cursor: pointer;">
                  <input type="checkbox" checked style="accent-color: var(--accent-violet);">
                  <span>1 Hour Urgent Alert</span>
                </label>
              </div>
            </div>

            <!-- Appearance Theme Preference -->
            <div style="margin: 24px 0; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">
                <i class="fa-solid fa-palette" style="color: var(--accent-violet);"></i> Theme & Visual Accessibility
              </h3>
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 14px;">Choose your preferred display aesthetic.</p>
              <div style="display: flex; gap: 12px;">
                <button type="button" class="btn btn-secondary btn-sm" onclick="document.documentElement.removeAttribute('data-theme'); CampusComponents.showToast('info', 'Switched to Futuristic Dark Navy Theme');">
                  <i class="fa-solid fa-moon"></i> Futuristic Dark (Recommended)
                </button>
                <button type="button" class="btn btn-secondary btn-sm" onclick="document.documentElement.setAttribute('data-theme', 'light'); CampusComponents.showToast('info', 'Switched to Clean Light Theme');">
                  <i class="fa-solid fa-sun"></i> Clean Light Mode
                </button>
              </div>
            </div>

            <!-- Change Account Password Section -->
            <div style="margin: 28px 0; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">
                <i class="fa-solid fa-lock" style="color: var(--accent-cyan);"></i> Security & Change Password
              </h3>
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 16px;">
                Update the authentication password for this <strong>${role.toUpperCase()}</strong> account:
              </p>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Current Password</label>
                  <input type="password" id="prof-curr-pwd" class="form-control" placeholder="••••••••">
                </div>
                <div class="form-group">
                  <label class="form-label">New Password</label>
                  <input type="password" id="prof-new-pwd" class="form-control" placeholder="Min 6 characters">
                </div>
                <div class="form-group">
                  <label class="form-label">Confirm New Password</label>
                  <input type="password" id="prof-confirm-pwd" class="form-control" placeholder="Re-enter new password">
                </div>
              </div>

              <div style="display: flex; justify-content: flex-start; margin-top: 4px;">
                <button type="button" class="btn btn-outline-glow btn-sm" onclick="CampusViews.handlePasswordChange('${role}')">
                  <i class="fa-solid fa-key"></i> Update ${role.toUpperCase()} Password
                </button>
              </div>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
              <button type="submit" class="btn btn-primary">
                <i class="fa-solid fa-floppy-disk"></i> Save Profile & Preferences
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  handlePasswordChange(role) {
    const curr = document.getElementById("prof-curr-pwd")?.value;
    const next = document.getElementById("prof-new-pwd")?.value;
    const confirm = document.getElementById("prof-confirm-pwd")?.value;

    if (!curr) {
      CampusComponents.showToast("error", "Please enter your current password.", "Verification Required");
      return;
    }
    if (!CampusData.verifyPassword(role, curr)) {
      CampusComponents.showToast("error", `Current password is incorrect for ${role.toUpperCase()} account.`, "Authentication Failed");
      return;
    }
    if (!next || next.length < 4) {
      CampusComponents.showToast("error", "New password must be at least 4 characters long.", "Invalid Password");
      return;
    }
    if (next !== confirm) {
      CampusComponents.showToast("error", "New password and confirmation do not match.", "Password Mismatch");
      return;
    }

    CampusData.updatePassword(role, next);
    CampusComponents.showToast("success", `Password for ${role.toUpperCase()} successfully changed and saved!`, "Password Updated");
    if (document.getElementById("prof-curr-pwd")) document.getElementById("prof-curr-pwd").value = "";
    if (document.getElementById("prof-new-pwd")) document.getElementById("prof-new-pwd").value = "";
    if (document.getElementById("prof-confirm-pwd")) document.getElementById("prof-confirm-pwd").value = "";
  },

  handleProfileSave() {
    const user = CampusData.getCurrentUser();
    user.name = document.getElementById("prof-name").value;
    user.email = document.getElementById("prof-email").value;
    user.phone = document.getElementById("prof-phone").value;
    user.department = document.getElementById("prof-dept").value;

    CampusData.saveCurrentUser(user);
    CampusRouter.updateNavbarRole();
    CampusComponents.showToast("success", "Profile preferences saved successfully!");
  }
};
