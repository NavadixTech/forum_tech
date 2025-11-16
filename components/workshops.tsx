"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

type Workshop = {
  id: number
  title: string
  category: string
  description: string
  duration: string
  location: string
  ageMin?: number
  permanent?: boolean
}

const workshops: Workshop[] = [
  // SIMULATEURS & VR
  {
    id: 1,
    title: "Simulateur de Vol",
    category: "SIMULATEUR",
    description: "Prenez les commandes d'un avion et vivez l'expérience du pilotage en conditions réelles.",
    duration: "Toute la journée",
    location: "Espace Simulateurs",
    permanent: true,
  },
  {
    id: 2,
    title: "Simulateur de Voiture",
    category: "SIMULATEUR",
    description: "Course automobile sur circuits mythiques avec volant et pédalier professionnels.",
    duration: "Toute la journée",
    location: "Espace Simulateurs",
    permanent: true,
  },
  {
    id: 3,
    title: "Simulateur Campo",
    category: "SIMULATEUR",
    description: "Découvrez le simulateur Campo lors de la journée Coding Girl.",
    duration: "Selon programme",
    location: "Espace Simulateurs",
    permanent: false,
  },
  {
    id: 4,
    title: "Simulateur F1",
    category: "SIMULATEUR",
    description: "Pilotez une Formule 1 sur les plus beaux circuits du monde.",
    duration: "Selon programme",
    location: "Espace Simulateurs",
    permanent: false,
  },
  {
    id: 5,
    title: "VR Experience",
    category: "VR",
    description: "Découvrez la réalité virtuelle avec des expériences immersives variées.",
    duration: "Toute la journée",
    location: "Espace VR",
    permanent: true,
  },

  // ATELIERS IA & ROBOTIQUE
  {
    id: 6,
    title: "Atelier IA",
    category: "IA & CODE",
    description: "Initiations à l'intelligence artificielle, création de modèles et applications pratiques.",
    duration: "Sessions de 45min",
    location: "Salle IA",
    permanent: false,
  },
  {
    id: 7,
    title: "Bras Robotique",
    category: "ROBOTIQUE",
    description: "Programmez et manipulez un bras robotique industriel. Découvrez l'automatisation.",
    duration: "Toute la journée",
    location: "Lab Robotique",
    permanent: true,
  },
  {
    id: 8,
    title: "Live Code",
    category: "CODE",
    description: "Séances de programmation en direct. Apprenez les bases du code de manière interactive.",
    duration: "Sessions de 45min",
    location: "Salle Lab",
    permanent: false,
  },

  // CONFÉRENCES & TABLES RONDES
  {
    id: 9,
    title: "La Robotique et l'IA : freins, enjeux et avenir",
    category: "CONFÉRENCE",
    description: "Conférence sur l'intelligence artificielle, ses limitations, ses défis et son potentiel futur.",
    duration: "1h15",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 10,
    title: "Métiers du Numérique du Futur",
    category: "CONFÉRENCE",
    description: "Découvrez les métiers émergents dans le secteur du numérique et de la tech.",
    duration: "1h15",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 11,
    title: "Gestion de Projet Informatique dans un Grand Groupe",
    category: "CONFÉRENCE",
    description: "Retour d'expérience sur la gestion de projets IT chez Stellantis et autres grands groupes.",
    duration: "1h15",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 12,
    title: "NextPit & Synaptic Hub : Créer une Start-up en Territoire Rural",
    category: "CONFÉRENCE",
    description: "Les enjeux de la création de start-ups sur nos territoires. Témoignages et conseils.",
    duration: "1h15",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 13,
    title: "NSI - Numérique et Sciences Informatiques",
    category: "CONFÉRENCE",
    description: "Présentation de la spécialité NSI au lycée et ses débouchés.",
    duration: "1h",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 14,
    title: "Création de Jeu Vidéo",
    category: "CONFÉRENCE",
    description: "De l'idée au jeu final : processus de création d'un jeu vidéo.",
    duration: "1h",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 15,
    title: "IA et l'Enfance face à l'IA",
    category: "CONFÉRENCE",
    description: "Impact de l'intelligence artificielle sur les enfants et l'éducation.",
    duration: "1h",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 16,
    title: "Fake News et Cybersécurité",
    category: "CONFÉRENCE",
    description: "Apprendre à détecter les fake news et se protéger en ligne.",
    duration: "1h",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 17,
    title: "Réseaux Sociaux",
    category: "CONFÉRENCE",
    description: "Les enjeux des réseaux sociaux : opportunités et dangers.",
    duration: "1h",
    location: "Salle principale",
    permanent: false,
  },

  // JEUX & ANIMATIONS
  {
    id: 18,
    title: "Initiation Jeu de Rôle",
    category: "JEU",
    description: "Découvrez l'univers des jeux de rôle avec des maîtres du jeu expérimentés.",
    duration: "Pause déjeuner",
    location: "Espace Détente",
    permanent: false,
  },
  {
    id: 19,
    title: "Loup Garou",
    category: "JEU",
    description: "Parties géantes de Loup Garou pendant les pauses déjeuner.",
    duration: "Pause déjeuner",
    location: "Espace Détente",
    permanent: false,
  },

  // CODING GIRL - Mercredi 11 Décembre
  {
    id: 20,
    title: "Initiation Stream",
    category: "CODING GIRL",
    description: "Apprenez les bases du streaming et de la création de contenu en direct.",
    duration: "9h-18h",
    location: "Studio Stream",
    permanent: false,
  },
  {
    id: 21,
    title: "Table Ronde",
    category: "CODING GIRL",
    description: "Table ronde dédiée aux femmes dans la tech et le numérique.",
    duration: "10h",
    location: "Salle principale",
    permanent: false,
  },
  {
    id: 22,
    title: "Olympiades des Sciences",
    category: "CODING GIRL",
    description: "Compétitions scientifiques et techniques : chrono simu voiture, énigmes Scratch et plus encore.",
    duration: "14h-18h",
    location: "Plusieurs salles",
    permanent: false,
  },
  {
    id: 23,
    title: "Compétition Chrono Simu Voiture",
    category: "CODING GIRL",
    description: "Course contre la montre sur simulateur de voiture. Battez le meilleur temps !",
    duration: "14h-18h",
    location: "Espace Simulateurs",
    permanent: false,
  },
  {
    id: 24,
    title: "Énigmes Scratch",
    category: "CODING GIRL",
    description: "Résolvez des défis de programmation avec Scratch. Pour tous niveaux.",
    duration: "14h-18h",
    location: "Salle Lab",
    permanent: false,
  },
  {
    id: 25,
    title: "Up-Héro",
    category: "CODING GIRL",
    description: "Clôture de la journée Coding Girl avec Up-Héro.",
    duration: "18h",
    location: "Salle principale",
    permanent: false,
  },

  // FRANCE TRAVAIL - Mardi 10 Décembre
  {
    id: 26,
    title: "Ateliers France Travail",
    category: "EMPLOI",
    description: "Ateliers dédiés aux demandeurs d'emploi avec France Travail.",
    duration: "9h-12h",
    location: "Espace Formation",
    permanent: false,
  },
  {
    id: 27,
    title: "Salon de l'Emploi",
    category: "EMPLOI",
    description: "Rencontrez des agences d'intérim, entreprises et acteurs de l'emploi.",
    duration: "13h30-18h",
    location: "Grande Salle",
    permanent: false,
  },
]

