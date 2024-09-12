'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function MarqueeTop() {

  let number = "0100101";

  useGSAP(() => {
    gsap.to(".inner", {
      opacity: 1,
      duration: 2,
      ease: "linear",
      delay: 2.6,
    })
  });

  return (
    <>
      <div className="inner gap-2 opacity-0">
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
      </div>
      <div className="inner gap-2 opacity-0">
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
        <div className="number odd">
          <p>{number}</p>
        </div>
        <div className="number">
          <p>{number}</p>
        </div>
      </div>
    </>
  );
}
