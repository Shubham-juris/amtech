import React from "react";
import bg from "../../assets/products/bgg.jpeg"

export function ExportMarkets() {
  return (
    <section
      className="relative py-24 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Export Markets</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Amtech Industries supplies textiles and recycled fabrics to markets across Asia, Africa,
          the Middle East, and Europe. With a global client base, we ensure timely delivery and
          unmatched service quality.
        </p>
      </div>
    </section>
  );
}
