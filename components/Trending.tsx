"use client";
import React, { useState } from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";
import Image from "next/image";
import kora from "@/public/Kora.webp";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: any; // Changed to 'any' to support both StaticImageData and string
  badge?: string;
}

const Trending = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Silk Banarasi Saree",
      price: 2499,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 124,
      image: kora,
      badge: "Trending",
    },
    {
      id: 2,
      name: "Royal Blue Kanjeevaram Saree",
      price: 3299,
      originalPrice: 4999,
      rating: 4.9,
      reviews: 89,
      image: kora,
      badge: "Featured",
    },
    {
      id: 3,
      name: "Traditional Red Wedding Saree",
      price: 4599,
      rating: 4.7,
      reviews: 156,
      image: kora,
      badge: "Bestseller",
    },
    {
      id: 4,
      name: "Pastel Pink Cotton Saree",
      price: 1299,
      originalPrice: 1999,
      rating: 4.6,
      reviews: 92,
      image: kora,
    },
    {
      id: 5,
      name: "Golden Border Georgette Saree",
      price: 2899,
      rating: 4.8,
      reviews: 78,
      image: kora,
    },
    {
      id: 6,
      name: "Emerald Green Chanderi Saree",
      price: 3499,
      originalPrice: 5299,
      rating: 4.9,
      reviews: 134,
      image: kora,
      badge: "Featured",
    },
    {
      id: 7,
      name: "Designer Party Wear Saree",
      price: 5299,
      rating: 4.7,
      reviews: 67,
      image: kora,
    },
    {
      id: 8,
      name: "Classic Black Chiffon Saree",
      price: 1899,
      originalPrice: 2799,
      rating: 4.5,
      reviews: 103,
      image: kora,
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: Product) => {
    alert(`Added "${product.name}" to cart!`);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-3">
            Trending Sarees
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of elegant and traditional sarees
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={product.id <= 4}
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {product.badge}
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Quick Add to Cart Button */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-all duration-300 z-10 ${
                    hoveredCard === product.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-white text-gray-900 py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Sarees
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
