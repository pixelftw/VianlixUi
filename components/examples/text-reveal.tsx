"use client";
import { useAnimation } from "framer-motion";
import {
  TextReveal,
  animationVariants,
  type TextRevealProps,
} from "../motion/text/text-reveal";
import { useEffect, useState } from "react";

import { PreviewContainer } from "../ui/preview-container";

export function TextRevealExample() {
  const [variant, setVariant] = useState<TextRevealProps["variant"]>("slideIn");

  const controller = useAnimation();

  useEffect(() => {
    controller.set("from");
    controller.start("to");
  }, [controller, variant]);

  const onRestart = () => {
    controller.set("from");
    controller.start("to");
  };

  return (
    <div className="p-8 relative h-full flex justify-center items-center">
      <PreviewContainer
        dropDownProps={{
          options: Object.keys(animationVariants),
          onChange: (v) => setVariant(v as TextRevealProps["variant"]),
          defaultValue: variant,
        }}
        onRestart={onRestart}
      >
        <div className="w-full h-full flex justify-center items-center">
          <TextReveal
            variant={variant}
            controller={controller}
            className="text-2xl md:text-6xl font-extrabold text-primary"
          >
            Text Revealing animation made Awesome 🔥
          </TextReveal>
        </div>
      </PreviewContainer>
    </div>
  );
}
