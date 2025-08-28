import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../assets/home/about.jpeg";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img}
            alt="About Amtech"
            className="rounded-2xl shadow-lg max-h-[400px] w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-start"
        >
          <h2 className="text-3xl font-bold text-slate-800">
            About Amtech Industries
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We are a trusted name in trading and exporting textiles, waste rugs,
            and premium quality clothes. With years of experience, we have built
            a global network and reputation for excellence.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Know More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
