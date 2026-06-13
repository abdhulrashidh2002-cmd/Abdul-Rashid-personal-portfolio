import type { ProjectProp } from "../types/project"

import {

  FaNodeJs,
  FaJava,
  FaPhp,  
  FaCss3,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,

  SiMongodb,
  SiExpress,
  SiMysql,
 SiNextdotjs,SiDotnet,SiFirebase,SiTypescript,
  SiHtml5,
  SiBootstrap,
  SiGooglegemini,
} from "react-icons/si";

export const projects:ProjectProp[]=[
    {
    title: "Lazy-Fix-repair-management-system",
    description:
    "AI Powered Repair Management System with User, Technician, and Admin Dashboard",
    tech:[
        {name:"Next.js",icon:SiNextdotjs},
        {name:"MongoDB",icon:SiMongodb},
        {name:"Express.js",icon:SiExpress},
        {name:"Node.js",icon:FaNodeJs},
        {name:"Firebase",icon:SiFirebase},
        {name:"Gemini AI API",icon:SiGooglegemini},
        {name:"Taiwind",icon:SiTailwindcss},
        {name:"JS",icon:SiJavascript},
        {name:"TS",icon:SiTypescript},
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/Lazy-Fix-repair-management-system",
  
    },
    {
    title: "Hospital Management  System",
    description:
    "A Backend Hospital Management Sytem with a secure Authentication and authorization by using Below Technologies",
    tech:[
        
        {name:"MongoDB",icon:SiMongodb},
        {name:"Express.js",icon:SiExpress},
        {name:"Node.js",icon:FaNodeJs},
        {name:"JS",icon:SiJavascript},
        
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/hospital-system-api",
  
    },
    {
    title: "Student Management System",
    description:
    "Desktob Based Application that Developped with Sorting,Filtering Functionalities with a proper authentication by Using Java",
    tech:[
        
        {name:"Java",icon:FaJava},
        {name:"My SQL",icon:SiMysql},
        
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/Student-Management-System",
  
    },
     {
    title: "Point Of Sale System For Footwear",
    description:
    "this Application was developped for my university Assignemnt by following a structured OOP concepts and with a proper Error handiling by using Java as a bavkend language",
    tech:[
        
        {name:"Java",icon:FaJava},
        {name:"My SQL",icon:SiMysql},
        
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/Footwear-Pos-System",
  
    },
    {
    title: "Event Management System--.NET",
    description:
    "Developed a cross-platform event management application using Blazor WebAssembly and Firebase. The system consists of separate user and admin dashboards for event registration, event management, attendee tracking, and administrative operations.",
    tech:[
        {name:"C#",icon:SiDotnet},
        {name:"Firebase",icon:SiFirebase},
        {name:"HTML",icon:SiHtml5},
        {name:"Js",icon:SiJavascript},
        {name:"Bootstrap",icon:SiBootstrap},
        
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/EventManagementAdminDashboard",
  
    },

    {
    title: "Ocean-Byte IT Solution Web Application",
    description:
    "This application was designed and developed for an IT company that delivers IT solutions and educational programs for students, supporting the management of services, courses, and related organizational activities.",
    tech:[
        {name:"HTML",icon:SiHtml5},
        {name:"CSS",icon:FaCss3},
        {name:"PHP",icon:FaPhp},
        {name:"MySQL",icon:SiMysql},
        
        
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/OceanByte_IT_Solution",
  
    },
     {
    title: "Mondy Cinema Web Application",
    description:
    "Developed a comprehensive Theater Management and Ticket Booking System using PHP, HTML, CSS, JavaScript, and MySQL. The application enables users to register, log in, browse available shows, reserve seats, and manage bookings through an intuitive interface. The system also includes administrative functionalities for managing movies, show schedules, bookings, and customer information, ensuring efficient theater operations and an enhanced user experience.",
    tech:[
        {name:"HTML",icon:SiHtml5},
        {name:"CSS",icon:FaCss3},
        {name:"PHP",icon:FaPhp},
        {name:"JS",icon:SiJavascript},
        {name:"MySQL",icon:SiMysql},
        
        
    ],
    github:"https://github.com/abdhulrashidh2002-cmd/Mondy_Cinema_WebApp",
  
    },
    

]