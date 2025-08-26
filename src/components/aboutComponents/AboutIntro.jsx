import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about/pic1.jpg"

export default function AboutIntro() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Amtech Industries</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Amtech Industries is a trusted global name in the trading and exporting of clothes,
            waste rugs, and recycled fabrics. With years of expertise, we focus on delivering
            sustainable textile solutions that meet international standards.
          </p>
        </motion.div>
        <motion.img
          src={img}
          alt="About Amtech"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
