import { Battery, Bluetooth, Wifi } from "lucide-react";
import { Magnet } from "../motion/magnet";
import { PreviewContainer } from "../ui/preview-container";
import { ScrollStaggerText } from "../motion/scroll-stagger-text";

export function ScrollStaggerTextExample() {
  return (
    <PreviewContainer>
      {/* <div className="flex w-full h-full justify-center items-center gap-16">
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
      </div> */}

      <h4 className="text-center h-40">Scroll To reveal the text</h4>
      <ScrollStaggerText className="text-primary">
        This Text will be revealed when in center of the view port
      </ScrollStaggerText>
    </PreviewContainer>
  );
}
