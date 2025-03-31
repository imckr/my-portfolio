"use client";
import { inter_bold, Cutive, Jet } from "@/Fonts/font";
import { useState, useRef } from "react";
import Image from "next/image";
import { Menu } from "@/animations/animScripts";
import InnerContents from "../InnerContents";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { handleEmailRedirect, handleTransition } from "@/Functions/handlers";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

gsap.registerPlugin();

export default function Screen() {
    const [flag, setFlag] = useState(false);
    const indC = useRef<HTMLImageElement>(null)
    const indN = useRef<HTMLImageElement>(null)
    const indexes = [
        <p key="1">HOME</p>,
        <p key="2">PROJECTS</p>,
        // <p key="2" onClick={handleTransition}>ASSIGNMENT</p>,
        <p key="3" onClick={handleTransition}>
            BLOG
        </p>,
        <p key="4">ABOUT</p>,
    ];

    const twitterLink: string = "https://x.com/ChintuRajwal";
    const gitLink: string = "https://github.com/imckr";
    // const facebookLink: string = "https://www.facebook.com/chetan.rajwal.14";
    const linkedInLink: string =
        "https://www.linkedin.com/in/chandra-kumar-rajwal-31774622a";

    const indexRef = useRef(null);

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

        if (!flag) {
            const tl2 = gsap.timeline();
            tl2.from(indexRef, {
                duration: 2,
                x: -100,
                opacity: 0,
            });
        } else {
            console.log("not running");
        }
    };

    return (
        <>
            <div className="bg flex justify-center w-screen h-screen">
                <div className="inner-screen flex flex-col justify-start mt-[12vh] w-[70vw] h-[70vh] border-black border-2 rounded-xl overflow-hidden">
                    <div className="flex justify-between w-[70vw] items-center h-[5vh]">
                        <div className="ml-4 flex items-center gap-2">
                            <Image
                                src="./images/HomeIcon.svg"
                                className="w-5 h-5"
                                width={17}
                                height={17}
                                alt="home"
                            />
                            <p className={`${inter_bold.className}`}>/ Home</p>{" "}
                        </div>

                        <div className="flex">
                            <div ref={indexRef}>
                                <ul>
                                    {indexes.map((index, i) => (
                                        <li
                                            key={i}
                                            className={`inline-block ${
                                                Jet.className
                                            } px-4 cursor-pointer ${
                                                flag ? "block" : "hidden"
                                            }`}
                                        >
                                            {index}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="flex gap-4 items-center px-4 cursor-pointer border-l-2 border-black"
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
                    {/* <Screen1/> */}
                    <Screen2 />
                    <div className="flex justify-between py-[1vh] px-[1.6vh]">
                        <p>Copyright ©2023 All rights reserved</p>
                        <div className="flex gap-5 items-center cursor-pointer">
                            <a
                                href={linkedInLink}
                                target="_blank"
                                rel="noreferrer"
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
                            >
                                <Image
                                    src="./images/twitter.svg"
                                    alt="sociallinks"
                                    width={17}
                                    height={17}
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href={gitLink} target="_blank" rel="noreferrer">
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
                                className="w-6 h-7"
                                onClick={handleEmailRedirect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
