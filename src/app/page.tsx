import { BentoGridThirdDemo } from "@/components/Bento";
import { Lamp } from "@/components/Lamp";
import { HeroParallaxDemo } from "@/components/Parallax";
import { HeroScrollDemo } from "@/components/Scrollimage";
import { TabsDemo } from "@/components/Tabs";
import AnimatedLogoTitleBar from "@/components/Titlebar";
import { CardSpotlightDemo } from "@/components/ui/card-spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        {" "}
        {/* Reduced bottom spacing */}
        <Lamp />
      </div>
      <div className="-mt-44">
        {" "}
        {/* Reduced top spacing */}
        <CardSpotlightDemo />
      </div>
      <div className="flex  justify-center">
        <Image
          src={"/Underline_03.png"}
          alt="Underline"
          height={200}
          width={600}
        />
      </div>
      <div className="-mt-44">
        <HeroScrollDemo />
      </div>
      <div className="-mt-44">
        <AnimatedLogoTitleBar />
      </div>
      <div>
      <TabsDemo/>
      </div>
      <div className="mt-16 bg-white rounded-4xl p-8 ">
         <BentoGridThirdDemo/>
      </div>
      <div>
        <HeroParallaxDemo/>
      </div>
      <div className="flex justify-center">
  <div className="border-2 border-white p-4  rounded-full">
    <h2 className="text-white">COMPARISON</h2>
  </div>
</div>

    </div>
  );
}
