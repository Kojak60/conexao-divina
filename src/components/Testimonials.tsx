import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maria Clara Santos',
    role: 'Cliente Fiel',
    content: 'O Tarot Negro que comprei é simplesmente divino. A qualidade das cartas e as orientações que recebi mudaram minha forma de ver a vida. Gratidão eterna!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 2,
    name: 'João Pedro Alves',
    role: 'Praticante de Meditação',
    content: 'As orações diárias do blog são meu combustível matinal. Sinto uma paz imensa e as bênçãos estão fluindo em minha casa.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Luiza Ferreira',
    role: 'Estudante de Espiritualidade',
    content: 'O kit de incensos é maravilhoso! O aroma é suave e realmente limpa o ambiente. A entrega foi super rápida e o atendimento nota mil.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
]

function Testimonials() {
  return (
    <section className="py-24 bg-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Depoimentos de Fé</h2>
          <p className="section-subtitle">
            Histórias reais de pessoas que transformaram suas vidas através da Conexão Divina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card relative flex flex-col justify-between"
            >
              <div className="absolute -top-4 -right-4 bg-purple-200 p-3 rounded-full text-purple-600">
                <Quote size={24} />
              </div>

              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-purple-700 italic mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-purple-100 pt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-bold text-purple-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Video Depoimento"
              className="rounded-3xl shadow-2xl max-w-full md:max-w-4xl h-80 object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/40 transition-all rounded-3xl flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-900 shadow-2xl transform transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-purple-900 border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <p className="mt-6 font-bold text-purple-900 text-xl">Assista a depoimentos em vídeo no nosso YouTube</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials