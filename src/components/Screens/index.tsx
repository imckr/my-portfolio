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
        if (flag) {
            tl.to(indN, {
                opacity: 0,
                duration: 0.3,
                ease: "power4.inOut",
            }).to(indC, {
                opacity: 1,
                duration: 0.3,
                ease: "power4.inOut",
            });
        } else {
            tl.to(indC, {
                opacity: 0,
                duration: 0.3,
                ease: "power4.inOut",
            }).to(indN, {
                opacity: 1,
                duration: 0.3,
                ease: "power4.inOut",
            });
        }
        setFlag(!flag);

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
        interface WheelEventWithDeltaY extends WheelEvent {
            deltaY: number;
        }

        const handleWheel = (e: WheelEventWithDeltaY): void => {
            scrollBuffer.current += e.deltaY;

            // Scrolling down
            if (scrollBuffer.current >= threshold) {
                setPage((prev: number) => Math.min(prev + 1, 2));
                scrollBuffer.current = 0;
            }

            // Scrolling up
            if (scrollBuffer.current <= -threshold) {
                setPage((prev: number) => Math.max(prev - 1, 0));
                scrollBuffer.current = 0;
            }
        };

        window.addEventListener("wheel", handleWheel);
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
                    <div className="flex justify-between w-full items-center h-[5vh]">
                        <div className="ml-4 flex items-center gap-2">
                            <Image
                                src="./images/HomeIcon.svg"
                                className="w-5 h-5"
                                width={17}
                                height={17}
                                alt="home"
                            />
                            <p
                                className={`${inter_bold.className} opacity-0`}
                                ref={pageTitle}
                            >
                                /{" "}
                                {page === 0
                                    ? "Home"
                                    : page === 1
                                    ? "Projects"
                                    : page === 2
                                    ? "About"
                                    : ""}
                            </p>{" "}
                        </div>

                        <div className="flex">
                            <div ref={navigation}>
                                <ul>
                                    {indexes.map((index, i) => (
                                        <li
                                            key={i}
                                            className={`inline-block ${Jet.className} px-4  hoverable`}
                                        >
                                            {index}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="flex gap-4 items-center px-4 border-l-2 border-black"
                                onClick={handleOnClickMenu}
                            >
                                {flag ? (
                                    <Image
                                        src="./images/Cross.svg"
                                        className="indexC opacity-0 w-7 h-7"
                                        width={17}
                                        height={17}
                                        alt="menu"
                                        ref={indC}
                                    />
                                ) : (
                                    <Image
                                        src="./images/Menu.svg"
                                        className="index w-7 h-7"
                                        width={17}
                                        height={17}
                                        alt="menu"
                                        ref={indN}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {page === 0 ? (
                        <Screen1 />
                    ) : page === 1 ? (
                        <Screen2 />
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
