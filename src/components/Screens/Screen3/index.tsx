import next from "next";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Jet } from "@/Fonts/font";

export default function Screen3() {
    const A = useRef<HTMLParagraphElement>(null);
    const B = useRef<HTMLParagraphElement>(null);
    const O = useRef<HTMLParagraphElement>(null);
    const U = useRef<HTMLParagraphElement>(null);
    const T = useRef<HTMLParagraphElement>(null);

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
    });

    return (
        <>
            <div className="about-screen w-[69.8vw] h-[60vh] flex justify-start items-start p-4 border-black border-y-2 overflow-hidden">
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
            </div>
        </>
    );
}
