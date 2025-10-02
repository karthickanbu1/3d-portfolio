import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Modern UI design",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Python Developer",
    companyName: "inLustro",
    icon: tesla,
    iconBg: "#383E56",
    date: "January 2024 - March 2024",
    points: [
      "Implemented data visualization techniques using Matplotlib and Seaborn to present insights clearly.",
      "Wrote modular and reusable Python code to streamline workflows and reduce redundancy.",
      "Collaborated with the team to automate repetitive tasks, improving productivity by reducing manual effort.",
      "Assisted in debugging and optimizing existing Python code for better performance and scalability.",
    ],
  },
  {
    title: "React Developer",
    companyName: "Thirdvizion Labs Private Limited",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "July 2025 - October 2025",
    points: [
      "Worked collaboratively on the company website, resolving Django–React API integration and organizing file structures for components and pages",
      "Contributed to a real-time construction project, collaborating with UI/UX designers to build a fully immersive,interactive website leveraging React, Three.js, GSAP, and GSAP plugins for advanced animations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented Git workflow with push, pull, and version control to streamline development across the team.",
    ],
  },
 

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "The Complete Python training",
    name: "IIT BOMBAY",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The Complete Front-End Web Development",
    name: "Udemy",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
 {
    testimonial:
      "The Complete React Course.",
    name: "Simplilearn",
    designation: "",
    company: "",
    image: "https://www.solidbackgrounds.com/3840x2160-dark-blue-solid-color-background.html",
  },
   {
    testimonial:
      "The Complete Redux Toolkit",
    name: "Linkedin",
    designation: "",
    company: "",
    image: "https://www.solidbackgrounds.com/3840x2160-dark-blue-solid-color-background.html",
  },
];

const projects: TProject[] = [
  {
    name: "Learning Management System",
    description:
      "Developed a full-featured LMS with authentication, course management, assignment dashboard, and integrated chatbot ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide ,
    sourceCodeLink: "https://github.com/karthickanbu1",
  },
  {
    name: "Futuristic three Dimension Butterfly AI Portal",
    description:
      "Implemented interactive 3D GLTF butterfly models and animations using Three.js and GSAP, ensuring mobileresponsiveness  ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/karthickanbu1",
  },
  {
    name: "(ERP) Enterprise Resource Planning Software",
    description:
      "Developed a full-stack Enterprise Resource Planning (ERP) application to streamline business operations and improve workflow efficiency.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/karthickanbu1",
  },
];

export { services, technologies, experiences, testimonials, projects };
