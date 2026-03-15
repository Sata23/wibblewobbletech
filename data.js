// Update your profile information here to automatically reflect on the website
const profileData = {
    name: "Santanu Sarker",
    headline: "AI Based Product Solution Design Advisor & Developer",
    bio: "I architect cost-effective, low-code, and ethical AI product implementations. Leveraging Claude, Mistral, Huggingface, Crew AI, Gemini, and Mastra, I design advanced AI solutions. Using Figma, Python, JavaScript, HTML/CSS, and JSON, I deliver performant, visually stunning applications that seamlessly integrate AI into complex real-world workflows.",
    contactEmail: "shantanuscreation@gmail.com",
    calendarLink: "#", // Update this with your Google Calendar Appointment API / Scheduling link
    linkedinUrl: "https://www.linkedin.com/in/santanusarker/",
    servicesUrl: "https://www.linkedin.com/in/santanusarker/details/services/",
    stats: {
        clients: "150+",
        projects: "Worldwide projects"
    },
    portfolio: [
        {
            title: "Personal Nurse App",
            category: "Voice AI • Healthcare Application",
            icon: "medical_services",
            iconColor: "text-emerald-400",
            thumbnail: "assets/images/media__1773573489236.png",
            caseStudy: "Designed a voice-interactive health chatbot app featuring a glassmorphic UI. Engineered login flows, location/camera permission requests, conversational health queries (BP, sleep, meds), and an integration to find, display, and automatically call nearby hospitals via cloud infrastructure (Firebase)."
        },
        {
            title: "AI Health Predictor",
            category: "LLM Diagnostics • Data Analytics",
            icon: "psychology_alt",
            iconColor: "text-rose-400",
            thumbnail: "assets/images/test_diagram_agentic_ai.png",
            caseStudy: "Built a predictive health application using Gemini AI Studio, Mastra, and the Groq API. The system orchestrates clinical logic through autonomous agents, pulling real-world diagnostics to provide early-warning health risk assessments."
        },
        {
            title: "LinkedIn Auto-Publisher",
            category: "Social Automation • Visual Generation",
            icon: "campaign",
            iconColor: "text-blue-400",
            thumbnail: "assets/images/test_infographic_geopolitical.png",
            caseStudy: "Engineered a Python-based automation pipeline for generating high-engagement LinkedIn content. Leveraged the Groq API for content analysis and Veo 3 / Nano Banana for high-resolution, neon glassmorphism data visualizations (e.g., election analytics overlays)."
        },
        {
            title: "Finance Dashboard",
            category: "Analytics UI • Fintech",
            icon: "monitoring",
            iconColor: "text-indigo-400",
            thumbnail: "assets/images/dryrun_visual_2026-03-02.png",
            caseStudy: "Developed a premium Real-Time trading interface featuring complex data visualizations, stock alerts, and a deeply integrated dark-mode glassmorphism aesthetic to improve user focus during high-frequency trading."
        },
        {
            title: "AI Based Website Development Using AI",
            category: "Professional Portfolio • Web Development",
            icon: "web",
            iconColor: "text-primary",
            thumbnail: "assets/images/Profile.png",
            caseStudy: "Designed and developed this fluidic, responsive portfolio. Built with vanilla HTML/CSS/JS and Tailwind, avoiding heavy web frameworks to ensure lightning-fast load times. Features custom scroll-spies, 3D tilt interactions, and dynamic profile data binding."
        },
        {
            title: "IoT Product Development",
            category: "Hardware Integration • Connected Devices",
            icon: "settings_input_antenna",
            iconColor: "text-amber-400",
            thumbnail: "", // Provide an image path later if needed
            caseStudy: "Architected and developed a robust Internet of Things ecosystem. Focused on seamless hardware-to-software integration, real-time data streaming logic, and secure device management workflows to enable smart connectivity."
        },
        {
            title: "Multi-Agentic AI Product Development",
            category: "Agent Orchestration • AI Architecture",
            icon: "groups_3",
            iconColor: "text-purple-400",
            thumbnail: "", // Provide an image path later if needed
            caseStudy: "Designed and implemented sophisticated multi-agent AI architectures capable of autonomous reasoning and collaborative task execution. Orchestrated LLMs and tool integrations to solve complex automation workflows with minimal human oversight."
        }
    ],
    experience: [
        {
            year: "Latest",
            role: "Senior AI Product Solution Architect & Developer",
            company: "Shell",
            icon: "work"
        },
        {
            year: "Previous",
            role: "Chief Data Officer",
            company: "Family Start-up",
            icon: "data_exploration"
        },
        {
            year: "Previous",
            role: "Solution Architect",
            company: "Wipro",
            icon: "architecture"
        },
        {
            year: "Previous",
            role: "Solution Architect & Project Manager",
            company: "TCS",
            icon: "account_tree"
        },
        {
            year: "Early Career",
            role: "Business Analyst",
            company: "Infosys",
            icon: "analytics"
        }
    ]
};

