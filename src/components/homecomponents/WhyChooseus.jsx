import React from "react";

const points = [
  { title: "🌍 Global Exporter", desc: "Supplying textiles to multiple international markets." },
  { title: "♻️ Sustainable Solutions", desc: "Focused on recycling and eco-friendly fabrics." },
  { title: "✔️ Quality Assured", desc: "Trusted for consistent quality and timely delivery." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {points.map((p, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
