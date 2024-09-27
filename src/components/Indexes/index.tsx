"use client";
import Link from "next/link";
import { Jet } from "@/Fonts/font";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

export default function Indexes() {
    // useGSAP(() => {
    //   const tl = gsap.timeline();
    //   tl.from(".option", {
    //     opacity: 0,
    //     y: -10,
    //     duration: 1,
    //     ease: "linear",
    //     stagger: 0.3,
    //   });
    // });

    return (
        <>
            <motion.div
                className={`${Jet.className} indexes-container text-6xl p-20 flex flex-col gap-8 w-[69.7vw] h-[58.5vh]`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
            >
                <p className="option">
                    <Link href={"/"}>/ Home</Link>
                </p>
                <p className="option">
                    <Link href={"/Projects"}>/ Projects</Link>
                </p>
                <p className="option">
                    <Link href={"/Blog"}>/ Blog</Link>
                </p>
                <p className="option">
                    <Link href={"/About"}>/ About</Link>
                </p>
            </motion.div>
        </>
    );
}
