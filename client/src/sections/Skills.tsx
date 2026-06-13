import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPhp,  
  FaDatabase,
  FaShieldAlt,
  FaCss3,
 
  
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,

  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,SiNextdotjs,SiDotnet,SiFirebase,SiTypescript,SiSpringboot,SiAngular,
  SiHtml5,
 
  SiBootstrap,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillListProps {
  skills: SkillItem[];
}
interface SkillProps {
  icon: React.ReactNode;
  name: string;
}


export default function Skills() {
  const frontendSkills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" /> },
];
const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-[#5FA04E]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: ".NET", icon: <SiDotnet className="text-[#512BD4]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
];
const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "MS SQL Server", icon: <FaDatabase className="text-[#CC2927]" /> },
];
const toolSkills = [
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
];
const languageSkills = [
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
];
const learningSkills = [
  { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
  { name: "Angular (Mastering)", icon: <SiAngular className="text-[#DD0031]" /> },
  { name: "Microservices", icon: <SiSpringboot className="text-[#6DB33F]" /> },
  { name: "Spring Security", icon: <FaShieldAlt className="text-yellow-500" /> },
];

function SkillList({ skills }:SkillListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <Skill key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  );
}
  return (
    <motion.section
      id="skills"
      className="py-16 px-6 min-h-screen scroll-mt-85 md:scroll-mt-25"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-2">
        Tech Skills
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Technologies I work with
      </p>

      {/* Grid Container */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Frontend */}
        <div className="p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-4">
            <SkillList skills={frontendSkills} />
          </div>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-xl shadow-md ">
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap gap-4 ">
           <SkillList skills={backendSkills}/>
          </div>
        </div>

        {/* Database */}
        <div className="p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Database</h3>
          <div className="flex flex-wrap gap-4">
            <SkillList skills={databaseSkills}/>
          </div>
        </div>

        {/* Tools */}
        <div className="p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-4">
            <SkillList skills={toolSkills}/>
          </div>
        </div>

        {/* Programming languages*/}
        <div className="p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Programing languages</h3>
          <div className="flex flex-wrap gap-4">
            <SkillList skills={languageSkills}/>
          </div>
        </div>


        {/* Learning... */}
        <div className="p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Currently learning</h3>
          <div className="flex flex-wrap gap-4">
           <SkillList skills={learningSkills}/>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

/* Skill Item Component */
function Skill({ icon, name}:SkillProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:scale-105 transition duration-200 cursor-default">
      <span className="text-xl">{icon}</span>
      
       <span className="text-sm text-muted group-hover:opacity-100 transition">
        {name}
      </span>
    </div>
  );
}