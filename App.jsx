import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-6">Bienvenido a ReelUp Agency</h1>
      <p className="text-xl text-gray-300 max-w-xl text-center">
        Creamos Reels que hacen crecer tu marca en redes sociales. Transforma tu contenido en resultados.
      </p>
    </div>
  );
}
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaRocket } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold text-white">ReelUp Agency</h1>
        <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
          ¡Quiero mis Reels!
        </button>
      </header>

      <main className="px-6 py-12 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Reels que venden, <br /> contenidos que impactan.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Creamos contenido irresistible para Instagram y TikTok que convierte visualizaciones en clientes. Impulsa tu marca hoy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Solicitar presupuesto
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
          >
            Ver ejemplos
          </a>
        </motion.div>
      </main>

      <section className="bg-white text-black py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Especialistas en plataformas que generan visibilidad
          </h3>
          <div className="flex justify-center gap-12 text-4xl">
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaTiktok className="hover:text-black transition" />
            <FaRocket className="hover:text-indigo-500 transition" />
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-white/60 text-sm">
        © {new Date().getFullYear()} ReelUp Agency — Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
