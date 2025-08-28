import React from "react";
import { motion } from "framer-motion";
import { Package, Layers, Box, Ship } from "lucide-react";

export function ExportProcess() {
  const steps = [
    { icon: <Layers size={40} />, title: "Sourcing", desc: "Quality fabrics & garments carefully sourced." },
    { icon: <Box size={40} />, title: "Sorting", desc: "Categorized & prepared with precision." },
    { icon: <Package size={40} />, title: "Packaging", desc: "Export-grade packaging for safety." },
    { icon: <Ship size={40} />, title: "Shipping", desc: "Timely global delivery via trusted partners." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Our Export Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
