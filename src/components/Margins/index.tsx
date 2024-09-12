"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Margins() {
  const topline = useRef<HTMLDivElement>(null);
  const botline = useRef<HTMLDivElement>(null);
  const rightline = useRef<HTMLDivElement>(null);
  const leftline = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(leftline.current, {
      y: -1000,
      opacity: 0,
      duration: 0.8,
      ease: "linear",
    })
      .from(topline.current, {
        x: -2000,
        opacity: 0,
        duration: 0.8,
        ease: "linear",
      })
      .from(rightline.current, {
        y: 500,
        opacity: 0,
        duration: 0.5,
        ease: "linear",
      })
      .from(botline.current, {
        x: 1500,
        opacity: 0,
        duration: 0.5,
        ease: "linear",
      });
  });

  return (
    <>
      <div
        className="absolute w-[90vw] h-[2px] mt-[8vh] ml-[2vw] bg-black opacity-1"
        ref={topline}
      ></div>
      <div
        className="botline absolute w-[60vw] h-[2px] bottom-[13vh] right-0 bg-black opacity-1"
        ref={botline}
      ></div>
      <div
        className="leftline absolute ml-[4vw] w-[2px] h-screen bg-black opacity-1"
        ref={leftline}
      ></div>
      <div
        className="rightline absolute w-1 h-[20vh] right-[4vw] bottom-0 bg-black opacity-1"
        ref={rightline}
      ></div>
    </>
  );
}
