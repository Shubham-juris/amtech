import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logo from "../../assets/navbar/logo.png";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Left: Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Amtech Industries" className="h-15 w-15 rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Amtech Industries</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Trusted global traders & exporters of clothes, waste rugs, and recycled fabrics.
            Delivering quality with sustainability at heart.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <nav className="flex flex-col gap-2 text-sm">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <NavLink to="/about" className="hover:text-white">About</NavLink>
            <NavLink to="/products" className="hover:text-white">Products</NavLink>
            <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
          </nav>
        </div>

        {/* Right: Address + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-2">📍 Amtech Industries, [Your City, State]</p>
          <p className="text-sm mb-2">📞 +91 00000 00000</p>
          <p className="text-sm mb-4">📧 info@amtech.com</p>

          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-pink-600 transition">
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition">
              <Facebook className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-slate-700 pt-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Amtech Industries. All rights reserved.
      </div>
    </footer>
  );
}
