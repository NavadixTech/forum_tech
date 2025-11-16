"use client"

import { useEffect, useRef, useState } from "react"

export function Location() {
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
    <section ref={sectionRef} id="location" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-[#013afb]">LIEU & ACCÈS</span>
        </h2>
        <div
          className={`w-24 h-1 bg-[#00ff97] mx-auto mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations */}
          <div className="space-y-6">
            <div
              className={`bg-white p-8 rounded-xl shadow-lg border border-[#7eb9a6]/20 transition-all duration-700 delay-200 hover:shadow-2xl hover:scale-105 hover:border-[#013afb] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <h3 className="text-2xl font-bold text-[#181818] mb-4 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                Adresse
              </h3>
              <p className="text-lg text-[#181818] leading-relaxed">
                <strong className="text-[#013afb]">Epitech Moulins</strong>
                <br />
                9 Rue de Bad Vilbel
                <br />
                03000 Moulins
                <br />
                France
              </p>
            </div>

            <div
              className={`bg-white p-8 rounded-xl shadow-lg border border-[#7eb9a6]/20 transition-all duration-700 delay-300 hover:shadow-2xl hover:scale-105 hover:border-[#013afb] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <h3 className="text-2xl font-bold text-[#181818] mb-4 flex items-center gap-3">
                <span className="text-3xl">🚗</span>
                Accès & Parking
              </h3>
              <ul className="space-y-3 text-[#181818]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff97] font-bold">•</span>
                  <span>Parking gratuit sur place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff97] font-bold">•</span>
                  <span>Accès transports en commun : Bus ligne X</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff97] font-bold">•</span>
                  <span>Gare SNCF à proximité (15 min à pied)</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-white p-8 rounded-xl shadow-lg border border-[#7eb9a6]/20 transition-all duration-700 delay-400 hover:shadow-2xl hover:scale-105 hover:border-[#013afb] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <h3 className="text-2xl font-bold text-[#181818] mb-4 flex items-center gap-3">
                <span className="text-3xl">🕐</span>
                Horaires
              </h3>
              <p className="text-lg text-[#181818]">
                <strong className="text-[#ff5f3a]">8, 9, 10, 11 & 12 décembre 2025</strong>
                <br />
                Tous les jours : 9h00 - 18h00
              </p>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div
            className={`rounded-xl overflow-hidden shadow-lg h-[600px] border-2 border-[#7eb9a6]/30 transition-all duration-700 delay-500 hover:shadow-2xl hover:border-[#013afb] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.9384768391796!2d3.3300736!3d46.5663833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f142d4e71c0001%3A0x8c5b9e4e4e4e4e4e!2s9%20Rue%20de%20Bad%20Vilbel%2C%2003000%20Moulins!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de localisation Epitech Moulins"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
