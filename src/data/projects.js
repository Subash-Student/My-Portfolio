import {  BiLogoFirebase, BiLogoMongodb,BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import {  TbApi, TbDatabase } from "react-icons/tb";
import {  SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website",
    image: "./movie.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    github: "https://github.com/Subash-Student/Box-Office-App",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "2",
    name: "Voice-Enabled E-Commerce Platform",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase, BiLogoRedux],
    description: "To create an accessible e-commerce platform that empowers visually impaired users to shop independently using voice commands and haptic feedback.",
    github: "https://github.com/Subash-Student/AI_Fashion",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  {
    id: "3",
    name: "Chat Application",
    image: "./chat.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase, BiLogoRedux],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/Subash-Student/Chat_App",
    demo: "https://vchat4whisperchat.vercel.app",
  },
  {
    id: "4",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/Subash-Student/SubashHotel",
    demo: "https://vtrack-expense.vercel.app",
  },
  {
    id: "5",
    name: "Food Delivery Application",
    image: "./food.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "A user-friendly food delivery application built with the MERN stack for seamless ordering and delivery experiences.",
    github: "https://github.com/Subash-Student/Food-Delivery-App",
    demo: "https://car-rental-application.vercel.app",
  },
  {
    id: "6",
    name: "Admin Panel",
    image: "./admin.png",
    icons: [BiLogoReact, BiLogoNodejs,SiExpress, BiLogoMongodb, BiLogoRedux],
    description: "This application provides an interface for admin for Employee Details Management.",
    github: "https://github.com/Subash-Student/SubashHotel",
    demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
