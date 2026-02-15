"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 🔥 Cambio discreto por sección (sin interpolación)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const section = 1 / content.length;
    const index = Math.min(
      content.length - 1,
      Math.floor(latest / section)
    );
    setActiveIndex(index);
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-zinc-900 text-white"
      style={{ height: `${content.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="flex w-full max-w-6xl items-center justify-between gap-16 px-12">

          {/* TEXT */}
          <div className="relative w-1/2 h-[300px]">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold">
                {content[activeIndex].title}
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                {content[activeIndex].description}
              </p>
            </motion.div>
          </div>

          {/* MEDIA */}
          <div
            className={cn(
              "relative w-1/2 h-[450px] rounded-2xl overflow-hidden shadow-2xl",
              contentClassName
            )}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              {content[activeIndex].content ?? null}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
