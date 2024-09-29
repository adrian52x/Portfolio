import { EmploymentType, Technologies, Assets } from "./utils";
import type { CareerParams, HomeParams, NavBarParams, PersonalProjectsParams, DocsPageParams } from "./utils";

export const PortfolioTitle = 'AE'

export const NavBar: NavBarParams = {
  home: 'Home',
  personal: 'Personal Projects',
  career: 'Professional Experience',
  docs: 'CV / Docs',
}

export const Home: HomeParams = {
  title: 'Home Page',
  name: 'Adrian',
  lastName: 'Enachi',
  description: `I am a highly motivated computer scientist with a strong passion for the IT industry, 
  always eager to learn and adapt to new technologies. 
  Creative problem-solver with a knack for thinking outside the box, curious by nature and committed to continuous learning. 
  Possessing a detail-oriented mindset, I am capable of working effectively both independently and in a team. 
  Strong organizational abilities with proven successes managing multiple academic projects and within the workplace.`,
  links: {
    github: 'https://github.com/adrian52x',
    linkedin: 'https://www.linkedin.com/in/adrian-enachi-314955205/'
  },
  skills: [Technologies.ReactJs, Technologies.JavaScript, Technologies.HTML, Technologies.CSS,  Technologies.Svelte,  Technologies.NodeJs,  Technologies.Java,  Technologies.SpringBoot, Technologies.Docker,  Technologies.MySQL,  Technologies.MongoDB,  Technologies.ML]
}

