const { createApp } = Vue;

createApp({
    data() {
        return {
            currentYear: new Date().getFullYear(),
            activeCategory: "All",
            navLinks: [
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "fit", label: "Work Fit" },
                { id: "contact", label: "Contact" },
            ],
            availability: [
                "Dhaka, Bangladesh - UTC+6",
                "Remote worldwide",
                "Bangladesh local and hybrid",
                "Visa-supported on-site abroad",
            ],
            heroSignals: [
                { value: "3+", label: "years shipping Laravel systems" },
                { value: "50k+", label: "users supported in payment flows" },
                { value: "4", label: "production domains covered" },
            ],
            stats: [
                { value: "Laravel", label: "APIs, queues, schedulers, admin panels" },
                { value: "Vue.js", label: "frontend delivery and reusable UI" },
                { value: "Payments", label: "FPX, wallets, QR, OAuth, notifications" },
                { value: "Hotels", label: "SEO, booking, analytics, conversion flows" },
            ],
            experience: [
                {
                    title: "Software Engineer (Laravel)",
                    company: "Systems Solutions & Development Technologies (SSD-TECH) / Dotlines",
                    period: "June 2023 - Present",
                    logos: [
                        { src: "logo/company/ssd-tech.png", alt: "SSD-TECH logo" },
                        { src: "logo/company/dotlines.svg", alt: "Dotlines logo" },
                    ],
                    points: [
                        "Developed and maintained 3+ production Laravel/Vue applications across API design, queues, schedulers, admin operations, and third-party integrations.",
                        "Improved 5+ existing systems through bug fixes, performance tuning, secure workflow updates, module delivery, and production support.",
                        "Built secure Laravel APIs with validation, middleware, policy-based authorization, Passport/OAuth, service layers, and reusable architecture patterns.",
                        "Implemented real-time updates, push notifications, device binding, OTP flows, Firebase, MQTT, Redis queues, and event-driven workflows.",
                    ],
                },
                {
                    title: "Intern, Automation Team",
                    company: "BRAC Bank Limited",
                    period: "February 2023 - May 2023",
                    logos: [
                        { src: "logo/company/brac_bank.svg", alt: "BRAC Bank logo" },
                    ],
                    points: [
                        "Automated internal banking workflows with Python, Selenium, and PyAutoGUI, reducing manual processing time by about 70%.",
                        "Built a computer-vision utility to extract passport and ID photos from scanned PDF/TIFF documents, improving processing speed by about 50%.",
                        "Supported debugging, testing, and automation of repetitive operational tasks for the technology division.",
                    ],
                },
            ],
            projects: [
                {
                    title: "Agrani Bank Remittance App",
                    category: "Fintech",
                    type: "Banking and remittance",
                    period: "May 2024 - Present",
                    stack: "Laravel REST API, Vue.js, MySQL, Redis, Firebase, MQTT, XML/SOAP, FPX",
                    accent: "#0f766e",
                    links: [
                        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.agranibank.app.malaysia" },
                    ],
                    points: [
                        "Built Laravel APIs for remitter registration, beneficiary management, transaction workflows, OTP verification, device binding, and notifications.",
                        "Integrated Agrani Bank XML/SOAP services for core banking data synchronization and transaction updates.",
                        "Implemented FPX payment gateway workflows and multilingual Vue.js screens connected to production APIs.",
                    ],
                },
                {
                    title: "Laopay Mobile Financial Service Application",
                    category: "Fintech",
                    type: "Payments and wallet",
                    period: "July 2025 - Present",
                    stack: "Laravel API, wallet flows, QR payments, OAuth, Redis queues, Firebase, MQTT",
                    accent: "#2456a6",
                    links: [
                        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=app.laopay" },
                    ],
                    points: [
                        "Fixed wallet and merchant transaction logic, balance calculations, onboarding issues, and production payment edge cases for a 50k+ user system.",
                        "Implemented EMV QR payment workflows including static QR, variable-amount QR, CRC validation, receipt generation, and encrypted API communication.",
                        "Automated onboarding, notification, retry, and operational workflows using Redis queues, Firebase, and MQTT.",
                    ],
                },
                {
                    title: "Central City Hotel Kuala Lumpur Malaysia Booking & Marketing Website",
                    category: "Hospitality",
                    type: "Client delivery",
                    period: "January 2026 - Present",
                    stack: "Laravel 12, Blade, Filament, MySQL, Vite, queues, SEO, visitor analytics",
                    accent: "#b56718",
                    links: [
                        { label: "Live website", href: "https://centralcityhotelkl.my" },
                    ],
                    points: [
                        "Built and launched a production website for a 102-room Kuala Lumpur hotel with rooms, restaurant, gallery, nearby attractions, FAQ, contact, and policy pages.",
                        "Implemented SEO metadata, Open Graph tags, schema markup, canonical URLs, XML sitemap generation, WhatsApp enquiry flow, country-code handling, and automated emails.",
                        "Created a Filament admin panel with contact management, visitor logs, and a 7-widget analytics dashboard.",
                    ],
                },
                {
                    title: "Swiss Hotel Kuala Lumpur Malaysia Booking & Marketing Website",
                    category: "Hospitality",
                    type: "SEO platform",
                    period: "February 2026 - Present",
                    stack: "Laravel 12, Blade, Filament, MySQL, structured data, responsive images",
                    accent: "#8e3564",
                    links: [
                        { label: "Live website", href: "https://swisshotelkl.com" },
                    ],
                    points: [
                        "Built hotel pages for rooms, gallery, nearby attractions, FAQ, policies, contact, and sitemap generation.",
                        "Implemented schema.org structured data for hotel, room, gallery, FAQ, breadcrumbs, and nearby attraction discovery.",
                        "Added contact management, visitor analytics, device detection, GeoIP-aware capture, and optimized responsive image delivery.",
                    ],
                },
                {
                    title: "Blood Donation App",
                    category: "Healthcare",
                    type: "Health tech",
                    period: "June 2023 - Present",
                    stack: "Laravel REST API, Vue.js, Capacitor, MySQL, Firebase, Redis",
                    accent: "#b13d4d",
                    links: [
                        { label: "Live system", href: "http://45.249.101.49:8093" },
                    ],
                    points: [
                        "Built donor registration, live donor search, multilingual UI, secure API communication, and mobile-friendly workflows.",
                        "Added geolocation-aware search, Firebase push notifications, queued SMS/email alerts, and admin-side donor management.",
                    ],
                },
            ],
            skillGroups: [
                {
                    title: "Backend and APIs",
                    items: ["PHP", "Laravel", "REST APIs", "Passport", "Sanctum", "Middleware", "Policies", "Validation", "Service classes", "Repository pattern"],
                },
                {
                    title: "Frontend delivery",
                    items: ["Vue.js", "Vue Router", "Vuex", "TypeScript", "JavaScript", "Blade", "Vite", "Responsive UI", "Reusable components"],
                },
                {
                    title: "Data and infrastructure",
                    items: ["MySQL", "Query optimization", "Indexing", "Redis", "Docker", "Git", "GitHub", "Composer", "npm", "Postman"],
                },
                {
                    title: "Payments and integrations",
                    items: ["XML/SOAP", "FPX", "QR payments", "OAuth", "Firebase", "MQTT", "PDF generation", "Email/SMS workflows", "Queues"],
                },
            ],
            workModes: [
                {
                    number: "01",
                    title: "Remote worldwide",
                    copy: "Clear written updates, API examples, Git-based handoff, practical overlap from UTC+6, and async-first ownership.",
                },
                {
                    number: "02",
                    title: "Bangladesh local or hybrid",
                    copy: "Dhaka-based, comfortable with office collaboration, production support, sprint delivery, and direct stakeholder communication.",
                },
                {
                    number: "03",
                    title: "Visa-supported on-site abroad",
                    copy: "Open to international relocation when visa sponsorship or work authorization support is available.",
                },
            ],
        };
    },
    computed: {
        projectCategories() {
            return ["All", ...new Set(this.projects.map((project) => project.category))];
        },
        filteredProjects() {
            if (this.activeCategory === "All") {
                return this.projects;
            }

            return this.projects.filter((project) => project.category === this.activeCategory);
        },
    },
    methods: {
        scrollTo(id) {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        },
    },
}).mount("#app");
