"use client";
import { Jet, inter_bold } from "@/Fonts/font";
import Marquee from "@/components/Marquee";
import Margins from "@/components/Margins";
import Slogan from "@/components/Slogan";
// import PageLabel from "@/components/PageLabel";
import Screen from "@/components/Screens";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
    // const [zoomed, setZoomed] = useState(false);

    // useEffect(() => {
    //     const handleZoom = () => {
    //         const ratio = window.devicePixelRatio;
    //         setZoomed(ratio !== 1);
    //     };

    //     handleZoom();
    //     window.addEventListener("resize", handleZoom);
    //     return () => window.removeEventListener("resize", handleZoom);
    // }, []);

    // const dot = useRef<HTMLDivElement>(null);
    // const ring = useRef<HTMLDivElement>(null);

    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        interface MouseMoveEvent extends MouseEvent {
            clientX: number;
            clientY: number;
        }

        const handleMouseMove = (e: MouseMoveEvent): void => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (dot) {
          dot.style.left = `${mouseX}px`;
          dot.style.top = `${mouseY}px`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.1;
            ringY += (mouseY - ringY) * 0.1;

            if (ring) {
                ring.style.left = `${ringX}px`;
                ring.style.top = `${ringY}px`;
            }

            requestAnimationFrame(animate);
        };

        const addHover = () => {
            if (dot) dot.classList.add("hovered");
            if (ring) ring.classList.add("hovered");
        };

        const removeHover = () => {
            if (dot) dot.classList.remove("hovered");
            if (ring) ring.classList.remove("hovered");
        };

        document.querySelectorAll("a, button, .hoverable").forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        document.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll("a, button, .hoverable").forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            <div id="cursor">
                <div className="cursor-dot" ref={dotRef}></div>
                <div className="cursor-ring" ref={ringRef}></div>
            </div>

            {/* {zoomed ? ( */}
                {/* <div className="w-screen h-screen flex justify-center items-center text-2xl">
                    Zoom is enabled — for best experience, reset to 100% (Ctrl +
                    0)
                </div> */}
            {/* ) : ( */}
                <>
                    <Margins />
                    <Slogan />
                    <Screen />
                    <div
                        className={`upper ${Jet.className} text-sm absolute flex overflow-hidden z-[-1%] ml-[4%] w-[88%] top-[-1%]`}
                    >
                        <Marquee />
                    </div>

                    <div
                        className={`upper ${Jet.className} text-sm absolute flex overflow-hidden z-[-1%] w-[88%] bottom-[1%] right-[4%]`}
                    >
                        <Marquee />
                    </div>
                </>
            {/* )} */}
        </>
    );
}
