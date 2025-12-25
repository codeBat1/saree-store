"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-pink-600">
            Saree<span className="text-gray-800">Store</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
            <Link href="/collections" className="nav-link">
              Collections
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 transition"
            >
              <ShoppingBag size={18} />
              Cart
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/shop">
              Shop
            </Link>
            <Link onClick={() => setOpen(false)} href="/collections">
              Collections
            </Link>
            <Link onClick={() => setOpen(false)} href="/about">
              About
            </Link>
            <Link onClick={() => setOpen(false)} href="/contact">
              Contact
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/cart"
              className="flex items-center gap-2 rounded-lg bg-pink-600 px-4 py-2 text-white"
            >
              <ShoppingBag size={18} />
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
