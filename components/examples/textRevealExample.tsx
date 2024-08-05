"use client";
import { useAnimation } from "framer-motion";
import TextReveal, {
  animationVariants,
  type TextRevealProps,
} from "../motion/text/textReveal";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { RotateCwIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function TextRevealExample() {
  const [variant, setVariant] = useState<TextRevealProps["variant"]>("slideIn");

  const controller = useAnimation();

  useEffect(() => {
    controller.set("from");
    controller.start("to");
  }, [controller, variant]);

  const restart = () => {
    controller.set("from");
    controller.start("to");
  };

  return (
    <div className="p-8 relative h-full flex justify-center items-center">
      <div className="absolute right-2 top-2 flex gap-2">
        <Select
          defaultValue={variant}
          onValueChange={(v) => setVariant(v as TextRevealProps["variant"])}
        >
          <SelectTrigger className="w-28 capitalize">
            <SelectValue placeholder="Select a Variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Variants</SelectLabel>
              {Object.keys(animationVariants).map((variant) => (
                <SelectItem
                  className="capitalize"
                  key={variant}
                  value={variant}
                >
                  {variant}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button size="icon" variant="secondary" onClick={restart}>
          <RotateCwIcon />
        </Button>
      </div>
      <TextReveal
        variant={variant}
        controller={controller}
        className="text-2xl md:text-6xl font-extrabold text-primary"
      >
        Text Revealing animation made Awesome 🔥
      </TextReveal>
    </div>
  );
}
