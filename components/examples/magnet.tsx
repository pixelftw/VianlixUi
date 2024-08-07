import { Bluetooth, Battery, Wifi } from "lucide-react";
import { PreviewContainer } from "../ui/preview-container";
import { Magnet } from "../motion/magnet";

export function MagnetExample() {
  return (
    <PreviewContainer>
      <div className="flex w-full h-full justify-center items-center gap-16">
        <Magnet>
          <div className="bg-orange-600 p-4 rounded-full hover:bg-orange-400">
            <Bluetooth className="w-20 h-20" />
          </div>
        </Magnet>
        <Magnet>
          <div className="bg-orange-600 p-4 rounded-full hover:bg-orange-400">
            <Battery className="w-20 h-20" />
          </div>
        </Magnet>
        <Magnet>
          <div className="bg-orange-600 p-4 rounded-full hover:bg-orange-400">
            <Wifi className="w-20 h-20" />
          </div>
        </Magnet>
      </div>
    </PreviewContainer>
  );
}
