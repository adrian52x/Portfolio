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
  name: 'Name',
  lastName: 'LASTNAME',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!',
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
      name: "Car Parking Booking System",
      period: {
        from: new Date()
      },
      images: [ "OAK/OAK-home.jpg", "OAK/OAK-map.jpg", "OAK/OAK-map2.jpg", "OAK/OAK-parkingSlots.jpg", "OAK/OAK-profile.jpg", "OAK/OAK-chat.jpg" ],
      technologies: [Technologies.Svelte, Technologies.TypeScript],
      type: "Website Template"
    },

    {
      color: '#ff3e00',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "C19 Test Center",
      period: {
        from: new Date(),

      },
      images: [ "C19/C19-home.png" ],
      technologies: [Technologies.Svelte, Technologies.ExpressJs],
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