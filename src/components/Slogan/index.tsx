"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Jet } from "@/Fonts/font";

export default function Slogan() {
  const ins = useRef<HTMLParagraphElement>(null);
  const hop = useRef<HTMLParagraphElement>(null);
  const and = useRef<HTMLParagraphElement>(null);
  const har = useRef<HTMLParagraphElement>(null);
  const dec = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to([ins.current, hop.current, and.current, har.current, dec.current], {
      opacity: 1,
      duration: 0.8,
      ease: "linear",
      delay: 2.6,
    });
  });

  return (
    <>
      <div className={`${Jet.className} text-2xl`}>
        <p
          className="absolute -rotate-90 bottom-[10vh] left-[1.3vw] font-bold opacity-0"
          ref={ins}
        >
          INSPIRE
        </p>
        <p
          className="absolute -rotate-90 bottom-[40vh] left-[2.4vw] font-bold opacity-0"
          ref={hop}
        >
          HOPE
        </p>
        <p className="absolute top-[6.3vh] left-[20vw] opacity-0" ref={and}>
          AND
        </p>
        <p
          className="absolute top-[6.3vh] right-[20vw] font-bold opacity-0"
          ref={har}
        >
          HARD
        </p>
        <p
          className="absolute bottom-[11.5vh] right-[40vw] font-bold opacity-0"
          ref={dec}
        >
          DECISION
        </p>
      </div>
    </>
  );
}
