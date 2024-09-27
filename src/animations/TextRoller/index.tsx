"use client";
import { useGSAP } from "@gsap/react";
import { Jet_bold } from "@/Fonts/font";

import gsap from "gsap";
const textE = {
  title: "Even",
  style: "flex flex-col gap-4",
};

const textO = {
  title: "Odd",
  style: "flex flex-col gap-4",
};

export default function Animation() {
  const y1: number = -76;
  const y2: number = 76;
  const d: number = 0.5;
  const st: number = 0.1;
  const eas: string = "back.out(1)";

  useGSAP(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    tl.from(".Even", {
      opacity: 0,
      duration: 0.8,
      delay:4,
    }).to(".Even", {
      y: y1,
      duration: d,
      ease: eas,
      stagger: st,
      delay: 2,
    }).to(".Even", {
      y: y2,
      duration: d,
      ease: eas,
      stagger: st,
      delay: 1.5,
    });

    tl2
      .from(".Odd", {
        opacity: 0,
        duration: 0.8,
        delay: 4,
      })
      .to(".Odd", {
        y: y2,
        duration: d,
        ease: eas,
        stagger: st,
        delay: 2,
      })
      .to(".Odd", {
        y: y1,
        duration: d,
        ease: eas,
        stagger: st,
        delay: 1.5,
      });
  });

  const roller = () => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    tl.to(".Even", {
      y: 0,
      duration: d,
      ease: eas,
      stagger: st,
    })
      .to(".Even", {
        y: y1,
        duration: d,
        ease: eas,
        stagger: st,
        delay: 1,
      })
      .to(".Even", {
        y: y2,
        duration: d,
        ease: eas,
        stagger: st,
        delay: 1.5,
      });

    tl2
      .to(".Odd", {
        y: 0,
        duration: d,
        ease: eas,
        stagger: st,
      })
      .to(".Odd", {
        y: y2,
        duration: d,
        ease: eas,
        stagger: st,
        delay: 1,
      })
      .to(".Odd", {
        y: y1,
        duration: d,
        ease: eas,
        stagger: st,
        delay: 1.5,
      });
  };

  return (
    <>
      <div
        className={`${Jet_bold.className} mt-1 w-80 h-[4.5rem] overflow-hidden flex text-6xl text-center items-center`}
        onMouseEnter={roller}
      >
        <div
          className={`${textE.title} ${textE.style}`}
        >
          <p>C</p>
          <p>D</p>
          <p>D</p>
        </div>
        <div
          className={`${textO.title} ${textO.style}`}
        >
          <p>e</p>
          <p>e</p>
          <p>h</p>
        </div>
        <div
          className={`${textE.title} ${textE.style}`}
        >
          <p>a</p>
          <p>v</p>
          <p>s</p>
        </div>
        <div
          className={`${textO.title} ${textO.style}`}
        >
          <p>i</p>
          <p>e</p>
          <p>n</p>
        </div>
        <div
          className={`${textE.title} ${textE.style}`}
        >
          <p>d</p>
          <p>l</p>
          <p>g</p>
        </div>
        <div
          className={`${textO.title} ${textO.style}`}
        >
          <p>n</p>
          <p>o</p>
          <p>r</p>
        </div>
        <div
          className={`${textE.title} ${textE.style}`}
        >
          <p>a</p>
          <p>p</p>
          <p>e</p>
        </div>
        <div
          className={`${textO.title} ${textO.style}`}
        >
          <p>r</p>
          <p>e</p>
          <p>{";"}</p>
        </div>
        <div
          className={`${textE.title} ${textE.style}`}
        >
          <p>{")"}</p>
          <p>r</p>
          <p>{"/"}</p>
        </div>
      </div>
    </>
  );
}
