'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Sparkles, Zap, Star, Play } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
          }}
        />
        
        {/* Secondary overlay image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            transform: `translateY(${scrollY * -0.3}px) scale(1.05)`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating product images */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 rotate-12 hover:opacity-40 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px) rotate(12deg)`,
            backgroundImage: `url('https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
        </div>

        <div 
          className="absolute top-40 right-20 w-28 h-28 rounded-2xl overflow-hidden opacity-15 -rotate-6 hover:opacity-35 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.02}px) rotate(-6deg)`,
            backgroundImage: `url('https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-yellow-500/30" />
        </div>

        <div 
          className="absolute bottom-32 left-1/4 w-36 h-36 rounded-2xl overflow-hidden opacity-25 rotate-45 hover:opacity-45 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.02}px) rotate(45deg)`,
            backgroundImage: `url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/30" />
        </div>

        <div 
          className="absolute top-1/2 right-10 w-24 h-24 rounded-2xl overflow-hidden opacity-20 -rotate-12 hover:opacity-40 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.04}px) rotate(-12deg)`,
            backgroundImage: `url('https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30" />
        </div>

        {/* Floating geometric shapes with gradients */}
        <div 
          className="absolute top-16 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-sm animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px)` }}
        />
        <div 
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/30 to-yellow-500/30 rounded-lg rotate-45 blur-sm animate-bounce"
          style={{ 
            transform: `translate(${mousePosition.x * -0.04}px, ${mousePosition.y * -0.03}px) rotate(45deg)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/3 left-20 w-12 h-12 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-sm animate-ping"
          style={{ 
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.05}px)`,
            animationDelay: '2s'
          }}
        />

        {/* Animated tech pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-purple-900/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-indigo-900/60" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Animated badge */}
            <div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 group hover:bg-white/20 transition-all duration-300"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium">¡Nuevos productos cada día!</span>
              <Star className="h-4 w-4 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            {/* Main heading with multiple effects */}
            <div 
              className="mb-8"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent hover:from-yellow-200 hover:via-pink-200 hover:to-blue-200 transition-all duration-1000">
                  Descubre lo
                </span>
                <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-1000 animate-pulse">
                  Extraordinario
                </span>
              </h1>
              
              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto lg:mx-0 animate-pulse" />
            </div>
            
            {/* Description */}
            <div 
              className="mb-10"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            >
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                Los mejores productos de <span className="text-yellow-300 font-semibold">tecnología</span>, 
                <span className="text-pink-300 font-semibold"> moda</span> y 
                <span className="text-green-300 font-semibold"> hogar</span> al mejor precio.
              </p>
              <p className="text-lg text-blue-200">
                ✨ Calidad garantizada • 🚚 Envío gratuito • 🔒 Compra segura
              </p>
            </div>

            {/* Enhanced action buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              style={{ transform: `translateY(${scrollY * -0.02}px)` }}
            >
              <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative z-10 flex items-center space-x-2">
                  <ShoppingBag className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explorar Productos</span>
                </div>
                {/* Multiple glow effects */}
                <div className="absolute inset-0 bg-yellow-300 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-300 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-200" />
              </button>
              
              <button className="group relative border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                <div className="relative z-10 flex items-center space-x-2">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Ver Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Enhanced stats */}
            <div 
              className="grid grid-cols-3 gap-6 text-center lg:text-left"
              style={{ transform: `translateY(${scrollY * -0.01}px)` }}
            >
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  10k+
                </div>
                <div className="text-blue-100 text-sm">Productos</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-pink-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  50k+
                </div>
                <div className="text-blue-100 text-sm">Clientes</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-green-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-blue-100 text-sm">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div 
            className="relative"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          >
            {/* Main product image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 group-hover:bg-white/20 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Producto destacado"
                  className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating product cards */}
                <div 
                  className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl group-hover:scale-110 transition-all duration-300"
                  style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px)` }}
                >
                  <img
                    src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="MacBook"
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-gray-800">MacBook Air</div>
                    <div className="text-xs text-blue-600">$1,299</div>
                  </div>
                </div>

                <div 
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl group-hover:scale-110 transition-all duration-300"
                  style={{ 
                    transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.03}px)`,
                    animationDelay: '0.2s'
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Zapatillas"
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-gray-800">Zapatillas Pro</div>
                    <div className="text-xs text-green-600">$149</div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white text-xs">🔥</span>
                    </div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                      <span className="text-white text-xs">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div 
              className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full blur-2xl animate-pulse"
              style={{ transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.04}px)` }}
            />
            <div 
              className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-2xl animate-bounce"
              style={{ 
                transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.03}px)`,
                animationDelay: '1s'
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-gray-50 dark:fill-gray-900"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-gray-50 dark:fill-gray-900"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-gray-50 dark:fill-gray-900"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;