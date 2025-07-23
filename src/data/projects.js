import {  BiLogoFirebase, BiLogoMongodb,BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import {  TbApi, TbDatabase } from "react-icons/tb";
import {  SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Social Media Feed",
    image: "./social.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "This website is about simple social media platform like Instagram",
    github: "https://github.com/Subash-Student/Box-Office-App",
    demo: "https://social-media-feed-sepia.vercel.app",
  },
  {
    id: "2",
    name: "Voice-Enabled E-Commerce Platform",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase, BiLogoRedux],
    description: "To create an accessible e-commerce platform that empowers visually impaired users to shop independently using voice commands and haptic feedback.",
    github: "https://github.com/Subash-Student/AI_Fashion",
    demo: "https://feel-ways.vercel.app",
  },
  {
    id: "3",
    name: "Chat Application",
    image: "./chat.jpg",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase, BiLogoRedux],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/Subash-Student/Chat_App",
    demo: "https://chat-app-beta-six-64.vercel.app/login",
  },
  {
    id: "4",
    name: "Expense Tracker for Hotels",
    image: "./expense-tracker.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "This application provides an interface for users to track their expenses.",
    github: "https://github.com/Subash-Student/SubashHotel",
    demo: "https://subash-hotel.vercel.app",
  },
  {
    id: "5",
    name: "Food Delivery Application",
    image: "./food.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "A user-friendly food delivery application built with the MERN stack for seamless ordering and delivery experiences.",
    github: "https://github.com/Subash-Student/Food-Delivery-App",
    demo: "https://food-delivery-app-nu-puce.vercel.app",
  },
  {
    id: "6",
    name: "Admin Panel",
    image: "./admin.webp",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "This application provides an interface for admin for Employee Details Management.",
    github: "https://github.com/Subash-Student/SubashHotel",
    demo: "https://employee-admin-panel-eight.vercel.app/",
  },
];

export default ProjectsData;
