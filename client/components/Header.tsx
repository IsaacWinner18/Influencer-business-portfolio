"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/brands", label: "Brands & Press" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ active = "" }: { active?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 w-full glass-nav border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              JUSTADA
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active === link.href
                      ? "text-yellow-400 font-semibold"
                      : "text-gray-300 hover:text-white transition-colors"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all"
            >
              Work With Me
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Slide Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-gray-900 transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
            <span className="text-xl font-bold">JUSTADA</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-4 bg-gray-900">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active === link.href
                    ? "text-yellow-400 font-semibold py-3 px-4 rounded-lg bg-gray-800"
                    : "text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-800"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-800">
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
