'use client';

import ProductCard from './ProductCard';

const ProductGrid = ({ products, title }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No se encontraron productos
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Intenta con otros términos de búsqueda o explora nuestras categorías
        </p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;