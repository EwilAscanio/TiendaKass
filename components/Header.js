'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, Sun, Moon, Sparkles, Zap } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { categories } from '@/data/products';
import Cart from './Cart';

const Header = ({ onSearch, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { getTotalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30'
      }`}>
        
        {/* Animated Background with Images */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Tech Pattern Background */}
          <div 
            className="absolute inset-0 opacity-5 dark:opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          
          {/* Floating Geometric Shapes */}
          <div 
            className="absolute top-2 left-10 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg rotate-45 animate-pulse"
            style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px) rotate(45deg)` }}
          />
          <div 
            className="absolute top-4 right-20 w-6 h-6 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full animate-bounce"
            style={{ 
              transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.04}px)`,
              animationDelay: '0.5s'
            }}
          />
          <div 
            className="absolute bottom-2 left-1/3 w-4 h-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-sm rotate-12"
            style={{ transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.02}px) rotate(12deg)` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo with multiple effects */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  {/* Main icon with glow effect */}
                  <div className="relative">
                    <Zap className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-all duration-500 group-hover:rotate-12 transform group-hover:scale-110 drop-shadow-lg" />
                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 group-hover:text-pink-500 transition-all duration-300 group-hover:rotate-45 animate-pulse" />
                  </div>
                  
                  {/* Animated glow rings */}
                  <div className="absolute inset-0 bg-blue-600 group-hover:bg-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 scale-150 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-all duration-700 scale-200 animate-ping" />
                </div>
                
                {/* Enhanced logo text */}
                <div className="relative">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all duration-700 group-hover:scale-105 transform">
                    TechStore
                  </h1>
                  {/* Subtle underline effect */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Enhanced Navigation with advanced hover effects */}
            <nav className="hidden md:flex space-x-1">
              <button
                onClick={() => onCategorySelect(null)}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 group overflow-hidden"
              >
                <span className="relative z-10">Todos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-1">
                    <span className="text-xs">{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Ultra Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="w-full group">
                <div className="relative">
                  {/* Search input with multiple effects */}
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white dark:focus:bg-gray-800 transition-all duration-500 group-hover:shadow-xl backdrop-blur-sm group-hover:scale-[1.02] transform"
                  />
                  
                  {/* Search icon with animation */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  {/* Multiple overlay effects */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/5 to-pink-400/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ padding: '1px' }}>
                    <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800" />
                  </div>
                </div>
              </form>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle with advanced effects */}
              <button
                onClick={toggleTheme}
                className="relative p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-500 group hover:scale-110 overflow-hidden"
              >
                <div className="relative z-10">
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                  ) : (
                    <Sun className="h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                  )}
                </div>
                {/* Multiple glow effects */}
                <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 scale-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-all duration-700 scale-200" />
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
              </button>

              {/* Ultra Enhanced Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-500 group hover:scale-110 overflow-hidden"
              >
                <div className="relative z-10">
                  <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {getTotalItems()}
                      {/* Pulsing ring */}
                      <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75" />
                    </span>
                  )}
                </div>
                {/* Multiple effects */}
                <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 scale-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
              </button>

              {/* Enhanced Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-500 group overflow-hidden"
              >
                <div className="relative z-10">
                  {isMenuOpen ? (
                    <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-500" />
                  ) : (
                    <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
                <div className="absolute inset-0 bg-purple-400 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 scale-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 animate-in slide-in-from-top duration-500">
            {/* Mobile menu background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
            
            <div className="relative px-4 py-4 space-y-2">
              {/* Enhanced Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 text-gray-700 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-500 group-hover:shadow-lg"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </form>

              {/* Enhanced Mobile Navigation */}
              <button
                onClick={() => {
                  onCategorySelect(null);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl transition-all duration-300 hover:scale-[1.02] transform group"
              >
                <span className="flex items-center space-x-3">
                  <span className="text-lg">🏠</span>
                  <span>Todos los productos</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl transition-all duration-300 hover:scale-[1.02] transform group relative overflow-hidden"
                >
                  <span className="flex items-center space-x-3 relative z-10">
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;