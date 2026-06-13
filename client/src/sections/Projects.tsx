import { motion } from "framer-motion";
import { projects } from "../data/project";
import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 min-h-screen md:scroll-mt-4 scroll-mt-80">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#8B5CF6]">
        Projects
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-400 mt-2">
        Some of my work
      </p>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </motion.div>

    </section>
  );
}