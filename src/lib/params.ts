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
  description: 'I am a highly motivated computer science graduate with a strong passion for the IT industry, always eager to learn and adapt to new technologies. Possessing a detail-oriented mindset, I am capable of working effectively both independently and in a team. With my strong organizational abilities, I have successfully managed multiple academic projects, and I am committed to utilizing my skills to contribute to the mission of any company and help others along the way.',
  links: {
    github: 'https://github.com/adrian52x',
    linkedin: 'https://www.linkedin.com/in/adrian-enachi-314955205/'
  },
  skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS,  Technologies.Svelte,  Technologies.NodeJs,  Technologies.Java,  Technologies.SpringBoot, Technologies.Docker,  Technologies.MySQL,  Technologies.MongoDB,  Technologies.ML]
}

export const PersonalProjects: PersonalProjectsParams = {
  title: 'Personal Projects',
  items: [
    {
      color: '#1181d1',
      description: ["The Floor Plan system is a web-based interface developed for AGC Biologics (still in progress).", "Frontend: Svelte, HTML, Tailwindcss", "Backend: NodeJS, ExpressJS", "Database: MongoDB", "2D Reactive Map of building's floors", "Map Integration", "Data processing: Excel -> JSON & vice-versa"],
      links: [{ to: 'https://github.com/adrian52x/Floor-Plan', label: 'Frontend' }, { to: 'https://github.com/adrian52x/Floor-Plan_backend', label: 'Backend' }],
      logo: Assets.Svelte,
      name: "Digital Floor Plan 2D",
      period: {
        from: new Date(2023, 1),
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
      description: ["Current project your viewing", "Technologies: Svelte, JavaScript, TypeScript, Tailwindcss"],
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
    company: { logo: Assets.Unknown, name: '' },
    description: ["Currently developing `Digital Floor Plan 2D` for AGC Biologics"],
    employmentType: EmploymentType.Freelance,
    industry: 'Software Development',
    location: 'Denmark',
    period: { from: new Date(2023, 1) },
    skills: [Technologies.JavaScript, Technologies.Svelte, Technologies.NodeJs, Technologies.Tailwind, Technologies.MongoDB],
    title: 'Freelancer'
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
    period: { from: new Date(2022, 2) },
    skills: [],
    title: 'Student IT Assistant'
  },
  {
    company: { logo: Assets.NewBanking, name: 'NewBanking Identity' },
    description: [
      "Implementing new features", 
      "E2E testing",
      "Unit testing (Jest)",
      "Bug fixing",
      "Learnt new technologies: Vue.js / Bitbucket / CircleCI / Jira ",
    ],
    employmentType: EmploymentType.Internship, 
    industry: 'Software Development',
    location: 'Copenhagen, Denmark',
    period: { from: new Date(2022, 7), to: new Date(2022, 9)},
    skills: [Technologies.JavaScript, Technologies.VueJs, Technologies.MySQL, Technologies.CSS, Technologies.HTML],
    title: 'Frontend Developer'
  },
]
}

export const DocsParams: DocsPageParams = {
  title: 'Docs',
  cv: 'docs/Adrian_Enachi_CV.pdf',
  diploma: 'docs/Adrian_Enachi_Diploma.pdf',
  docsUpdatedOn: new Date(2023, 2, 16) // 16 March 2023
}