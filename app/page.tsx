"use client";

import { useState } from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const content = [
    {
      title: "Visuales para adoración",
      description: "Fondos LED diseñados para momentos de adoración.",
      content: (
        <video
          src="/video1.mp4"
          autoPlay
          loop
          muted
          playsInline
           className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Conferencias y eventos",
      description: "Visuales modernos para escenarios y auditorios.",
      content: (
        <video
          src="/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
           className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Ambientes inmersivos",
      description: "Diseñados para pantallas LED y proyectores.",
      content: (
        <video
          src="/video3.mp4"
          autoPlay
          loop
          muted
          playsInline
           className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Listos para usar",
      description: "Descarga y reproduce sin configuración.",
      content: (
        <video
          src="/video4.mp4"
          autoPlay
          loop
          muted
          playsInline
           className="w-full h-full object-cover"
        />
      ),
    },
  ];

  return (
    <>
      {/* HERO */}
      <main
        className="relative min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        onMouseMove={(e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        }}
      >
        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 80%)`,
          }}
        />

        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full top-1/3"></div>

        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          StageOn
        </h1>

        <p className="text-gray-400 max-w-xl mb-8 text-lg relative z-10">
          Cinematic LED visuals designed for worship, conferences and immersive
          stages.
        </p>

        <div className="flex gap-4 relative z-10">
          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Free Download
          </a>

          <button className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore Visuals
          </button>
        </div>
      </main>

      {/* STICKY SCROLL EFFECT */}
      <StickyScroll content={content} />
    </>
  );
}