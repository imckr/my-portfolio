"use client";
import { Jet } from "@/Fonts/font";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Screen2() {
    const P = useRef<HTMLParagraphElement>(null);
    const R = useRef<HTMLParagraphElement>(null);
    const O = useRef<HTMLParagraphElement>(null);
    const J = useRef<HTMLParagraphElement>(null);
    const E = useRef<HTMLParagraphElement>(null);
    const C = useRef<HTMLParagraphElement>(null);
    const T = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        gsap.from(T.current, {
            y: -300,
            ease: "back.out(3.5)",
            duration: 1,
            delay: 3,
        });
        gsap.from(C.current, {
            y: -350,
            ease: "back.out(3.1)",
            duration: 1,
            delay: 3,
        });
        gsap.from(E.current, {
            y: -400,
            ease: "back.out(2.7)",
            duration: 1,
            delay: 3,
        });
        gsap.from(J.current, {
            y: -450,
            ease: "back.out(2.3)",
            duration: 1,
            delay: 3,
        });
        gsap.from(O.current, {
            y: -500,
            ease: "back.out(1.9)",
            duration: 1,
            delay: 3,
        });
        gsap.from(R.current, {
            y: -550,
            ease: "back.out(1.5)",
            duration: 1,
            delay: 3,
        });
        gsap.from(P.current, {
            y: -600,
            ease: "back.out(1.1)",
            duration: 1,
            delay: 3,
        });
    });
    return (
        <div className="screen-2 w-[69.8vw] h-[60vh] flex justify-center items-center border-black border-y-2 overflow-hidden">
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
        </div>
    );
}
