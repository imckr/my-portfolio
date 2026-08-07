"use client";
import { inter_bold, Cutive, Jet } from "@/Fonts/font";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu } from "@/animations/animScripts";
import InnerContents from "../InnerContents";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { handleEmailRedirect, handleTransition } from "@/Functions/handlers";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

gsap.registerPlugin();

export default function Screen() {
    
    const [flag, setFlag] = useState(false);
    const [page, setPage] = useState(0);
    const [scrollLocked, setScrollLocked] = useState(false);
    const [unlockPulse, setUnlockPulse] = useState(false);
    const indC = useRef<HTMLImageElement>(null);
    const indN = useRef<HTMLImageElement>(null);
    const mainScreen = useRef<HTMLDivElement>(null);
    const twitterLink: string = "https://x.com/ChintuRajwal";
    const gitLink: string = "https://github.com/imckr";
    const linkedInLink: string = "https://www.linkedin.com/in/chandrakrajwal";
    const indexRef = useRef(null);
    const scrollBuffer = useRef(0);
    const threshold = 200; // Adjust this to control sensitivity
    const pageTitle = useRef<HTMLParagraphElement>(null);
    const navigation = useRef<HTMLDivElement>(null);
    const CPR = useRef<HTMLParagraphElement>(null);
    const scrollCooldown = useRef(false);
    // const facebookLink: string = "https://www.facebook.com/chetan.rajwal.14";
    
    
    const indexes = [
        <p key="1" onClick={() => setPage(0)}>
            HOME
        </p>,
        <p key="2" onClick={() => setPage(1)}>
            PROJECTS
        </p>,
        // <p key="2" onClick={handleTransition}>ASSIGNMENT</p>,
        <p key="3" onClick={handleTransition}>
            BLOG
        </p>,
        <p key="4" onClick={() => setPage(2)}>ABOUT</p>,
    ];


    const handleOnClickMenu = () => {
        // Menu(".index", ".indexC", flag);
        const tl = gsap.timeline();
        setFlag((currentFlag) => {
            if (currentFlag) {
                tl.to(indN.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power4.inOut",
                }).to(indC.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power4.inOut",
                });
            } else {
                tl.to(indC.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power4.inOut",
                }).to(indN.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power4.inOut",
                });
            }

            return !currentFlag;
        });

        // if (!flag) {
        //     const tl2 = gsap.timeline();
        //     tl2.from(indexRef, {
        //         duration: 2,
        //         x: -100,
        //         opacity: 0,
        //     });
        // } else {
        //     console.log("not running");
        // }
    };


    useEffect(() => {
        const handleWheel = (e: WheelEvent): void => {
            const pointerElement = document.elementFromPoint(e.clientX, e.clientY);
            if (pointerElement instanceof Element && pointerElement.closest(".projects_list")) {
                return;
            }

            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                scrollBuffer.current = 0;
                return;
            }

            if (scrollCooldown.current) {
                return;
            }

            const direction = Math.sign(e.deltaY);
            const currentBufferDirection = Math.sign(scrollBuffer.current);

            if (direction !== 0 && currentBufferDirection !== 0 && direction !== currentBufferDirection) {
                scrollBuffer.current = 0;
            }

            scrollBuffer.current += e.deltaY;

            if (Math.abs(scrollBuffer.current) < threshold) {
                return;
            }

            e.preventDefault();
            scrollCooldown.current = true;

            setPage((prev: number) => {
                if (scrollBuffer.current > 0) {
                    return Math.min(prev + 1, 2);
                }

                return Math.max(prev - 1, 0);
            });

            scrollBuffer.current = 0;

            window.setTimeout(() => {
                scrollCooldown.current = false;
            }, 450);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);


    useGSAP(() => {
        const tl = gsap.timeline();
        const tl2 = gsap.timeline();
        const tl3 = gsap.timeline();
        const tl4 = gsap.timeline();
        tl.fromTo(
            mainScreen.current,
            { width: "70vw",
                
             },
            { width: "10vw", duration: 2, ease: "linear", }
        ).to(
            mainScreen.current,
            { width: "70vw", duration: 3, ease: "back.out(1.2)" }
        )
        
        tl2.to(pageTitle.current, {
            opacity: 0,
            duration: 0.1,
            ease: "power4.inOut",
        }).to(pageTitle.current, {
            opacity: 1,
            duration: 1,
            delay: 4,
            ease: "power4.inOut",
        })

        tl4.to(CPR.current, {
            opacity: 0,
            duration: 0.1,
            ease: "power4.inOut",
        }).to(CPR.current, {
            opacity: 1,
            duration: 1,
            delay: 4,
            ease: "power4.inOut",
        })

        tl3.to(navigation.current, {
            opacity: 0,
            duration: 0.1,
            ease: "power4.inOut",
        }).to(navigation.current, {
            opacity: 1,
            duration: 1,
            delay: 4,
            ease: "power4.inOut",
        })
    }, [page]);

    return (
        <>
            {/* <div className="target-element w-28 h-28 border-3 bg-black" ref={sc}></div> */}
            <div className="bg flex justify-center w-screen h-screen">
                <div
                    className="inner-screen flex flex-col justify-start mt-[12vh] w-[70vw] h-[70vh] border-black border-2 rounded-xl overflow-hidden"
                    ref={mainScreen}
                >
                    <div className="relative flex justify-between w-full items-center h-[5vh]">
                        <div className="ml-4 flex items-center gap-2">
                            <Image
                                src="./images/HomeIcon.svg"
                                className="w-5 h-5"
                                width={17}
                                height={17}
                                alt="home"
                            />
                            <p className={`${inter_bold.className} opacity-0`} ref={pageTitle}>
                                /{" "}
                                {page === 0
                                    ? "Home"
                                    : page === 1
                                    ? "Projects"
                                    : page === 2
                                    ? "About"
                                    : ""}
                            </p>
                        </div>

                        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
                            <div
                                className={`lock-badge flex items-center gap-2 rounded-full border border-black bg-[#F7FFF0] px-3 py-1 shadow-[0_6px_0_0_rgba(0,0,0,0.12)] ${
                                    scrollLocked
                                        ? "lock-badge-visible"
                                        : unlockPulse
                                        ? "unlock-badge"
                                        : "lock-badge-hidden"
                                }`}
                                aria-live="polite"
                            >
                                <span className={`lock-icon ${scrollLocked ? "lock-icon-locked" : "lock-icon-unlocked"}`}>
                                    {scrollLocked ? (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                            <path
                                                d="M7 10V8a5 5 0 0 1 10 0v2"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                            <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 13v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                            <path
                                                d="M7 10V8a5 5 0 0 1 9.2-2.7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                            <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M14.5 13.5 18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    )}
                                </span>
                                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                                    {scrollLocked ? "Vertical Scroll Locked" : "Vertical Scroll Unlocked"}
                                </span>
                            </div>
                        </div>

                        <div className="flex">
                            <div ref={navigation}>
                                <ul>
                                    {indexes.map((index, i) => (
                                        <li key={i} className={`inline-block ${Jet.className} px-4 hoverable`}>
                                            {index}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="relative flex h-7 w-7 items-center justify-center gap-4 border-l-2 border-black px-4"
                                onClick={handleOnClickMenu}
                            >
                                <Image
                                    src="./images/Cross.svg"
                                    className={`indexC absolute h-7 w-7 transition-opacity duration-300 ${flag ? "opacity-100" : "opacity-0"}`}
                                    width={17}
                                    height={17}
                                    alt="menu close"
                                    ref={indC}
                                />
                                <Image
                                    src="./images/Menu.svg"
                                    className={`index h-7 w-7 transition-opacity duration-300 ${flag ? "opacity-0" : "opacity-100"}`}
                                    width={17}
                                    height={17}
                                    alt="menu open"
                                    ref={indN}
                                />
                            </div>
                        </div>
                    </div>

                    {page === 0 ? (
                        <Screen1 />
                    ) : page === 1 ? (
                        <Screen2
                            onScrollLockChange={(locked) => {
                                setScrollLocked(locked);
                                if (locked) {
                                    setUnlockPulse(false);
                                }
                            }}
                            onScrollUnlock={() => {
                                setScrollLocked(false);
                                setUnlockPulse(true);
                                window.setTimeout(() => setUnlockPulse(false), 500);
                            }}
                        />
                    ) : (
                        <Screen3 />
                    )}
                    {/* <Screen1/> */}
                    {/* <Screen2 /> */}
                    <div className="flex justify-between py-[1vh] px-[1.6vh]">
                        <p ref={CPR}>Copyright ©2023 All rights reserved</p>
                        <div className="flex gap-5 items-center">
                            <a
                                href={linkedInLink}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-none hoverable"
                            >
                                <Image
                                    src="./images/linkedin.svg"
                                    alt="sociallinks"
                                    width={17}
                                    height={17}
                                    className="w-6 h-6 mb-1"
                                />
                            </a>
                            <a
                                href={twitterLink}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-none hoverable"
                            >
                                <Image
                                    src="./images/twitter.svg"
                                    alt="sociallinks"
                                    width={17}
                                    height={17}
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href={gitLink}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-none hoverable"
                            >
                                <Image
                                    src="./images/github.svg"
                                    alt="sociallinks"
                                    width={17}
                                    height={17}
                                    className="w-6 h-6"
                                />
                            </a>
                            <Image
                                src="./images/mail.svg"
                                alt="sociallinks"
                                width={17}
                                height={17}
                                className="w-6 h-7 hoverable"
                                onClick={handleEmailRedirect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
