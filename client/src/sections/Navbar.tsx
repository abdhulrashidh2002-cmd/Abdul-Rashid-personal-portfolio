import { useEffect, useState } from "react";
import {motion} from "framer-motion";

export default function Navbar() {
  const [navopen, setNavOpen] = useState<boolean>(false);
  const [activeSection,setActiveSection]=useState("Hero");

  useEffect(()=>{
    const section= document.querySelectorAll("section");

  
  
      const observor= new IntersectionObserver(
        (entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
              setActiveSection(entry.target.id)
            }
          });
        },
        {
           rootMargin: "-100px 0px -50% 0px",
            threshold: 0
        }
      );

        section.forEach((section) => {
    observor.observe(section);
  });

  return () => {
    observor.disconnect();
  };

  },[]);

  return (
    <motion.nav 
    initial={{y: -60, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{
        duration:0.8,
        ease:"easeOut"
    }}
    className="sticky  top-0 m-4 mt-5 z-50  backdrop-blur-md border-b border-border text-text">
      
      <div id="Home" className=" flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="font-bold text-xl text-primary">
          Rashid
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-muted">
          <li 
           className={`cursor-pointer transition-all duration-300 ${
            activeSection === "Hero"
              ? "text-accent font-semibold"
              : "hover:text-primary"
          }`}
          >
            <a href="#Hero">
              Home
            </a>
          </li>
          <li className={`cursor-pointer transition-all duration-300 ${
            activeSection === "about"
              ? "text-accent font-semibold"
              : "hover:text-primary"
          }`}>
            <a href="#about">
              About
            </a>
          </li>
          <li className={`cursor-pointer transition-all duration-300 ${
            activeSection === "skills"
              ? "text-accent font-semibold"
              : "hover:text-primary"
          }`}>
            <a href="#skills">
              Skills
            </a>
          </li>
          <li className={`cursor-pointer transition-all duration-300 ${
            activeSection === "projects"
              ? "text-accent font-semibold"
              : "hover:text-primary"
          }`}>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li className={`cursor-pointer transition-all duration-300 ${
            activeSection === "contact"
              ? "text-accent font-semibold"
              : "hover:text-primary text-muted"
          }`}>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button 
        onClick={()=>window.open("/Resume.pdf","_blank")}
        className="hidden md:block bg-gradient-to-r from-primary hover:cursor-pointer to-accent text-white px-4 py-2 rounded-full hover:scale-105 transition">
          Resume
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setNavOpen(!navopen)}
          className="md:hidden text-2xl text-text"
        >
          {navopen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
      onClick={() => setNavOpen(false)}
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border bg-surface-strong ${
          navopen ? "max-h-80 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 text-muted">

          <button onClick={() => {
            document.getElementById("Hero")?.scrollIntoView({behavior:"smooth"})
            setNavOpen(false)}
          }
             className="hover:text-primary text-left">
            Home
          </button>

          <button onClick={() => {
            document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
            setNavOpen(false)
          }} className="hover:text-primary text-left">
            About
          </button>

          <button onClick={() =>{
            document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
            setNavOpen(false);
          } } className="hover:text-primary text-left">
            Skills
          </button>

          <button onClick={() => {
            document.getElementById("projects")?.scrollIntoView({behavior:"smooth"});
            setNavOpen(false)
          }} className="hover:text-primary text-left">
            Projects
          </button>

          <button onClick={() => {
            document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
            setNavOpen(false)
          }} className="hover:text-primary text-left">
            Contact
          </button>

          <button 
          onClick={()=>window.open("/Resume.pdf","_blank")}
          className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white">
            Resume
          </button>
        </div>
      </div>

    </motion.nav>
  );
}