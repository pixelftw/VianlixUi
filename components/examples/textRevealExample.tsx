"use client";
import { useAnimation } from "framer-motion";
import TextReveal, { type TextRevealProps } from "../motion/text/textReveal";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { RotateCwIcon } from "lucide-react";
import { Tabs } from "@radix-ui/react-tabs";

export function TextRevealExample() {
  const [variant, setVariant] = useState<TextRevealProps["variant"]>("fadeIn");

  const controller = useAnimation();

  useEffect(() => {
    controller.start("to");
  }, [controller]);

  const restart = () => {
    controller.set("from");
    controller.start("to");
  };

  return (
    <div className="p-4 relative h-full flex justify-center items-center">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-2 top-2"
          onClick={restart}
        >
          <RotateCwIcon />
        </Button>
      </div>

      <TextReveal
        variant={variant}
        controller={controller}
        className="text-2xl md:text-6xl font-extrabold text-white"
      >
        Text Revealing animation made Awesome 🔥
      </TextReveal>
    </div>
  );
}
