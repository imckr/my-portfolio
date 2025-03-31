"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Jet } from "@/Fonts/font";
import TextRoller from "@/animations/TextRoller";

export default function Screen1() {
    const H = useRef<HTMLParagraphElement>(null);
    const O = useRef<HTMLParagraphElement>(null);
    const M = useRef<HTMLParagraphElement>(null);
    const E = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        gsap.from(E.current, {
            y: -250,
            ease: "back.out(2.3)",
            duration: 1,
            delay: 3,
        });
        gsap.from(M.current, {
            y: -300,
            ease: "back.out(1.9)",
            duration: 1,
            delay: 3,
        });
        gsap.from(O.current, {
            y: -350,
            ease: "back.out(1.5)",
            duration: 1,
            delay: 3,
        });
        gsap.from(H.current, {
            y: -400,
            ease: "back.out(1.1)",
            duration: 1,
            delay: 3,
        });
    });

    return (
        <div className="main-screen w-[69.8vw] h-[60vh] flex justify-center items-center border-black border-y-2 overflow-hidden">
            {/* <PageLabel /> */}
            <div
                className={`absolute flex flex-col right-[4%] ${Jet.className} top-[-1%] text-4xl`}
            >
                <p className="text-center font-extrabold" ref={H}>
                    H
                </p>
                <p className="text-center font-extrabold" ref={O}>
                    O
                </p>
                <p className="text-center font-extrabold" ref={M}>
                    M
                </p>
                <p className="text-center font-extrabold" ref={E}>
                    E
                </p>
            </div>
            <div className="flex justify-center items-center gap-6">
                <h1
                    className={`${Jet.className} intro text-6xl font-extrabold`}
                >
                    Hii! I’m
                </h1>
                <div className="text-roller">
                    <TextRoller />
                </div>
            </div>
        </div>
    );
}
