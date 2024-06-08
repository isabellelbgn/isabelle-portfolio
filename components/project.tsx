import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] hover:bg-gray-200 border border-black/5 overflow-hidden relative transition">
        <div className="pt-4 pb-4 px-5 sm:px-10 sm:pb-7 sm:max-w-1/2 flex flex-col h-full">
          <h3 className="text-2xl font-semibold relative mb-2">{title}</h3>
          <p className="leading-relaxed text-gray-700 mb-4">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
                style={{ color: "#fbc2eb" }}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
