import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about/pic4.jpg"

export default function Sustainability() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Sustainability</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We believe in giving textiles a second life. By focusing on recycling and reusing
            waste fabrics, Amtech Industries contributes to reducing global textile waste and
            promoting eco-friendly practices.
          </p>
        </motion.div>
        <motion.img
          src={img}
          alt="Sustainability"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
