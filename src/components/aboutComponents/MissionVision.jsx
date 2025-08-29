import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 p-8 rounded-2xl shadow-lg"
        >
          <Target className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed">
            To deliver premium quality garments, fabrics, and sustainable
            clothing solutions to clients worldwide. We aim to bridge the gap
            between Indian craftsmanship and global retail markets through
            innovation, reliability, and value-driven partnerships.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 p-8 rounded-2xl shadow-lg"
        >
          <Eye className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Vision</h3>
          <p className="text-slate-600 leading-relaxed">
            To become a trusted global leader in garment exports by providing
            standardized, ethical, and innovative textile solutions — while
            promoting sustainability and empowering communities across the globe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
