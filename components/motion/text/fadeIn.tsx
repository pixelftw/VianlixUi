"use client";
import { AnimationProps, motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

export interface FadeInProps extends PropsWithChildren {
  className?: string;
  transition: AnimationProps["transition"];
}

const fadeIn: Variants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const defaultTransition = { ease: "easeIn", duration: 0.3 };

function FadeIn({ children, className, transition }: FadeInProps) {
  return (
    <motion.div
      variants={fadeIn}
      className={className}
      initial="from"
      animate="to"
      transition={{ ...defaultTransition, ...transition }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
