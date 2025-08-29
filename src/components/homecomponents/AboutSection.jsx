import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/home/about.jpeg";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Amtech"
            className="rounded-2xl shadow-lg w-full md:w-[90%] h-[500px] object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            About <span className="text-blue-600">Amtech Industries</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Amtech Industries is a global leader in textile exports, delivering 
            high-quality Indian clothing and fabrics to clients across 
            <span className="font-semibold text-slate-800"> Canada, USA, and the Middle East</span>.  
            With years of expertise, we specialize in wholesale distribution of 
            <span className="text-blue-600 font-medium">
              {" "}T-shirts, pyjamas, undergarments, night suits, custom fabrics
            </span>, and also facilitate waste fabric import-export.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our commitment to excellence, sustainable practices, and strong 
            global presence makes us the preferred partner for retailers, 
            wholesalers, and distributors worldwide.
          </p>

          <a
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
