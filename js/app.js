/**
 * CampusConnect AI — Main Application Orchestrator
 * Connects routes, global event listeners, role switching, notification drawer, and real-time timers.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Register all 17 routes with CampusRouter
  CampusRouter.register("landing", () => CampusViews.landing());
  CampusRouter.register("login", () => CampusViews.login());
  CampusRouter.register("register", () => CampusViews.register());
  CampusRouter.register("dashboard-student", () => CampusViews["dashboard-student"]());
  CampusRouter.register("events", (param) => CampusViews.events(param));
  CampusRouter.register("event-details", (param) => CampusViews["event-details"](param));
  CampusRouter.register("register-individual", (param) => CampusViews["register-individual"](param));
  CampusRouter.register("register-team", (param) => CampusViews["register-team"](param));
  CampusRouter.register("my-registrations", () => CampusViews["my-registrations"]());
  CampusRouter.register("notifications", () => CampusViews.notifications());
  CampusRouter.register("dashboard-teacher", () => CampusViews["dashboard-teacher"]());
  CampusRouter.register("dashboard-admin", () => CampusViews["dashboard-admin"]());
  CampusRouter.register("admin-colleges", () => CampusViews["admin-colleges"]());
  CampusRouter.register("admin-users", () => CampusViews["admin-users"]());
  CampusRouter.register("reports", () => CampusViews.reports());
  CampusRouter.register("contact", () => CampusViews.contact());
  CampusRouter.register("profile", () => CampusViews.profile());

  // Post-render hook for events page to run initial filter/search
  CampusRouter.registerAfterRender("events", () => {
    CampusViews.filterEvents();
  });

  // 2. Setup Quick Role Switcher Buttons in Top Bar with Security Verification
  document.querySelectorAll(".btn-role-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetRole = btn.getAttribute("data-role");
      const currentRole = CampusData.getCurrentRole();

      if (targetRole === currentRole) return;

      const performSwitch = () => {
        CampusData.setCurrentRole(targetRole);
        CampusRouter.updateNavbarRole();
        CampusRouter.updateActiveNavLinks(CampusRouter.currentRoute);
        
        const user = CampusData.getCurrentUser();
        CampusComponents.showToast("info", `Active session: ${user.name} (${targetRole.toUpperCase()})`);

        // Intelligently redirect to appropriate role dashboard
        if (targetRole === "student" && (CampusRouter.currentRoute.startsWith("dashboard") || CampusRouter.currentRoute.startsWith("admin"))) {
          CampusRouter.navigate("dashboard-student");
        } else if (targetRole === "coordinator" && (CampusRouter.currentRoute.startsWith("dashboard") || CampusRouter.currentRoute.startsWith("admin"))) {
          CampusRouter.navigate("dashboard-teacher");
        } else if (targetRole === "admin" && (CampusRouter.currentRoute.startsWith("dashboard") || CampusRouter.currentRoute.startsWith("admin"))) {
          CampusRouter.navigate("dashboard-admin");
        } else {
          CampusRouter.handleHashChange();
        }
      };

      // Require password verification for privileged roles (Coordinator & Admin)
      if (targetRole === "coordinator" || targetRole === "admin") {
        CampusComponents.promptRolePassword(targetRole, performSwitch);
      } else {
        performSwitch();
      }
    });
  });

  // 3. Theme Toggle Button
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        CampusComponents.showToast("info", "Dark futuristic theme enabled");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        CampusComponents.showToast("info", "Clean light theme enabled");
      }
    });
  }

  // 4. Notification Bell Dropdown Toggle
  const notifBell = document.getElementById("notif-bell-btn");
  const notifDropdown = document.getElementById("notif-dropdown");
  if (notifBell && notifDropdown) {
    notifBell.addEventListener("click", (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle("show");
      updateNotificationDropdownContent();
    });

    document.addEventListener("click", (e) => {
      if (!notifDropdown.contains(e.target) && e.target !== notifBell) {
        notifDropdown.classList.remove("show");
      }
    });
  }

  function updateNotificationDropdownContent() {
    const listContainer = document.getElementById("notif-list-compact");
    const countBadge = document.getElementById("notif-count-badge");
    const notifs = CampusData.getNotifications();
    const unread = notifs.filter(n => !n.read);

    if (countBadge) {
      countBadge.textContent = unread.length;
      countBadge.style.display = unread.length > 0 ? "flex" : "none";
    }

    if (listContainer) {
      if (notifs.length === 0) {
        listContainer.innerHTML = '<div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.8rem;">No notifications yet</div>';
      } else {
        listContainer.innerHTML = notifs.slice(0, 4).map(n => `
          <a href="${n.link || '#notifications'}" class="notif-item-compact ${!n.read ? 'unread' : ''}" onclick="CampusData.markNotificationAsRead('${n.id}'); document.getElementById('notif-dropdown').classList.remove('show');">
            <div class="notif-item-title">${n.title}</div>
            <div class="notif-item-desc">${n.message}</div>
            <div class="notif-item-time">${n.timestamp}</div>
          </a>
        `).join("");
      }
    }
  }

  // Mark all read in dropdown
  const markAllBtn = document.getElementById("notif-mark-all-btn");
  if (markAllBtn) {
    markAllBtn.addEventListener("click", () => {
      CampusData.markAllNotificationsRead();
      updateNotificationDropdownContent();
      CampusComponents.showToast("info", "All notifications marked as read.");
    });
  }

  // 5. Mobile Hamburger Drawer Toggle
  const mobileToggle = document.getElementById("mobile-nav-toggle");
  const navLinksContainer = document.getElementById("dynamic-nav-links");
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener("click", () => {
      const isVisible = navLinksContainer.style.display === "flex";
      navLinksContainer.style.display = isVisible ? "none" : "flex";
      navLinksContainer.style.flexDirection = "column";
      navLinksContainer.style.position = "absolute";
      navLinksContainer.style.top = "72px";
      navLinksContainer.style.left = "0";
      navLinksContainer.style.right = "0";
      navLinksContainer.style.background = "var(--bg-glass-modal)";
      navLinksContainer.style.padding = "20px";
      navLinksContainer.style.backdropFilter = "blur(20px)";
    });
  }

  // 6. Live Timer Heartbeat for real-time countdown updates
  setInterval(() => {
    // Only update if countdown pills or boxes are present on screen
    const countdownPills = document.querySelectorAll(".countdown-pill");
    if (countdownPills.length > 0) {
      // Periodic subtle refresh of countdown text
      const events = CampusData.getEvents();
      countdownPills.forEach((pill, idx) => {
        const ev = events[idx];
        if (ev) {
          const cd = CampusComponents.formatCountdown(ev.regCloseDate);
          pill.innerHTML = `<i class="fa-regular fa-clock"></i> ${cd.text}`;
        }
      });
    }
  }, 10000);

  // 7. Initial Bootstrap
  CampusRouter.updateNavbarRole();
  updateNotificationDropdownContent();
  CampusRouter.init();
});
