"use client";
import { Jet } from "@/Fonts/font";
import Marquee from "@/components/Marquee";
import Margins from "@/components/Margins";
import MobileHome from "@/components/MobileHome";
import Slogan from "@/components/Slogan";
// import PageLabel from "@/components/PageLabel";
import Screen from "@/components/Screens";
import { useRef, useEffect, useState } from "react";

export default function Home() {
    const [isDesktop, setIsDesktop] = useState(false);
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const updateViewport = () => {
            setIsDesktop(mediaQuery.matches);
        };

        updateViewport();
        mediaQuery.addEventListener("change", updateViewport);

        return () => mediaQuery.removeEventListener("change", updateViewport);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isDesktop ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isDesktop]);

    useEffect(() => {
        if (!isDesktop) {
            return;
        }

        const dot = dotRef.current;
        const ring = ringRef.current;
        let animationFrameId = 0;

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

            animationFrameId = requestAnimationFrame(animate);
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
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll("a, button, .hoverable").forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDesktop]);

    return (
        <>
            <div className="hidden lg:block">
                <div id="cursor">
                    <div className="cursor-dot" ref={dotRef}></div>
                    <div className="cursor-ring" ref={ringRef}></div>
                </div>

                <Margins />
                <Slogan />
                <Screen />
                <div className={`upper ${Jet.className} text-sm absolute flex overflow-hidden z-[-1%] ml-[4%] w-[88%] top-[-1%]`}>
                    <Marquee />
                </div>

                <div className={`upper ${Jet.className} text-sm absolute flex overflow-hidden z-[-1%] w-[88%] bottom-[1%] right-[4%]`}>
                    <Marquee />
                </div>
            </div>

            <div className="block lg:hidden">
                <MobileHome />
            </div>
        </>
    );
}
