// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-pramiti-sarker",
    title: "Pramiti Sarker",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Reflections on ergonomics research, human performance, and academic practice",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Representative academic portfolio in occupational ergonomics, biomechanics, and human factors engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research, methodological tooling, and intervention evaluation efforts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "Curriculum Vitae of Dr. Pramiti Sarker – Assistant Professor, Industrial &amp; Management Systems Engineering, West Virginia University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Lab and academic updates – publications, presentations, milestones, and opportunities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses, workshops, and educational activities in ergonomics, human factors, and optimization engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-profile",
          title: "Profile",
          description: "Research focus and professional background",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "Reading log – ergonomics, human factors, biomechanics, productivity, and some fiction for balance",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-the-hidden-cost-of-looking-down-what-30-of-neck-flexion-really-means-for-workers",
        
          title: "The Hidden Cost of Looking Down: What 30° of Neck Flexion Really Means...",
        
        description: "Exploring the critical threshold for neck flexion in occupational settings and why your work posture matters more than you think.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/neck-flexion-workplace-safety/";
          
        },
      },{id: "post-emg-insights-why-your-muscles-tell-a-different-story-than-you-think",
        
          title: "EMG Insights: Why Your Muscles Tell a Different Story Than You Think",
        
        description: "Diving into electromyography research and what muscle fatigue patterns reveal about workplace design and break strategies.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/emg-muscle-fatigue-insights/";
          
        },
      },{id: "post-when-inventory-theory-meets-ergonomics-a-novel-approach-to-work-rest-scheduling",
        
          title: "When Inventory Theory Meets Ergonomics: A Novel Approach to Work-Rest Scheduling",
        
        description: "Exploring how mathematical models from supply chain management can revolutionize workplace fatigue management and optimize human performance.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/inventory-theory-meets-ergonomics/";
          
        },
      },{id: "post-the-hidden-science-of-break-scheduling-why-timing-matters-more-than-duration",
        
          title: "The Hidden Science of Break Scheduling: Why Timing Matters More Than Duration",
        
        description: "Uncovering the neuroscience and biomechanics behind effective break scheduling strategies for reducing neck and shoulder fatigue in the modern workplace.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/hidden-science-break-scheduling/";
          
        },
      },{id: "post-from-iowa-to-wvu-lessons-learned-in-academic-transitions",
        
          title: "From Iowa to WVU: Lessons Learned in Academic Transitions",
        
        description: "Reflections on moving between institutions, building research continuity, and creating inclusive lab cultures in industrial engineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/academic-transitions-lessons/";
          
        },
      },{id: "post-from-bangladesh-to-iowa-bridging-engineering-optimization-across-continents",
        
          title: "From Bangladesh to Iowa: Bridging Engineering Optimization Across Continents",
        
        description: "A personal journey through multidisciplinary design optimization, from injection molding in Dhaka to work-rest scheduling in Ames, and the universal principles that connect diverse engineering challenges.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/bangladesh-to-iowa-optimization-journey/";
          
        },
      },{id: "post-the-emg-chronicles-decoding-the-language-of-muscle-fatigue",
        
          title: "The EMG Chronicles: Decoding the Language of Muscle Fatigue",
        
        description: "Diving deep into electromyography (EMG) research methods, from signal processing challenges to breakthrough insights in fatigue assessment and the future of wearable monitoring technology.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/emg-chronicles-muscle-fatigue/";
          
        },
      },{id: "post-the-weight-of-protection-how-ppe-affects-human-performance",
        
          title: "The Weight of Protection: How PPE Affects Human Performance",
        
        description: "Investigating the hidden costs of personal protective equipment on muscle fatigue and performance, with implications for healthcare workers, first responders, and industrial workers.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/weight-of-protection-ppe-performance/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-work-rest-scheduling-methodology-adopted-by-three-major-manufacturing-companies-proud-to-see-inventory-control-theory-applications-translating-to-real-world-impact",
          title: 'Work-rest scheduling methodology adopted by three major manufacturing companies! Proud to see inventory...',
          description: "",
          section: "News",},{id: "news-ai-enhanced-ergonomic-assessment-initiative-launched",
          title: 'AI-Enhanced Ergonomic Assessment Initiative Launched',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-new-systematic-review-on-neck-flexion-and-workplace-ergonomics-published-in-ergonomics-journal-establishing-evidence-based-angular-thresholds-for-occupational-risk-assessment",
          title: 'New systematic review on neck flexion and workplace ergonomics published in Ergonomics journal,...',
          description: "",
          section: "News",},{id: "news-presenting-inventory-control-theory-applications-in-work-rest-scheduling-at-the-iea-world-congress-2024-excited-to-share-mathematical-approaches-to-human-performance-optimization",
          title: 'Presenting “Inventory Control Theory Applications in Work-Rest Scheduling” at the IEA World Congress...',
          description: "",
          section: "News",},{id: "news-emg-fatigue-assessment-framework-published",
          title: 'EMG Fatigue Assessment Framework Published',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-grant-awarded-for-multi-year-ppe-performance-optimization-study-research-will-focus-on-reducing-protective-equipment-burden-while-maintaining-safety-standards-in-healthcare-settings",
          title: 'Grant awarded for multi-year PPE performance optimization study! Research will focus on reducing...',
          description: "",
          section: "News",},{id: "news-new-collaboration-launched-with-healthcare-systems-to-implement-evidence-based-break-scheduling-protocols-for-surgical-teams-translating-work-rest-optimization-research-into-clinical-practice",
          title: 'New collaboration launched with healthcare systems to implement evidence-based break scheduling protocols for...',
          description: "",
          section: "News",},{id: "projects-workrest-optimizer",
          title: 'WorkRest Optimizer',
          description: "Mathematical modeling of work-rest scheduling using inventory control theory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-emg-fatigue-analyzer",
          title: 'EMG Fatigue Analyzer',
          description: "Advanced signal processing toolkit for electromyography-based fatigue assessment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-neck-flexion-assessment-platform",
          title: 'Neck Flexion Assessment Platform',
          description: "Multi-modal workload assessment system for occupational neck strain evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ppe-performance-impact-analyzer",
          title: 'PPE Performance Impact Analyzer',
          description: "Comprehensive assessment of protective equipment effects on human performance and fatigue",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-multidisciplinary-optimization-toolkit",
          title: 'Multidisciplinary Optimization Toolkit',
          description: "Advanced optimization algorithms for injection molding and manufacturing under uncertainty",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%73%30%30%33%35@%6D%61%69%6C.%77%76%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/psarker06", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pramiti-sarker", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Pramiti-Sarker/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AmtF1MwAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
