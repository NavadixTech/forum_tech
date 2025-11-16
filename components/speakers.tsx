"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SpeakersProps {
  showAll?: boolean
}

export function Speakers({ showAll = false }: SpeakersProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".speaker-card")
    cards.forEach((card) => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [])

  const speakers = [
    {
      name: "Laura Hassan",
      role: "Directrice Générale",
      company: "Epitech",
      image: "/laura.png",
    },
    {
      name: "Isabelle Fraine",
      role: "Directrice Générale Google Cloud",
      company: "Google",
      image: "/fraine.png",
    },
    {
      name: "Julien Perrez",
      role: "Directeur de laboratoire de recherche",
      company: "Epitech",
      image: "/perrez.png",
    },
    {
      name: "Dipty Chander",
      role: "President of E-mma & Senior Technical Account Manager at Google Cloud",
      company: "Google",
      image: "/dipty.png",
    },
    {
      name: "Victor Granger",
      role: "Directeur de Campus et pédagogique",
      company: "Epitech Moulins",
      image: "/victor.png",
    },
    {
      name: "Sacha Lamour",
      role: "Synaptic-Hub & Etudiant 2ème année",
      company: "Epitech Moulins",
      image: "/sacha.jpg",
    },
    {
      name: "Ines Desgranges Palmieri",
      role: "Chargé de développement",
      company: "Epitech Moulins",
      image: "/ines.png",
    },
    {
      name: "Clément Pandreau",
      role: "Président Synaptic-Hub",
      company: "Epitech Moulins",
      image: "/clement.png",
    },
    {
      name: "André Stana",
      role: "Président Synaptic-hub & Etudiant 4ème année",
      company: "Epitech Moulins",
      image: "/andre.png",
    },
    {
      name: "Clément Lagier",
      role: "AER & Etudiant 5ème année",
      company: "Epitech Moulins",
      image: "/clement_aer.png",
    },
    {
      name: "Thibault Dufaure",
      role: "APE & Alumni 2025",
      company: "Epitech Moulins",
      image: "/tibo.png",
    },
    {
      name: "Céline Didier",
      role: "Directrice",
      company: "Croix Rouge Compétence",
      image: "/celine.png",
    },
    {
      name: "Yurick Curtin",
      role: "Fondateur",
      company: "Campo",
      image: "/yurik.png",
    },
    {
      name: "Evan Verplaetse",
      role: "Président NextPit & Etudiant 2ème année",
      company: "Epitech Moulins",
      image: "/evan.png",
    },
    {
      name: "Titouan Beaurepaire",
      role: "Président NextPit & Etudiant 2ème année",
      company: "Epitech Moulins",
      image: "/titouna.png",
    },
    {
      name: "Thaïs Verinaud-coma ",
      role: "Etudiante 2ème année",
      company: "Croix Rouge Compétence",
      image: "/thais.png",
    },
    {
      name: "Anna Dussardier",
      role: "Adjointe au bureau de la coordination des politiques publiques",
      company: "Préfecture de l’Allier",
      image: "/anna.png",
    },
    {
      name: "Cyril Martin",
      role: "Directeur ",
      company: "Moulins Communauté",
      image: "/cyril.png",
    },
    {
      name: "Emmanuelle Gillet Lorenzig",
      role: "Docteure & Cheffe de projet Ruralités villages d’avenir 1% paysage, développement cadre de vie",
      company: "Fonction publique",
      image: "/emanuelle.png",
    },
    {
      name: "Emilie Resche",
      role: "APAE chef du bureau de la coordination des politiques publiques",
      company: "Préfecture de l’Allier",
      image: "/emilie.png",
    },
    {
      name: "Mickaël Cloux",
      role: "Chargé de mission accès des services aux publics et inclusion numérique",
      company: "Conseil départemental de l'Allier",
      image: "/cloux.png",
    },
    {
      name: "Jean Philippe Giraud",
      role: "Chargé de mission",
      company: "",
      image: "/giraud.png",
    },
    {
      name: "Chrystelle Prost-Bourdon",
      role: "Proviseure-adjointe",
      company: "Lycée Banville",
      image: "/bourdon.png",
    },
    {
      name: "Yoann Berriot",
      role: "Directeur des Opérations",
      company: "vente-unique.com",
      image: "/yoann.png",
    },
    {
      name: "Frédéric FORESTAS",
      role: "Directeur Général",
      company: "MYF",
      image: "/fredo.png",
    },
    {
      name: "Pierre Robert",
      role: "Expert en pédagogie active",
      company: "",
      image: "/robert.png",
    },
    {
      name: "Isabelle Feydel",
      role: "Chargée de relations partenariales",
      company: "France travail Allier",
      image: "/feydel.png",
    },
    {
      name: "Anne Plisson",
      role: "Directrice Territoriale",
      company: "France Travail Allier",
      image: "/plisson.png",
    },
    {
      name: "Gilles Boireau",
      role: "Entraîneur de dynamique, Animateur de communautés, Facilitateur de territoire en innovation participative, accompagnateur de projet.",
      company: "",
      image: "/gilles.png",
    },
    {
      name: "Antoine Bach",
      role: " Entrepreneur, Formateur, Communication digitale, accompagnement & développement",
      company: "",
      image: "/bach.png",
    },
    {
      name: "Amélie Noël",
      role: "Expert traitement de surface & formulation & Directrice Régionale Auvergne",
      company: "Valeo Light Division & Elles Bougent",
      image: "/noel.png",
    },
    {
      name: "Christelle Henriot-Maurel",
      role: "Présidente du Tribunal judiciaire de Moulins Présidente CDAD 03",
      company: "",
      image: "/christelle.png",
    },
    {
      name: "Nadège Varin",
      role: "Déléguée départementale aux droits des femmes et à l'égalité de l'Allier",
      company: "",
      image: "/varin.png",
    },
    {
      name: "Charlotte Lecat",
      role: "Cheffe de Projet IT",
      company: "SNCF",
      image: "/lecat.png",
    },
    {
      name: "Nicolas Chanet",
      role: "Assistant de Direction",
      company: "Talent Hub Manager",
      image: "/chanet.png",
    },
    {
      name: "Adeline Verger",
      role: "RH de Proximité et Responsable Relations Ecoles",
      company: "Safran",
      image: "/verger.jpeg",
    },
    {
      name: "Karine Boileve",
      role: "Responsable recrutement",
      company: "Louis Vuitton",
      image: "/karine.jpeg",
    },
    {
      name: "Veronique Lanceau",
      role: "Proviseur",
      company: "College Charles Peguy",
      image: "/vero.png",
    },
    {
      name: "Sonia Di Pasqua",
      role: "Présidente",
      company: "RGPD Start",
      image: "/sonia.png",
    },
    {
      name: "Xavier Dutertre",
      role: "Data Gourou et Spécialiste des avions du futur",
      company: "Technoplane",
      image: "/xavier.png",
    },
    {
      name: "Adrien Soucachet",
      role: "Co-fondateur",
      company: "Le Pot Commun.fr",
      image: "/cachet.png",
    },
    {
      name: "Thomas Guidez",
      role: "Streamer",
      company: "",
      image: "/thomas.png",
    },
    {
      name: "Julien Cabanne",
      role: "Pilote",
      company: "",
      image: "/cabanne.png",
    },
]

  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 3)

  return (
    <section id="speakers" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-[#013afb]">INVITÉS & CONFÉRENCIERS</span>
        </h2>
        <div className="w-24 h-1 bg-[#00ff97] mx-auto mb-16" />
        <p className="text-center text-[#7eb9a6] text-3xl mb-16 max-w-3xl mx-auto">
          Rencontrez les experts qui partageront leur vision et leur expérience lors du Forum Tech 2025
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSpeakers.map((speaker, index) => (
            <Card
              key={index}
              data-index={index}
              className={`speaker-card overflow-hidden bg-white border-[#7eb9a6]/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#013afb]/20 hover:-translate-y-2 hover:border-[#013afb] cursor-pointer group ${
                visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#013afb] to-[#00ff97] overflow-hidden">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013afb]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#181818] mb-2 group-hover:text-[#013afb] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-[#00ff97] font-semibold mb-1">{speaker.role}</p>
                <p className="text-[#7eb9a6]">{speaker.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <Link href="/intervenants">
              <Button
                size="lg"
                className="bg-[#00ff97] hover:bg-white hover:text-[#013afb] text-[#013afb] px-8 py-6 text-lg rounded-lg transition-all hover:scale-105 font-sans font-semibold"
              >
                Voir tous les intervenants
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
