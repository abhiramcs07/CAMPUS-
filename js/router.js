/**
 * CampusConnect AI — Client-Side Router & View Controller
 * Manages hash navigation across all 17 distinct application pages.
 */

window.CampusRouter = {
  routes: {},
  currentRoute: "landing",
  currentParam: null,

  init() {
    window.addEventListener("hashchange", () => this.handleHashChange());
    // Initial load
    this.handleHashChange();
  },

  register(routeName, renderFn) {
    this.routes[routeName] = renderFn;
  },

  navigate(hashPath) {
    window.location.hash = hashPath;
  },

  handleHashChange() {
    const rawHash = window.location.hash.slice(1) || "landing";
    const parts = rawHash.split("/");
    const routeName = parts[0] || "landing";
    const param = parts[1] || null;

    this.currentRoute = routeName;
    this.currentParam = param;

    // Role-based route guard & convenience checks
    const currentRole = CampusData.getCurrentRole();
    if (routeName.startsWith("dashboard-teacher") && currentRole === "student") {
      CampusComponents.showToast("info", "Switched view to Teacher/Coordinator for preview.");
      CampusData.setCurrentRole("coordinator");
      this.updateNavbarRole();
    } else if (routeName.startsWith("dashboard-admin") && currentRole === "student") {
      CampusComponents.showToast("info", "Switched view to Administrator for preview.");
      CampusData.setCurrentRole("admin");
      this.updateNavbarRole();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update active nav links
    this.updateActiveNavLinks(routeName);

    // Render corresponding view
    const mainContainer = document.getElementById("main-view-container");
    if (!mainContainer) return;

    if (this.routes[routeName]) {
      mainContainer.innerHTML = `<div class="animate-fade-in">${this.routes[routeName](param)}</div>`;
      if (this.afterRenderHooks[routeName]) {
        this.afterRenderHooks[routeName](param);
      }
    } else {
      mainContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <h2 style="font-size: 2.2rem; margin-bottom: 12px;">404 — Page Not Found</h2>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">The requested campus portal page does not exist or has moved.</p>
          <a href="#landing" class="btn btn-primary"><i class="fa-solid fa-house"></i> Return to Homepage</a>
        </div>
      `;
    }
  },

  afterRenderHooks: {},

  registerAfterRender(routeName, hookFn) {
    this.afterRenderHooks[routeName] = hookFn;
  },

  updateActiveNavLinks(activeRoute) {
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href") || "";
      const route = href.replace("#", "").split("/")[0];
      if (route === activeRoute) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update quick role switcher button styles
    const role = CampusData.getCurrentRole();
    document.querySelectorAll(".btn-role-tab").forEach(btn => {
      if (btn.getAttribute("data-role") === role) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  },

  updateNavbarRole() {
    const role = CampusData.getCurrentRole();
    const user = CampusData.getCurrentUser();

    // Update role display elements
    const avatarEl = document.getElementById("nav-user-avatar");
    const nameEl = document.getElementById("nav-user-name");
    const roleEl = document.getElementById("nav-user-role");

    if (avatarEl) avatarEl.src = user.avatar;
    if (nameEl) nameEl.textContent = user.name;
    if (roleEl) roleEl.textContent = role.toUpperCase();

    // Re-render nav items depending on role
    const dynamicNavLinks = document.getElementById("dynamic-nav-links");
    if (dynamicNavLinks) {
      if (role === "student") {
        dynamicNavLinks.innerHTML = `
          <li><a href="#events" class="nav-link"><i class="fa-solid fa-compass"></i> Explore Events</a></li>
          <li><a href="#register" class="nav-link"><i class="fa-solid fa-user-plus"></i> Student Registration</a></li>
          <li><a href="#dashboard-student" class="nav-link"><i class="fa-solid fa-chart-line"></i> Dashboard</a></li>
          <li><a href="#my-registrations" class="nav-link"><i class="fa-solid fa-ticket"></i> My Passes</a></li>
          <li><a href="#contact" class="nav-link"><i class="fa-solid fa-headset"></i> Help</a></li>
        `;
      } else if (role === "coordinator") {
        dynamicNavLinks.innerHTML = `
          <li><a href="#dashboard-teacher" class="nav-link"><i class="fa-solid fa-chalkboard-user"></i> Coordinator Hub</a></li>
          <li><a href="#events" class="nav-link"><i class="fa-solid fa-compass"></i> All Events</a></li>
          <li><a href="#reports" class="nav-link"><i class="fa-solid fa-chart-pie"></i> Analytics</a></li>
          <li><a href="#contact" class="nav-link"><i class="fa-solid fa-headset"></i> Help</a></li>
        `;
      } else if (role === "admin") {
        dynamicNavLinks.innerHTML = `
          <li><a href="#dashboard-admin" class="nav-link"><i class="fa-solid fa-shield-halved"></i> Central Admin</a></li>
          <li><a href="#admin-colleges" class="nav-link"><i class="fa-solid fa-building-columns"></i> Colleges</a></li>
          <li><a href="#admin-users" class="nav-link"><i class="fa-solid fa-users-gear"></i> Users & Roles</a></li>
          <li><a href="#reports" class="nav-link"><i class="fa-solid fa-chart-pie"></i> Reports</a></li>
        `;
      }
    }
  }
};
