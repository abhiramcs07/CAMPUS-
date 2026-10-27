# CampusConnect AI — Smart College Event Management System

> **Next-Generation Centralized Collegiate Event Management Platform for Kerala**

---

## 🌟 Project Overview

**CampusConnect AI** is a state-of-the-art multi-college event platform built to connect students, event coordinators, and higher education administrators across Kerala.

Supported participating colleges include:
- **KMCT College of Engineering** (Kozhikode)
- **MES College of Engineering** (Kuttippuram)
- **MES College** (Mampad)
- **Farook College Autonomous** (Feroke, Calicut)
- **Government Arts and Science College** (Meenchanda, Kozhikode)
- **TKM College of Engineering** (Kollam)
- *Configurable affiliated institutions across Kerala*

---

## 🚀 Live Local Access

The local application is currently running at:
👉 **[http://localhost:8080/](http://localhost:8080/)**

To launch or re-host anytime:
```bash
python -m http.server 8080
```
Open **`http://localhost:8080/`** in any web browser.

---

## 💎 Key Features Implemented

### 1. Modern Next-Gen UI/UX Aesthetics
- **Color Palette**: Dark navy (`#070913`, `#0d1224`), vibrant violet (`#8b5cf6`), electric blue (`#3b82f6`), and glowing cyan (`#06b6d4`), with optional **Clean Light Mode** toggle.
- **Atmospheric Background**: Interactive HTML5 Canvas particle system with floating neural nodes that react dynamically to cursor movements and respect `prefers-reduced-motion`.
- **Glassmorphism Design**: Frosted glass cards (`backdrop-filter: blur(16px)`), gradient borders, glowing badges, and micro-interactions.

### 2. Comprehensive 17 Pages & Views Supported
1. **Landing Page**: Hero with *"One Campus. Every Event. Infinite Possibilities."*, Natural Language AI event search bar, live platform stats, countdown cards, 5 domain categories, college showcase, and testimonials.
2. **Login Page**: Role selection (Student / Coordinator / Admin), email or Student ID, show/hide password toggle, remember-me checkbox, forgot password modal, and **1-Click Instant Demo Credentials Fillers**.
3. **Student Registration Page**: Full name, Student ID, Kerala college selector, department, course & academic year, email, WhatsApp mobile number, and validation.
4. **Student Dashboard**: Welcome greeting, profile completeness meter, quick stats, spotlight active countdown for next registered event, and AI interest recommendations.
5. **All Events Directory**: Live search, Natural Language AI parser (*e.g., "Find free hackathons in Kozhikode"*), category chips, institution filter, format filter (Individual vs Team), scope filter (Inter vs Intra), and Grid/List view toggle.
6. **Event Details Page**: High-resolution event poster, verified college badge, live countdown timer to registration closing, capacity progress meter, entry fee, detailed rules list, and coordinator contacts.
7. **Individual Registration Page**: Autofilled details from logged-in profile, eligibility acceptance, duplicate registration prevention, and instant entry pass generation.
8. **Team Registration Page**: Team name, Team Captain, dynamic member row builder (Name, College, Student ID), inter-college team validation, and squad pass issuance.
9. **My Registrations Page**: Filter by status (*All, Approved, Pending, Waitlisted, Cancelled, Completed*), cancel registration, and view digital entry pass.
10. **Official Digital Pass & SVG QR Receipt**: Instant modal popup with high-contrast SVG QR code, unique Registration ID (`REG-2026-KMCT-XXXX`), date/time/venue stamp, and Print/Download confirmation receipt.
11. **Notifications Center**: Real-time notification drawer and alert center with unread badges, filter tabs, mark all read, and simulated 1-Hour Urgent Reminder triggers.
12. **Teacher & Coordinator Dashboard**: Assigned events list, attendance check-in toggle (*Present / Absent*), registration review queue (*Approve / Reject / Waitlist*), and **real CSV participant export**.
13. **AI Event Creation Wizard**: AI-assisted generator that automatically drafts descriptions, rules, and suggested categories for new collegiate events.
14. **Central Administrator Console**: State-wide KPI metrics, interactive SVG/Canvas charts (*Participation by Category, Top Participating Colleges*), and inter-college event approval queue.
15. **College Management Page**: Directory of Kerala colleges with active event counts, student numbers, onboarding modal, and Active/Inactive toggle.
16. **User & Role Management Page**: Directory of students, faculty, and state admins with dynamic RBAC role reassignment.
17. **Reports & Analytics Page**: Monthly registration velocity graphs, inter vs intra-college distribution charts, and exportable state analytics CSV report.
18. **Contact & Help Desk**: Interactive FAQ accordion, support ticket submission form, and collegiate coordination cell emergency helplines.
19. **Profile & Account Settings**: Profile updates, automated reminder preferences (*7 days, 3 days, 1 day, 1 hour before event*), and theme selection.

---

## 🛠️ Testing & Live Demo Switcher

A quick **LIVE DEMO SWITCHER** bar is pinned to the top of every screen to let evaluators switch seamlessly between:
- **Student Persona**: *Ananya Nair* (KMCT College, Computer Science, 3rd Year)
- **Coordinator Persona**: *Prof. Rajesh Varma* (MES College of Engineering, Event Head)
- **State Admin Persona**: *Dr. K. Radhakrishnan* (Kerala Higher Education Directorate)

### 🔐 Role Authorization Passwords:

| Role | Name | Email | Password |
|---|---|---|---|
| **Student** | Ananya Nair | `ananya.nair@kmct.edu.in` | `student123` |
| **Coordinator** | Prof. Rajesh Varma | `rajesh.varma@mesce.ac.in` | `coordinator123` *(also accepts `coord@2026`)* |
| **Administrator** | Dr. K. Radhakrishnan | `admin@campusconnect.gov.in` | `admin123` *(also accepts `admin@2026`)* |

> Passwords can be changed and updated dynamically anytime via the **Profile & Account Settings (`#profile`)** page.

