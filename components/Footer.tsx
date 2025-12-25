import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500">
            Saree<span className="text-white">Store</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Premium silk, cotton & designer sarees delivered across India.
            Quality you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-pink-400">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/collections" className="hover:text-pink-400">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/collections/silk" className="hover:text-pink-400">
                Silk Sarees
              </Link>
            </li>
            <li>
              <Link
                href="/collections/banarasi"
                className="hover:text-pink-400"
              >
                Banarasi
              </Link>
            </li>
            <li>
              <Link href="/collections/cotton" className="hover:text-pink-400">
                Cotton Sarees
              </Link>
            </li>
            <li>
              <Link href="/collections/bridal" className="hover:text-pink-400">
                Bridal Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Lucknow, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@sareestore.com</li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-pink-600 px-4 py-2 text-white text-sm hover:bg-pink-700 transition"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SareeStore. All rights reserved.
      </div>
    </footer>
  );
}
