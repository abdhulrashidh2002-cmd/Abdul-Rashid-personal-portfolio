import { useId, type ReactNode } from "react";

const skills = [
    {
        title: "Frontend development",
        icon: "code",
    },
    {
        title: "Backend development",
        icon: "server",
    },
    {
        title: "Data & authentication",
        icon: "database",
    },
    {
        title: "Cloud & Deployment",
        icon: "cloud",
    },
] as const;

function SkillIcon({
                       type,
                   }: {
    type: (typeof skills)[number]["icon"];
}) {
    const paths: Record<typeof type, ReactNode> = {
        code: (
            <>
                <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
            </>
        ),
        server: (
            <>
                <rect x="3" y="3" width="18" height="7" rx="2" />
                <rect x="3" y="14" width="18" height="7" rx="2" />
                <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
            </>
        ),
        database: (
            <>
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
            </>
        ),
        cloud: (
            <path d="M20 16.5A4.5 4.5 0 0 0 18 8a6 6 0 0 0-11.5-1A5 5 0 0 0 7 17h13" />
        ),
    };

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 sm:h-8 sm:w-8"
        >
            {paths[type]}
        </svg>
    );
}

export default function About() {
    const headingId = useId();

    return (
        <section
            id="about"
            aria-labelledby={headingId}
            className="relative isolate overflow-hidden bg-[#0F172A] px-6 py-20 text-[#F8FAFC] scroll-mt-80 md:scroll-mt-6 sm:px-10 sm:py-28 lg:px-16"
        >
            {/* Background grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage:
                        "linear-gradient(to right, black, transparent 45%, black)",
                }}
            />

            {/* Ambient lighting */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 -top-40 -z-10 h-96 w-96 rounded-full bg-[#8B5CF6]/20 blur-[110px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -right-24 -z-10 h-[440px] w-[440px] rounded-full bg-[#8B5CF6]/20 blur-[110px]"
            />

            {/* Decorative orbit */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[12%] top-[8%] -z-10 hidden h-[800px] w-[1250px] -rotate-[28deg] rounded-[50%] border border-[#8B5CF6]/20 lg:block"
            />

            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                {/* Introduction */}
                <div>
                    <p className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-[#C084FC] sm:text-sm">
                        01 / About me
                    </p>

                    <h2
                        id={headingId}
                        className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl"
                    >
                        The person behind
                        <span className="mt-2 block bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
              the code.
            </span>
                    </h2>

                    <p className="mt-8 text-xl font-semibold leading-relaxed sm:text-2xl">
                        Hi, I&apos;m Rashid — a Full Stack Developer.
                    </p>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        I build modern web applications with thoughtful interfaces
                        and reliable backends. I enjoy turning ideas into practical
                        tools that people can use every day.
                    </p>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-[#C4B5FD] sm:text-lg">
                        Currently exploring Java, Spring Boot, Angular, and
                        microservices.
                    </p>

                    <a
                        href="mailto:abdhulrashidh2002@gmail.com?subject=Portfolio%20Inquiry"
                        className="group mt-9 inline-flex items-center gap-5 rounded-2xl border-2 border-[#A855F7] px-6 py-3.5 text-base font-semibold transition-colors hover:border-[#EC4899] hover:bg-[#8B5CF6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F172A] sm:px-8 sm:text-lg"
                    >
                        Let&apos;s connect
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-[#EC4899] transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                        >
                            <path d="M4 12h16m-6-6 6 6-6 6" />
                        </svg>
                    </a>
                </div>

                {/* Skills and learning cards */}
                <div className="relative min-w-0 lg:pb-24">
                    <div className="rounded-3xl border border-[#A78BFA]/45 bg-gradient-to-br from-[#28243F]/90 via-[#151C32]/95 to-[#1E1936]/90 p-6 shadow-2xl shadow-black/15 backdrop-blur-sm sm:p-9">
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            What I bring
                        </h3>

                        <ul className="mt-8 space-y-7 sm:space-y-9">
                            {skills.map((skill) => (
                                <li
                                    key={skill.title}
                                    className="group flex items-start gap-3 sm:gap-5"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#A78BFA]/20 bg-[#A78BFA]/10 text-[#C084FC] transition-colors group-hover:border-[#C084FC]/50 group-hover:bg-[#A78BFA]/15 sm:h-16 sm:w-16">
                                        <SkillIcon type={skill.icon} />
                                    </div>

                                    <div className="min-w-0 pt-1 mt-3">
                                        <h4 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                                            {skill.title}
                                        </h4>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Space for the overlapping desktop card */}
                        <div aria-hidden="true" className="hidden h-14 lg:block" />
                    </div>

                    <div className="relative mt-5 rounded-3xl border border-[#E879F9]/50 bg-gradient-to-br from-[#35233F] via-[#1D2038] to-[#30203E] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:absolute lg:bottom-0 lg:-right-3 lg:left-10 lg:mt-0">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F472B6] sm:text-sm">
                            Currently learning
                        </p>

                        <p className="mt-4 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                            Building deeper. Thinking bigger.
                        </p>

                        <div
                            aria-hidden="true"
                            className="my-5 h-px bg-gradient-to-r from-[#A78BFA] to-[#EC4899]/40"
                        />

                        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300">
                            <span>Curiosity</span>
                            <span aria-hidden="true" className="text-[#C084FC]">
                →
              </span>
                            <span>Practice</span>
                            <span aria-hidden="true" className="text-[#C084FC]">
                →
              </span>
                            <span>Better software</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}