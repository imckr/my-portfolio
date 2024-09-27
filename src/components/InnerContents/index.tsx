"use client";
import PageLabel from "@/components/PageLabel";
import { useState } from "react";
import { Jet } from "@/Fonts/font";
import { motion, AnimatePresence } from "framer-motion";
import Indexes from "@/components/Indexes"; // Add this line to import PageLabel
import { Menu } from "@/animations/animScripts";
import TextRoller from "@/animations/TextRoller";

export default function InnerContents() {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <PageLabel />
            {flag ? (
                <></>
            ) : (
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
            )}
        </>
    );
}
