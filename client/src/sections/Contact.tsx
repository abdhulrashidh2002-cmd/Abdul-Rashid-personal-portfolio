import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import {motion} from "framer-motion";

export default function Contact(){
    const form = useRef<HTMLFormElement>(null);
    const [loading,setLoading]=useState(false);

    const sendEmail=(e:React.FormEvent)=>{
        e.preventDefault();

        if(!form.current) return;

         setLoading(true);
        emailjs
        .sendForm(
            "service_949d4ll",
            "template_wx0j3jk",
            form.current,
            "Twq2IYFrQ641qIa3J"
        ).then(
            
            () => {
                setLoading(false);
                toast.success("Message sent successfully!");
                form.current?.reset();
        },
        (error) => {
            setLoading(false);
          toast.error("Failed to send message");
          console.log(error);
        }
        );
    };

    return(
        <motion.section id="contact"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{ once: true }}
        transition={{ duration: 0.6}}

        className="py-20 px-6  text-white scroll-mt-75 md:scroll-mt-5">

        {/* Heading */}
       <motion.div
       initial={{y:-30,opacity:0}}
       animate={{y:0,opacity:1}}
       transition={{
        duration:0.7,
        ease:"easeOut"
       }}
       className="text-center">
         <h2 className="text-4xl font-bold text-center text-primary">
            Contact Me
        </h2>

        <p className="text-center text-muted mt-2">
            Let's build something amazing together
        </p>
       </motion.div>

        {/* MAIN WRAPPER */}
        <div className="mt-10 flex flex-col items-center gap-8">

            {/* FORM CARD */}
            <motion.div 
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            className="w-full max-w-xl p-6 rounded-3xl
                    bg-white/5 backdrop-blur-lg
                    border border-white/10
                    shadow-lg shadow-[#8B5CF6]/10">

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4"
                >

                    <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="p-3 rounded-3xl bg-white/5 border border-white/10
                                focus:border-[#8B5CF6] outline-none transition"
                    required
                    />

                    <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="p-3 rounded-3xl bg-white/5 border border-white/10
                                focus:border-[#8B5CF6] outline-none transition"
                    required
                    />

                    <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="p-3 rounded-3xl bg-white/5 border border-white/10
                                focus:border-[#8B5CF6] outline-none transition"
                    required
                    />

                    <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]
                                hover:opacity-90 
                                hover:cursor-pointer py-3 rounded-3xl
                                disabled:opacity-50 transition"
                    >
                    {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>
            </motion.div>

         <motion.div 
         initial={{y:30,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{delay:0.3,ease:"easeOut"}}
         className="flex gap-6 text-2xl text-gray-300">

            <a href="https://github.com/abdhulrashidh2002-cmd" target="_blank"
                className="hover:text-white transition">
                <FaGithub className="text-gray-400 hover:text-white hover:cursor:pointer"/>
            </a>

            <a href="https://www.linkedin.com/in/abdul-rashid-2443b23a4/" target="_blank"
                className="hover:text-[#EC4899] transition">
                <FaLinkedin className="text-gray-400 hover:text-blue-700 hover:cursor:pointer" />
            </a>

            <a href="mailto:abdhulrashidh2002@gmail.com?subject=Portfolio Inquiry&body=Hello Abdul Rashid,"
                className="hover:text-[#8B5CF6] transition">
                <MdEmail className="text-gray-400 hover:text-accent hover:cursor:pointer" />
            </a>

            <a 
            href="https://wa.me/94765669093?text=Hello%20Abdul%20Rashid,%20I%20would%20like%20to%20discuss%20an%20opportunity."
                className="hover:text-[#EC4899] transition">
                <MdWhatsapp className="text-gray-400 hover:text-green-700 hover:cursor:pointer"/>
            </a>

          </motion.div>

  </div>
</motion.section>
    )
}