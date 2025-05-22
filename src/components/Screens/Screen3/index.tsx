import next from "next";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Jet, Jet_italic, Jet_extrabold, Jet_bold} from "@/Fonts/font";

export default function Screen3() {
    const A = useRef<HTMLParagraphElement>(null);
    const B = useRef<HTMLParagraphElement>(null);
    const O = useRef<HTMLParagraphElement>(null);
    const U = useRef<HTMLParagraphElement>(null);
    const T = useRef<HTMLParagraphElement>(null);
    const AboutPage = useRef<HTMLDivElement>(null);

    const skilldetails = {
        lang: {
            title: "LANGUAGES I KNOW :",
            width: "w-36",
            img: [
                "./images/skill/Cpp.svg",
                "./images/skill/Node.svg",
                "./images/skill/java.svg",
                "./images/skill/Rust.svg",
                "./images/skill/python.svg",
            ],
        },

        skills: {
            title: "SKILLS I HAVE    :",
            width: "w-32",
            img: [
                "./images/skill/AWS.svg",
                "./images/skill/Next.svg",
                "./images/skill/React.svg",
                "./images/skill/Git.svg",
                "./images/skill/Docker.svg",
            ],
        },

        Tools: {
            title: "TOOLS HELPS ME :",
            width: "w-32",
            img: [
                "./images/skill/Anaconda.svg",
                "./images/skill/Eclipse.svg",
                "./images/skill/VScode.svg",
                "./images/skill/VS.svg",
                "./images/skill/Github.svg",
                "./images/skill/Jupyter.svg",
                "./images/skill/Pycharm.svg",
            ],
        },

        DesTool: {
            title: "FOR DESIGNING :",
            width: "w-32",
            img: [
                "./images/skill/Figma.svg",
                "./images/skill/Krita.svg",
                "./images/skill/AutoSketch.svg",
            ],
        },

        Platform: {
            title: "PLATFORMS INDEPENDENCY :",
            width: "w-48",
            img: [
                "./images/skill/Linux.svg",
                "./images/skill/RedHat.svg",
                "./images/skill/Kali.svg",
                "./images/skill/Windows.svg",
            ],
        },
    };

    const del = 0.5;

    useGSAP(() => {
        gsap.from(T.current, {
            y: -300,
            ease: "back.out(2.7)",
            duration: 1,
            delay: del,
        });
        gsap.from(U.current, {
            y: -350,
            ease: "back.out(2.3)",
            duration: 1,
            delay: del,
        });
        gsap.from(O.current, {
            y: -400,
            ease: "back.out(1.9)",
            duration: 1,
            delay: del,
        });
        gsap.from(B.current, {
            y: -450,
            ease: "back.out(1.5)",
            duration: 1,
            delay: del,
        });
        gsap.from(A.current, {
            y: -500,
            ease: "back.out(1.1)",
            duration: 1,
            delay: del,
        });
        gsap.from(AboutPage.current, {
            opacity: 0,
            duration: 1,
            delay: del + 1,
        });
    });

    return (
        <>
            <div className="about-screen w-full h-[60vh] flex justify-start items-start p-4 border-black border-y-2 overflow-hidden">
                <div
                    className={`absolute flex flex-col right-[4%] ${Jet.className} top-[-1%] text-4xl`}
                >
                    <p className="text-center font-extrabold" ref={A}>
                        A
                    </p>
                    <p className="text-center font-extrabold" ref={B}>
                        B
                    </p>
                    <p className="text-center font-extrabold" ref={O}>
                        O
                    </p>
                    <p className="text-center font-extrabold" ref={U}>
                        U
                    </p>
                    <p className="text-center font-extrabold" ref={T}>
                        T
                    </p>
                </div>

                <div
                    className="flex flex-row justify-between w-full h-full px-8"
                    ref={AboutPage}
                >
                    <div className="flex flex-row">
                        <div className="h-full flex flex-col justify-center overflow-x-scroll">
                            {/* <div> */}
                            {Object.entries(skilldetails).map(
                                ([key, skill]) => (
                                    <div key={key} className="mb-6">
                                        <div className={`text-sm`}>
                                            <p className={`${Jet_bold.className}`}>
                                                {skill.title}
                                            </p>
                                            <Image
                                                className={skill.width}
                                                src="./images/underline.svg"
                                                width={500}
                                                height={500}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-row gap-4 w-full h-full justify-start items-center ml-4">
                                            {skill.img.map((img, imgIndex) => (
                                                <Image
                                                    key={imgIndex}
                                                    src={img}
                                                    className="w-8"
                                                    width={500}
                                                    height={500}
                                                    alt=""
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                            )}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="w-[2px] bg-black h-full ml-4"></div>

                    <div className="flex flex-col justify-center w-1/2">
                        <div
                            className={`flex flex-col gap-5 text-lg leading-relaxed ${Jet.className}`}
                        >
                            <p className="font-medium">
                                Hi,{" "}
                                <span className={`${Jet_extrabold.className}`}>
                                    I’m Chandra
                                </span>{" "}
                                — a programmer currently training machine
                                learning models and exploring the path toward{" "}
                                <span className={`${Jet_extrabold.className}`}>
                                    Quantum AI research.
                                </span>
                            </p>
                            <p className="font-medium">
                                I write code that works (most of the time),
                                break things to learn faster, and dream of one
                                day simulating the universe on a quantum chip —
                                just for fun.
                            </p>
                            <p className="font-medium">
                                <span className={`${Jet_extrabold.className}`}>
                                    Final goal?
                                </span>{" "}
                                Build intelligent systems that are faster,
                                smarter, and maybe just a bit weirder than
                                anything we’ve seen before.
                            </p>
                            <div className="w-5/6">
                                <p
                                    className={`${Jet_italic.className} font-extrabold text-lg`}
                                >
                                    If it involves code, math, or quantum
                                    weirdness — you’ve got my attention.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Image
                                src="./images/Sign.svg"
                                alt=""
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
