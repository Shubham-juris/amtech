import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about/pic3.webp"

export default function OurJourney() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-slate-800 mb-6"
        >
          Our Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-slate-600 leading-relaxed"
        >
          Starting from a small-scale trading unit, Amtech Industries has grown into an
          international exporter. Our journey reflects hard work, innovation, and dedication to
          customer satisfaction across the globe.
        </motion.p>
        <motion.img
          src={img}
          alt="Journey"
          className="rounded-2xl mt-8 mx-auto shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
