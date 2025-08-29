import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/home/hero.jpg"; 

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Global Textile & Apparel Export Solutions
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Supplying premium Indian clothes and fabrics to Canada, USA, and the Middle East. 
            From wholesale to retail – T-Shirts, Nightwear, Undergarments & Custom Fabrics.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/quote"
              className="rounded-md bg-blue-600 px-5 py-3 text-white text-sm font-medium hover:bg-blue-700"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Global Textile Export"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
