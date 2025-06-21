'use client';

import { categories } from '@/data/products';

const CategoryFilter = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Explorar por categorías
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.slug)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedCategory === category.slug
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
            }`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;