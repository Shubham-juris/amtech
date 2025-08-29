import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, Globe2 } from "lucide-react";

export default function Sustainability() {
  const points = [
    {
      icon: <Leaf className="h-10 w-10 text-blue-600" />,
      title: "Eco-Friendly Fabrics",
      desc: "We promote sustainable fabrics that are safe for the environment and meet international standards.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-blue-600" />,
      title: "Waste Fabric Export",
      desc: "We ensure responsible recycling and exporting of waste fabrics to reduce industry waste.",
    },
    {
      icon: <Factory className="h-10 w-10 text-blue-600" />,
      title: "Ethical Production",
      desc: "Our factories follow strict ethical guidelines ensuring worker safety and fair wages.",
    },
    {
      icon: <Globe2 className="h-10 w-10 text-blue-600" />,
      title: "Global Responsibility",
      desc: "Committed to sustainable exports across Canada, USA, and the Middle East.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Sustainability & Responsibility
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 rounded-2xl p-6 shadow-md hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
