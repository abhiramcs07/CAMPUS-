/**
 * CampusConnect AI — Seed Database & LocalStorage Persistence Layer
 * Provides realistic demo data for colleges across Kerala, events, registrations, users, and audit logs.
 */

const SEED_COLLEGES = [
  {
    id: "col-kmct",
    name: "KMCT College of Engineering",
    code: "KMCT",
    location: "Kallanthode, Kozhikode, Kerala",
    type: "Engineering & Technology",
    affiliation: "APJ Abdul Kalam Technological University",
    contactEmail: "events@kmct.edu.in",
    contactPhone: "+91 495 2288500",
    status: "Active",
    studentsCount: 3450,
    eventsCount: 18,
    badgeColor: "#3b82f6"
  },
  {
    id: "col-mesce",
    name: "MES College of Engineering",
    code: "MESCE",
    location: "Kuttippuram, Malappuram, Kerala",
    type: "Engineering & Applied Sciences",
    affiliation: "APJ Abdul Kalam Technological University",
    contactEmail: "coordinator@mesce.ac.in",
    contactPhone: "+91 494 2698081",
    status: "Active",
    studentsCount: 4200,
    eventsCount: 24,
    badgeColor: "#8b5cf6"
  },
  {
    id: "col-mes",
    name: "MES College",
    code: "MES-M",
    location: "Mampad, Malappuram, Kerala",
    type: "Arts & Science (Autonomous)",
    affiliation: "University of Calicut",
    contactEmail: "cultural@mesmampad.edu.in",
    contactPhone: "+91 493 1200387",
    status: "Active",
    studentsCount: 2900,
    eventsCount: 15,
    badgeColor: "#06b6d4"
  },
  {
    id: "col-farook",
    name: "Farook College",
    code: "FC",
    location: "Feroke, Kozhikode, Kerala",
    type: "Arts & Science (Autonomous)",
    affiliation: "University of Calicut",
    contactEmail: "events@farookcollege.ac.in",
    contactPhone: "+91 495 2440660",
    status: "Active",
    studentsCount: 3800,
    eventsCount: 22,
    badgeColor: "#ec4899"
  },
  {
    id: "col-gasc",
    name: "Government Arts and Science College",
    code: "GASC",
    location: "Meenchanda, Kozhikode, Kerala",
    type: "Government Arts & Science",
    affiliation: "University of Calicut",
    contactEmail: "principal@gasckkd.ac.in",
    contactPhone: "+91 495 2320694",
    status: "Active",
    studentsCount: 3100,
    eventsCount: 19,
    badgeColor: "#10b981"
  },
  {
    id: "col-tkm",
    name: "TKM College of Engineering",
    code: "TKM",
    location: "Karicode, Kollam, Kerala",
    type: "Govt-Aided Engineering",
    affiliation: "APJ Abdul Kalam Technological University",
    contactEmail: "events@tkmce.ac.in",
    contactPhone: "+91 474 2712022",
    status: "Active",
    studentsCount: 4500,
    eventsCount: 28,
    badgeColor: "#f59e0b"
  }
];

const SEED_CATEGORIES = [
  { id: "tech", name: "Technical & Academic", icon: "fa-laptop-code", color: "#3b82f6", description: "Hackathons, Coding Battles, Robotics, Paper presentations & Workshops" },
  { id: "arts", name: "Arts & Cultural", icon: "fa-masks-theater", color: "#8b5cf6", description: "Singing, Dance, Drama, Mime, Painting, Literary & Youth Fest" },
  { id: "sports", name: "Sports & Athletics", icon: "fa-trophy", color: "#10b981", description: "Football, Cricket, Basketball, Chess, Badminton & Tournaments" },
  { id: "celebrations", name: "College Celebrations", icon: "fa-champagne-glasses", color: "#f59e0b", description: "Onam Celebrations, Christmas Carnivals, College Day & Fests" },
  { id: "social", name: "Community & NSS", icon: "fa-hand-holding-heart", color: "#06b6d4", description: "Volunteering, Environmental Drives, Blood donation & Social outreach" }
];

