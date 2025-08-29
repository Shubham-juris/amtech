import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

export default function GlobalReach() {
  const regions = [
    { country: "Canada", desc: "Retail & Wholesale distribution across major cities." },
    { country: "USA", desc: "Supplying fashion & fabric to top retail chains." },
    { country: "Middle East", desc: "Strong presence in UAE, Saudi Arabia, and Qatar." },
    { country: "India", desc: "Our home base with manufacturing & innovation hub." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
        >
          <Globe className="inline-block h-8 w-8 text-blue-600 mr-2" />
          Our <span className="text-blue-600">Global Reach</span>
        </motion.h2>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          Amtech has established a powerful international presence.  
          From North America to the Middle East, we proudly serve clients  
          with reliable supply chains, premium fabrics, and innovative apparel solutions.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">{region.country}</h3>
              <p className="text-slate-600 mt-2 text-sm">{region.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
