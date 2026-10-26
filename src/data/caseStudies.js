export const caseStudiesData = {
  apexlogix: {
    title: "ApexLogix ERP",
    subtitle: "Enterprise fleet & warehouse logistics platform",
    sector: "Enterprise logistics",
    timeline: "Delivered in 9 weeks",
    consoleId: "vertrix.console/apexlogix-prod",
    kpiVal: "+140%",
    kpiLabel: "Dispatch turnaround speed",
    uptimeVal: "99.98%",
    uptimeLabel: "High-availability SLA",
    latencyVal: "<90ms",
    latencyLabel: "Edge API query response",
    deliverables: [
      "Live GPS truck fleet telemetry and route pathing algorithm with Google Maps API integration.",
      "Automated warehouse cross-dock slotting system with QR/Barcode inventory scans.",
      "Client portal for instant BOL (Bill of Lading) generation & digital signature verification.",
      "Role-based operational dashboard for dispatchers, gate marshals, and management."
    ],
    archSpec: "Microservice-ready Next.js 14 frontend backed by decoupled Node.js services and PostgreSQL.",
    dataSpec: "High-concurrency PostgreSQL relational model optimized with indexed spatial queries & Redis.",
    deploySpec: "Dockerized container deployment with auto-healing clusters and 24/7 uptime monitoring.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Docker"]
  },
  novamed: {
    title: "NovaMed Telehealth",
    subtitle: "HIPAA-ready patient consultation suite",
    sector: "Healthcare & medtech",
    timeline: "Delivered in 7 weeks",
    consoleId: "vertrix.console/novamed-hipaa",
    kpiVal: "99.98%",
    kpiLabel: "Telemetry & video call uptime",
    uptimeVal: "100%",
    uptimeLabel: "Encrypted records compliance",
    latencyVal: "<45ms",
    latencyLabel: "WebRTC P2P handshake",
    deliverables: [
      "Ultra-low latency WebRTC peer-to-peer encrypted high-definition video conferencing room.",
      "Digital encrypted e-prescription generation signed with physician cryptographic keys.",
      "Integrated appointment scheduling calendar synced with Google Calendar and Outlook.",
      "Comprehensive EHR patient history vault with role-based doctor/patient authorization."
    ],
    archSpec: "React Native universal client (iOS & Android) with WebRTC audio/video mesh architecture.",
    dataSpec: "Zero-knowledge encryption for stored patient data using AES-256 and compliant Firebase rules.",
    deploySpec: "Multi-region cloud relay TURN/STUN servers ensuring reliable call connection behind firewalls.",
    techStack: ["React Native", "WebRTC", "Firebase", "Node.js", "Stripe API", "Tailwind"]
  },
  kovaifresh: {
    title: "Kovai Fresh Agritech",
    subtitle: "Direct-to-consumer hyperlocal grocery marketplace",
    sector: "Agritech & hyperlocal",
    timeline: "Delivered in 6 weeks",
    consoleId: "vertrix.console/kovaifresh-live",
    kpiVal: "45k+",
    kpiLabel: "Monthly active Coimbatore orders",
    uptimeVal: "99.95%",
    uptimeLabel: "Payment gateway success rate",
    latencyVal: "<110ms",
    latencyLabel: "Cart & checkout processing",
    deliverables: [
      "Farmer harvest inventory forecasting dashboard with automated price tier adjustments.",
      "Hyperlocal geofenced checkout limiting order placement strictly to rapid delivery postal zones.",
      "Real-time driver location tracking with live order milestone updates via WebSockets.",
      "Instant WhatsApp automated invoice and dispatch notification triggers via Meta Cloud API."
    ],
    archSpec: "Cross-platform Flutter app offering native 60fps performance on both iOS and budget Android devices.",
    dataSpec: "MongoDB geo-spatial cluster for rapid neighborhood pin-code indexing paired with Redis cache.",
    deploySpec: "Serverless backend on Node.js/Express with automatic horizontal scale during morning rush hours.",
    techStack: ["Flutter", "Express.js", "Redis", "MongoDB", "Razorpay", "Google Maps"]
  },
  aurapay: {
    title: "AuraPay FinTech",
    subtitle: "Cross-border multi-currency payment orchestration portal",
    sector: "FinTech & payments",
    timeline: "Delivered in 10 weeks",
    consoleId: "vertrix.console/aurapay-core",
    kpiVal: "₹12Cr+",
    kpiLabel: "Monthly processed volume",
    uptimeVal: "99.999%",
    uptimeLabel: "Core ledger availability",
    latencyVal: "<30ms",
    latencyLabel: "Payment webhook dispatch",
    deliverables: [
      "Dynamic payment routing engine switching between gateways to achieve maximum authorization rates.",
      "Automated multi-currency conversions across INR, USD, AED, and EUR with locked spread rates.",
      "Merchant developer portal with instant API key issuance, webhooks, and sandbox testing.",
      "Automated fraud pattern detection and risk scoring before transaction authorization."
    ],
    archSpec: "Go microservices core processing high concurrency transactions, Next.js modern merchant portal.",
    dataSpec: "Double-entry bookkeeping SQL ledger backed by Apache Kafka for guaranteed message ordering.",
    deploySpec: "PCI-DSS Level 1 compliant infrastructure layout deployed across hardened cloud VPCs.",
    techStack: ["Next.js", "Go (Golang)", "Kafka", "PostgreSQL", "Tailwind CSS", "Docker"]
  }
};