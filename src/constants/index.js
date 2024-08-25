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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
  chat,
    jobit,
    tripguide,
    crypto,
    movix,
    
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
    /* {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
*/
 
    {
      title:"English speaking course - Rs5000",
      icon:web
    },
{
      title:"Computer Knowledge- Rs-5000",
      icon:backend
    },
{
      title:"Basic to advanced Excel -Rs 7000",
      icon:creator
    },
{
      title:"Complete course- pay after placement- Rs 1999/month +1month salary",
      icon:web
    },
{
      title:"Complete course- one time payment- Rs15000",
      icon:mobile
    },
{
      title:"English speaking course - Rs5000",
      icon:web
    },
{
      title:  "Already experienced- direct apply for job- Rs 1month salary"      ,
      icon:creator
    },
    {
      title: "Web Developer",
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
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Chat App",
      description:
" Technologies it is including React, Redux, and Appwrite. The app allows users to engage in both one-on-one conversations and group discussions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appWrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link:"https://github.com/AmitabhKUMAR01/chat-app",
      live:'https://realtimechatloom.netlify.app'
    },
    {
      name: "Crypto Data",
      description:
"Provides real-time cryptocurrency prices and simple graphs for easy coin analysis. Stay informed, track prices, and make smart decisions in the crypto market ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakra ui",
          color: "green-text-gradient",
        },
        {
          name: "Restful API",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/AmitabhKUMAR01",

      live:'https://cryptodatalive.netlify.app'
    },
    {
      name:"movix",
      description:
" Movie recommendation website using React.js and TMDB API. Responsive and user-friendly interface using React.js to deliver an engaging movie exploration experience",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "TMDB API",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movix,
      source_code_link: "https://github.com/AmitabhKUMAR01",
      live:'https://moviximdb.netlify.app'
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
