"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Jet, inter_bold } from "@/Fonts/font";
import { handleEmailRedirect } from "@/Functions/handlers";
import projectData from "@/app/projects/projects.json";
import FourierEpicycle from "@/components/FourierEpicycle";


type Technology = {
    icon: string;
    name: string;
};

type ProjectEntry = {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies?: Technology[];
};

const Inspire = `<svg width="793" height="1185" viewBox="0 0 793 1185" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M563.549 1183.99C524.382 1092.66 490.049 889.489 660.549 765.489C703.749 768.689 709.882 768.822 707.549 768.489C735.549 678.656 707.549 527.489 451.049 570.989C420.882 573.989 364.949 586.889 382.549 614.489C404.549 648.989 394.549 702.989 451.049 739.489C500.249 762.689 648.215 768.489 716.049 768.489C743.049 768.489 801.049 748.989 775.049 683.989C766.382 673.489 753.149 645.989 769.549 619.989C790.049 587.489 707.549 583.489 690.549 604.989C673.549 626.489 723.049 530.989 764.049 555.989C788.549 592.489 757.049 602.989 750.549 555.989C754.549 508.989 767.049 520.988 768.049 508.988C769.049 496.988 773.049 467.988 722.549 506.488C695.549 520.488 699.049 508.988 699.049 484.488C699.049 459.988 712.049 518.988 738.049 513.988C764.049 508.988 793.049 511.489 790.049 468.989C762.849 437.389 719.715 390.822 701.549 371.489C703.882 350.822 694.349 311.689 637.549 320.489C595.149 316.489 582.549 324.989 579.049 328.489L534.049 359.489L611.049 338.489L660.549 341.489C650.715 348.822 633.049 369.689 641.049 394.489C643.549 404.489 612.049 396.489 572.049 384.989C567.049 373.989 663.049 347.489 674.049 347.489C682.849 347.489 696.049 344.489 701.549 342.989C709.549 338.322 721.849 324.389 707.049 305.989C688.549 282.989 654.049 238.489 641.049 200.489C630.649 170.089 583.755 159.764 562.049 155.489C529.049 148.989 502.549 184.989 560.049 188.989H572.049C635.382 178.489 735.549 110.489 625.549 3.48898C622.715 10.3223 613.849 25.389 601.049 30.989C585.049 37.989 551.049 58.989 305.049 43.489C273.216 39.989 204.849 52.989 186.049 132.989C75.0489 135.989 31.0489 227.489 20.0489 259.489C9.04886 291.489 -69.4511 498.489 217.049 757.989C336.249 590.789 294.716 520.655 259.049 506.488C251.216 505.822 243.949 515.489 277.549 559.489C311.149 603.489 356.216 594.156 374.549 583.989C382.049 574.156 390.949 547.489 366.549 519.489C336.049 484.489 309.314 428.784 308.049 424.989C306.049 418.989 245.049 373.989 248.549 464.989C250.882 475.489 271.149 497.489 333.549 501.489C389.149 505.489 401.716 444.822 401.049 413.989C407.049 386.822 430.549 328.989 476.549 314.989C496.049 289.989 457.549 283.989 465.049 243.489C472.549 202.989 508.549 137.489 579.049 122.489C548.049 84.989 438.049 69.989 419.549 76.489C401.049 82.989 367.549 77.489 325.049 140.989C289.549 225.989 321.049 283.489 382.549 305.989C388.549 308.184 325.049 257.489 377.049 173.489C380.549 167.489 378.949 155.489 344.549 155.489C299.049 144.989 245.049 158.489 220.549 183.989C196.049 209.489 140.549 269.488 135.049 338.489C129.549 407.489 148.549 448.488 206.049 506.488C168.049 419.989 197.549 356.489 213.549 338.489" stroke="black" stroke-width="4"/>
</svg>
`;

const projects = projectData as ProjectEntry[];
const navigationItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
] as const;

