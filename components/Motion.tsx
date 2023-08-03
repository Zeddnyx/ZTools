"use client"
import { motion as m } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
}

export const MotionOpacity = ({ children }: MotionProps) => (
  <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    {children}
  </m.div>
);
