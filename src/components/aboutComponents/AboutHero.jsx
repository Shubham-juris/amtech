import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/about/hero1.jpg"


export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-black/80 to-black text-white py-28">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="About Us Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About <span className="text-yellow-300">Amtech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Delivering excellence in textiles & exports with a global vision.  
          From India to the world, we bring innovation, sustainability, and 
          unmatched quality to every product.
        </motion.p>
      </div>
    </section>
  );
}
