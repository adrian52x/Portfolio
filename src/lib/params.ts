import { EmploymentType, Technologies, Assets } from "./utils";
import type { CareerParams, HomeParams, NavBarParams, PersonalProjectsParams, ResumePageParams } from "./utils";

export const PortfolioTitle = 'Slick template with Svelte'

export const NavBar: NavBarParams = {
  home: 'Home',
  personal: 'Personal Projects',
  career: 'Professional Experience',
  resume: 'Resume',
}

export const Home: HomeParams = {
  title: 'Home Page',
  name: 'Adrian',
  lastName: 'Enachi',
  description: 'TO DO: add missing icons for technologies, add links, add projects descriptions, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    stackoverflow: 'https://stackoverflow.com/'
  },
  skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS]
}

export const PersonalProjects: PersonalProjectsParams = {
  title: 'Personal Projects',
  items: [
    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Personal Portfolio",
      period: {
        from: new Date()
      },
      images: [  ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.TypeScript, Technologies.CSS, Technologies.Tailwind],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Digital Floor Plan 2D",
      period: {
        from: new Date()
      },
      images: [ "FloorPlan/home.jpg", "FloorPlan/buildings.jpg", "FloorPlan/vat83a.jpg", "FloorPlan/4th floor.jpg", "FloorPlan/import.jpg", "FloorPlan/export.jpg" ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.Tailwind, Technologies.MongoDB],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Car Parking Booking System",
      period: {
        from: new Date()
      },
      images: [ "OAK/OAK-home.jpg", "OAK/OAK-map.jpg", "OAK/OAK-map2.jpg", "OAK/OAK-parkingSlots.jpg", "OAK/OAK-profile.jpg", "OAK/OAK-chat.jpg" ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.Tailwind, Technologies.MongoDB],
      type: "Website Template"
    },

    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Webshop",
      period: {
        from: new Date()
      },
      images: [ "webshop/1.png", "webshop/2.png", "webshop/3.png", "webshop/4.png", "webshop/5.png", ],
      technologies: [Technologies.Svelte, Technologies.JavaScript, Technologies.ExpressJs, Technologies.HTML, Technologies.CSS, Technologies.MongoDB],
      type: "Website Template"
    },

    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.JavaScript,
      name: "Cinema App",
      period: {
        from: new Date()
      },
      images: [  ],
      technologies: [Technologies.Java, Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
      type: "Website Template"
    },

    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Java,
      name: "C19 Test Center",
      period: {
        from: new Date(),

      },
      images: [ "C19/C19-home.png", "C19/C19-appointment.png", "C19/C19-manage.png", "C19/C19-profile.png",  ],
      technologies: [Technologies.Java, Technologies.HTML, Technologies.CSS],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.VueJs,
      name: "Pokemon App",
      period: {
        from: new Date()
      },
      images: [ "pokemonApp/1.png", "pokemonApp/2.png", ],
      technologies: [Technologies.VueJs, Technologies.JavaScript, Technologies.CSS],
      type: "Website Template"
    },
    {
      color: '#1181d1',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Python,
      name: "Image Classifier (Handwritten digits)",
      period: {
        from: new Date()
      },
      images: [ "ML/1.png" ],
      technologies: [Technologies.Python, Technologies.HTML],
      type: "Website Template"
    },
  ]
}

export const ProfessionalCareerParams: CareerParams = {
  title: 'Professional Experience',
  items: [{
    company: { logo: Assets.Unknown, name: 'Home' },
    description: "Creating awesome applications for customers.",
    employmentType: EmploymentType.Freelance,
    industry: 'Software Development',
    location: 'Home',
    period: { from: new Date() },
    skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
    title: 'Freelancer'
  }]
}

export const ResumeParams: ResumePageParams = {
  title: 'Resumé',
  cv: ''
}