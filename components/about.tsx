"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-3">
        I am a 4th year student in college pursuing a Bachelor of Science in
        <span className="font-medium"> Computer Science</span>. Currently, I am
        a member of Samahan Systems Development, working as a
        <span className="font-medium"> Backend Developer</span> using
        <span className="font-medium"> TypeScript and Node.js</span>.
        Additionally, I am an intern at Orange & Bronze Software Labs, where I
        focus on
        <span className="font-medium"> Java and Spring Boot</span>.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> the
        feeling of finally figuring out a solution to a problem. I am always
        eager to learn new technologies and am currently looking for a
        <span className="font-medium"> part-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading,
        watching movies, and going to the gym. I also have a passion for
        <span className="font-medium"> learning new things</span>.
      </p>
    </motion.section>
  );
}