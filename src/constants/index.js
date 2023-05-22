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
  wordpress,
  metisa,
  seokar,
  freelancer,
  elementor,
  bootstrap,
  githubs,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "WordPress Theme",
    icon: backend,
  },
  {
    title: "Responsive & Clean Code",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Elementor",
    icon: elementor,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "GitHub",
    icon: githubs,
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
];

const experiences = [
  {
    title: "Teaching Wordpress & Plugins",
    company_name: "Elm Safir",
    icon: wordpress,
    iconBg: "#383E56",
    date: "May 2020 - August 2021",
    points: [
      "I held in-person meetings and remote courses on website design on the WordPress platform and working with HTML and CSS.",
      "Implementing responsive design.",
      "Website design in WordPress platform with Elementor plugin and work with WooCommerce.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "May 2020 - Today",
    points: [
      "Designing WordPress website and working with front-end frameworks like React Using different libraries such as tailwindcss, bootstrap and three.js",
      "Collaborating with cross-functional teams including designers, SEO managers, and other developers to create high-quality websites.",
      "Implementing fully responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Website & UI/UX Designer",
    company_name: "Metisa",
    icon: metisa,
    iconBg: "black",
    date: "September 2021 - February 2022",
    points: [
      "I was responsible for designing WordPress sites and UI/UX designs, and I was very active in designing in these two positions",
      "Working with figma tools for UI/UX designs.",
      "And I also had a lot of activity in the field of R&D (Research & Development).",
      "Participating in design meetings and developing new ideas for the team.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Metisa",
    icon: metisa,
    iconBg: "black",
    date: "February 2022 - January 2023",
    points: [
      "Developing wordpress theme using Front-End skill and other related technologies.",
      "After completing the cooperation with Elm Safir digital marketing company, I decided to increase the Web knowledge and increase my working knowledge. So that self-taught and by creating interest on my front-end coding skills increased a lot.",
      "The skills I used as a front-end developer and website designer are: HTML, CSS, JS, Bootstrap, JQuery, TailwindCSS, Sass, Swiperjs, Git & GitHub .",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "SeoKar",
    icon: seokar,
    iconBg: "#383E56",
    date: "January 2023 - April 2023",
    points: [
      "After working with Metisa's digital marketing team, I was looking to increase my work level and went to a bigger and more well-known company called SEOKAR.",
      "The skills I used as a front-end developer and website designer are: HTML, CSS, JS, Bootstrap, JQuery, TailwindCSS, Sass, Swiperjs, Git & GitHub .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I experienced more tasks to perform as well as a higher and better workload.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
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
