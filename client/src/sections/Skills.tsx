import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPhp,
  FaDatabase,
  FaShieldAlt,
  FaDesktop,
  FaLayerGroup,
  FaCode,
  FaTools,
  FaGraduationCap,
  FaCubes,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiNextdotjs,
  SiDotnet,
  SiFirebase,
  SiTypescript,
  SiSpringboot,
  SiAngular,
  SiHtml5,

  SiBootstrap, SiCss, SiSupabase,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: SkillItem[];
  learning?: boolean;
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: FaDesktop,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
      { name: "Angular", icon: SiAngular, color: "#F43F5E" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F8FAFC" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
      { name: "Bootstrap", icon: SiBootstrap, color: "#A78BFA" },
      { name: "HTML5", icon: SiHtml5, color: "#F97316" },
      { name: "CSS3", icon: SiCss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    icon: FaLayerGroup,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#F8FAFC" },
      { name: ".NET", icon: SiDotnet, color: "#A78BFA" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F8FAFC" },
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
      { name: "MySQL", icon: SiMysql, color: "#60A5FA" },
      {
        name: "MS SQL Server",
        icon: FaDatabase,
        color: "#FB7185",
      },
      {name: "Supabase", icon:SiSupabase, color: "#4DB83F" },
    ],
  },
  {
    title: "Languages",
    icon: FaCode,
    skills: [
      { name: "Java", icon: FaJava, color: "#FB923C" },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#60A5FA",
      },
      { name: "PHP", icon: FaPhp, color: "#A5B4FC" },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#F8FAFC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Currently learning",
    icon: FaGraduationCap,
    learning: true,
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Angular (Mastering)",
        icon: SiAngular,
        color: "#F43F5E",
      },
      {
        name: "Microservices",
        icon: FaCubes,
        color: "#A78BFA",
      },
      {
        name: "Spring Security",
        icon: FaShieldAlt,
        color: "#A3E635",
      },
    ],
  },
];

function SkillBadge({ skill }: { skill: SkillItem }) {
  const Icon = skill.icon;

  return (
      <li className="flex max-w-full items-center gap-2.5 rounded-full border border-white/5 bg-white/[0.06] px-3.5 py-2.5 transition-colors duration-200 hover:border-violet-400/30 hover:bg-violet-400/10">
        <Icon
            aria-hidden="true"
            className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
            style={{ color: skill.color }}
        />

        <span className="min-w-0 text-sm font-medium leading-snug text-slate-200">
        {skill.name}
      </span>
      </li>
  );
}

export default function Skills() {
  const headingId = useId();
  const reduceMotion = useReducedMotion();

  return (
      <section
          id="skills"
          aria-labelledby={headingId}
          className="relative isolate scroll-mt-24 overflow-hidden bg-[#0F172A] px-6 py-20 text-[#F8FAFC] sm:px-10 sm:py-24 lg:px-16 lg:py-28"
      >
        {/* Background lighting */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[480px] w-[480px] rounded-full bg-[#8B5CF6]/15 blur-[120px]"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-44 -left-40 -z-10 h-[460px] w-[460px] rounded-full bg-[#8B5CF6]/15 blur-[120px]"
        />

        {/* Subtle background grid */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
            style={{
              backgroundImage:
                  "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                  "linear-gradient(to bottom, black, transparent 85%)",
            }}
        />

        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: "easeOut",
              }}
              className="mb-10 sm:mb-12"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C084FC] sm:text-sm">
              02 / My skills
            </p>

            <h2
                id={headingId}
                className="max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Technologies{" "}
              <span className="bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
              I work with
            </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              A toolkit for building modern web and mobile applications.
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {categories.map((category, index) => {
              const CategoryIcon = category.icon;

              return (
                  <motion.article
                      key={category.title}
                      initial={
                        reduceMotion ? false : { opacity: 0, y: 24 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        delay: reduceMotion ? 0 : (index % 3) * 0.07,
                        ease: "easeOut",
                      }}
                      className={`relative h-full min-w-0 overflow-hidden rounded-3xl border bg-gradient-to-br from-[#192137]/90 to-[#101729]/95 p-6 transition-colors duration-300 sm:p-7 ${
                          category.learning
                              ? "border-[#EC4899]/65 hover:border-[#F472B6]"
                              : "border-[#A78BFA]/25 hover:border-[#A78BFA]/60"
                      }`}
                  >
                    {/* Learning card accent */}
                    {category.learning && (
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#EC4899]/10 blur-3xl"
                        />
                    )}

                    <div className="relative mb-7 flex items-center gap-3">
                      <CategoryIcon
                          aria-hidden="true"
                          className="h-7 w-7 shrink-0 text-[#A78BFA]"
                      />

                      <h3 className="min-w-0 text-xl font-bold leading-snug tracking-tight text-slate-100 sm:text-2xl">
                        {category.title}
                      </h3>

                      {category.learning && (
                          <span
                              aria-hidden="true"
                              className="ml-auto h-2 w-2 shrink-0 rounded-full bg-[#EC4899] shadow-[0_0_12px_rgba(236,72,153,0.5)]"
                          />
                      )}
                    </div>

                    <ul
                        aria-label={`${category.title} technologies`}
                        className="relative flex flex-wrap gap-2.5"
                    >
                      {category.skills.map((skill) => (
                          <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </ul>
                  </motion.article>
              );
            })}
          </div>
        </div>
      </section>
  );
}