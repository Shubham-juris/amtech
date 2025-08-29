import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ShieldCheck, Truck } from "lucide-react";

const process = [
  {
    icon: <ShoppingBag size={40} className="text-blue-600" />,
    title: "Sourcing",
    desc: "We source premium Indian clothing & fabrics directly from trusted manufacturers.",
  },
  {
    icon: <ShieldCheck size={40} className="text-green-600" />,
    title: "Quality Check",
    desc: "Each product goes through strict quality inspections to ensure global standards.",
  },
  {
    icon: <Truck size={40} className="text-orange-600" />,
    title: "Global Delivery",
    desc: "We export to Canada, USA, and Middle East with reliable logistics support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
          Our Process
        </motion.h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          At AmTech, we follow a streamlined process to ensure that our products 
          meet international quality and reach you on time.
        </p>

        {/* Process Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {process.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
