"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  type UseScrollOptions,
} from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

export interface ScrollStaggerText extends PropsWithChildren {
  className?: string;
  container?: UseScrollOptions["container"];
}

export function ScrollStaggerText({ className, children }: ScrollStaggerText) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 60%", "end 40%"],
  });

  useEffect(
    () => scrollYProgress.on("change", (v) => console.log(v)),
    [scrollYProgress]
  );

  if (typeof children !== "string") {
    throw Error("ScrollStaggerText only accept children of type string");
  }

  const words = children.split(" ");

  return (
    <p
      ref={paragraphRef}
      className={cn(
        "flex flex-wrap text-3xl sm:text-4xl md:text-5xl font-bold",
        className
      )}
    >
      {words.map((word, i) => (
        <Word
          key={word + i}
          scrollYProgress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {word}&nbsp;
        </Word>
      ))}
    </p>
  );
}

interface WordProps extends PropsWithChildren {
  range: [number, number];
  scrollYProgress: MotionValue<number>;
}

function Word({ children, range, scrollYProgress }: WordProps) {
  const motionY = useTransform(scrollYProgress, range, [50, 0]);

  const y = useSpring(motionY, { stiffness: 1000, damping: 80 });

  return (
    <span className="overflow-hidden">
      <motion.span style={{ y }} className="block">
        {children}
      </motion.span>
    </span>
  );
}
