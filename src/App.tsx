import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X, Heart } from 'lucide-react'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import './App.css'

function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533230392651-d399616299bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Fundo Espiritual"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-900/90 to-purple-800"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20">
              <Heart className="w-12 h-12 text-purple-200 fill-purple-200" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Conexão Divina <br/>
            <span className="text-purple-300">Orações Poderosas</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Fé, Paz e Bênçãos Diárias para iluminar o seu caminho e fortalecer sua alma.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/produtos"
              className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:bg-purple-50"
            >
              Ver Produtos Esotéricos
            </Link>
            <Link
              to="/blog"
              className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-white/10 backdrop-blur-sm"
            >
              Ler Orações Diárias
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Prayer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-purple-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 italic">"A fé remove montanhas e acalma tempestades."</h2>
            <p className="text-xl text-purple-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra hoje o poder da oração em sua vida. Nossa missão é ser o elo entre você e o divino através de conteúdos que inspiram e protegem.
            </p>
            <Link to="/sobre" className="text-purple-900 font-bold border-b-2 border-purple-900 pb-2 hover:text-purple-700 hover:border-purple-700 transition-all">
              Conheça Nossa Jornada
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-purple-900 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-purple-900 tracking-tight">Conexão Divina</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'Sobre', path: '/sobre' },
                { name: 'Produtos', path: '/produtos' },
                { name: 'Testemunhos', path: '/testemunhos' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contato', path: '/contato' },
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === link.path ? 'text-purple-900' : 'text-purple-400 hover:text-purple-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <button className="relative bg-purple-100 p-3 rounded-full text-purple-900 hover:bg-purple-200 transition-all">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-purple-900 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">0</span>
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
               <button className="bg-purple-100 p-2 rounded-full text-purple-900">
                <ShoppingCart size={20} />
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-purple-900">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-purple-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Sobre', path: '/sobre' },
                { name: 'Produtos', path: '/produtos' },
                { name: 'Testemunhos', path: '/testemunhos' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contato', path: '/contato' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-bold text-purple-900 border-b border-purple-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-white fill-white" />
              <span className="text-2xl font-bold tracking-tight text-white">Conexão Divina</span>
            </Link>
            <p className="text-purple-300 leading-relaxed">
              Iluminando caminhos e fortalecendo a fé através de orações, produtos sagrados e conhecimento espiritual.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-purple-300">
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Orações</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Atendimento</h4>
            <ul className="space-y-4 text-purple-300">
              <li>Segunda a Sexta</li>
              <li>09:00 às 18:00</li>
              <li>contato@conexaodivina.com</li>
              <li>+55 (11) 99999-9999</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-purple-300 mb-6">Receba doses diárias de fé no seu e-mail.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-purple-900 px-4 py-3 rounded-lg font-bold hover:bg-purple-100 transition-all">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-purple-400 text-sm">
          <p>&copy; 2024 Conexão Divina - Todos os direitos reservados. Design by Alliance Criativa.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="App selection:bg-purple-200 selection:text-purple-900">
        <Navbar />
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/testemunhos" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App