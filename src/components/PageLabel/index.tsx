"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Jet } from "@/Fonts/font";

interface pageIndex {
  ind : number;
}

export default function PageLabel(props: pageIndex) {

  const H = useRef<HTMLParagraphElement>(null);
  const O = useRef<HTMLParagraphElement>(null);
  const M = useRef<HTMLParagraphElement>(null);
  const E = useRef<HTMLParagraphElement>(null);

  const P = useRef<HTMLParagraphElement>(null);
  const R = useRef<HTMLParagraphElement>(null);
  const J = useRef<HTMLParagraphElement>(null);
  const C = useRef<HTMLParagraphElement>(null);
  const T = useRef<HTMLParagraphElement>(null);

  const A = useRef<HTMLParagraphElement>(null);
  const B = useRef<HTMLParagraphElement>(null);
  const U = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    
    gsap.from(E.current, {
      y: -250,
      ease: "back.out(2.3)",
      duration: 1,
      delay: 3,
    });
    gsap.from(M.current, {
      y: -300,
      ease: "back.out(1.9)",
      duration: 1,
      delay: 3,
    });
    gsap.from(O.current, {
      y: -350,
      ease: "back.out(1.5)",
      duration: 1,
      delay: 3,
    });
    gsap.from(H.current, {
      y: -400,
      ease: "back.out(1.1)",
      duration: 1,
      delay: 3,
    });

    console.log("Success" + props.ind )
  });

  return (
    <>  
        <div
          className={`absolute flex flex-col right-[4%] ${Jet.className} top-[-1%] text-4xl`}
        >
          <p className="text-center font-extrabold" ref={H}>
            H
          </p>
          <p className="text-center font-extrabold" ref={O}>
            O
          </p>
          <p className="text-center font-extrabold" ref={M}>
            M
          </p>
          <p className="text-center font-extrabold" ref={E}>
            E
          </p>
        </div>
    </>
  );
}
