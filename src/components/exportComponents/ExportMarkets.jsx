import React from "react";
import { motion } from "framer-motion";
import asia from "../../assets/export/asia.jpeg"
import east from "../../assets/export/middle.jpg"
import africa from "../../assets/export/africa.webp"
import america from "../../assets/export/america.avif"
import europe from "../../assets/export/europe.jpg"


export function ExportMarkets() {
  const markets = [
    { region: "Asia", img:asia},
    { region: "Middle East", img:east },
    { region: "Africa", img: africa },
    { region: "Europe", img:europe },
    { region: "America", img:america },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Our Export Markets
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {markets.map((market, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={market.img}
                alt={market.region}
                className="h-40 w-full object-cover"
              />
              <div className="bg-slate-100 p-4 font-semibold text-slate-700">
                {market.region}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
