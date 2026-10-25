import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Target, Shield, Users } from 'lucide-react'

function About() {
  const features = [
    { icon: Heart, title: 'Conteúdo Autoral', description: 'Orações e conteúdos criados por especialistas em espiritualidade' },
    { icon: Target, title: 'Otimizado para SEO', description: 'Conteúdo estruturado para melhor posicionamento nos buscadores' },
    { icon: Shield, title: 'Seguro e Confiável', description: 'Ambiente seguro para práticas espirituais e compras' },
    { icon: Users, title: 'Comunidade', description: 'Acesso a comunidades exclusivas de fé e crescimento' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="section-title">Sobre Nós</h1>
            <p className="section-subtitle">
              Conheça a história da Conexão Divina e nossa missão de levar fé, paz e bênçãos a todos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Nossa História</h2>
              <p className="text-purple-700 mb-4">
                A Conexão Divina nasceu da necessidade de oferecer um espaço sagrado onde as pessoas possam se conectar com sua fé interior e receber orientações espirituais de qualidade.
              </p>
              <p className="text-purple-700 mb-4">
                Fundada em 2020, nossa jornada começou com um pequeno grupo de devotos que compartilhavam orações diárias e crescemos para nos tornar um portal de referência.
              </p>
              <p className="text-purple-700">
                Hoje, somos um portal de referência em espiritualidade, ajudando milhares de pessoas a encontrarem paz, orientação e conexão divina em seu dia a dia.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517486808714-5a3a6c2d3c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Espiritualidade e conexão divina"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Missão e Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="card text-center p-6"
                >
                  <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">{feature.title}</h3>
                  <p className="text-purple-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About