const SEED_EVENTS = [
  {
    id: "ev-hackathon-2026",
    title: "InnovateKerala: AI & Web3 Hackathon 2026",
    slug: "innovatekerala-ai-hackathon",
    category: "tech",
    categoryLabel: "Technical & Academic",
    collegeId: "col-kmct",
    collegeName: "KMCT College of Engineering",
    poster: "assets/images/hackathon.jpg",
    shortDescription: "A 36-hour non-stop premier hackathon addressing real-world challenges in AI healthcare, smart governance, and sustainable campus tech.",
    description: "KMCT College of Engineering proudly presents InnovateKerala 2026! Bring your brightest ideas, form your team, and build functional prototypes using LLMs, autonomous agents, and decentralised technology. Top teams win direct incubation support, angel investor pitches, and cash prizes worth ₹1,50,000.",
    venue: "Turing Innovation Hub & AI Lab, KMCT Campus, Kozhikode",
    startDate: "2026-11-14T09:00",
    endDate: "2026-11-15T21:00",
    regOpenDate: "2026-10-15T00:00",
    regCloseDate: "2026-11-10T23:59",
    participationType: "team", // "individual" | "team"
    minTeamSize: 3,
    maxTeamSize: 5,
    scope: "inter", // "inter" | "intra"
    maxCapacity: 60, // teams
    registeredCount: 42,
    fee: "Free Entry",
    isFeeApplicable: false,
    rules: [
      "Inter-college teams with students from multiple accredited institutions are permitted.",
      "All code and prototypes must be developed exclusively during the 36-hour hackathon period.",
      "Hardware kits (ESP32, Raspberry Pi) will be provided for IoT tracks upon prior request.",
      "Teams must submit working GitHub repositories and a 3-minute video pitch before deadline.",
      "Decision of the evaluation panel from industry tech leads is final."
    ],
    eligibility: "Open to all enrolled undergraduate and postgraduate students from AICTE/UGC approved colleges.",
    contactPerson: "Prof. Midhun K.",
    contactEmail: "midhun.k@kmct.edu.in",
    contactPhone: "+91 94471 28910",
    status: "Upcoming", // "Upcoming", "Ongoing", "Completed", "Cancelled"
    approvalStatus: "Approved",
    featured: true
  },
  {
    id: "ev-artsfest-2026",
    title: "Kerala Inter-College Youth Arts Festival 2026",
    slug: "kerala-youth-arts-fest",
    category: "arts",
    categoryLabel: "Arts & Cultural",
    collegeId: "col-farook",
    collegeName: "Farook College (Autonomous)",
    poster: "assets/images/arts_fest.jpg",
    shortDescription: "The grand annual convergence of art, rhythm, and traditional Kerala theatrical arts spanning 20+ exciting on-stage and off-stage events.",
    description: "Farook College invites fine arts and literary talents from across Kerala for the 4-day Mega Arts Festival. Featuring Classical Dance, Thiruvathira, Western Acoustics, Mime, Spot Painting, Creative Writing, and the flagship Inter-College Fashion Show.",
    venue: "Farook Open Air Auditorium & Jubilee Hall, Feroke",
    startDate: "2026-11-20T09:00",
    endDate: "2026-11-23T22:00",
    regOpenDate: "2026-10-18T00:00",
    regCloseDate: "2026-11-16T18:00",
    participationType: "both",
    minTeamSize: 1,
    maxTeamSize: 12,
    scope: "inter",
    maxCapacity: 250,
    registeredCount: 198,
    fee: "₹100 per participant",
    isFeeApplicable: true,
    rules: [
      "Participants must carry their official College ID Card and Bonafide Certificate.",
      "Time limits will be strictly enforced by the sound board bell system.",
      "No offensive or politically derogatory content allowed in theatre and skits.",
      "Traditional Kerala Kathakali and Mohiniyattam makeup rooms open at 6:00 AM."
    ],
    eligibility: "Students registered with any recognized university in Kerala with a valid student identification number.",
    contactPerson: "Dr. Aysha Rahman",
    contactEmail: "arts@farookcollege.ac.in",
    contactPhone: "+91 98462 33419",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: true
  },
  {
    id: "ev-football-2026",
    title: "All-Kerala Inter-College Football Championship 2026",
    slug: "all-kerala-football-championship",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    collegeId: "col-mesce",
    collegeName: "MES College of Engineering",
    poster: "assets/images/football.jpg",
    shortDescription: "State-level 11-a-side floodlit football tournament featuring 32 university champions fighting for the prestigious MES Gold Cup.",
    description: "Feel the adrenaline! The floodlit MES Stadium in Kuttippuram hosts the fiercest football derby in South India. Knockout rounds follow FIFA standard timing with certified KFA referees. Winner takes home ₹1,00,000 cash prize plus championship rolling trophy.",
    venue: "MES Stadium & Floodlit Turf Arena, Kuttippuram",
    startDate: "2026-11-25T16:00",
    endDate: "2026-11-29T21:30",
    regOpenDate: "2026-10-20T00:00",
    regCloseDate: "2026-11-18T23:59",
    participationType: "team",
    minTeamSize: 11,
    maxTeamSize: 16,
    scope: "inter",
    maxCapacity: 32, // 32 teams
    registeredCount: 26,
    fee: "₹1,500 per team",
    isFeeApplicable: true,
    rules: [
      "Official 11-a-side knockout format with maximum 5 rolling substitutes.",
      "Only regular full-time college students eligible. No professional club players.",
      "Teams must report in uniform team kits with printed jersey numbers.",
      "In case of a tie at full time, penalty shootouts will decide the victor."
    ],
    eligibility: "Men's collegiate teams affiliated to Calicut, KTU, MG, or Kerala University.",
    contactPerson: "Prof. Haris P. (Physical Education Director)",
    contactEmail: "sports@mesce.ac.in",
    contactPhone: "+91 94460 55120",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: true
  },
  {
    id: "ev-onam-2026",
    title: "Mahabali Grand Onam Celebration & Vadamvali 2026",
    slug: "mahabali-grand-onam-celebration",
    category: "celebrations",
    categoryLabel: "College Celebrations",
    collegeId: "col-gasc",
    collegeName: "Government Arts and Science College",
    poster: "assets/images/onam_fest.jpg",
    shortDescription: "Grand campus Onam festival featuring the state-level Pookkalam contest, Thiruvathirakali, traditional Onasadya, and the thrilling Tug of War.",
    description: "Join Government Arts and Science College, Meenchanda as we welcome King Mahabali! A vibrant festival showcasing the rich culture of God's Own Country. Events include Inter-Department Pookkalam Competition, Malayali Manka & Kerala Sreeman, Chenda Melam, and grand Vadamvali (Tug of War).",
    venue: "Main Quadrangle & Heritage Lawn, GASC Meenchanda",
    startDate: "2026-11-08T09:30",
    endDate: "2026-11-08T18:00",
    regOpenDate: "2026-10-10T00:00",
    regCloseDate: "2026-11-05T17:00",
    participationType: "both",
    minTeamSize: 1,
    maxTeamSize: 10,
    scope: "inter",
    maxCapacity: 150,
    registeredCount: 112,
    fee: "Free Entry",
    isFeeApplicable: false,
    rules: [
      "Natural flowers only for Pookkalam; chemical dyes strictly prohibited.",
      "Traditional Kerala attire (Kasavu Sari / Mundu) is encouraged for all participants.",
      "Tug of War teams must consist of exactly 8 players + 2 reserves weighing under 650kg total."
    ],
    eligibility: "Open to students of all affiliated Kerala higher education institutions.",
    contactPerson: "Prof. Sreeja V. K.",
    contactEmail: "onam@gasckkd.ac.in",
    contactPhone: "+91 97450 11228",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: true
  },
  {
    id: "ev-christmas-2026",
    title: "Winter Frost: Christmas Carnival & Carol Symphony 2026",
    slug: "winter-frost-christmas-carnival",
    category: "celebrations",
    categoryLabel: "College Celebrations",
    collegeId: "col-kmct",
    collegeName: "KMCT College of Engineering",
    poster: "assets/images/arts_fest.jpg",
    shortDescription: "An enchanting winter celebration with western acoustic choir competitions, live acoustic bands, cake decoration, and charity flea market.",
    description: "Celebrate the season of joy at KMCT! Featuring inter-collegiate Choir competitions, Gingerbread house challenge, Secret Santa gift exchanges, and a grand charity concert in aid of local orphanages.",
    venue: "St. Thomas Memorial Auditorium & Campus Plaza, KMCT",
    startDate: "2026-12-18T10:00",
    endDate: "2026-12-18T20:00",
    regOpenDate: "2026-11-01T00:00",
    regCloseDate: "2026-12-12T23:59",
    participationType: "team",
    minTeamSize: 6,
    maxTeamSize: 15,
    scope: "inter",
    maxCapacity: 40,
    registeredCount: 18,
    fee: "₹250 per choir group",
    isFeeApplicable: true,
    rules: [
      "Choir performance duration: 8 minutes including setup.",
      "Live instruments (Acoustic Guitar, Keyboard, Violin) permitted; backing tracks not allowed.",
      "Flea market stall proceeds will go directly to the designated charity fund."
    ],
    eligibility: "College student groups and registered college music clubs.",
    contactPerson: "Fr. Roy Mathew & Student Council",
    contactEmail: "christmas@kmct.edu.in",
    contactPhone: "+91 98470 66200",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: false
  },
  {
    id: "ev-singing-2026",
    title: "Voice of Malabar: Solo Singing Competition 2026",
    slug: "voice-of-malabar-solo-singing",
    category: "arts",
    categoryLabel: "Arts & Cultural",
    collegeId: "col-mes",
    collegeName: "MES College",
    poster: "assets/images/arts_fest.jpg",
    shortDescription: "A musical battle of voices across Carnatic, Film, and Western vocal disciplines with renowned playback singer judges.",
    description: "Calling all singing prodigies! MES College presents the annual Voice of Malabar solo singing challenge. Judged by distinguished music directors, the winners will be awarded cash prizes, recording studio vouchers, and trophies.",
    venue: "Music Conservatory & Seminar Hall, MES Mampad",
    startDate: "2026-11-12T10:00",
    endDate: "2026-11-12T18:00",
    regOpenDate: "2026-10-12T00:00",
    regCloseDate: "2026-11-09T23:59",
    participationType: "individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    scope: "inter",
    maxCapacity: 80,
    registeredCount: 65,
    fee: "Free Entry",
    isFeeApplicable: false,
    rules: [
      "Karaoke tracks must be submitted in MP3 format 1 hour before performance.",
      "Time limit: 4 minutes max per song.",
      "Tracks cannot contain pre-recorded vocal harmonies."
    ],
    eligibility: "Individual students from arts, science, and engineering colleges.",
    contactPerson: "Prof. Abdul Nazeer",
    contactEmail: "music@mesmampad.edu.in",
    contactPhone: "+91 94950 44221",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: false
  },
  {
    id: "ev-cricket-2026",
    title: "Malabar T20 Inter-College Cricket Super Cup",
    slug: "malabar-t20-cricket-super-cup",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    collegeId: "col-farook",
    collegeName: "Farook College (Autonomous)",
    poster: "assets/images/football.jpg",
    shortDescription: "High-octane T20 leather ball tournament on Farook College's scenic turf grounds with live YouTube ball-by-ball streaming.",
    description: "The biggest collegiate cricket tournament in Northern Kerala. 16 top college teams battle under standard BCCI-approved playing conditions. Full turf pitch, digital scoreboard, and certified Kerala Cricket Association umpires.",
    venue: "Farook College International Cricket Ground, Feroke",
    startDate: "2026-12-02T08:30",
    endDate: "2026-12-06T18:00",
    regOpenDate: "2026-10-25T00:00",
    regCloseDate: "2026-11-24T23:59",
    participationType: "team",
    minTeamSize: 11,
    maxTeamSize: 15,
    scope: "inter",
    maxCapacity: 16,
    registeredCount: 14,
    fee: "₹2,000 per squad",
    isFeeApplicable: true,
    rules: [
      "Strictly white cricket flannels / whites attire.",
      "Standard red SG Test leather balls supplied by the organizing committee.",
      "Each squad must submit bonafide college certificates for all 15 members."
    ],
    eligibility: "Official collegiate cricket teams recognized by Physical Education departments.",
    contactPerson: "Dr. Mohammed Shafi",
    contactEmail: "cricket@farookcollege.ac.in",
    contactPhone: "+91 94473 11880",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: false
  },
  {
    id: "ev-robotics-2026",
    title: "RoboStorm 2026: Autonomous Drone & BattleBot Challenge",
    slug: "robostorm-autonomous-robotics-challenge",
    category: "tech",
    categoryLabel: "Technical & Academic",
    collegeId: "col-mesce",
    collegeName: "MES College of Engineering",
    poster: "assets/images/hackathon.jpg",
    shortDescription: "Thrilling 15kg combat robot arena fights and autonomous GPS waypoint drone obstacle courses.",
    description: "Unleash steel and software! RoboStorm 2026 features two flagship leagues: 'Warriors of Wire' (15kg combat robot destruction in reinforced polycarbonate enclosure) and 'AeroNav' (Autonomous drone navigation through laser ring checkpoints).",
    venue: "High Voltage Robotics Lab & Arena, MESCE Kuttippuram",
    startDate: "2026-11-28T09:00",
    endDate: "2026-11-29T18:00",
    regOpenDate: "2026-10-15T00:00",
    regCloseDate: "2026-11-20T23:59",
    participationType: "team",
    minTeamSize: 2,
    maxTeamSize: 4,
    scope: "inter",
    maxCapacity: 40,
    registeredCount: 31,
    fee: "₹500 per team",
    isFeeApplicable: true,
    rules: [
      "Robots must pass fail-safe wireless safety inspection before entering arena.",
      "No chemical flame weapons or EMP disrupters allowed.",
      "Drones must stay within autonomous airspace bounds."
    ],
    eligibility: "Engineering, polytechnic, and robotics club students.",
    contactPerson: "Er. Shamseer Ali",
    contactEmail: "robotics@mesce.ac.in",
    contactPhone: "+91 97444 88219",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: false
  },
  {
    id: "ev-photo-2026",
    title: "Monsoons & Heritage: State College Photography Contest",
    slug: "monsoons-heritage-photography-contest",
    category: "arts",
    categoryLabel: "Arts & Cultural",
    collegeId: "col-gasc",
    collegeName: "Government Arts and Science College",
    poster: "assets/images/arts_fest.jpg",
    shortDescription: "Capture the poetry of Kerala's rain, heritage architecture, and collegiate youth culture through your lens.",
    description: "Organized by the Department of Journalism & Visual Communication at GASC Kozhikode. Submit your highest resolution candid shots reflecting Kerala's timeless rain patterns, campus life moments, and cultural heritage.",
    venue: "Visual Arts Gallery & Online Submission, GASC",
    startDate: "2026-11-10T10:00",
    endDate: "2026-11-14T17:00",
    regOpenDate: "2026-10-01T00:00",
    regCloseDate: "2026-11-08T23:59",
    participationType: "individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    scope: "inter",
    maxCapacity: 300,
    registeredCount: 215,
    fee: "Free Entry",
    isFeeApplicable: false,
    rules: [
      "Original EXIF metadata must be intact on submitted JPEG/RAW files.",
      "Minimal color grading allowed; AI generated or replaced skies will be disqualified.",
      "Selected 50 photos will be framed and exhibited in the Kozhikode Town Hall."
    ],
    eligibility: "All undergraduate and postgraduate college students across Kerala.",
    contactPerson: "Prof. Vinod K. P.",
    contactEmail: "photo@gasckkd.ac.in",
    contactPhone: "+91 94960 99820",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: false
  },
  {
    id: "ev-nss-2026",
    title: "Green Malabar: NSS Mega River Cleanup & Plantation Drive",
    slug: "green-malabar-nss-river-cleanup",
    category: "social",
    categoryLabel: "Community & NSS",
    collegeId: "col-farook",
    collegeName: "Farook College (Autonomous)",
    poster: "assets/images/onam_fest.jpg",
    shortDescription: "A multi-college united youth mission to clean the Chaliyar river banks and plant 5,000 indigenous saplings across participating campuses.",
    description: "Joint initiative by NSS units of Farook College, KMCT, MES, and GASC Meenchanda. Students collaborate on environmental conservation, micro-plastic recovery, mangrove preservation, and green campus audits.",
    venue: "Chaliyar River Basin & Farook Eco Park, Feroke",
    startDate: "2026-11-15T07:00",
    endDate: "2026-11-15T16:00",
    regOpenDate: "2026-10-10T00:00",
    regCloseDate: "2026-11-12T18:00",
    participationType: "individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    scope: "inter",
    maxCapacity: 500,
    registeredCount: 410,
    fee: "Free Entry",
    isFeeApplicable: false,
    rules: [
      "Protective gloves, biodegradable collection bags, and saplings provided on-site.",
      "Participants receive official NSS Activity Points certificate credited to their university portal.",
      "Refreshments and transportation from Kozhikode railway station arranged."
    ],
    eligibility: "NSS volunteers and all socially minded college students.",
    contactPerson: "NSS Programme Coordinator Dr. Jamsheer",
    contactEmail: "nss@farookcollege.ac.in",
    contactPhone: "+91 94462 77150",
    status: "Upcoming",
    approvalStatus: "Approved",
    featured: false
  }
];

