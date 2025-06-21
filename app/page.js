'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ParallaxSection from '@/components/ParallaxSection';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import { 
  products, 
  getProductsByCategory, 
  getProductsOnSale, 
  getBestSellers,
  searchProducts 
} from '@/data/products';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSection, setCurrentSection] = useState('all');

  useEffect(() => {
    let result = products;

    if (searchQuery) {
      result = searchProducts(searchQuery);
      setCurrentSection('search');
    } else if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
      setCurrentSection('category');
    } else {
      setCurrentSection('all');
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const getSectionTitle = () => {
    if (searchQuery) return `Resultados de búsqueda: "${searchQuery}"`;
    if (selectedCategory) {
      const categoryName = {
        'electronics': 'Electrónicos',
        'clothing': 'Ropa',
        'home': 'Hogar',
        'sports': 'Deportes',
        'books': 'Libros',
        'beauty': 'Belleza'
      }[selectedCategory];
      return `Categoría: ${categoryName}`;
    }
    return null;
  };

  const productsOnSale = getProductsOnSale();
  const bestSellers = getBestSellers();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header onSearch={handleSearch} onCategorySelect={handleCategorySelect} />
      
      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section - only show when not searching or filtering */}
        {!searchQuery && !selectedCategory && <HeroSection />}
        
        {/* Parallax Section - only show on home page */}
        {!searchQuery && !selectedCategory && <ParallaxSection />}
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Filter - only show when not searching */}
          {!searchQuery && (
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          )}

          {/* Main Products Section */}
          {(searchQuery || selectedCategory) && (
            <ProductGrid 
              products={filteredProducts} 
              title={getSectionTitle()}
            />
          )}

          {/* Featured Sections - only show on home page */}
          {!searchQuery && !selectedCategory && (
            <>
              {/* Products on Sale */}
              <ProductGrid 
                products={productsOnSale} 
                title="🔥 Ofertas Especiales"
              />

              {/* Best Sellers */}
              <ProductGrid 
                products={bestSellers} 
                title="⭐ Más Vendidos"
              />

              {/* All Products */}
              <ProductGrid 
                products={products} 
                title="📦 Todos los Productos"
              />
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TechStore
                </h3>
                <p className="text-gray-400">
                  Tu tienda en línea de confianza para los mejores productos de tecnología, moda y hogar.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Categorías</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Electrónicos</li>
                  <li>Ropa</li>
                  <li>Hogar</li>
                  <li>Deportes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Ayuda</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Envíos</li>
                  <li>Devoluciones</li>
                  <li>Contacto</li>
                  <li>FAQ</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <span className="text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <span className="text-sm">@</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <span className="text-sm">t</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TechStore. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}