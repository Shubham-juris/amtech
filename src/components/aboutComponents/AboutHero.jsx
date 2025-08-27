import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/about/hero1.avif"

export default function AboutHero() {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Building trust with quality textiles, sustainable solutions, and a
          commitment to global excellence.
        </motion.p>
      </div>
    </section>
  );
}
