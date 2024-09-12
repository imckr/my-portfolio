import gsap from "gsap";

export function Menu(className1: string, flag: boolean, className2: string) {
  const tl = gsap.timeline();
  if (flag) {
    tl.to(className1, {
      opacity: 0,
      duration: 0.3,
      ease: "power4.inOut",
    }).to(className2, {
      opacity: 1,
      duration: 0.3,
      ease: "power4.inOut",
    });
  }else {
    tl.to(className2, {
      opacity: 0,
      duration: 0.3,
      ease: "power4.inOut",
    }).to(className1, {
      opacity: 1,
      duration: 0.3,
      ease: "power4.inOut",
    });
  }
}
