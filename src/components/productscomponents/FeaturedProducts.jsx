import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/products/img1.jpeg"
import img2 from "../../assets/products/img2.webp"
import img3 from "../../assets/products/img3.avif"



export function FeaturedProducts() {
  const products = [
    { title: "Premium Cotton Garments", img:img1, desc: "Soft, durable, and designed for export quality." },
    { title: "Recycled Fabric Rolls", img:img2, desc: "Eco-conscious textile solutions for sustainable businesses." },
    { title: "High-Quality Rugs", img:img3, desc: "Strong, long-lasting, and made from recycled materials." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 rounded-2xl shadow-md overflow-hidden"
            >
              <img src={prod.img} alt={prod.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{prod.title}</h3>
                <p className="text-sm text-slate-600">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
