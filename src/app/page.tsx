import { Jet, inter_bold } from "@/Fonts/font";
import Marquee from "@/components/Marquee";
import Margins from "@/components/Margins";
import Slogan from "@/components/Slogan";
import PageLabel from "@/components/PageLabel";
import Screen from "@/components/Screen";


export default function Home() {

  return (
    <>
      <div className={`absolute top-[60%] left-[32%] ${inter_bold.className} text-4xl blinking`}>
        <h1>{"// Under Development Available Soon..."}</h1>
      </div>
      <Margins />
      <Slogan /> 
      {/* <PageLabel ind={0}/> */}
      <Screen />

      <div
        className={`upper ${Jet.className} text-sm absolute flex overflow-hidden z-[-1%] ml-[4%] w-[88%] top-[-1%]`}
      >
        <Marquee />
      </div>

      <div
        className={`upper ${Jet.className} text-sm absolute flex overflow-hidden z-[-1%] w-[88%] bottom-[1%] right-[4%]`}
      >
        <Marquee />
      </div>
    </>
  );
}
