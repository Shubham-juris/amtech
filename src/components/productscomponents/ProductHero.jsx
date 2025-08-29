import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/products/hero.jpg";

export default function ProductHero() {
  return (
<section className="relative bg-gradient-to-r from-black to-black-800 text-white min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-black/70" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Premium Clothing & Fabrics Export
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-blue-100"
        >
          Supplying high-quality Indian clothing and fabrics to Canada, USA, and the Middle East.
        </motion.p>
      </div>
    </section>
  );
}
