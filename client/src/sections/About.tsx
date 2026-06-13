import abt from "../assets/abt.jpeg"
import {motion} from "framer-motion"
export default function About(){
    return(
<motion.section 
id="about"
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{
    duration:0.8,
    
}}
viewport={{once:true}}
className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-10 text-text mb-50 scroll-mt-90 md:scroll-mt-14">

    {/* Left Side */}
    <div 

    className="flex-1 text-center md:text-left md:pl-10">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Me
        </motion.h1>

        <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                I'm Abdul Rashid
            </h3>

            <p className="text-muted leading-8 max-w-2xl font-semi-bold">
                I'm a Full Stack Developer passionate about building modern,
                scalable, and user-friendly web applications. I enjoy working
                across both frontend and backend technologies to create complete
                solutions. I continuously explore new tools and frameworks to
                expand my skills, and I'm currently learning Spring Boot and
                microservices architecture to strengthen my backend development
                expertise more.
            </p>
        </div>
    </div>

    {/* Right Side */}
    <div className="flex-1 flex justify-center md:justify-end md:mr-15">
        <div
            className="
                relative
                w-60 h-60
                sm:w-65 sm:h-65
                md:w-70 md:h-70 md:mt-10
                rounded-full
                overflow-hidden
                border-4 border-primary
                shadow-2xl
                shadow-primary/30
            "
        >
            <motion.img
                src={abt}
                alt="Abdul Rashid"
                className="w-full h-full object-cover object-top"
                initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5,delay:0.3 }}
        viewport={{ once: true }}
            />
        </div>
    </div>

</motion.section>
    )
}