const SEED_USERS = {
  student: {
    id: "usr-student-1",
    role: "student",
    name: "Ananya Nair",
    email: "ananya.nair@kmct.edu.in",
    password: "student123",
    phone: "+91 98471 45098",
    collegeId: "col-kmct",
    collegeName: "KMCT College of Engineering",
    department: "Computer Science & Engineering",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    studentId: "KMCT-CS-2023-042",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    interests: ["Artificial Intelligence", "Fine Arts", "Classical Dance", "Hackathons"],
    profileCompletion: 94
  },
  coordinator: {
    id: "usr-coord-1",
    role: "coordinator",
    name: "Prof. Rajesh Varma",
    email: "rajesh.varma@mesce.ac.in",
    password: "coordinator123",
    phone: "+91 94461 99012",
    collegeId: "col-mesce",
    collegeName: "MES College of Engineering",
    department: "Mechanical Engineering / Cultural Committee",
    designation: "Associate Professor & Chief Event Coordinator",
    coordinatorId: "MESCE-FAC-089",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    assignedEvents: ["ev-football-2026", "ev-robotics-2026"]
  },
  admin: {
    id: "usr-admin-1",
    role: "admin",
    name: "Dr. K. Radhakrishnan",
    email: "admin@campusconnect.gov.in",
    password: "admin123",
    phone: "+91 94470 10001",
    collegeId: "col-all",
    collegeName: "Kerala Higher Education Directorate",
    department: "State University Coordination Cell",
    designation: "Super Administrator & Director of Collegiate Events",
    adminId: "KED-SUP-001",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
};

const SEED_REGISTRATIONS = [
  {
    id: "REG-2026-KMCT-9102",
    eventId: "ev-hackathon-2026",
    eventTitle: "InnovateKerala: AI & Web3 Hackathon 2026",
    collegeName: "KMCT College of Engineering",
    venue: "Turing Innovation Hub & AI Lab, KMCT",
    eventDate: "2026-11-14T09:00",
    studentId: "KMCT-CS-2023-042",
    studentName: "Ananya Nair",
    studentEmail: "ananya.nair@kmct.edu.in",
    studentPhone: "+91 98471 45098",
    studentCollege: "KMCT College of Engineering",
    department: "Computer Science & Engineering",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    participationType: "team",
    teamName: "NeuralKite Pioneers",
    teamCaptain: "Ananya Nair",
    teamSize: 4,
    members: [
      { name: "Ananya Nair", college: "KMCT College of Engineering", id: "KMCT-CS-2023-042", role: "Team Lead & AI" },
      { name: "Aditya Menon", college: "KMCT College of Engineering", id: "KMCT-CS-2023-018", role: "Fullstack Dev" },
      { name: "Gopika S.", college: "MES College of Engineering", id: "MES-IT-2023-091", role: "Smart Contracts" },
      { name: "Nikhil Raj", college: "Farook College", id: "FC-CS-2024-005", role: "UI/UX & Pitch" }
    ],
    status: "Approved", // "Approved", "Pending", "Rejected", "Waitlisted", "Cancelled", "Completed"
    registeredAt: "2026-10-21T14:30:00",
    attendanceRecorded: false,
    notes: "Inter-college team verified. Innovation track approved."
  },
  {
    id: "REG-2026-FARC-3421",
    eventId: "ev-artsfest-2026",
    eventTitle: "Kerala Inter-College Youth Arts Festival 2026",
    collegeName: "Farook College (Autonomous)",
    venue: "Farook Open Air Auditorium",
    eventDate: "2026-11-20T09:00",
    studentId: "KMCT-CS-2023-042",
    studentName: "Ananya Nair",
    studentEmail: "ananya.nair@kmct.edu.in",
    studentPhone: "+91 98471 45098",
    studentCollege: "KMCT College of Engineering",
    department: "Computer Science & Engineering",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    participationType: "individual",
    subEvent: "Solo Classical Dance (Mohiniyattam)",
    status: "Approved",
    registeredAt: "2026-10-22T10:15:00",
    attendanceRecorded: false,
    notes: "Fee paid via online portal ref #PAY-88219"
  },
  {
    id: "REG-2026-GASC-5510",
    eventId: "ev-onam-2026",
    eventTitle: "Mahabali Grand Onam Celebration & Vadamvali 2026",
    collegeName: "Government Arts and Science College",
    venue: "Main Quadrangle & Heritage Lawn",
    eventDate: "2026-11-08T09:30",
    studentId: "KMCT-CS-2023-042",
    studentName: "Ananya Nair",
    studentEmail: "ananya.nair@kmct.edu.in",
    studentPhone: "+91 98471 45098",
    studentCollege: "KMCT College of Engineering",
    department: "Computer Science & Engineering",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    participationType: "team",
    teamName: "Kozhikode Warriors",
    teamCaptain: "Ananya Nair",
    teamSize: 8,
    members: [
      { name: "Ananya Nair", college: "KMCT College", id: "KMCT-CS-2023-042", role: "Captain" },
      { name: "Devika P.", college: "KMCT College", id: "KMCT-EC-2023-012", role: "Member" },
      { name: "Sneha Nair", college: "KMCT College", id: "KMCT-CS-2023-088", role: "Member" }
    ],
    status: "Pending",
    registeredAt: "2026-10-24T18:40:00",
    attendanceRecorded: false,
    notes: "Awaiting physical committee review for Pookkalam squad."
  },
  {
    id: "REG-2026-MESC-1108",
    eventId: "ev-robotics-2026",
    eventTitle: "RoboStorm 2026: Autonomous Drone & BattleBot Challenge",
    collegeName: "MES College of Engineering",
    venue: "High Voltage Robotics Lab, MESCE",
    eventDate: "2026-11-28T09:00",
    studentId: "KMCT-CS-2023-042",
    studentName: "Ananya Nair",
    studentEmail: "ananya.nair@kmct.edu.in",
    studentPhone: "+91 98471 45098",
    studentCollege: "KMCT College of Engineering",
    department: "Computer Science & Engineering",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    participationType: "team",
    teamName: "SkyHawks Autonomous",
    teamCaptain: "Aditya Menon",
    teamSize: 3,
    status: "Waitlisted",
    registeredAt: "2026-10-25T11:20:00",
    attendanceRecorded: false,
    notes: "Queue position #2. High demand slot."
  }
];

const SEED_NOTIFICATIONS = [
  {
    id: "notif-1",
    userId: "usr-student-1",
    title: "Registration Approved!",
    message: "Your team registration for 'InnovateKerala AI Hackathon 2026' was reviewed and approved by KMCT Event Committee.",
    type: "approval", // "approval", "reminder", "announcement", "system"
    timestamp: "2 hours ago",
    date: "2026-10-26T10:00:00",
    read: false,
    link: "#my-registrations"
  },
  {
    id: "notif-2",
    userId: "usr-student-1",
    title: "Event Date Reminder (7 Days Out)",
    message: "Reminder: 'Mahabali Grand Onam Celebration' starts in 13 days on Nov 8, 2026. Prepare your traditional attire!",
    type: "reminder",
    timestamp: "1 day ago",
    date: "2026-10-25T09:00:00",
    read: false,
    link: "#event-details/ev-onam-2026"
  },
  {
    id: "notif-3",
    userId: "usr-student-1",
    title: "Venue & Schedule Update",
    message: "Farook College Youth Arts Festival has shifted the Mohiniyattam solo stage to Jubilee AC Hall.",
    type: "announcement",
    timestamp: "2 days ago",
    date: "2026-10-24T15:20:00",
    read: true,
    link: "#event-details/ev-artsfest-2026"
  },
  {
    id: "notif-4",
    userId: "usr-student-1",
    title: "Registration Deadline Approaching",
    message: "Voice of Malabar Solo Singing closes registration in 4 days. Only 15 slots remaining!",
    type: "reminder",
    timestamp: "3 days ago",
    date: "2026-10-23T11:45:00",
    read: true,
    link: "#event-details/ev-singing-2026"
  }
];

const SEED_AUDIT_LOGS = [
  { id: "log-1", action: "Inter-College Approval", target: "InnovateKerala AI Hackathon", actor: "Dr. K. Radhakrishnan (Admin)", timestamp: "2026-10-26 11:30 AM", status: "Success" },
  { id: "log-2", action: "Participant Approved", target: "REG-2026-KMCT-9102 (Ananya Nair)", actor: "Prof. Rajesh Varma (Coordinator)", timestamp: "2026-10-26 10:00 AM", status: "Success" },
  { id: "log-3", action: "New College Onboarded", target: "Government Arts & Science College", actor: "Dr. K. Radhakrishnan (Admin)", timestamp: "2026-10-25 04:15 PM", status: "Success" },
  { id: "log-4", action: "Capacity Expanded", target: "All Kerala Football Championship (+6 slots)", actor: "Prof. Rajesh Varma", timestamp: "2026-10-25 02:10 PM", status: "Success" },
  { id: "log-5", action: "Role Modified", target: "Prof. Shamseer Ali -> Coordinator", actor: "Admin", timestamp: "2026-10-24 11:00 AM", status: "Success" }
];

// LocalStorage Persistence Layer
class CampusStorage {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem("campus_colleges")) {
      localStorage.setItem("campus_colleges", JSON.stringify(SEED_COLLEGES));
    }
    if (!localStorage.getItem("campus_categories")) {
      localStorage.setItem("campus_categories", JSON.stringify(SEED_CATEGORIES));
    }
    if (!localStorage.getItem("campus_events")) {
      localStorage.setItem("campus_events", JSON.stringify(SEED_EVENTS));
    }
    if (!localStorage.getItem("campus_registrations")) {
      localStorage.setItem("campus_registrations", JSON.stringify(SEED_REGISTRATIONS));
    }
    if (!localStorage.getItem("campus_notifications")) {
      localStorage.setItem("campus_notifications", JSON.stringify(SEED_NOTIFICATIONS));
    }
    if (!localStorage.getItem("campus_audit_logs")) {
      localStorage.setItem("campus_audit_logs", JSON.stringify(SEED_AUDIT_LOGS));
    }
    if (!localStorage.getItem("campus_current_role")) {
      localStorage.setItem("campus_current_role", "student");
    }
  }

  // Active User & Role
  getCurrentRole() {
    return localStorage.getItem("campus_current_role") || "student";
  }

  setCurrentRole(role) {
    localStorage.setItem("campus_current_role", role);
  }

  getUser(role) {
    const stored = localStorage.getItem(`campus_user_${role}`);
    if (stored) {
      try { 
        const parsed = JSON.parse(stored);
        if (!parsed.password && SEED_USERS[role]?.password) {
          parsed.password = SEED_USERS[role].password;
        }
        return parsed;
      } catch(e){}
    }
    return SEED_USERS[role] || SEED_USERS.student;
  }

  getCurrentUser() {
    const role = this.getCurrentRole();
    return this.getUser(role);
  }

  saveCurrentUser(userData) {
    const role = this.getCurrentRole();
    this.saveUser(role, userData);
  }

  saveUser(role, userData) {
    localStorage.setItem(`campus_user_${role}`, JSON.stringify(userData));
  }

  verifyPassword(role, enteredPassword) {
    if (!enteredPassword) return false;
    const user = this.getUser(role);
    const userPass = (user && user.password) ? String(user.password).trim() : "";
    const input = String(enteredPassword).trim();

    // Direct match
    if (userPass && input.toLowerCase() === userPass.toLowerCase()) {
      return true;
    }

    // Standard institutional aliases for demo accessibility
    const aliases = {
      coordinator: ["coordinator123", "coord@2026", "coord123", "mesce2026", "demo2026"],
      admin: ["admin123", "admin@2026", "kerala2026", "director2026", "demo2026"],
      student: ["student123", "studentpass2026!", "demo2026"]
    };

    const allowed = aliases[role] || [];
    return allowed.includes(input.toLowerCase());
  }

  updatePassword(role, newPassword) {
    const user = this.getUser(role);
    user.password = newPassword;
    this.saveUser(role, user);
    this.addAuditLog("Password Updated", `User ${user.name} (${role.toUpperCase()}) credentials updated`, "Success");
    return true;
  }


  // Colleges
  getColleges() {
    try {
      return JSON.parse(localStorage.getItem("campus_colleges")) || SEED_COLLEGES;
    } catch(e) {
      return SEED_COLLEGES;
    }
  }

  saveColleges(colleges) {
    localStorage.setItem("campus_colleges", JSON.stringify(colleges));
  }

  addCollege(college) {
    const colleges = this.getColleges();
    college.id = "col-" + Date.now();
    college.studentsCount = college.studentsCount || 1000;
    college.eventsCount = college.eventsCount || 0;
    colleges.unshift(college);
    this.saveColleges(colleges);
    this.addAuditLog("College Added", college.name, "Success");
    return college;
  }

  updateCollege(updated) {
    const colleges = this.getColleges().map(c => c.id === updated.id ? { ...c, ...updated } : c);
    this.saveColleges(colleges);
    this.addAuditLog("College Updated", updated.name, "Success");
  }

  toggleCollegeStatus(id) {
    const colleges = this.getColleges().map(c => {
      if (c.id === id) {
        c.status = c.status === "Active" ? "Inactive" : "Active";
      }
      return c;
    });
    this.saveColleges(colleges);
  }

  // Categories
  getCategories() {
    try {
      return JSON.parse(localStorage.getItem("campus_categories")) || SEED_CATEGORIES;
    } catch(e) {
      return SEED_CATEGORIES;
    }
  }

  addCategory(category) {
    const cats = this.getCategories();
    category.id = "cat-" + Date.now();
    cats.push(category);
    localStorage.setItem("campus_categories", JSON.stringify(cats));
    this.addAuditLog("Category Created", category.name, "Success");
    return category;
  }

  // Events
  getEvents() {
    try {
      return JSON.parse(localStorage.getItem("campus_events")) || SEED_EVENTS;
    } catch(e) {
      return SEED_EVENTS;
    }
  }

  getEventById(id) {
    const events = this.getEvents();
    return events.find(e => e.id === id || e.slug === id);
  }

  saveEvents(events) {
    localStorage.setItem("campus_events", JSON.stringify(events));
  }

  addEvent(event) {
    const events = this.getEvents();
    event.id = "ev-" + Date.now();
    event.slug = (event.title || "event").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    event.registeredCount = 0;
    event.approvalStatus = event.approvalStatus || (this.getCurrentRole() === "admin" ? "Approved" : "Pending");
    event.status = "Upcoming";
    event.featured = false;
    events.unshift(event);
    this.saveEvents(events);
    this.addAuditLog("Event Created", event.title, "Success");
    return event;
  }

  updateEvent(updated) {
    const events = this.getEvents().map(e => e.id === updated.id ? { ...e, ...updated } : e);
    this.saveEvents(events);
    this.addAuditLog("Event Updated", updated.title, "Success");
  }

  setEventApproval(id, status) {
    const events = this.getEvents().map(e => {
      if (e.id === id) {
        e.approvalStatus = status;
      }
      return e;
    });
    this.saveEvents(events);
    this.addAuditLog(`Event ${status}`, `Event ID: ${id}`, "Success");
  }

  // Registrations
  getRegistrations() {
    try {
      return JSON.parse(localStorage.getItem("campus_registrations")) || SEED_REGISTRATIONS;
    } catch(e) {
      return SEED_REGISTRATIONS;
    }
  }

  saveRegistrations(regs) {
    localStorage.setItem("campus_registrations", JSON.stringify(regs));
  }

  addRegistration(reg) {
    const regs = this.getRegistrations();
    // Check duplicate
    const duplicate = regs.find(r => 
      r.eventId === reg.eventId && 
      r.studentId === reg.studentId && 
      r.status !== "Cancelled" && 
      r.status !== "Rejected"
    );
    if (duplicate) {
      throw new Error(`You have already registered for this event with Registration ID: ${duplicate.id}`);
    }

    const colCode = (reg.studentCollege || "KERALA").substring(0, 4).toUpperCase().replace(/[^A-Z]/g, "C");
    reg.id = `REG-${new Date().getFullYear()}-${colCode}-${Math.floor(1000 + Math.random() * 9000)}`;
    reg.registeredAt = new Date().toISOString();
    reg.status = reg.status || "Pending";
    reg.attendanceRecorded = false;

    regs.unshift(reg);
    this.saveRegistrations(regs);

    // Increment event count
    const events = this.getEvents();
    const event = events.find(e => e.id === reg.eventId);
    if (event) {
      event.registeredCount = (event.registeredCount || 0) + 1;
      this.saveEvents(events);
    }

    // Add notification
    this.addNotification({
      userId: reg.studentId || "usr-student-1",
      title: "Registration Submitted!",
      message: `Your registration for "${reg.eventTitle}" was received with ID ${reg.id}. Status: ${reg.status}.`,
      type: "approval",
      link: "#my-registrations"
    });

    this.addAuditLog("Registration Created", `${reg.id} - ${reg.studentName}`, "Success");
    return reg;
  }

  updateRegistrationStatus(id, newStatus, notes) {
    const regs = this.getRegistrations().map(r => {
      if (r.id === id) {
        r.status = newStatus;
        if (notes) r.notes = notes;
      }
      return r;
    });
    this.saveRegistrations(regs);

    const updated = regs.find(r => r.id === id);
    if (updated) {
      this.addNotification({
        userId: updated.studentId || "usr-student-1",
        title: `Registration ${newStatus}!`,
        message: `Your registration for "${updated.eventTitle}" (ID: ${id}) is now marked as ${newStatus}.`,
        type: newStatus === "Approved" ? "approval" : "announcement",
        link: "#my-registrations"
      });
    }

    this.addAuditLog(`Registration ${newStatus}`, id, "Success");
  }

  cancelRegistration(id) {
    this.updateRegistrationStatus(id, "Cancelled", "Cancelled by student");
  }

  toggleAttendance(id) {
    const regs = this.getRegistrations().map(r => {
      if (r.id === id) {
        r.attendanceRecorded = !r.attendanceRecorded;
      }
      return r;
    });
    this.saveRegistrations(regs);
  }

  // Notifications
  getNotifications() {
    try {
      return JSON.parse(localStorage.getItem("campus_notifications")) || SEED_NOTIFICATIONS;
    } catch(e) {
      return SEED_NOTIFICATIONS;
    }
  }

  addNotification(notif) {
    const notifs = this.getNotifications();
    notif.id = "notif-" + Date.now();
    notif.date = new Date().toISOString();
    notif.timestamp = "Just now";
    notif.read = false;
    notifs.unshift(notif);
    localStorage.setItem("campus_notifications", JSON.stringify(notifs));
  }

  markNotificationAsRead(id) {
    const notifs = this.getNotifications().map(n => {
      if (n.id === id) n.read = true;
      return n;
    });
    localStorage.setItem("campus_notifications", JSON.stringify(notifs));
  }

  markAllNotificationsRead() {
    const notifs = this.getNotifications().map(n => ({ ...n, read: true }));
    localStorage.setItem("campus_notifications", JSON.stringify(notifs));
  }

  // Audit Logs
  getAuditLogs() {
    try {
      return JSON.parse(localStorage.getItem("campus_audit_logs")) || SEED_AUDIT_LOGS;
    } catch(e) {
      return SEED_AUDIT_LOGS;
    }
  }

  addAuditLog(action, target, status = "Success") {
    const logs = this.getAuditLogs();
    const user = this.getCurrentUser();
    const role = this.getCurrentRole();
    const newLog = {
      id: "log-" + Date.now(),
      action,
      target,
      actor: `${user.name} (${role.toUpperCase()})`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status
    };
    logs.unshift(newLog);
    if (logs.length > 50) logs.pop();
    localStorage.setItem("campus_audit_logs", JSON.stringify(logs));
  }

  resetToDefaults() {
    localStorage.clear();
    this.init();
  }
}

window.CampusData = new CampusStorage();
