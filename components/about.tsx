"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-heading font-bold text-center mb-4 transition-all duration-700 text-[#013afb] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          À PROPOS DE L&apos;ÉVÉNEMENT
        </h2>
        <div
          className={`w-24 h-1 bg-[#00ff97] mx-auto mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`bg-white p-10 rounded-2xl shadow-xl border border-[#013afb]/10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-800">
              Le <span className="text-[#013afb] font-semibold">Forum Tech</span> est le rendez-vous incontournable pour
              tous les passionnés de technologie, d&apos;innovation et de numérique dans la région.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-800">
              Pendant cinque jours intenses, plongez dans un univers où se mêlent conférences inspirantes, ateliers
              pratiques, démonstrations de startups innovantes, rencontres avec des experts du secteur, networking et
              bien plus encore !
            </p>
            <p className="text-lg leading-relaxed font-sans text-gray-800">
              Que vous soyez un professionnel confirmé, un étudiant curieux ou simplement passionné par les nouvelles
              technologies, le <span className="text-[#013afb] font-semibold">Forum Tech</span> vous promet un voyage
              inoubliable au cœur de l&apos;innovation technologique, dans une ambiance festive et conviviale.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about1.png"
                alt="Edition précédente"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about2.png"
                alt="Ateliers tech"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg col-span-2 relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/about3.png"
                alt="Networking"
                width={600}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#ff5f3a] text-white font-sans font-bold px-4 py-2 rounded-lg">
                Édition 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