export const PersonalProjects: PersonalProjectsParams = {
  title: 'Personal Projects',
  items: [
    {
      color: '#1181d1',
      description: [
        "Details soon..."
        ],
      links: [{ to: 'https://github.com/adrian52x/Travel-Destinations', label: 'Github' }],
      logo: Assets.JavaScript,
      name: "Travel-Destinations",
      period: {
        from: new Date(2024, 8)
      },
      images: [],
      technologies: [Technologies.JavaScript, Technologies.NodeJs, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.MongoDB],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: [
        "Frontend: Next.js (React), HTML, Tailwindcss", 
        "Backend: NodeJS, ExpressJS", 
        "Database: MongoDB",
        "Webhooks: Stripe",
        "OAuth: Google",
        " ",
        "Startup project",
        "Project demo --->  https://ask-share.netlify.app/ ",
        "Project on hold..."  
        ],
      links: [{ to: 'https://github.com/adrian52x/Mentors-Marketplace-startup-', label: 'Github' }],
      logo: Assets.ReactJs,
      name: "Mentors-Marketplace - Startup project",
      period: {
        from: new Date(2023, 11),
        to: new Date(2024, 2)
      },
      images: [],
      technologies: [Technologies.ReactJs, Technologies.JavaScript, Technologies.NodeJs, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.Tailwind, Technologies.MongoDB],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: [
        "Frontend: Svelte, HTML, Tailwindcss", 
        "Backend: NodeJS, ExpressJS", 
        "Database: MongoDB",
        "Other tools: Ubuntu, Git, NGINX, PM2, Lunacy(UI/UX) ",
        "", "Features", "",
        "Interactive 2D floor plan",  
        "Departments view", 
        "Admin panel - CRUD for all entities", 
        "Data visualization of each room & add/remove items in the room", 
        "Reactive / real-time search functionality: Based on search input, it will give a list of instruments that are located on that specific floor and will highlight the rooms that contains those instruments.", 
        "Project demonstration (video) --->  https://screenpal.com/watch/c0Qo3pVCaPH " 
        ],
      links: [{ to: 'https://github.com/adrian52x/Floor-plan_v2', label: 'Frontend' }, { to: 'https://github.com/adrian52x/Floor-Plan_backend', label: 'Backend' }],
      logo: Assets.Svelte,
      name: "Digital Floor Plan 2D v2",
      period: {
        from: new Date(2023, 4),
        to: new Date(2023, 8)
      },
      images: [ "FloorPlanV2/10.JPG", "FloorPlanV2/1.JPG", "FloorPlanV2/2.JPG", "FloorPlanV2/3.JPG", "FloorPlanV2/4.jpg", "FloorPlanV2/5.JPG", "FloorPlanV2/6.JPG", "FloorPlanV2/7.JPG", "FloorPlanV2/8.JPG", "FloorPlanV2/9.JPG"],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.NodeJs, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.Tailwind, Technologies.MongoDB, Technologies.Nginx, Technologies.PM2],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: ["The Floor Plan system is a web-based interface developed for AGC Biologics", "Frontend: Svelte, HTML, Tailwindcss", "Backend: NodeJS, ExpressJS", "Database: MongoDB", "Interactive 2D floor plan", "Map Integration", "Data processing: Excel -> JSON & vice-versa"],
      links: [{ to: 'https://github.com/adrian52x/Floor-Plan', label: 'Frontend' }, { to: 'https://github.com/adrian52x/Floor-Plan_backend', label: 'Backend' }],
      logo: Assets.Svelte,
      name: "Digital Floor Plan 2D v1",
      period: {
        from: new Date(2023, 1),
        to: new Date(2023, 4)
      },
      images: [ "FloorPlan/home.jpg", "FloorPlan/buildings.jpg", "FloorPlan/vat83a.jpg", "FloorPlan/4th floor.jpg", "FloorPlan/import.jpg", "FloorPlan/export.jpg" ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.NodeJs, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.Tailwind, Technologies.MongoDB],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: [ "Group project (3)", "Frontend: Svelte, HTML, Tailwindcss", "Backend: NodeJS, ExpressJS", "Database: MongoDB", "Authorization & Authentication", "Others: Nodemailer, Map integration, Socket.io (for real time chat)"],
      links: [{ to: 'https://github.com/adrian52x/OAK', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Car Parking Booking System",
      period: {
        from: new Date(2022, 4),
        to: new Date(2022, 5)
      },
      images: [ "OAK/OAK-home.jpg", "OAK/OAK-map.jpg", "OAK/OAK-map2.jpg", "OAK/OAK-parkingSlots.jpg", "OAK/OAK-profile.jpg", "OAK/OAK-chat.jpg" ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.NodeJs, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.Tailwind, Technologies.MongoDB],
      type: "Website Template"
    },

    {
      color: '#1181d1',
      description: ["Frontend: Svelte, HTML, Tailwindcss", "Backend: NodeJS, ExpressJS", "Database: MongoDB", "Authorization & Authentication", "Others: Nodemailer"],
      links: [{ to: 'https://github.com/adrian52x/webshop-fullstack', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Webshop",
      period: {
        from: new Date(2022, 3),
        to: new Date(2022, 3),
      },
      images: [ "webshop/1.png", "webshop/2.png", "webshop/3.png", "webshop/4.png", "webshop/5.png", ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.NodeJs, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.MongoDB],
      type: "Website Template"
    },

    {
      color: '#1181d1',
      description: ["Frontend: Vanilla JavaScript, HTML, CSS", "Backend: Java, Springboot, JPA", "Database: MySQL", "CI/CD: Jenkins, Docker, AWS EC2"],
      links: [{ to: 'https://github.com/adrian52x/cinema-app', label: 'Backend' }, { to: 'https://github.com/KrishnaKEA/Kodak-Frontend-Cinemaxx', label: 'Frontend' }],
      logo: Assets.JavaScript,
      name: "Cinema App",
      period: {
        from: new Date(2021, 10),
        to: new Date(2021, 11),
      },
      images: [  ], 
      technologies: [Technologies.Java, Technologies.SpringBoot, Technologies.MySQL, Technologies.JavaScript, Technologies.HTML, Technologies.CSS, Technologies.Jenkins, Technologies.Docker, Technologies.Aws],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: ["Current website", "Technologies: Svelte, JavaScript, TypeScript, Tailwindcss"],
      links: [{ to: 'https://github.com/adrian52x/Portfolio', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Personal Portfolio",
      period: {
        from: new Date(2023, 2),
        to: new Date(2023, 2)
      },
      images: [  ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.TypeScript, Technologies.CSS, Technologies.Tailwind],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: ["Frontend: Thymeleaf, HTML, CSS", "Backend: Java, Springboot, JPA", "Database: MySQL", "Full CRUD app"],
      links: [{ to: 'https://github.com/adrian52x/C19-Test-Center', label: 'GitHub' }],
      logo: Assets.Java,
      name: "C19 Test Center",
      period: {
        from: new Date(2021, 4),
        to: new Date(2021, 5),

      }, 
      images: [ "C19/C19-home.png", "C19/C19-appointment.png", "C19/C19-manage.png", "C19/C19-profile.png",  ],
      technologies: [Technologies.Java, Technologies.SpringBoot, Technologies.MySQL, Technologies.Thymeleaf,  Technologies.HTML, Technologies.CSS],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: ["Used a pulbic API to build a Pokemon App with VueJS that displays data in a nice way"],
      links: [{ to: 'https://github.com/adrian52x/app', label: 'GitHub' }],
      logo: Assets.VueJs,
      name: "Pokemon App",
      period: {
        from: new Date(2022, 5),
        to: new Date(2022, 5),
      },
      images: [ "pokemonApp/1.png", "pokemonApp/2.png", ],
      technologies: [Technologies.VueJs, Technologies.JavaScript, Technologies.CSS],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: ["This project is a machine learning application that uses Convolutional Neural Networks (CNN) to recognize and classify handwritten digits. The application has been built using the Keras and TensorFlow frameworks in Python.", "Flask, a web application framework, has been used to create a user interface for the application."],
      links: [{ to: 'https://github.com/adrian52x/Neural-network-image-classifier', label: 'GitHub' }],
      logo: Assets.Python,
      name: "Image Classifier (Handwritten digits)",
      period: {
        from: new Date(2022, 4),
        to: new Date(2022, 4),
      },
      images: [ "ML/1.png" ],
      technologies: [Technologies.Python, Technologies.ML, Technologies.Flask, Technologies.HTML],
      type: "Website Template"
    },
  ]
}

export const ProfessionalCareerParams: CareerParams = {
  title: 'Professional Experience',
  items: [
    {
      company: { logo: Assets.Unknown, name: 'Scaletronic' },
      description: [
        "Built and maintained server-side applications using Node.js",
        "Designed and implemented complex automation workflows using Node-RED.",
        "Conducted unit testing using Mocha/Jest",
        "Managed deployment processes with CI/CD pipelines and GitHub Actions.",
        "Performed system administration tasks on Debian, including shell scripting.",
      ],
      employmentType: EmploymentType.FullTime,
      industry: 'Software Development',
      location: 'Skovlunde, Denmark',
      period: { from: new Date(2024, 2), to: new Date(2024, 8)},
      skills: [Technologies.TypeScript, Technologies.NodeJs, Technologies.Docker, Technologies.MySQL],
      title: 'Software Engineer'
    },
    {
    company: { logo: Assets.AgcBio, name: 'AGC Biologics' },
    description: [
      "Developed `Digital Floor Plan 2D` for AGC Biologics",
    ],
    employmentType: EmploymentType.Contract,
    industry: 'Software Development',
    location: 'Soeborg, Denmark',
    period: { from: new Date(2023, 1), to: new Date(2024, 2)},
    skills: [Technologies.JavaScript, Technologies.Svelte, Technologies.NodeJs, Technologies.Tailwind, Technologies.MongoDB],
    title: 'Software Engineer'
  },
  {
    company: { logo: Assets.AgcBio, name: 'AGC Biologics' },
    description: [
      "Day to day IT operation.", 
      "IT end user support 1st level - Talk staff through a series of actions, either face-to-face or over the phone, to help set up systems or resolve issues.",
      "Device enrollment of mobile phones/PCs to our employees.",
      "Install and configure computer hardware operating systems and applications.",
      "Troubleshoot system and network problems, diagnosing and solving hardware or software faults."
    ],
    employmentType: EmploymentType.PartTime,
    industry: 'Software Development',
    location: 'Soeborg, Denmark',
    period: { from: new Date(2022, 2), to: new Date(2023, 1)},
    skills: [],
    title: 'IT Support - Student Assistant'
  },
  {
    company: { logo: Assets.Unknown, name: 'Walor' },
    description: [
      "Developed an admin dashboard for clients using PHP (Laravel) and React", 
      "Integrated RESTful APIs."
    ],
    employmentType: EmploymentType.Internship, 
    industry: 'Software Development',
    location: 'Copenhagen, Denmark',
    period: { from: new Date(2024, 0), to: new Date(2024, 1)},
    skills: [Technologies.PHP, Technologies.ReactJs, Technologies.MySQL, Technologies.CSS, Technologies.HTML],
    title: 'Software Engineer'
  },
  {
    company: { logo: Assets.NewBanking, name: 'NewBanking Identity -- (new company name: Meo)' },
    description: [
      "Implementing new features", 
      "E2E testing",
      "Unit testing (Jest)",
      "Bug fixing",
      "Learnt new technologies: Vue.js / Bitbucket / CircleCI / Jira ",
      "Learnt to establish a good communication with UI/UX designer and Product Owner"
    ],
    employmentType: EmploymentType.Internship, 
    industry: 'Software Development',
    location: 'Copenhagen, Denmark',
    period: { from: new Date(2022, 7), to: new Date(2022, 9)},
    skills: [Technologies.JavaScript, Technologies.VueJs, Technologies.MySQL, Technologies.CSS, Technologies.HTML],
    title: 'Software Engineer'
  },
]
}

export const DocsParams: DocsPageParams = {
  title: 'Docs',
  cv: 'docs/CV_-_Adrian_Enachi_.pdf',
  diploma: 'docs/Diploma.pdf',
  docsUpdatedOn: new Date(2024, 0, 10) // 4 Sep 2023
}