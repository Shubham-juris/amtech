import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/export/call.jpg"

export function CallToActionExport() {
  return (
    <section
      className="relative h-[50vh] bg-fixed bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative text-center max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Partner with Amtech Industries
        </motion.h2>

        {/* Normal Tailwind Button */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
        >
          Contact Us for Exports
        </motion.a>
      </div>
    </section>
  );
}
