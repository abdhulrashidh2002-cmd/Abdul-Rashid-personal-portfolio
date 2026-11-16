"use client";


import {useRef, useState, type PointerEvent} from "react";
import styles from "./Hero.module.css";


export default function Hero() {

    const scene = useRef<HTMLElement>(null);
    const [glow, setGlow] = useState(false);
    const [paused, setPaused] = useState(false);

    function move(event: PointerEvent<HTMLElement>) {
        if (paused || event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        event.currentTarget.style.setProperty("--x", `${x * 100}%`);
        event.currentTarget.style.setProperty("--y", `${y * 100}%`);
        event.currentTarget.style.setProperty("--shift", `${(x - 0.5) * 18}px`);
    }

    function reset() {
        scene.current?.style.setProperty("--x", "60%");
        scene.current?.style.setProperty("--y", "40%");
        scene.current?.style.setProperty("--shift", "0px");
    }

    return (
        <section ref={scene} id="Hero" aria-labelledby="hero-heading"
                 className={`${styles.hero} ${glow ? styles.glowing : ""} ${paused ? styles.paused : ""}`}
                 onPointerMove={move} onPointerLeave={reset}>
            <div className={styles.spotlight} aria-hidden="true"/>

            <div className={styles.orbit} aria-hidden="true"/>

            <div className={styles.layout}>
                <div className={styles.copy}>
                    <p className={styles.eyebrow}>
                        ABDUL RASHID / PORTFOLIO
                    </p>
                    <h1 id="hero-heading">
                        Ideas into<br/>
                        <span>experiences.</span>
                    </h1>
                    <p className={styles.role}>Hi, I&apos;m Rashid.<br/>Software Engineer.</p>
                    <p className={styles.description}>
                        I build modern web applications using React, Node.js, and MongoDB
                        with clean UI and smooth UX.
                    </p>
                    <a className={styles.primary} href="https://github.com/abdhulrashidh2002-cmd" target="_blank"
                       rel="noopener noreferrer">View Projects <span aria-hidden="true">↗</span></a>
                    <nav className={styles.socials} aria-label="Social links">
                        <a href="https://github.com/abdhulrashidh2002-cmd" target="_blank"
                           rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/abdul-rashid-2443b23a4/" target="_blank"
                           rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:abdhulrashidh2002@gmail.com?subject=Portfolio%20Inquiry">Email</a>
                    </nav>
                </div>
                <div className={styles.portrait}>
                    <div className={styles.halo} aria-hidden="true"/>
                    <div className={styles.person}>
                        <img src="/images/rashid-hero.png" alt="Abdul Rashid in a navy shirt and trousers"
                             className={styles.image}/>
                    </div>

                </div>
                <aside className={styles.stack} aria-label="Technology stack">
                    <p>WHAT I WORK WITH</p>
                    <div><strong>React</strong><span>Interfaces</span></div>
                    <div><strong>Node.js</strong><span>Backend</span></div>
                    <div><strong>MongoDB</strong><span>Database</span></div>
                </aside>
            </div>
            <div className={styles.controls}>
                <button type="button" aria-pressed={glow}
                        onClick={() => setGlow(!glow)}>{glow ? "Soften glow" : "Illuminate"}</button>
                <button type="button" aria-pressed={paused} onClick={() => {
                    reset();
                    setPaused(!paused);
                }}>{paused ? "Resume motion" : "Pause motion"}</button>
            </div>
        </section>
    );
}
