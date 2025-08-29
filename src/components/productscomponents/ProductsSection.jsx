import React from "react";
import { motion } from "framer-motion";

import tshirt from "../../assets/products/pic1.avif";
import pyjama from "../../assets/products/loar.jpg";
import undergarments from "../../assets/products/undergarments.webp";
import nightsuit from "../../assets/products/nightsuit.jpg";
import fabrics from "../../assets/products/fabrics.avif";
import wastefabric from "../../assets/products/wastefabric.webp";


export default function ProductsSection() {
  const products = [
    {
      img: tshirt,
      name: "T-Shirts",
      desc: "High-quality cotton & blended T-shirts for wholesale and retail markets.",
    },
    {
      img: pyjama,
      name: "Pyjamas",
      desc: "Comfortable and durable pyjamas in multiple fabrics & designs.",
    },
    {
      img: undergarments,
      name: "Undergarments",
      desc: "Premium quality men’s and women’s innerwear with lasting comfort.",
    },
    {
      img: nightsuit,
      name: "Night Suits",
      desc: "Trendy and cozy nightwear collections for all age groups.",
    },
    {
      img: fabrics,
      name: "Custom Fabrics",
      desc: "Tailor-made fabrics designed for brand and business needs.",
    },
    {
      img: wastefabric,
      name: "Waste Fabric Export & Import",
      desc: "Sustainable trading of surplus & waste fabrics for recycling.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-800">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={product.img}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700">
                  {product.name}
                </h3>
                <p className="text-slate-600 mt-2">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
