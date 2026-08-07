"use client";
import { Jet } from "@/Fonts/font";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import projectData from "../../../app/projects/projects.json";

type Screen2Props = {
    onScrollLockChange?: (locked: boolean) => void;
    onScrollUnlock?: () => void;
};

type Technology = {
    icon: string;
    name: string;
};

type ProjectEntry = {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: Technology[];
};

const projects = projectData as ProjectEntry[];

export default function Screen2({ onScrollLockChange, onScrollUnlock }: Screen2Props) {
    const P = useRef<HTMLParagraphElement>(null);
    const R = useRef<HTMLParagraphElement>(null);
    const O = useRef<HTMLParagraphElement>(null);
    const J = useRef<HTMLParagraphElement>(null);
    const E = useRef<HTMLParagraphElement>(null);
    const C = useRef<HTMLParagraphElement>(null);
    const T = useRef<HTMLParagraphElement>(null);

    const con = useRef<HTMLDivElement>(null);

    const del = 4;

    useGSAP(() => {
        gsap.from(T.current, {
            y: -300,
            ease: "back.out(3.5)",
            duration: 1,
            delay: del,
        });
        gsap.from(C.current, {
            y: -350,
            ease: "back.out(3.1)",
            duration: 1,
            delay: del,
        });
        gsap.from(E.current, {
            y: -400,
            ease: "back.out(2.7)",
            duration: 1,
            delay: del,
        });
        gsap.from(J.current, {
            y: -450,
            ease: "back.out(2.3)",
            duration: 1,
            delay: del,
        });
        gsap.from(O.current, {
            y: -500,
            ease: "back.out(1.9)",
            duration: 1,
            delay: del,
        });
        gsap.from(R.current, {
            y: -550,
            ease: "back.out(1.5)",
            duration: 1,
            delay: del,
        });
        gsap.from(P.current, {
            y: -600,
            ease: "back.out(1.1)",
            duration: 1,
            delay: del,
        });
        gsap.from(con.current, {
            opacity: 0,
            duration: 1,
            delay: del + 1,
        })
    });


    return (
        <div className="screen-2 w-full h-[60vh] flex justify-start items-start p-4 border-black border-y-2 overflow-hidden">
            <div
                className={`absolute flex flex-col right-[4%] ${Jet.className} top-[-1%] text-4xl`}
            >
                <p className="text-center font-extrabold" ref={P}>
                    P
                </p>
                <p className="text-center font-extrabold" ref={R}>
                    R
                </p>
                <p className="text-center font-extrabold" ref={O}>
                    O
                </p>
                <p className="text-center font-extrabold" ref={J}>
                    J
                </p>
                <p className="text-center font-extrabold" ref={E}>
                    E
                </p>
                <p className="text-center font-extrabold" ref={C}>
                    C
                </p>
                <p className="text-center font-extrabold" ref={T}>
                    T
                </p>
            </div>

            {/* Project Content Below */}

            {/* <div className="w-[69.8vw]"> */}
            {/* <h1>Hello this is project page !</h1> */}
            <div className="relative flex flex-col w-full h-[58vh] p-2" ref={con}>
{/* screen */}
                <div
                    className="projects_list flex flex-row gap-6 p-2 h-[56vh] overflow-x-auto"
                    onWheelCapture={(event) => event.stopPropagation()}
                    onMouseEnter={() => {
                        onScrollLockChange?.(true);
                    }}
                    onMouseLeave={() => {
                        onScrollLockChange?.(false);
                        onScrollUnlock?.();
                    }}
                >
{/* project list */}
                    {projects.map((project) => (
                        <div className="project flex-shrink-0 w-full flex flex-col rounded-lg overflow-hidden" key={project.title}>
                            <div className="relative w-full aspect-[16/9] bg-black
                             overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 70vw"
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <div className="flex justify-between items-center gap-6">
                                    <h3 className="font-bold text-2xl">{project.title}</h3>
                                    <div className="technologies_used flex gap-2">
                                        {project.technologies?.map((tech, index) => (
                                            <div key={index} className="tech_icon flex items-center gap-1 p-1 px-4 rounded-xl bg-black">
                                                <Image
                                                    key={index}
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={15}
                                                    height={15}
                                                    className="object-contain"
                                                    />
                                                <p className="text-xs text-white">{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-lg text-gray-600">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* <div className="project pl-4 w-2/3 border-2">
                
                            <div
                                className="flex justify-end w-full my-20 pr-4 border-2"
                                onClick={handleTransition}
                            >
                                <Image
                                    className="z-10 absolute w-40 mt-3 mr-3 max-[1080px]:w-32 hoverable"
                                    src="/images/ButtonBg.svg"
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                                <Image
                                    className="z-10 max-[1080px]:w-32 absolute w-40 hover:mr-3 hover:mt-3 transition-all duration-200 ease-in hoverable"
                                    src="/images/ButtonBg2.svg"
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </div>
                        
                    </div> */}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
