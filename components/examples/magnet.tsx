import { Bluetooth, Battery, Wifi } from "lucide-react";
import { PreviewContainer } from "../ui/preview-container";
import { Magnet } from "../motion/magnet";

export function MagnetExample() {
  return (
    <PreviewContainer>
      <div className="h-full">
        <p className="text-center text-sm md:hidden block">
          Cursor based visual effects, No Effects on mobile devices
        </p>
        <div className="flex w-full h-full  justify-center items-center gap-4 md:gap-16">
          <Magnet>
            <div className="bg-orange-600 p-4 rounded-full hover:bg-orange-400">
              <Bluetooth className="w-8 h-8 md:w-20 md:h-20 text-white" />
            </div>
          </Magnet>
          <Magnet>
            <div className="bg-orange-600 p-4 rounded-full hover:bg-orange-400">
              <Battery className="w-8 h-8 md:w-20 md:h-20 text-white" />
            </div>
          </Magnet>
          <Magnet>
            <div className="bg-orange-600 p-4 rounded-full hover:bg-orange-400">
              <Wifi className="w-8 h-8 md:w-20 md:h-20 text-white" />
            </div>
          </Magnet>
        </div>
      </div>
    </PreviewContainer>
  );
}
