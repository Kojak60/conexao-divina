import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react'

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-purple-900 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Fale Conosco
          </motion.h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Estamos aqui para ouvir você. Seja para uma dúvida sobre produtos ou um pedido de oração.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-purple-900 mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 p-4 rounded-2xl text-purple-900">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-purple-900">WhatsApp / Telefone</h3>
                    <p className="text-purple-600">+55 (11) 99999-9999</p>
                    <p className="text-sm text-purple-400">Atendimento: Seg a Sex, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 p-4 rounded-2xl text-purple-900">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-purple-900">E-mail</h3>
                    <p className="text-purple-600">contato@conexaodivina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 p-4 rounded-2xl text-purple-900">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-purple-900">Endereço</h3>
                    <p className="text-purple-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg text-purple-900 mb-6">Siga-nos nas redes sociais</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, link: '#' },
                    { icon: Facebook, link: '#' },
                    { icon: Youtube, link: '#' }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.link} 
                      className="bg-purple-100 p-4 rounded-full text-purple-900 hover:bg-purple-900 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulário de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-50"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-purple-900 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-xl bg-purple-50 border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-all outline-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-purple-900 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 rounded-xl bg-purple-50 border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-all outline-none"
                      placeholder="exemplo@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-2">Assunto</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-purple-50 border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-all outline-none">
                    <option>Dúvidas sobre Produtos</option>
                    <option>Pedido de Oração</option>
                    <option>Sugestões</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-2">Mensagem</label>
                  <textarea 
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl bg-purple-50 border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                    placeholder="Como podemos ajudar você hoje?"
                  ></textarea>
                </div>

                <button className="w-full bg-purple-900 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-purple-800 transition-all shadow-xl">
                  Enviar Mensagem <Send size={20} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="h-96 w-full grayscale contrast-125 opacity-70">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234142.1156555135!2d-46.825838048602684!3d-23.541432355447385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183453961%3A0x31114523d6c054e0!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  )
}

export default Contact