export const categories = [
  { id: 1, name: 'Electrónicos', slug: 'electronics', icon: '📱' },
  { id: 2, name: 'Ropa', slug: 'clothing', icon: '👕' },
  { id: 3, name: 'Hogar', slug: 'home', icon: '🏠' },
  { id: 4, name: 'Deportes', slug: 'sports', icon: '⚽' },
  { id: 5, name: 'Libros', slug: 'books', icon: '📚' },
  { id: 6, name: 'Belleza', slug: 'beauty', icon: '💄' },
];

export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'El iPhone más avanzado con chip A17 Pro y cámara revolucionaria',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    isOnSale: true,
    isBestSeller: true,
    rating: 4.9,
    stock: 25
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    description: 'Laptop ultradelgada con el poderoso chip M2 de Apple',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    isOnSale: true,
    isBestSeller: true,
    rating: 4.8,
    stock: 15
  },
  {
    id: 3,
    name: 'Camiseta Premium',
    description: 'Camiseta de algodón 100% orgánico, diseño moderno',
    price: 29,
    originalPrice: 39,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'clothing',
    isOnSale: true,
    isBestSeller: false,
    rating: 4.5,
    stock: 50
  },
  {
    id: 4,
    name: 'Jeans Skinny',
    description: 'Jeans de corte skinny, cómodos y duraderos',
    price: 89,
    originalPrice: 120,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'clothing',
    isOnSale: false,
    isBestSeller: true,
    rating: 4.6,
    stock: 30
  },
  {
    id: 5,
    name: 'Sofá Moderno',
    description: 'Sofá de 3 plazas con diseño contemporáneo',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'home',
    isOnSale: true,
    isBestSeller: false,
    rating: 4.7,
    stock: 8
  },
  {
    id: 6,
    name: 'Mesa de Centro',
    description: 'Mesa de centro de madera natural con acabado mate',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'home',
    isOnSale: false,
    isBestSeller: true,
    rating: 4.4,
    stock: 12
  },
  {
    id: 7,
    name: 'Zapatillas Running',
    description: 'Zapatillas deportivas con tecnología de amortiguación',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    isOnSale: true,
    isBestSeller: true,
    rating: 4.8,
    stock: 35
  },
  {
    id: 8,
    name: 'Pelota de Fútbol',
    description: 'Pelota oficial de fútbol, calidad profesional',
    price: 45,
    originalPrice: 60,
    image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    isOnSale: false,
    isBestSeller: false,
    rating: 4.3,
    stock: 20
  },
  {
    id: 9,
    name: 'Libro de Programación',
    description: 'Guía completa de JavaScript moderno',
    price: 39,
    originalPrice: 49,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'books',
    isOnSale: true,
    isBestSeller: false,
    rating: 4.9,
    stock: 25
  },
  {
    id: 10,
    name: 'Perfume Premium',
    description: 'Fragancia exclusiva con notas florales y cítricas',
    price: 89,
    originalPrice: 120,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beauty',
    isOnSale: true,
    isBestSeller: true,
    rating: 4.6,
    stock: 18
  },
  {
    id: 11,
    name: 'AirPods Pro',
    description: 'Auriculares inalámbricos con cancelación de ruido',
    price: 249,
    originalPrice: 279,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    isOnSale: false,
    isBestSeller: true,
    rating: 4.7,
    stock: 40
  },
  {
    id: 12,
    name: 'Chaqueta de Invierno',
    description: 'Chaqueta impermeable con aislamiento térmico',
    price: 159,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'clothing',
    isOnSale: true,
    isBestSeller: false,
    rating: 4.5,
    stock: 22
  }
];

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductsOnSale = () => {
  return products.filter(product => product.isOnSale);
};

export const getBestSellers = () => {
  return products.filter(product => product.isBestSeller);
};

export const searchProducts = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};