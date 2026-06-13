import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import prof from "../assets/prof.jpg"


export default function Hero() {
  return (
    <section 
    id="Hero"
    className=" md:min-h-screen flex flex-col md:flex-row items-center bg-background text-text px-6 md:px-10 overflow-x-hidden scroll-mt-100 md:scroll-mt-24">

      
      <div className="flex-1 w-full text-center md:text-left md:px-10">

        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-7xl font-bold break-words"
        >
          Hi, I'm <span className="text-primary">Rashid</span>
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-2xl text-muted mt-4"
        >
          Full Stack Developer
        </motion.p>

        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md md:max-w-xl mx-auto md:mx-0 mt-4 text-muted text-sm sm:text-base md:text-lg"
        >
          I build modern web applications using React, Node.js, and MongoDB with clean UI and smooth UX.
        </motion.p>

        {/* BUTTON + ICONS */}
        <div className="flex flex-col md:flex-row  items-center md:items-center gap-7 mt-6">

          {/* Button */}
          <motion.button
            onClick={()=>{
            window.open(
              "https://github.com/abdhulrashidh2002-cmd",
            "_blank"
            )
          }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary px-5 py-2 rounded-3xl text-white hover:bg-violet-700  hover:cursor-pointer w-fit"
          >
            View Projects
          </motion.button>

          {/* Icons showing */}
          <motion.div
          initial={{y:30,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:0.8,
            delay:1.1,
            ease:"easeOut"
          }}
          className="flex flex-wrap justify-center md:ml-10 md:justify-start gap-6 text-primary">

            <a
              href="https://www.linkedin.com/in/abdul-rashid-2443b23a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-2xl text-blue-900" />
            </a>

            <a
              href="https://github.com/abdhulrashidh2002-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-2xl text-muted"/>
            </a>

            <a
              href="mailto:abdhulrashidh2002@gmail.com?subject=Portfolio Inquiry&body=Hello Abdul Rashid,"
              className="hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <MdEmail className="text-2xl text-blue-400" />
            </a>

          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 w-full flex justify-center mt-25 mb-35 md:mt-0 md:mb-0">

        <motion.div
          className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <img
            src={prof}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}