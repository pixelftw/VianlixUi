"use client";
import { cn } from "@/lib/utils";
import {
  AnimationControls,
  AnimationProps,
  cubicBezier,
  motion,
  Variants,
} from "framer-motion";
import { PropsWithChildren } from "react";

const fadeIn: Variants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const slideIn: Variants = {
  from: {
    opacity: 0,
    y: 140,
  },
  to: {
    opacity: 1,
    y: 0,
  },
};

const flip: Variants = {
  from: {
    opacity: 0,
    rotateX: 140,
  },
  to: {
    opacity: 1,
    rotateX: 0,
  },
};

export const animationVariants = {
  fadeIn,
  slideIn,
  flip,
};

type TVariants = typeof animationVariants;

export interface StaggerTextProps extends PropsWithChildren {
  className?: string;
  transition?: AnimationProps["transition"];
  variant?: keyof TVariants;
  controller?: AnimationControls;
}

const defaultTransition: AnimationProps["transition"] = {
  ease: cubicBezier(0.33, 1, 0.68, 1),
  duration: 0.6,
  damping: 30,
};

export function StaggerText({
  children,
  className,
  transition,
  controller,
  variant = "fadeIn",
}: Readonly<StaggerTextProps>) {
  if (typeof children !== "string") {
    throw Error("StaggerText can only render text content");
  }

  const words = children.split(" ");

  return (
    <motion.p
      className={cn("flex flex-wrap", className)}
      initial="from"
      animate={controller ?? "to"}
      transition={{ staggerChildren: 0.1 }}
    >
      {words.map((word, i) => (
        <Word
          key={word + i}
          variants={animationVariants[variant]}
          transition={transition}
        >
          {word}&nbsp;
        </Word>
      ))}
    </motion.p>
  );
}

interface WordProps extends PropsWithChildren {
  variants: Variants;
  transition: StaggerTextProps["transition"];
}

function Word({ children, variants, transition }: Readonly<WordProps>) {
  return (
    <span className="overflow-hidden">
      <motion.span
        className="block"
        variants={variants}
        transition={{ ...defaultTransition, ...transition }}
      >
        {children}
      </motion.span>{" "}
    </span>
  );
}
