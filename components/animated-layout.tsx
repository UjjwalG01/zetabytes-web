"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

interface AnimatedLayoputProps {
  children: React.ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoputProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div>
          <Header />
          {children}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};