export function Workshops() {
  const [selectedCategory, setSelectedCategory] = useState<string>("TOUS")
  const [selectedType, setSelectedType] = useState<string>("TOUS")

  const categories = [
    "TOUS",
    "SIMULATEUR",
    "VR",
    "IA & CODE",
    "ROBOTIQUE",
    "CODE",
    "CONFÉRENCE",
    "JEU",
    "CODING GIRL",
    "EMPLOI",
  ]

  const filteredWorkshops = workshops.filter((workshop) => {
    const categoryMatch = selectedCategory === "TOUS" || workshop.category === selectedCategory
    const typeMatch =
      selectedType === "TOUS" ||
      (selectedType === "PERMANENT" && workshop.permanent) ||
      (selectedType === "HORAIRE" && !workshop.permanent)
    return categoryMatch && typeMatch
  })

  const permanentWorkshops = filteredWorkshops.filter((w) => w.permanent)
  const scheduledWorkshops = filteredWorkshops.filter((w) => !w.permanent)

  return (
    <section id="workshops" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-[#013afb]">
          ATELIERS & ACTIVITÉS
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12">
          Découvrez tous les ateliers, animations, conférences et activités du Forum Tech 2025
        </p>
        <div className="w-24 h-1 bg-[#013afb] mx-auto mb-16" />

        <div className="mb-12 space-y-6">
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-[#00ff97]">Type d'activités</h3>
            <div className="flex flex-wrap gap-0 border-b-2 border-gray-200">
              <button
                onClick={() => setSelectedType("TOUS")}
                className={`px-6 py-3 font-medium transition-all ${
                  selectedType === "TOUS"
                    ? "bg-[#013afb] text-white border-t-2 border-x-2 border-[#013afb] rounded-t-lg"
                    : "bg-white text-gray-700 hover:text-[#013afb] border-t-2 border-x-2 border-gray-200 rounded-t-lg"
                }`}
              >
                Toutes les activités
              </button>
              <button
                onClick={() => setSelectedType("PERMANENT")}
                className={`px-6 py-3 font-medium transition-all ${
                  selectedType === "PERMANENT"
                    ? "bg-[#013afb] text-white border-t-2 border-x-2 border-[#013afb] rounded-t-lg"
                    : "bg-white text-gray-700 hover:text-[#013afb] border-t-2 border-x-2 border-gray-200 rounded-t-lg"
                }`}
              >
                Animations Permanentes
              </button>
              <button
                onClick={() => setSelectedType("HORAIRE")}
                className={`px-6 py-3 font-medium transition-all ${
                  selectedType === "HORAIRE"
                    ? "bg-[#013afb] text-white border-t-2 border-x-2 border-[#013afb] rounded-t-lg"
                    : "bg-white text-gray-700 hover:text-[#013afb] border-t-2 border-x-2 border-gray-200 rounded-t-lg"
                }`}
              >
                Activités à Horaires Fixes
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-[#00ff97]">Par catégorie</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                    selectedCategory === category
                      ? "bg-[#013afb] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:text-[#013afb] border-2 border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {scheduledWorkshops.length > 0 && (
          <div className="mb-16">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold mb-2 text-[#00ff97]">Activités à Horaires Fixes</h3>
              <p className="text-gray-700 mb-8">
                {scheduledWorkshops.length} activité{scheduledWorkshops.length > 1 ? "s" : ""} - Événements avec
                horaires précis à ne pas manquer !
              </p>

              <div className="space-y-4">
                {scheduledWorkshops.map((workshop) => (
                  <div
                    key={workshop.id}
                    className="bg-gray-50 border border-gray-200 hover:border-[#013afb] rounded-lg p-6 transition-all hover:shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:min-w-[100px] flex flex-col gap-2">
                        <div className="text-2xl font-heading font-bold text-[#013afb]">{workshop.duration}</div>
                        <Badge className="bg-[#013afb] text-white w-fit">{workshop.category}</Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">{workshop.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-[#013afb] mb-3">
                          <MapPin className="w-4 h-4" />
                          {workshop.location}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">{workshop.description}</p>
                        {workshop.ageMin && (
                          <div className="text-sm text-gray-600">Âge minimum : {workshop.ageMin} ans</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {permanentWorkshops.length > 0 && (
          <div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold mb-2 text-[#00ff97]">Animations Permanentes</h3>
              <p className="text-gray-700 mb-8">
                {permanentWorkshops.length} animation{permanentWorkshops.length > 1 ? "s" : ""} - Disponibles toute la
                journée, venez quand vous voulez !
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {permanentWorkshops.map((workshop) => (
                  <div
                    key={workshop.id}
                    className="bg-gray-50 border border-gray-200 hover:border-[#013afb] rounded-lg p-6 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Badge className="bg-[#013afb] text-white">{workshop.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-[#013afb]">
                        <Clock className="w-4 h-4" />
                        {workshop.duration}
                      </div>
                    </div>
                    <h4 className="text-lg font-heading font-bold mb-2 text-gray-900">{workshop.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-[#013afb] mb-3">
                      <MapPin className="w-4 h-4" />
                      {workshop.location}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">{workshop.description}</p>
                    {workshop.ageMin && (
                      <div className="text-sm text-gray-600">Âge minimum : {workshop.ageMin} ans</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700 text-lg">Aucune activité trouvée avec ces filtres.</p>
          </div>
        )}

        <div className="mt-16 p-8 bg-white border-2 border-gray-200 rounded-lg">
          <h3 className="text-2xl font-heading font-bold mb-6 text-[#00ff97]">Informations importantes</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#013afb]" />
                <strong className="text-[#013afb] font-heading">Accès libre</strong>
              </div>
              <p className="text-sm">La plupart des activités sont en accès libre</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#013afb]" />
                <strong className="text-[#013afb] font-heading">Animations permanentes</strong>
              </div>
              <p className="text-sm">Disponibles tout au long de la journée</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#013afb]" />
                <strong className="text-[#013afb] font-heading">Conférences</strong>
              </div>
              <p className="text-sm">Dans la limite des places disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
