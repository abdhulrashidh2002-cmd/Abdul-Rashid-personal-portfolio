import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

import { projects } from "../data/project";

const VISIBLE = 5;
const AUTO_DELAY = 4000; // ms between automatic slides

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true); // md and up: lift + scale the active card
    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const update = () => setIsDesktop(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    // Auto slide: pauses on hover, restarts after any manual change
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (paused || reduceMotion || projects.length < 2) return;

        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, AUTO_DELAY);

        return () => clearInterval(id);
    }, [paused, activeIndex]);

    if (!projects.length) return null;

    const total = projects.length;

    const next = () => setActiveIndex((prev) => (prev + 1) % total);
    const previous = () => setActiveIndex((prev) => (prev - 1 + total) % total);

    // 5 slots (-2..2). If there are fewer than 5 projects, only show what exists.
    const count = Math.min(VISIBLE, total);
    const offsets = Array.from({ length: count }, (_, i) => i - Math.floor(count / 2));

    // On smaller screens, hide the outer cards so the layout never gets cramped.
    const visibilityClass = (offset: number) => {
        const distance = Math.abs(offset);
        if (distance === 2) return "hidden xl:flex";
        if (distance === 1) return "hidden md:flex";
        return "flex";
    };

    return (
        <section
            id="projects"
            className="relative py-16 md:py-24 min-h-screen overflow-hidden scroll-mt-20"
        >
            {/* Background glow */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2
                w-[600px] h-[300px] bg-primary/10 blur-[140px]
                rounded-full pointer-events-none"
            />

            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center mb-10 md:mb-16 px-5"
            >
                <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-3">
                    My Work
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    Featured <span className="text-accent">Projects.</span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7 text-sm md:text-base">
                    Explore some of the applications and solutions I've developed
                    using modern technologies.
                </p>
            </motion.div>

            {/* Carousel */}
            <div
                className="relative z-10"
                onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
            >
                {/* Left arrow — pinned to the screen edge */}
                <button
                    onClick={previous}
                    aria-label="Previous project"
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30
                    w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/15
                    bg-[#111827]/80 backdrop-blur flex items-center justify-center
                    text-white hover:bg-primary hover:border-primary transition duration-300"
                >
                    <FiChevronLeft size={22} />
                </button>

                {/* Right arrow — pinned to the screen edge */}
                <button
                    onClick={next}
                    aria-label="Next project"
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30
                    w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/15
                    bg-[#111827]/80 backdrop-blur flex items-center justify-center
                    text-white hover:bg-primary hover:border-primary transition duration-300"
                >
                    <FiChevronRight size={22} />
                </button>

                {/* Cards row */}
                <div className="max-w-[1500px] mx-auto px-14 sm:px-16 md:px-24">
                    <div
                        className="flex items-stretch justify-center gap-4 md:gap-6 pt-4 md:pt-12 pb-6 touch-pan-y"
                        onTouchStart={(e) => {
                            touchStartX.current = e.touches[0].clientX;
                        }}
                        onTouchEnd={(e) => {
                            if (touchStartX.current === null) return;
                            const diff = touchStartX.current - e.changedTouches[0].clientX;
                            if (Math.abs(diff) > 50) (diff > 0 ? next : previous)();
                            touchStartX.current = null;
                        }}
                    >
                        {offsets.map((offset) => {
                            const index = (activeIndex + offset + total) % total;
                            const project = projects[index];
                            const isActive = offset === 0;

                            return (
                                <motion.article
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.7,
                                        scale: isActive ? (isDesktop ? 1.08 : 1) : 0.94,

                                    }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ zIndex: isActive ? 30 : 10 }}
                                    onClick={() => !isActive && setActiveIndex(index)}
                                    className={`
                                        ${visibilityClass(offset)}
                                        flex-col flex-1 min-w-0 max-w-[340px] md:max-w-[300px]
                                        h-[380px] md:h-[400px] rounded-2xl border p-5 md:p-6 relative overflow-hidden
                                        bg-[#111827]
                                        ${
                                        isActive
                                            ? "md:-mx-2 border-accent/50 shadow-[0_30px_80px_rgba(139,92,246,0.3)]"
                                            : "border-white/10 cursor-pointer hover:border-accent/40 hover:opacity-100"
                                    }
                                    `}
                                >
                                    {isActive && (
                                        <div
                                            className="absolute -right-16 -top-16 w-48 h-48 rounded-full
                                            bg-primary/15 blur-[70px] pointer-events-none"
                                        />
                                    )}

                                    {/* Top accent bar */}
                                    <div
                                        className={`h-1 rounded-full mb-5 ${
                                            isActive ? "w-12 bg-accent" : "w-8 bg-accent/40"
                                        }`}
                                    />

                                    {/* Title */}
                                    <h3
                                        className={`font-bold leading-snug line-clamp-2 ${
                                            isActive
                                                ? "text-xl md:text-2xl text-white"
                                                : "text-lg text-gray-200"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`mt-3 text-sm leading-6 ${
                                            isActive
                                                ? "text-gray-300 line-clamp-5"
                                                : "text-gray-500 line-clamp-4"
                                        }`}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="mt-auto pt-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech
                                                .slice(0, isActive ? 5 : 3)
                                                .map((tech) => {
                                                    const Icon = tech.icon;
                                                    return (
                                                        <span
                                                            key={tech.name}
                                                            className="flex items-center gap-1.5 px-2.5 py-1.5
                                                            rounded-lg bg-white/5 border border-white/10
                                                            text-gray-300 text-[11px]"
                                                        >
                                                            {isActive && (
                                                                <Icon className="text-accent text-sm" />
                                                            )}
                                                            {tech.name}
                                                        </span>
                                                    );
                                                })}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                        {isActive && project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                                                bg-gradient-to-r from-primary to-accent text-white
                                                text-xs font-medium hover:scale-105 transition"
                                            >
                                                <FaGithub />
                                                GitHub
                                                <FiExternalLink />
                                            </a>
                                        ) : (
                                            <span className="text-xs text-gray-500">
                                                {isActive ? "Selected" : "View project"}
                                            </span>
                                        )}

                                        <span className="text-xs font-mono text-gray-500">
                                            {String(index + 1).padStart(2, "0")}/
                                            {String(total).padStart(2, "0")}
                                        </span>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                {/* Small slider */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className="text-xs font-mono text-gray-500">
                        {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <input
                        type="range"
                        min={0}
                        max={total - 1}
                        step={1}
                        value={activeIndex}
                        onChange={(e) => setActiveIndex(Number(e.target.value))}
                        aria-label="Project slider"
                        className="w-40 md:w-56 h-1 cursor-pointer accent-accent"
                    />
                    <span className="text-xs font-mono text-gray-500">
                        {String(total).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </section>
    );
}