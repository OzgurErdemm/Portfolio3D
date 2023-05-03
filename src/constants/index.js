import {
  mobile,
  backend,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
  azure,
  dotnet,
  cs,
  java,
  mssql,
  tekmetal,
  kahvesokagi,
  networkakademi
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  
  
];

const technologies = [
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
    name: "mssql",
    icon: mssql,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "cs",
    icon: cs,
  },

];

const experiences = [
  
  {
    title: "Software Developer Intern",
    company_name: "Network Akademi",
    icon: networkakademi,
    iconBg: "#FFF",
    date: "Feb 2023 - Current",
    points: [
      "This bootcamp was financed by the Turkey Employemnt Agency Under the Ministry of Labour and Social Security",
      "-Introduction to programming with C# and OOP.",
      "-Windows Desktop App.Development.",
      "-Database Management with MSSQL.",
      "-HTML,CSS,Javascript,Bootstrap.",
      "-Web Development with ReactJS,Jquerry.",
      "-RestFul Web API with NodeJS.",
      "-RestFul Web API with .Net Core",
    ],
  },{
    title: "Manufacturing - Quality Control Engineer",
    company_name: "TEK METAL",
    icon: tekmetal,
    iconBg: "#FFF",
    date: "August 2022 - February 2023",
    points: [
      "I took part in the installation of the drying and ventilation facility in Balıkesir Kastamonu Integrated Facilt.",
      "The materials manufactured during the project phase were checked.",
      "Project folow up.",      
    ],
  },
  {
    title: "Cheff",
    company_name: "Kahve Sokağı",
    icon: kahvesokagi,
    iconBg: "#FFF",
    date: "March 2019 - August 2020",
    points: [
      "I have worked in many service sectors before, but here I did my first job as a Head Chef and improved myself more.",
      "Cooking is a passion for me and it has a strategic place in my life. In this process, I learned to act together with my teammates and to act in accordance with teamwork, and I improved myself thoroughly.",
      "Since it is a very busy restaurant, I think it adds crisis control ability to myself in busy situations.",
      
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Özgür proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Özgür does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Özgür optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };