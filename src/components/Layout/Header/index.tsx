"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home-section", label: "Home" },
  { href: "#feature-section", label: "Feature" },
  { href: "#cook-section", label: "About" },
  { href: "#expert-section", label: "Expert" },
  { href: "#gallery-section", label: "Gallery" },
  { href: "#newsletter-section", label: "Newsletter" },
  { href: "#", label: "Sign In" },
  { href: "/", label: "Sign Up" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A192F] text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white">
          Kitchen
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.slice(0, 6).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone Number */}
        <div className="hidden md:flex items-center gap-4">
          <FiPhone className="text-xl" />
          <span className="text-lg font-medium">+1 234 567 890</span>
        </div>

        {/* Sign In / Sign Up */}
        <div className="hidden md:flex gap-6">
          {navLinks.slice(6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-md text-white transition-colors duration-300 ease-in-out ${
                link.label === "Sign Up"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-green-400 text-black hover:bg-green-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-[#0A192F] shadow-lg z-50 flex flex-col py-6 px-6 md:hidden"
          >
            <button
              className="self-end text-whitev"
              onClick={() => setMenuOpen(false)}
            >
              <FiX size={28} />
            </button>
            <ul className="mt-12 space-y-6 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-400 transition-all duration-300 ease-in-out"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-2 border-t border-gray-700 pt-4">
              <FiPhone className="text-xl" />
              <span className="text-lg">+1 234 567 890</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
