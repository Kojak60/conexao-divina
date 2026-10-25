import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Eye, Star, X, Play, ExternalLink } from 'lucide-react'

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  videoUrl?: string; // Optional
  description: string;
  rating: number;
  affiliateLinks: {
    amazon?: string;
    shopee?: string;
    mercadolivre?: string;
  };
}


const products = [
  {
    id: 1,
    name: 'Tarot Negro Deluxe',
    price: 189.90,
    category: 'Artigos Esotéricos',
    image: 'https://images.unsplash.com/photo-1583912267550-d44d4a3c5a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Link de exemplo
    description: 'Baralho completo com acabamento premium e guia de interpretação. O Tarot Negro é conhecido por sua profundidade e conexão com o subconsciente, permitindo leituras mais intensas e reveladoras.',
    rating: 5,
    affiliateLinks: {
      amazon: 'https://amazon.com.br/link-afiliado-tarot',
      shopee: 'https://shopee.com.br/link-afiliado-tarot',
      mercadolivre: 'https://mercadolivre.com.br/link-afiliado-tarot'
    }
  },
  {
    id: 2,
    name: 'Kit Incensos Naturais',
    price: 45.00,
    category: 'Artigos Esotéricos',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '',
    description: 'Mix de sálvia, arruda e alecrim para limpeza espiritual. Produzidos artesanalmente com ervas selecionadas para garantir a pureza da sua defumação.',
    rating: 4.8,
    affiliateLinks: {
      shopee: 'https://shopee.com.br/link-afiliado-incenso'
    }
  },
  // Adicione quantos produtos quiser aqui seguindo este padrão
]

function Products() {
  const [filter, setFilter] = useState('Todos')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="section-title">Nossa Loja Sagrada</h1>
            <p className="section-subtitle">Instrumentos para elevar sua espiritualidade e proteção.</p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
            {['Todos', 'Artigos Esotéricos', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-purple-900 text-white shadow-lg' 
                  : 'bg-white text-purple-900 hover:bg-purple-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card group overflow-hidden flex flex-col h-full"
              >
                <div 
                  className="relative h-72 mb-4 overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="bg-white p-3 rounded-full text-purple-900 hover:bg-purple-100 transition-colors">
                      <Eye size={24} />
                    </button>
                    {product.videoUrl && (
                      <button className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition-colors">
                        <Play size={24} fill="currentColor" />
                      </button>
                    )}
                  </div>
                  <div className="absolute top-4 left-4 bg-purple-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.category}
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2 px-1">
                  <h3 className="text-xl font-bold text-purple-900">{product.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-purple-600 text-sm mb-6 line-clamp-2 px-1">{product.description}</p>
                
                <div className="flex flex-col gap-2 mt-auto p-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-purple-900">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {product.affiliateLinks.amazon && (
                      <a 
                        href={product.affiliateLinks.amazon} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF9900] text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-[#e68a00] transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        Comprar na Amazon
                      </a>
                    )}
                    {product.affiliateLinks.shopee && (
                      <a 
                        href={product.affiliateLinks.shopee} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#EE4D2D] text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-[#d73211] transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        Comprar na Shopee
                      </a>
                    )}
                    {product.affiliateLinks.mercadolivre && (
                      <a 
                        href={product.affiliateLinks.mercadolivre} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FFE600] text-black px-4 py-3 rounded-xl text-sm font-bold hover:bg-[#e6cf00] transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        Comprar no Mercado Livre
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Produto */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full text-purple-900 hover:bg-purple-100 transition-all shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Lado Esquerdo: Imagem/Vídeo Grande */}
              <div className="md:w-1/2 h-[40vh] md:h-auto bg-purple-50">
                {selectedProduct.videoUrl ? (
                  <iframe 
                    src={selectedProduct.videoUrl} 
                    className="w-full h-full"
                    title={selectedProduct.name}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Lado Direito: Informações */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="mb-6">
                  <span className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center gap-2 text-yellow-500 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-purple-400 font-bold">({selectedProduct.rating})</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-purple-900 mb-3 text-lg">Descrição do Produto</h3>
                  <p className="text-purple-700 leading-relaxed text-lg">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-2xl mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-purple-600 font-medium">Preço sugerido:</span>
                    <span className="text-3xl font-bold text-purple-900">
                      R$ {selectedProduct.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-center text-sm text-purple-500 font-medium mb-4">
                      Finalize sua compra com segurança em nossos parceiros:
                    </p>
                    {selectedProduct.affiliateLinks.amazon && (
                      <a 
                        href={selectedProduct.affiliateLinks.amazon} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-[#FF9900] text-white py-4 rounded-xl font-bold hover:bg-[#e68a00] transition-all flex items-center justify-center gap-3 shadow-lg"
                      >
                        Comprar na Amazon
                      </a>
                    )}
                    {selectedProduct.affiliateLinks.shopee && (
                      <a 
                        href={selectedProduct.affiliateLinks.shopee} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-[#EE4D2D] text-white py-4 rounded-xl font-bold hover:bg-[#d73211] transition-all flex items-center justify-center gap-3 shadow-lg"
                      >
                        Comprar na Shopee
                      </a>
                    )}
                    {selectedProduct.affiliateLinks.mercadolivre && (
                      <a 
                        href={selectedProduct.affiliateLinks.mercadolivre} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-[#FFE600] text-black py-4 rounded-xl font-bold hover:bg-[#e6cf00] transition-all flex items-center justify-center gap-3 shadow-lg"
                      >
                        Comprar no Mercado Livre
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Products