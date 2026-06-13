import { FaGithub } from "react-icons/fa";
import type { ProjectProp } from "../types/project";

type Props = {
  project: ProjectProp;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-5 hover:border-[#8B5CF6] transition duration-300">

      {/* Title */}
      <h3 className="text-xl font-bold text-accent">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t)=>{
            const Icon=t.icon;
            return(
            <span 
            key={t.name}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/10 text-muted hover:text-primary transition-colors">
  <Icon className="text-lg" />
  {t.name}
</span>

            )
        })}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:bg-white transition-colors shadow-md"
        >
          Repositery<FaGithub className="text-black"/>
        </a>
      </div>

    </div>
  );
}