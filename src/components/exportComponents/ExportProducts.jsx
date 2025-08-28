import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/products/pic1.avif"
import img2 from "../../assets/products/pic2.avif"
import img3 from "../../assets/products/pic3.avif"
import img4 from "../../assets/products/pic4.jpeg"
import img6 from "../../assets/products/pic6.jpg"

export function ExportProducts() {
  const products = [
    { name: "Garments", img: img1 },
    { name: "Waste Rugs", img: img2 },
    { name: "Recycled Fabrics", img:img3  },
    { name: "Industrial Cloth", img:img4 },
    { name: "Custom Orders", img:img6 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Export Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 bg-slate-100 font-semibold text-slate-700">
                {product.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
