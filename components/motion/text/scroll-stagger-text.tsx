import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export interface ScrollStaggerText extends PropsWithChildren {}

export function ScrollStaggerText({ children }: ScrollStaggerText) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start end", "center center"],
  });

  if (typeof children !== "string") {
    throw Error("ScrollStaggerText only accept children of type string");
  }

  const words = children.split(" ");

  return (
    <p ref={paragraphRef}>
      {words.map((word, i) => (
        <Word
          key={word + i}
          scrollYProgress={scrollYProgress}
          range={[i / word.length, i + 1 / word.length]}
        >
          {word}
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
  const y = useTransform(scrollYProgress, range, [80, 0]);
  return (
    <span className="overflow:hidden">
      <motion.div className="block"> {children}</motion.div>{" "}
    </span>
  );
}
