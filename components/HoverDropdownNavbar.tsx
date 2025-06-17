"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navItems = [
  { name: "Product" },
  {
    name: "Solutions",
    submenu: ["Product Management", "Marketing", "IT"],
  },
  { name: "Documentation" },
  { name: "Media" },
  { name: "Pricing" },
];

export default function AnimatedDropdownNavbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="bg-black text-white px-6 py-4 rounded-b-2xl shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="bg-white text-black px-1 py-0.5 rounded-sm font-bold">⚡</div>
          <span>MyBrand</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHovered(item.submenu ? item.name : null)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-gray-300 transition-colors">
                {item.name}
                {item.submenu && <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {item.submenu && hovered === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-56 bg-zinc-900 text-white rounded-md shadow-lg py-2 z-50"
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 hover:bg-zinc-800 font-semibold transition"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition">
            Get started – no CC required
          </button>
        </div>
      </div>
    </header>
  );
}