export default function MobileHome() {
    const [activeSection, setActiveSection] =
        useState<(typeof navigationItems)[number]["id"]>("home");
    const [scrolled, setScrolled] = useState(false);
    const homeRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);
    const sectionRefs = useMemo(
        () => ({ home: homeRef, projects: projectsRef, about: aboutRef }),
        [],
    );

    useEffect(() => {
        const scrollContainer = document
            .querySelector("main")
            ?.closest(".overflow-y-auto");
        const handleScroll = () => {
            const top =
                scrollContainer instanceof HTMLElement
                    ? scrollContainer.scrollTop
                    : window.scrollY;
            setScrolled(top > 8);
        };
        const target: HTMLElement | Window =
            scrollContainer instanceof HTMLElement ? scrollContainer : window;
        target.addEventListener("scroll", handleScroll, { passive: true });
        return () => target.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target instanceof HTMLElement) {
                    setActiveSection(visibleEntry.target.id as (typeof navigationItems)[number]["id"]);
                }
            },
            {
                root: null,
                threshold: [0.25, 0.4, 0.55, 0.7],
            }
        );

        Object.values(sectionRefs).forEach((sectionRef) => {
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
        });

        return () => observer.disconnect();
    }, [sectionRefs]);

    const scrollToSection = (sectionId: (typeof navigationItems)[number]["id"]) => {
        setActiveSection(sectionId);
        sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-[#F6F5F1] text-black">
            <main
                className={`${Jet.className} mx-auto flex min-h-screen w-full max-w-[760px] flex-col gap-6 px-4 pb-8 pt-4 sm:px-6`}
            >
                {/* <div className="sticky top-3 z-30 flex flex-col gap-3">
                    <header className="rounded-[2rem] border border-white/40 bg-white/25 px-4 py-3 shadow-[0_10px_30px_rgba(31,38,135,0.12)] backdrop-blur-2xl">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="leading-none">
                                    <p className={`${inter_bold.className} text-sm uppercase tracking-[0.28em] sm:text-base`}>
                                        Chandra K. Rajwal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>

                    <nav className="sticky top-3 flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-2 shadow-[0_10px_30px_rgba(31,38,135,0.1)] backdrop-blur-2xl sm:gap-3 sm:px-4">
                        {navigationItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => scrollToSection(item.id)}
                                    className={`rounded-full border px-5 py-2 text-sm transition-all duration-200 backdrop-blur-xl sm:px-6 sm:text-base ${
                                        isActive
                                            ? "border-white/70 bg-white/55 text-black shadow-[0_6px_18px_rgba(31,38,135,0.16)]"
                                            : "border-white/30 bg-white/10 text-neutral-600"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                </div> */}
                <div
                    className={`sticky top-3 z-30 flex items-center justify-between gap-3 rounded-[2rem] border px-4 py-3 backdrop-saturate-150 transition-all duration-300 sm:px-5 ${
                        scrolled
                            ? "border-white/50 bg-white/35 shadow-[0_12px_36px_rgba(31,38,135,0.18)]"
                            : "border-white/30 bg-white/15 shadow-[0_6px_20px_rgba(31,38,135,0.08)]"
                    }`}
                    style={{
                        backdropFilter: "blur(24px) saturate(150%)",
                        WebkitBackdropFilter: "blur(24px) saturate(150%)",
                    }}
                >
                    <p
                        className={`${inter_bold.className} text-sm uppercase tracking-[0.28em] sm:text-base`}
                    >
                        Chandra K. Rajwal
                    </p>

                    <nav className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur-xl sm:gap-2">
                        {navigationItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => scrollToSection(item.id)}
                                    className={`rounded-full px-4 py-1.5 text-xs transition-all duration-200 sm:px-5 sm:text-sm ${
                                        isActive
                                            ? "bg-white/70 text-black shadow-[0_4px_12px_rgba(31,38,135,0.15)]"
                                            : "text-neutral-600 hover:bg-white/25"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <section
                    ref={sectionRefs.home}
                    id="home"
                    className="scroll-mt-32 pt-2 sm:pt-4"
                >
                    <div className="mb-6 flex items-start justify-between text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500 sm:text-xs">
                        <span>- 01 / INDEX</span>
                        <div className="flex flex-col items-end gap-1 text-right text-xs">
                            <p>INDORE, IN</p>
                            <p className="text-neutral-300">LAT 22.719568  -  LON 75.857727</p>
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl text-center">
                        <FourierEpicycle
                            svgMarkup={Inspire}
                            size={300}
                            maxCircles={700}
                            speed={0.0049}
                        />

                        <h1 className="text-[clamp(2.2rem,7vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-neutral-900 sm:text-[clamp(2.8rem,6vw,5rem)]">
                            Hii! I’m{" "}
                            <span className="underline decoration-2 underline-offset-8">
                                Chandra
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                            A programmer currently training machine learning and
                            AI models and exploring the path toward AI research.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="#projects"
                                onClick={(event) => {
                                    event.preventDefault();
                                    scrollToSection("projects");
                                }}
                                className="inline-flex w-full max-w-[16rem] items-center justify-center rounded-[2rem] border border-white/30 bg-white/25 px-6 py-5 text-sm text-black shadow-[0_10px_30px_rgba(31,38,135,0.14)] backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:text-base"
                            >
                                View selected work ↘
                            </a>

                            <a
                                href="mailto:chandrakrajwal@gmail.com"
                                className="inline-flex w-full max-w-[16rem] items-center justify-center rounded-[2rem] border border-white/35 bg-white/18 px-6 py-5 text-sm text-neutral-700 shadow-[0_10px_30px_rgba(31,38,135,0.1)] backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:text-base"
                            >
                                hello@chandrakrajwal.dev
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    ref={sectionRefs.projects}
                    id="projects"
                    className="scroll-mt-32 pt-8 sm:pt-10"
                >
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500 sm:text-xs">
                                - 02 / Projects
                            </p>
                            <h2 className="text-[clamp(1.2rem,4vw,2.4rem)] leading-[1.3] tracking-[-0.05em] text-neutral-900 sm:text-[clamp(1.9rem,3vw,2.5rem)] mt-2">
                                Selected work,{" "}
                                <span className="text-neutral-500 italic">
                                    indexed by signal
                                </span>
                                .
                            </h2>
                        </div>
                        <p className="hidden text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500 sm:block">
                            Scroll
                        </p>
                    </div>

                    <div className="space-y-5">
                        {projects.map((project, index) => (
                            <article
                                key={project.title}
                                className="overflow-hidden rounded-[2rem] border border-black/10 bg-white"
                            >
                                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500">
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span>{new Date().getFullYear()}</span>
                                </div>

                                <div className="relative aspect-[16/9] bg-[#F3F3EF]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 760px"
                                        className="object-contain p-5"
                                    />
                                </div>

                                <div className="flex flex-col gap-4 px-5 pb-5 pt-4 sm:px-6">
                                    <div className="flex flex-col gap-2">
                                        <h3
                                            className={`${inter_bold.className} text-2xl text-neutral-900`}
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                                            {project.description}
                                        </p>
                                    </div>

                                    {project.technologies?.length ? (
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology.name}
                                                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-neutral-600"
                                                    >
                                                        <Image
                                                            src={
                                                                technology.icon
                                                            }
                                                            alt={
                                                                technology.name
                                                            }
                                                            width={14}
                                                            height={14}
                                                            className="h-3.5 w-3.5 object-contain"
                                                        />
                                                        {technology.name}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    ) : null}

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex w-fit items-center rounded-full border border-white/35 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-900 shadow-[0_8px_24px_rgba(31,38,135,0.1)] backdrop-blur-xl transition-colors duration-200 hover:bg-white/45"
                                    >
                                        View Project ↗
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    ref={sectionRefs.about}
                    id="about"
                    className="scroll-mt-32 pt-8 sm:pt-10"
                >
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500 sm:text-xs">
                        - 03 / About
                    </p>
                    <div className="rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
                        <h2
                            className={`text-[clamp(1.2rem,4vw,2.4rem)] leading-[1.3] tracking-[-0.05em] text-neutral-900 sm:text-[clamp(1.9rem,3vw,2.5rem)] mt-2`}
                        >
                            I write code that works (most of the time), break
                            things to learn faster, and dream of one day{" "}
                            <span className="underline decoration-2 underline-offset-8">
                                simulating the universe
                            </span>{" "}
                            on a quantum chip — just for fun.
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                            <span className="text-neutral-500">final goal</span>{" "}
                            — build intelligent systems that are faster,
                            smarter, and maybe just a bit weirder than anything
                            we&apos;ve seen before. If it involves code, math,
                            or quantum weirdness — you have my attention.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {[
                                "LLMs",
                                "RAG",
                                "Distributed Training",
                                "CUDA",
                                "Inference",
                                "Vision",
                                "Systems Design",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-black/10 bg-[#F6F5F1] px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-neutral-600"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="pb-2 pt-1">
                    <div className="flex items-bottom justify-between gap-4 rounded-[1.75rem] border border-black/10 bg-white/30 px-4 py-4 backdrop-blur-2xl sm:px-5">
                        <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">
                                Contact
                            </p>
                            <a
                                href="mailto:hello@chandrarajwal.dev"
                                className={`${inter_bold.className} mt-2 block text-lg text-neutral-900 sm:text-xl`}
                            >
                                hello@chandrarajwal.dev
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/chandrakumarrajwal"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Image
                                    src="/images/linkedin.svg"
                                    alt="LinkedIn"
                                    width={18}
                                    height={18}
                                    className="h-4 w-4 sm:h-5 sm:w-5"
                                />
                            </a>
                            <a
                                href="https://x.com/ChintuRajwal"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                            >
                                <Image
                                    src="/images/twitter.svg"
                                    alt="X"
                                    width={18}
                                    height={18}
                                    className="h-4 w-4 sm:h-5 sm:w-5"
                                />
                            </a>
                            <a
                                href="https://github.com/imckr"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <Image
                                    src="/images/github.svg"
                                    alt="GitHub"
                                    width={18}
                                    height={18}
                                    className="h-4 w-4 sm:h-5 sm:w-5"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={handleEmailRedirect}
                                aria-label="Email"
                            >
                                <Image
                                    src="/images/mail.svg"
                                    alt="Email"
                                    width={18}
                                    height={18}
                                    className="h-4 w-4 sm:h-5 sm:w-5"
                                />
                            </button>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
