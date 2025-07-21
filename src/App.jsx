// File: src/App.jsx
import React from 'react';

function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Bienvenido a ReelUp Agency
      </h1>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white text-black">
      <h2 className="text-3xl font-bold mb-10 text-center">¿Qué hacemos?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Reels Creativos</h3>
          <p>Diseñamos contenido dinámico que capta atención en segundos.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Gestión de Redes</h3>
          <p>Mantenemos tus redes activas, con publicaciones programadas y optimizadas.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Estrategia Digital</h3>
          <p>Planificamos campañas que convierten seguidores en clientes.</p>
        </div>
      </div>
    </section>
  );
}

function
