"use client";
import { useAnimation } from "framer-motion";
import {
  StaggerText,
  animationVariants,
  type StaggerTextProps,
} from "../motion/stagger-text";
import { useEffect, useState } from "react";

import { PreviewContainer } from "../ui/preview-container";

export function StaggerTextExample() {
  const [variant, setVariant] =
    useState<StaggerTextProps["variant"]>("slideIn");

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
    <div className="relative h-full flex justify-center items-center">
      <PreviewContainer
        dropDownProps={{
          options: Object.keys(animationVariants),
          onChange: (v) => setVariant(v as StaggerTextProps["variant"]),
          defaultValue: variant,
        }}
        onRestart={onRestart}
      >
        <div className="w-full h-full flex justify-center items-center">
          <StaggerText
            variant={variant}
            controller={controller}
            className="text-2xl md:text-6xl font-extrabold text-primary"
          >
            Text Revealing animation made Awesome 🔥
          </StaggerText>
        </div>
      </PreviewContainer>
    </div>
  );
}
