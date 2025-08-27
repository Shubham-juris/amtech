import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/products/pic1.avif"
import img2 from "../../assets/products/pic2.avif"
import img3 from "../../assets/products/pic3.avif"
import img4 from "../../assets/products/pic4.jpeg"
import img5 from "../../assets/products/pic5.jpg"
import img6 from "../../assets/products/pic6.jpg"



export function ProductCategories() {
  const categories = [
    { title: "Garments", img:img1, desc: "Quality clothing for global markets." },
    { title: "Waste Rugs", img:img2, desc: "Recycled and repurposed fabrics." },
    { title: "Recycled Fabrics", img:img3, desc: "Eco-friendly textile solutions." },
    { title: "Industrial Cloth", img:img4, desc: "Durable fabrics for industries." },
    { title: "Export Fabrics", img:img5, desc: "International grade textiles." },
    { title: "Custom Orders", img:img6, desc: "Tailored textile solutions." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Product Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={cat.img} alt={cat.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
