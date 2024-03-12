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
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <Header />
          {children}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};