// Initialize data into HTML on load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Update text and link bindings
    const elementsToUpdate = document.querySelectorAll('[data-profile]');
    
    elementsToUpdate.forEach(el => {
        const key = el.getAttribute('data-profile');
        if (profileData[key]) {
            if (el.tagName === 'A' && key.includes('Url')) {
                el.href = profileData[key];
            } else if (el.tagName === 'A' && key === 'contactEmail') {
                el.href = `mailto:${profileData[key]}`;
                el.innerHTML = `<span class="material-symbols-outlined">mail</span> ${profileData[key]}`;
            } else if (el.tagName === 'A' && key === 'calendarLink') {
                el.href = profileData[key];
            } else {
                el.textContent = profileData[key];
            }
        }
    });

    // 2. Render Projects Dynamically
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && profileData.portfolio) {
        profileData.portfolio.forEach((project, index) => {
            const cardHTML = `
                <div class="min-w-[400px] group cursor-pointer reveal-on-scroll">
                    <div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-background-dark/50 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-background-dark/80 group-hover:border-white/10">
                        
                        <!-- Large Center Icon -->
                        <div class="w-32 h-32 rounded-full bg-background-light/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/10">
                            <span class="material-symbols-outlined text-6xl ${project.iconColor}">${project.icon}</span>
                        </div>
                        
                        <!-- Hover Overlay with Button -->
                        <div class="absolute z-20 inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8 backdrop-blur-[2px]">
                            <button class="bg-primary hover:bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 cursor-pointer transition-colors shadow-lg shadow-primary/20 transform translate-y-4 group-hover:translate-y-0 duration-500" onclick="openCaseStudy(${index})">
                                View Project <span class="material-symbols-outlined text-sm">arrow_outward</span>
                            </button>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-1 group-hover:text-primary transition-colors">${project.title}</h3>
                    <p class="text-slate-500 text-sm">${project.category}</p>
                </div>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // 3. Render Timeline Dynamically
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer && profileData.experience) {
        profileData.experience.forEach((item, index) => {
            // Calculate blur and opacity for depth effect
            // Item 1 (Focused), Item 2 (blurred), etc.
            let opacityClass = "opacity-100";
            let blurClass = "blur-0";
            let bgClass = "bg-primary text-black shadow-[0_0_20px_rgba(37,106,244,0.5)]";
            let iconColor = "text-white";
            let textClass = "text-primary";
            
            if (index > 0) {
                // Dimmer, blurrier styles for older jobs
                const opacityVal = Math.max(20, 100 - (index * 25)); // 100, 75, 50, 25...
                opacityClass = `opacity-${opacityVal} hover:opacity-100`;
                blurClass = `blur-[${index * 1.5}px] hover:blur-0`;
                bgClass = "bg-slate-800";
                iconColor = "text-slate-400";
                textClass = "text-slate-500";
            }

            const itemHTML = `
                <div class="relative z-10 transition-all duration-500 flex flex-col items-center ${opacityClass} ${blurClass} group">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center border-4 border-background-dark mb-6 ${bgClass} transition-colors group-hover:bg-primary group-hover:text-black">
                        <span class="material-symbols-outlined text-xl ${iconColor} group-hover:text-white transition-colors">${item.icon}</span>
                    </div>
                    <div class="glass-card p-8 rounded-2xl text-center max-w-lg ${index === 0 ? 'shadow-xl border-primary/20' : 'group-hover:border-primary/20'} transition-colors">
                        <span class="${textClass} font-bold text-sm mb-2 block group-hover:text-primary transition-colors">${item.year}</span>
                        <h3 class="text-2xl font-bold mb-2">${item.role}</h3>
                        <p class="text-slate-400 font-medium mb-4">${item.company}</p>
                    </div>
                </div>
            `;
            timelineContainer.insertAdjacentHTML('beforeend', itemHTML);
        });
    }
});

// 3. Global Function to Open Case Study Modal
window.openCaseStudy = function(index) {
    const project = profileData.portfolio[index];
    const modal = document.getElementById('case-study-modal');
    if(modal && project) {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-category').textContent = project.category;
        document.getElementById('modal-description').textContent = project.caseStudy;
        document.getElementById('modal-icon').textContent = project.icon;
        document.getElementById('modal-icon').className = `material-symbols-outlined text-4xl ${project.iconColor}`;
        
        modal.classList.remove('hidden');
        // Small delay to allow display block to apply before animating opacity
        setTimeout(() => {
            modal.querySelector('.modal-overlay').classList.remove('opacity-0');
            modal.querySelector('.modal-content').classList.remove('translate-y-10', 'opacity-0', 'scale-95');
        }, 10);
    }
};

window.closeCaseStudy = function() {
    const modal = document.getElementById('case-study-modal');
    if(modal) {
        modal.querySelector('.modal-overlay').classList.add('opacity-0');
        modal.querySelector('.modal-content').classList.add('translate-y-10', 'opacity-0', 'scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Wait for transition
    }
};
