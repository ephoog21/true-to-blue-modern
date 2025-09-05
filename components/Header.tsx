"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Trades", href: "/#trades" },
    { name: "Contact", href: "/contact" },
  ];

  const trades = [
    { name: "Plumbers", href: "/trades/plumbers" },
    { name: "HVAC", href: "/trades/hvac" },
    { name: "Electricians", href: "/trades/electricians" },
    { name: "Landscaping", href: "/trades/landscaping" },
    { name: "Carpenters", href: "/trades/carpenters" },
    { name: "Garage Door Repair", href: "/trades/garage-door-repair" },
    { name: "Auto Repair", href: "/trades/auto-repair" },
    { name: "Roofers", href: "/trades/roofers" },
    { name: "Painters", href: "/trades/painters" },
    { name: "General Contractors", href: "/trades/general-contractors" },
    { name: "Locksmiths", href: "/trades/locksmiths" },
    { name: "Pest Control", href: "/trades/pest-control" },
    { name: "Cleaning Services", href: "/trades/cleaning-services" },
    { name: "Flooring", href: "/trades/flooring" },
    { name: "Window & Door", href: "/trades/window-installers" },
  ];

  return (
    <header className="bg-slate-800 shadow-xl border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="True To Blue"
                width={60}
                height={60}
                className="rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">True To Blue</h1>
                <div className="text-xs text-blue-300 font-medium tracking-wider">PROFESSIONAL SOLUTIONS</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors">
                For Trades
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {trades.map((trade) => (
                  <Link
                    key={trade.name}
                    href={trade.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-600 hover:text-white first:rounded-t-lg last:rounded-b-lg"
                  >
                    {trade.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://billing.stripe.com/p/login/aFa14m6PFgdc5JNd02bEA00"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Portal
            </Link>
            <Link
              href="/get-started"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Get Started Free</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-slate-600 pt-2 mt-2">
                <p className="text-sm text-gray-400 mb-2">For Trades:</p>
                {trades.map((trade) => (
                  <Link
                    key={trade.name}
                    href={trade.href}
                    className="block text-gray-300 hover:text-white transition-colors py-1 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {trade.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-600">
                <Link
                  href="https://billing.stripe.com/p/login/aFa14m6PFgdc5JNd02bEA00"
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer Portal
                </Link>
                <Link
                  href="/get-started"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;