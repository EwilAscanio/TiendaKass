'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Truck, HeadphonesIcon } from 'lucide-react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Protección total en todas tus transacciones con certificación SSL',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'Entrega gratuita en compras mayores a $50 en todo el país',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: HeadphonesIcon,
      title: 'Soporte 24/7',
      description: 'Atención al cliente profesional disponible las 24 horas',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Star,
      title: 'Calidad Premium',
      description: 'Solo productos de la más alta calidad, cuidadosamente seleccionados',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
          }}
        />
        
        {/* Secondary overlay image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            transform: `translateY(${scrollY * -0.2}px) scale(1.05)`
          }}
        />

        {/* Third layer with tech pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8 mix-blend-soft-light"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            transform: `translateY(${scrollY * 0.1}px) scale(1.02)`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating product images with parallax */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 rotate-12 hover:opacity-40 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px) rotate(12deg) translateY(${scrollY * 0.1}px)`,
            backgroundImage: `url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
        </div>

        <div 
          className="absolute top-40 right-20 w-28 h-28 rounded-2xl overflow-hidden opacity-15 -rotate-6 hover:opacity-35 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.02}px) rotate(-6deg) translateY(${scrollY * 0.15}px)`,
            backgroundImage: `url('https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-yellow-500/30" />
        </div>

        <div 
          className="absolute bottom-32 left-1/4 w-36 h-36 rounded-2xl overflow-hidden opacity-25 rotate-45 hover:opacity-45 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.02}px) rotate(45deg) translateY(${scrollY * -0.1}px)`,
            backgroundImage: `url('https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/30" />
        </div>

        <div 
          className="absolute top-1/2 right-10 w-24 h-24 rounded-2xl overflow-hidden opacity-20 -rotate-12 hover:opacity-40 transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.04}px) rotate(-12deg) translateY(${scrollY * 0.2}px)`,
            backgroundImage: `url('https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30" />
        </div>

        {/* Floating geometric shapes with enhanced effects */}
        <div 
          className="absolute top-16 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-sm animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px) translateY(${scrollY * 0.08}px)` }}
        />
        <div 
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/30 to-yellow-500/30 rounded-lg rotate-45 blur-sm animate-bounce"
          style={{ 
            transform: `translate(${mousePosition.x * -0.04}px, ${mousePosition.y * -0.03}px) rotate(45deg) translateY(${scrollY * -0.05}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/3 left-20 w-12 h-12 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-sm animate-ping"
          style={{ 
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.05}px) translateY(${scrollY * 0.12}px)`,
            animationDelay: '2s'
          }}
        />

        {/* Enhanced animated tech pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(${scrollY * 0.03}px)`
          }}
        />

        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-purple-900/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-indigo-900/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-pink-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Enhanced Main Content */}
        <div className="text-center mb-16">
          <div 
            className="inline-block"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 group hover:bg-white/20 transition-all duration-300">
              <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium">¡La mejor experiencia de compra!</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent hover:from-yellow-200 hover:via-pink-200 hover:to-blue-200 transition-all duration-1000">
                ¿Por qué elegir
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-1000 animate-pulse">
                TechStore?
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto animate-pulse" />
          </div>
          
          <div 
            className="max-w-3xl mx-auto"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Más de <span className="text-yellow-300 font-semibold">50,000 clientes</span> confían en nosotros para sus compras online. 
              Descubre por qué somos la <span className="text-pink-300 font-semibold">tienda líder</span> en tecnología y estilo de vida.
            </p>
            <p className="text-lg text-blue-200">
              ✨ Experiencia premium • 🚀 Innovación constante • 💎 Calidad excepcional
            </p>
          </div>
        </div>

        {/* Enhanced Features Grid with Uniform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative h-80"
                style={{ 
                  transform: `translateY(${scrollY * (0.02 + index * 0.01)}px)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Card background with multiple effects */}
                <div className="relative h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                  
                  {/* Background gradient specific to each card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Animated background pattern */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Enhanced icon with multiple effects */}
                    <div className="mb-6">
                      <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                        <Icon className="h-8 w-8 text-white relative z-10" />
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-100 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative bottom element */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className={`w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        >
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-blue-100 font-medium">Clientes Felices</div>
              <div className="text-xs text-blue-200 mt-1">⭐ 4.9/5 satisfacción</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-blue-100 font-medium">Productos Disponibles</div>
              <div className="text-xs text-blue-200 mt-1">🚀 Nuevos cada día</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99%
              </div>
              <div className="text-blue-100 font-medium">Satisfacción</div>
              <div className="text-xs text-blue-200 mt-1">💎 Calidad garantizada</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div 
          className="text-center"
          style={{ transform: `translateY(${scrollY * -0.02}px)` }}
        >
          <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="relative z-10 flex items-center space-x-2">
              <span>Explorar Productos</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            {/* Multiple glow effects */}
            <div className="absolute inset-0 bg-yellow-300 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-150" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-300 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-200" />
            {/* Animated particles */}
            <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
            <div className="absolute bottom-2 right-6 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.3s' }} />
          </button>
        </div>
      </div>

      {/* Enhanced bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
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

export default ParallaxSection;