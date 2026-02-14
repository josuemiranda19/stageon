"use client";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <main
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      onMouseMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 80%)`,
        }}
      />

      <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6 relative z-10">
        StageOn
      </h1>

      <p className="text-gray-400 max-w-xl mb-8 text-lg relative z-10">
        Cinematic LED visuals for worship, conferences and creative stages.
      </p>

      <div className="flex gap-4 relative z-10">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Explore Visuals
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Free Download
        </button>
      </div>
    </main>
  );
}