// 'use client'

// import { useRef } from "react";
// import { NextPage } from "next";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Animation: NextPage = () => {

//     // const box = useRef<HTMLDivElement>(null);

//     useGSAP(()=>{
//         const boxes = gsap.utils.toArray(".box");

//         boxes.forEach((box) => {
//             gsap.to(box, {
//                 // opacity: 0,
//                 pin: true,
//                 scrollTrigger: {
//                     trigger: box,
//                     start: "left 80%",
//                     end: "right left",
//                     scrub: true,
//                     markers: true,
//                 },
//             });
//         })

//         // gsap.to(box.current, {
//         //     opacity: 0,
//         //     scrollTrigger : {
//         //         trigger: box.current,
//         //         start: "top 90%",
//         //         end: "top 10%",
//         //         scrub : true,
//         //         markers: true,
//         //         toggleActions: "play pause reverse play"
//         //     }
//         // })
//     })

//   return (
//     <div className="Boxes w-[400vw]">
//       <div className="box w-screen h-screen bg-slate-900" >
//         <h1>Animations</h1>
//       </div>
//       <div className="box w-screen h-screen bg-orange-400">
//         <h1>Animations</h1>
//       </div>
//       <div className="box w-screen h-screen bg-yellow-400">
//         <h1>Animations</h1>
//       </div>
//       <div className="box w-screen h-screen bg-lime-400">
//         <h1>Animations</h1>
//       </div>
//     </div>
//   );
// };

// export default Animation;

// import { ScrambleInView } from "scrambling-text-next/react";

// export default function Page() {
//   return (

//       <ScrambleInView once={false} delay={0}>
//         I am Text
//       </ScrambleInView>
//   );
// }

// "use client";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { Jet_bold } from "@/Fonts/font";

// const textE = {
//   title: "Even",
//   borderColor: "border-black",
//   border: " ",
//   marginTop: "",
//   marginBottom: "",
//   style: "",
// };

// const textO = {
//   title: "Odd",
//   borderColor: "border-black",
//   border: " ",
//   marginTop: "",
//   marginBottom: "",
//   style: "flex flex-col",
// };

// export default function Animation() {
//   const y1: number = -33;
//   const y2: number = 31;
//   const d: number = 0.8;
//   const st : number = 0.1
//   const eas : string = "back.out(1)"

//   useGSAP(() => {
//     const tl = gsap.timeline();
//     const tl2 = gsap.timeline();
//     tl.to(".Even", {
//       y: y1,
//       duration: d,
//       // yoyo: true,
//       ease: eas,
//       stagger: st,
//       delay: 1,
//     }).to(".Even", {
//       y: y2,
//       duration: d,
//       // yoyo: true,
//       ease: eas,
//       stagger: st,
//       delay: 1.5,
//     });

//     tl2
//       .to(".Odd", {
//         y: y2,
//         duration: d,
//         // yoyo: true,
//         ease: eas,
//         stagger: st,
//         delay: 1,
//       })
//       .to(".Odd", {
//         y: y1,
//         duration: d,
//         // yoyo: true,
//         ease: eas,
//         stagger: st,
//         delay: 1.5,
//       });
//   });

//   const roller = () => {
//     const tl = gsap.timeline();
//     const tl2 = gsap.timeline();
//     tl.to(".Even", {
//       y: 0,
//       duration: d,
//       // yoyo: true,
//       ease: eas,
//       stagger: st,
//     }).to(".Even", {
//       y: y1,
//       duration: d,
//       // yoyo: true,
//       ease: eas,
//       stagger: st,
//       delay: 1,
//     }).to(".Even", {
//       y: y2,
//       duration: d,
//       // yoyo: true,
//       ease: eas,
//       stagger: st,
//       delay: 1.5,
//     });

//     tl2
//       .to(".Odd", {
//         y: 0,
//         duration: d,
//         // yoyo: true,
//         ease: eas,
//         stagger: st,
//       }).to(".Odd", {
//         y: y2,
//         duration: d,
//         // yoyo: true,
//         ease: eas,
//         stagger: st,
//         delay: 1,
//       })
//       .to(".Odd", {
//         y: y1,
//         duration: d,
//         // yoyo: true,
//         ease: eas,
//         stagger: st,
//         delay: 1.5
//       });
//   }

//   return (
//     <>
//       <div className={`${Jet_bold.className} m-64 w-56 h-7 overflow-hidden flex gap-1 text-2xl text-center items-center`} onMouseEnter={roller}>
//         <div
//           className={`${textE.title} ${textE.border} ${textE.borderColor} ${textE.marginTop} ${textE.marginBottom} ${textE.style}`}
//         >
//           <p>C</p>
//           <p>D</p>
//           <p>D</p>
//         </div>
//         <div
//           className={`${textO.title} ${textO.border} ${textO.borderColor} ${textO.marginTop} ${textO.marginBottom} ${textO.style}`}
//         >
//           <p>e</p>
//           <p>e</p>
//           <p>h</p>
//         </div>
//         <div
//           className={`${textE.title} ${textE.border} ${textE.borderColor} ${textE.marginTop} ${textE.marginBottom} ${textE.style}`}
//         >
//           <p>a</p>
//           <p>v</p>
//           <p>s</p>
//         </div>
//         <div
//           className={`${textO.title} ${textO.border} ${textO.borderColor} ${textO.marginTop} ${textO.marginBottom} ${textO.style}`}
//         >
//           <p>i</p>
//           <p>e</p>
//           <p>n</p>
//         </div>
//         <div
//           className={`${textE.title} ${textE.border} ${textE.borderColor} ${textE.marginTop} ${textE.marginBottom} ${textE.style}`}
//         >
//           <p>d</p>
//           <p>l</p>
//           <p>g</p>
//         </div>
//         <div
//           className={`${textO.title} ${textO.border} ${textO.borderColor} ${textO.marginTop} ${textO.marginBottom} ${textO.style}`}
//         >
//           <p>n</p>
//           <p>o</p>
//           <p>r</p>
//         </div>
//         <div
//           className={`${textE.title} ${textE.border} ${textE.borderColor} ${textE.marginTop} ${textE.marginBottom} ${textE.style}`}
//         >
//           <p>a</p>
//           <p>p</p>
//           <p>e</p>
//         </div>
//         <div
//           className={`${textO.title} ${textO.border} ${textO.borderColor} ${textO.marginTop} ${textO.marginBottom} ${textO.style}`}
//         >
//           <p>r</p>
//           <p>e</p>
//           <p>{";"}</p>
//         </div>
//         <div
//           className={`${textE.title} ${textE.border} ${textE.borderColor} ${textE.marginTop} ${textE.marginBottom} ${textE.style}`}
//         >
//           <p>{")"}</p>
//           <p>r</p>
//           <p>{"/"}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// .box {
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background: var(--accent);
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Animation() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="box w-[200px] h-[200px] border-r-1/2 bg-slate-600 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              opacity: 1,
            }}
            exit={{ scale: 0.5 }}
          />
        )}
      </AnimatePresence>
      <button onClick={() => setVisible(!visible)}>On/Off</button>
    </>
  );
}
