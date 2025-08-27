import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/products/hero.jpg"

export function ProductHero() {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Our Product Range
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Delivering premium garments, recycled fabrics, and waste rugs to
          global markets with a focus on sustainability and quality.
        </motion.p>
      </div>
    </section>
  );
}
