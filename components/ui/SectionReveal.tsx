"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function SectionReveal({
  children,
  delay = 0,
  className,
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
