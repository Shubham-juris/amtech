import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/home/hero.jpg"

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${img})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Amtech Industries
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto drop-shadow-md">
          Global Traders & Exporters of Clothes, Waste Rugs and Recycled Fabrics
        </p>
        <a
          href="#products"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 transition"
        >
          Explore Products
        </a>
      </motion.div>
    </section>
  );
}
