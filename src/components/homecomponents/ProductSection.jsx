import React from "react";
import { motion } from "framer-motion";
import product1 from "../../assets/products/pic1.avif";
import product2 from "../../assets/products/pic2.avif";
import product3 from "../../assets/home/pic.webp";

export default function ProductsSection() {
  const products = [
    {
      img: product1,
      title: "Premium Cotton Fabrics",
      desc: "High-quality cotton fabrics known for comfort, breathability, and long-lasting texture.",
    },
    {
      img: product2,
      title: "Recycled Textile Rugs",
      desc: "Eco-friendly rugs crafted from recycled textiles, combining durability with sustainability.",
    },
    {
      img: product3,
      title: "Export-Grade Apparel",
      desc: "Trendy and premium export clothing designed with precision and global standards.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-800">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
