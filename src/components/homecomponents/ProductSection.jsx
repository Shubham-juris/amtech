import React from "react";

const products = [
  { title: "Clothes Trading", desc: "Wholesale garments including shirts, t-shirts, pants and more." },
  { title: "Waste Rugs & Fabrics", desc: "Used clothes, textile cuttings, and recycled fabrics for industries." },
  { title: "Export Services", desc: "Supplying bulk consignments to Africa, Middle East, and Europe." },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-slate-50 px-6">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{p.title}</h3>
            <p className="text-slate-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
