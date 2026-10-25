import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Share2 } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Oração Poderosa para Começar o Dia com Bênçãos',
    excerpt: 'Descubra como consagrar suas primeiras horas do dia para atrair paz, prosperidade e proteção divina.',
    date: '25 Out, 2024',
    author: 'Equipe Conexão',
    image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Orações', 'Fé']
  },
  {
    id: 2,
    title: 'Como os Cristais Podem Elevar sua Vibração',
    excerpt: 'Entenda o poder da ametista, do quartzo e de outras pedras naturais no seu equilíbrio espiritual.',
    date: '23 Out, 2024',
    author: 'Marina Luz',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Espiritualidade', 'Cristais']
  },
  {
    id: 3,
    title: 'Meditação Guiada para Paz Interior',
    excerpt: 'Um guia prático para acalmar a mente e conectar-se com sua essência divina em apenas 10 minutos.',
    date: '20 Out, 2024',
    author: 'Equipe Conexão',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Meditação', 'Paz']
  }
]

function Blog() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Blog & Orações Diárias</h1>
          <p className="section-subtitle">
            Artigos sobre fé, espiritualidade e as orações mais poderosas para o seu dia a dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-purple-900/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-purple-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-purple-900 mb-3 group-hover:text-purple-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-purple-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-purple-100">
                <button className="text-purple-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Ler Mais <ArrowRight size={18} />
                </button>
                <button className="text-purple-400 hover:text-purple-600">
                  <Share2 size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-900 to-purple-800 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Receba Orações Diárias no WhatsApp</h2>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">
            Faça parte da nossa comunidade e receba conteúdos exclusivos e mensagens de fé diretamente no seu celular.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Seu nome" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:bg-white/20 transition-all text-white placeholder:text-white/60"
            />
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all shadow-xl">
              Quero Participar
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog