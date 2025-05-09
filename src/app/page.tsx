import { Lamp } from "@/components/Lamp";
import { HeroScrollDemo } from "@/components/Scrollimage";
import AnimatedLogoTitleBar from "@/components/Titlebar";
import { CardSpotlightDemo } from "@/components/ui/card-spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <div> {/* Reduced bottom spacing */}
        <Lamp />
      </div>
      <div className="-mt-44"> {/* Reduced top spacing */}
        <CardSpotlightDemo />
      </div>
      <div className="flex  justify-center">
        <Image src={'/Underline_03.png'}  alt="Underline" height={200} width={600}/>

      </div>
      <div>
      <HeroScrollDemo/>
      </div>
      <div>
      <AnimatedLogoTitleBar/>
      </div>
    </div>
  );
}

