"use client";
import { inter_bold, Cutive, Jet } from "@/Fonts/font";
import { useState, useRef } from "react";
import Image from "next/image";
import { Menu } from "@/animations/animScripts";
import InnerContents from "../InnerContents";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin();

export default function Screen() {
    const [flag, setFlag] = useState(false);
    const indexes = [
        <p key="1">HOME</p>,
        <p key="2">PROJECTS</p>,
        <p key="3">BLOG</p>,
        <p key="4">ABOUT</p>
    ];

    const indexRef = useRef(null);

    const handleOnClickMenu = async () => {
        await Menu(".index", flag, ".indexC");
        await setFlag(!flag);

        if (!flag) {
            const tl = gsap.timeline();
            tl.from(indexRef, {
                duration: 5,
                x: -100,
                opacity: 1,
            })

            console.log("running")
        }else {
          console.log("not running")
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
                                    />
                                 ) : (
                                    <Image
                                        src="./images/Menu.svg"
                                        className="index w-7 h-7"
                                        width={17}
                                        height={17}
                                        alt="menu"
                                    />
                               )} 
                            </div>
                        </div>
                    </div>
                    <div className="main-screen w-[69.8vw] h-[60vh] flex justify-center items-center border-black border-y-2 overflow-hidden">
                        <div className="making_it_component_in_few_minutes">
                            <InnerContents />
                        </div>
                    </div>
                    <div className="flex justify-between py-[1vh] px-[1.6vh]">
                        <p>Copyright ©2023 All rights reserved</p>
                        <div className="flex gap-5 items-center cursor-pointer">
                            <Image
                                src="./images/linkedin.svg"
                                alt="sociallinks"
                                width={17}
                                height={17}
                                className="w-6 h-6 mb-1"
                            />
                            <Image
                                src="./images/twitter.svg"
                                alt="sociallinks"
                                width={17}
                                height={17}
                                className="w-6 h-6"
                            />
                            <Image
                                src="./images/github.svg"
                                alt="sociallinks"
                                width={17}
                                height={17}
                                className="w-6 h-6"
                            />
                            <Image
                                src="./images/mail.svg"
                                alt="sociallinks"
                                width={17}
                                height={17}
                                className="w-6 h-7"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
