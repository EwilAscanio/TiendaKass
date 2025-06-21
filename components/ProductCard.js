'use client';

import { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  const discountPercentage = product.isOnSale 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isOnSale && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              -{discountPercentage}%
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Más vendido
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Heart
            className={`h-4 w-4 ${
              isLiked 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-red-500'
            } transition-colors`}
          />
        </button>

        {/* Quick add to cart - appears on hover */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            {product.isOnSale && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {/* Stock indicator */}
          <div className="text-sm">
            {product.stock > 10 ? (
              <span className="text-green-600 dark:text-green-400">En stock</span>
            ) : product.stock > 0 ? (
              <span className="text-yellow-600 dark:text-yellow-400">
                Solo {product.stock} disponibles
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400">Agotado</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;