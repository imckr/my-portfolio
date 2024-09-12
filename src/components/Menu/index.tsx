// "use client";
// import Image from "next/image";
// // import { Menu2 } from "@/animations/animScripts";

// export default function Menu() {
//   let flag = true;
//   const handleOnClickMenu = () => {
//     Menu2(".index", flag, ".indexC");
//     flag = !flag;
//   };

//   return (
//     <>
//       <div
//         className="flex gap-4 items-center px-4 cursor-pointer"
//         onClick={handleOnClickMenu}
//       >
//         <Image
//           src="./images/Cross.svg"
//           className="indexC absolute opacity-0 w-7 h-7"
//           width={17}
//           height={17}
//           alt="menu"
//         />
//         <Image
//           src="./images/Menu.svg"
//           className="index w-7 h-7"
//           width={17}
//           height={17}
//           alt="menu"
//         />
//       </div>
//     </>
//   );
// }
