"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-white isolate">
      {/* Image de fond avec zoom */}
      <div className="absolute inset-0">
        <Image
          src="/fond.jpg"
          alt="Background"
          fill
          className="object-cover animate-zoom"
          priority
        />
      </div>

      {/* Overlay gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      {/* Logo Epitech en bas à droite */}
      <div className="absolute bottom-8 right-8 z-20 animate-fade-in-delay-4">
        <Image
          src="/epitech_blanc.png"
          alt="Epitech"
          width={150}
          height={50}
          className="opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge événement */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl">
            <span className="w-2 h-2 bg-[#00ff97] rounded-full animate-pulse" />
            <span className="text-white font-semibold text-sm tracking-wider">ÉVÉNEMENT 2025</span>
          </div>
        </div>

        {/* Logo principal */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="text-center">
              {/* Effet de glow derrière le texte */}
              <div className="absolute inset-0 blur-3xl opacity-50">
                <div className="text-8xl md:text-9xl font-heading text-[#013afb] leading-none tracking-tight font-black">
                  FORUM
                </div>
                <div className="text-8xl md:text-9xl font-heading text-[#013afb] leading-none tracking-tight font-black">
                  TECH
                </div>
              </div>

              {/* Texte principal */}
              <div className="relative">
                <div className="text-7xl md:text-9xl font-heading text-white leading-none tracking-tight font-black drop-shadow-2xl [text-shadow:0_0_30px_rgba(1,58,251,0.5)]">
                  FORUM
                </div>
                <div className="relative text-7xl md:text-9xl font-heading text-white leading-none tracking-tight font-black drop-shadow-2xl [text-shadow:0_0_30px_rgba(1,58,251,0.5)]">
                  TEC<span className="relative">H<span className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 text-3xl md:text-5xl text-[#00ff97] font-black drop-shadow-lg animate-pulse">V3</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline avec effet */}
        <div className="mb-12 animate-fade-in-delay-3">
          <h1 className="text-2xl md:text-4xl font-heading font-bold text-center text-white drop-shadow-lg mb-6">
            LE RENDEZ-VOUS <span className="text-[#00ff97] animate-pulse">INCONTOURNABLE</span> DE LA TECH
          </h1>
        </div>

        {/* Informations événement avec cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto animate-fade-in-delay-3">
          {/* Date */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-[#00ff97]" />
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Dates</span>
            </div>
            <p className="text-white font-bold text-xl">8 - 12 Déc 2025</p>
          </div>

          {/* Horaires */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-[#00ff97]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Horaires</span>
            </div>
            <p className="text-white font-bold text-xl">9h00 - 18h00</p>
          </div>

          {/* Lieu */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-[#00ff97]" />
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Lieu</span>
            </div>
            <p className="text-white font-bold text-xl">Moulins</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
          <Link href="#program">
            <Button
              size="lg"
              className="bg-[#013afb] hover:bg-[#00ff97] hover:text-[#013afb] text-white px-10 py-7 text-lg rounded-xl transition-all hover:scale-105 font-sans font-bold shadow-2xl border-2 border-white/20 backdrop-blur-sm group relative overflow-hidden"
            >
              <span className="relative z-10">Découvrir le Programme</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff97]/0 via-[#00ff97]/10 to-[#00ff97]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </Link>
          <Link href="#speakers">
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white hover:text-[#013afb] text-white px-10 py-7 text-lg rounded-xl transition-all hover:scale-105 font-sans font-bold shadow-2xl border-2 border-white/30 backdrop-blur-sm"
            >
              Les Intervenants
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Découvrir</span>
            <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
