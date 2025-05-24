"use client";
import { Jet } from "@/Fonts/font";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { handleTransition } from "@/Functions/handlers";

export default function Screen2() {
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
            <div className="flex flex-col w-[69.8vw] h-[60vh]" ref={con}>
                <div
                    className={`w-full ${Jet.className} h-[10vh] items-center flex`}
                >
                    <p className="font-extrabold text-6xl">Blog Design</p>
                </div>

                <div className="project_info flex py-8 h-[48vh]">
                    <div className="project_img w-1/3">
                        <Image
                            src="/images/P1.jpg"
                            alt="project"
                            width={500}
                            height={500}
                            className="h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="project_desc pl-4 w-2/3">
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed quis ex finibus, scelerisque neque vel,
                            lobortis sapien. Aliquam eleifend, lectus in feugiat
                            malesuada, justo justo hendrerit eros, ut tempor
                            turpis nulla ac mauris. In tempor at ipsum pulvinar
                            blandit. Maecenas pharetra egestas faucibus. Nullam
                            eget dui efficitur, malesuada metus id, bibendum
                            turpis. Suspendisse eu ex vestibulum, imperdiet nunc
                            et, bibendum ipsum. Curabitur congue dapibus ipsum
                            congue finibus. Suspendisse venenatis feugiat quam
                            non molestie. Proin tellus tellus, egestas id
                            aliquam sed, sodales at enim.
                        </p>
                        <div>
                            <div
                                className="flex justify-end w-full my-20 pr-4"
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
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
