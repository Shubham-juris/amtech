import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/navbar/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/export", label: "Export" },
  { to: "/contact", label: "Contact" },
];

export default function AmtechNavbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-blue-700" : "text-slate-700 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-17 w-auto object-contain" 
            />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-blue-600"
          >
            <Globe className="h-4 w-4" /> Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t bg-white"
        >
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="px-3 py-2 rounded-lg hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="tel:+910000000000"
              className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg border"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href="#quote"
              className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white"
            >
              <Globe className="h-4 w-4" /> Get Quote
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
