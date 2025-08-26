import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about/pic2.jpg"

export default function MissionVision() {
  return (
    <section className="py-16 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={img}
          alt="Mission and Vision"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission & Vision</h2>
          <p className="text-slate-600 mb-3">
            <strong>Mission:</strong> To provide affordable, sustainable, and high-quality textile
            products worldwide, ensuring environmental responsibility.
          </p>
          <p className="text-slate-600">
            <strong>Vision:</strong> To become a leading name in textile exports by promoting
            eco-friendly practices and building long-lasting global partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
