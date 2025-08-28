import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/export/hero.jpg"

export function ExportHero() {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Global Textile Exports
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Delivering high-quality garments, recycled fabrics, and waste rugs to
          markets across the world with sustainability and trust.
        </motion.p>
      </div>
    </section>
  );
}
