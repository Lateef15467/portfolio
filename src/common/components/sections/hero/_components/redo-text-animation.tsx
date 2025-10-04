"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

 const texts = [
  "I’m ready to solve coding challenges.",
  "Design and code can create magic together.",
  "Good design is always simple and clear.",
  "Debugging is like searching for hidden answers.",
  "I make designs that work on every screen.",
  "Algorithms are the beauty of programming.",
  "Great projects are built with teamwork.",
  "Refactoring keeps the code clean and fresh.",
  "Learning new things keeps me moving forward.",
  "Clean code is the sign of a good developer.",
];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-32 max-w-96 bg-lightBeige text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}
