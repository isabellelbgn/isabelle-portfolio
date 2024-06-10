import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  githubUrl,
}: ProjectProps) {
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
        <div className="pt-4 pb-4 px-5 sm:px-10 sm:max-w-1/2 flex flex-col h-full">
          <h3 className="text-2xl font-semibold relative mb-2">{title}</h3>
          <p className="leading-relaxed text-gray-700 mb-4">{description}</p>
          <div className="flex justify-between items-center mb-4">
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
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
