import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  team,
  gadget,
  coupon,
 gamepulse,
  house,
  donate,
  architect,
  bank,
  pet
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
const gitHubLinkedIn=[
  {
    githublink: "https://github.com/Muhammad-Mirazul-Hasan-Rafee",
    linkedinlink: "https://www.linkedin.com/in/muhammad-mirazul-hasan-rafee",
  },
]
const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "User Interface",
    icon: mobile,
  },
  {
    title: "Backend Developer(Learning phase)",
    icon: backend,
  },
  {
    title: "ER Diagram",
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
    name: "React JS",
    icon: reactjs,
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
];

const smallProjects = [
  {
    title: "g3-architects-website",
    subtitle: "Simple layout",
    icon: architect,
    iconBg: "#383E56",
    date: "August 10, 2024",
    points: [
      "Developed a simple web application layout using html and css.",
    
    ],
    github: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/g3-architect-website",
    livesite: "https://g3-architects-global.netlify.app",
  },
  {
    title: "House-Design-Website",
    subtitle: "Responsive layout",
    icon: house,
    iconBg: "#383E56",
    date: "August 23, 2024",
    points: [
      "Developed a simple page and maintained it's responsiveness.",  
    ],
    github: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/House-Design-website",
    livesite: "https://house-design-approach.netlify.app",
  },
  {
    title: "Donate Bangladesh",
    subtitle: "JavaScript-Document Object Model",
    icon: donate,
    iconBg: "#E6DEDD",
    date: "November 7, 2024",
    points: [
      "Built and maintained web application for donation purpose.",
      "JavaScript DOM had been applied in this context.",
     
    ],
    github: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/donate-Bangladesh",
    livesite: "https://cooperational-donate-bangladesh.netlify.app",
  },
  {
    title: "Bank-deposit-withdraw-balance",
    subtitle: "Simple Bank Calculation Thought using DOM",
    icon: bank,
    iconBg: "#E6DEDD",
    date: "March 8, 2024",
    points: [
      "This site contains simple design with the idea of deposit and withdraw account balance.",
      "The functionalities were created with document object model.",
    
    ],
    github: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/Bank-deposit-withdraw-balance",
    livesite: "https://bankdepositecalculation.netlify.app",
  },
  {
    title: "Pet Adoption Site",
    subtitle: "Integration Api With Intermediate JavaScript",
    icon: pet,
    iconBg: "#E6DEDD",
    date: "November 24, 2024",
    points: [
      "An interesting site for pet lovers!",
      "With the combination of api as well as intermediate javascript this site allows user to choose their pets , see info and save the images of the pets. ",
   
    ],
    github: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/pet-adoption-site",
    livesite: "https://pet-adoption-jenius.netlify.app",
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "My Special Team",
    description:
      "Web-based platform that allows authority to select their team players and can able to group them in a different section. Players bidding price and details are included also. The main purpose is to select the best eleven.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react_router",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: team,
    source_code_link: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/My-Special-Team",
    live_site_link: "https://special-team-knights.netlify.app/",
  },
  {
    name: "Gadget Heaven",
    description:
      "Web application that enables users to select their specific category wise items and also ensures to save them at the cartlist wishlist as well as locally. Statistics are shown also for particular category.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: gadget,
    source_code_link: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/Gadget-Heaven",
    live_site_link: "https://gadget-heaven-global.netlify.app/",
  },
  {
    name: "Coupon Collection",
    description:
      "A comprehensive coupon collecting platform that allows users to book coupons, show details for each coupon which are available. Private Routing , Context Api and Authentication are used here in this site",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react_router",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: coupon,
    source_code_link: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/coupon-collecting-app",
    live_site_link: "https://coupon-collections.netlify.app",
  },
  {
    name: "gamepulse Web App",
    description:
      "A modern, interactivegamepulse review platform where users can create, manage, and explore reviews with a dynamic UI, smooth animations, secure authentication, and real-time features.Built for performance, clarity, and an engaging user experience.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "node js & express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb & .env",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image:gamepulse,
    source_code_link: "https://github.com/Muhammad-Mirazul-Hasan-Rafee/gamepulse-client",
    live_site_link: "https://gamepulse-user.vercel.app",
  },
];

export { services, technologies, smallProjects, projects };
