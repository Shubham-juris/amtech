import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about/pic5.webp"

export default function GlobalReach() {
  return (
    <section className="py-16 bg-slate-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-slate-800 mb-6"
        >
          Our Global Reach
        </motion.h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          We proudly serve clients in Africa, the Middle East, Europe, and Asia. Our commitment to
          quality and timely delivery has helped us build long-lasting global relationships.
        </p>
        <motion.img
          src={img}
          alt="Global Reach"
          className="rounded-2xl mx-auto shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
