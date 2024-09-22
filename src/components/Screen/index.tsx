"use client";
import { Jet, inter_bold } from "@/Fonts/font";
import { useState } from "react";
import Image from "next/image";
import TextRoller from "@/animations/TextRoller";
import { motion, AnimatePresence } from "framer-motion";
import Indexes from "@/components/Indexes";
import { Menu } from "@/animations/animScripts";
import PageLabel from "@/components/PageLabel"; // Add this line to import PageLabel


export default function Screen() {


  const [flag, setFlag] = useState(false);
  const [ind, setInd] = useState<number>(0);

  const handleOnClickMenu = () => {
    Menu(".index", flag, ".indexC");

    setFlag(!flag);
    setInd(1);
  };

  return (
    <>
      <PageLabel ind={ind} />
      <div className="flex justify-center w-screen h-screen">
        <div className="flex flex-col justify-start mt-[12vh] w-[70vw] h-[70vh] border-black border-2 rounded-xl overflow-hidden">
          <div className="flex justify-between w-[70vw] items-center h-[5vh]">
            <div className="ml-4 flex items-center gap-2">
              <Image
                src="./images/HomeIcon.svg"
                className="w-5 h-5"
                width={17}
                height={17}
                alt="home"
              />
              <p className={`${inter_bold.className}`}>/ Home</p> {/*has to be change after scrolling*/}
            </div>

            <div className="flex">
              <div className="flex items-center px-3 border-x-2 border-black h-[5vh]">
                <Image
                  src="./images/Polygon.svg"
                  className="w-5 h-5"
                  width={17}
                  height={17}
                  alt="left"
                />
                <Image
                  src="./images/Polygon2.svg"
                  className="w-5 h-5"
                  width={17}
                  height={17}
                  alt="right"
                />
              </div>

              {/* <Menu /> */}
              <div
                className="flex gap-4 items-center px-4 cursor-pointer"
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
            {flag ? (
              <AnimatePresence>
                <Indexes />
              </AnimatePresence>
            ) : (
              <AnimatePresence>
                <motion.div
                  className="flex justify-center items-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h1
                    className={`${Jet.className} intro text-6xl font-extrabold`}
                  >
                    Hii! I’m
                  </h1>
                  <div className="text-roller">
                    <TextRoller />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
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
