import { MapPin, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Program() {
  return (
    <section id="program" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-[#013afb]">
          PROGRAMME DE L&apos;ÉVÉNEMENT
        </h2>
        <div className="w-24 h-1 bg-[#00ff97] mx-auto mb-16" />

        <Tabs defaultValue="jour1" className="w-full">
          <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-5 mb-8 bg-transparent p-0 h-auto gap-0">
            <TabsTrigger
              value="jour1"
              className="data-[state=active]:bg-[#013afb] data-[state=active]:text-white bg-white text-gray-700 rounded-none first:rounded-l-lg py-3 border-2 border-gray-200 data-[state=active]:border-[#013afb] text-sm"
            >
              <span className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold">8 Déc</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="jour2"
              className="data-[state=active]:bg-[#013afb] data-[state=active]:text-white bg-white text-gray-700 rounded-none py-3 border-2 border-gray-200 data-[state=active]:border-[#013afb] text-sm"
            >
              <span className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold">9 Déc</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="jour3"
              className="data-[state=active]:bg-[#013afb] data-[state=active]:text-white bg-white text-gray-700 rounded-none py-3 border-2 border-gray-200 data-[state=active]:border-[#013afb] text-sm"
            >
              <span className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold">10 Déc</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="jour4"
              className="data-[state=active]:bg-[#013afb] data-[state=active]:text-white bg-white text-gray-700 rounded-none py-3 border-2 border-gray-200 data-[state=active]:border-[#013afb] text-sm"
            >
              <span className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold">11 Déc</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="jour5"
              className="data-[state=active]:bg-[#013afb] data-[state=active]:text-white bg-white text-gray-700 rounded-none last:rounded-r-lg py-3 border-2 border-gray-200 data-[state=active]:border-[#013afb] text-sm"
            >
              <span className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold">12 Déc</span>
              </span>
            </TabsTrigger>
          </TabsList>

          {/* 8 DÉCEMBRE */}
          <TabsContent value="jour1" className="space-y-8">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black relative inline-block">
                <span className="bg-[#00ff97] px-2 py-1">Dimanche 8 Décembre 2025</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">08:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Réception des étudiants</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                      <p className="text-gray-700">Accueil des participants</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      08:00 - 09:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">08:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Simulateur vol/voiture + VR</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace simulateurs</span>
                      </div>
                      <p className="text-gray-700">Découverte des simulateurs de vol et de voiture en réalité virtuelle</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      08:00 - 09:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">09:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Première conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                      <p className="text-gray-700">La robotique, IA (ses freins, ses enjeux, et son avenir), métiers du numérique du futur, la gestion de projet informatique dans un grand groupe, Stellantis, NextPit, Synaptic Hub (enjeu à la création de start-up sur nos territoires)</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      09:00 - 10:15
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">10:15</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ateliers pratiques</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salles d&apos;ateliers</span>
                      </div>
                      <p className="text-gray-700">Atelier IA + bras robotique + simulateur de vol + live code</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      10:15 - 11:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">11:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      11:00 - 12:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">12:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Pause déjeuner</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace restauration</span>
                      </div>
                      <p className="text-gray-700">Initiation jeu de rôle + loup garou</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12:00 - 13:30
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">14:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      14:00 - 15:15
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">15:15</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ateliers pratiques</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salles d&apos;ateliers</span>
                      </div>
                      <p className="text-gray-700">Atelier IA + bras robotique + simulateur de vol + live code</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15:15 - 16:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">16:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      16:00 - 17:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">17:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Fin de la journée</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 9 DÉCEMBRE */}
          <TabsContent value="jour2" className="space-y-8">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black relative inline-block">
                <span className="bg-[#00ff97] px-2 py-1">Lundi 9 Décembre 2025</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">08:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Réception des étudiants</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      08:00 - 09:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">08:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Simulateur vol/voiture + VR</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace simulateurs</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      08:00 - 09:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">09:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Première conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                      <p className="text-gray-700">La robotique, IA (ses freins, ses enjeux, et son avenir), métiers du numérique du futur, la gestion de projet informatique dans un grand groupe, Stellantis, NextPit, Synaptic Hub</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      09:00 - 10:15
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">10:15</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ateliers pratiques</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salles d&apos;ateliers</span>
                      </div>
                      <p className="text-gray-700">Atelier IA + bras robotique + simulateur de vol + live code</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      10:15 - 11:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">11:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      11:00 - 12:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">12:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Pause déjeuner</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace restauration</span>
                      </div>
                      <p className="text-gray-700">Initiation jeu de rôle + loup garou</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12:00 - 13:30
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">14:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      14:00 - 15:15
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">15:15</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ateliers pratiques</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salles d&apos;ateliers</span>
                      </div>
                      <p className="text-gray-700">Atelier IA + bras robotique + simulateur de vol + live code</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15:15 - 16:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">16:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      16:00 - 17:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">17:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Fin de la journée</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 10 DÉCEMBRE */}
          <TabsContent value="jour3" className="space-y-8">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black relative inline-block">
                <span className="bg-[#00ff97] px-2 py-1">Mardi 10 Décembre 2025</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">09:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Accueil demandeurs d&apos;emploi</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                      <p className="text-gray-700">Ateliers avec France Travail</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      09:00 - 12:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">13:30</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Salon de l&apos;emploi</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Grande salle</span>
                      </div>
                      <p className="text-gray-700">Venue d&apos;agences d&apos;intérim, entreprises et acteurs de l&apos;emploi</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      13:30 - 18:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 11 DÉCEMBRE - CODING GIRL */}
          <TabsContent value="jour4" className="space-y-8">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black relative inline-block">
                <span className="bg-[#ff1ef7] text-white px-2 py-1">Mercredi 11 Décembre 2025 - CODING GIRL</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">09:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Accueil</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">09:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Initiation stream</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Studio</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      09:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">10:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ouverture table ronde</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">11:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférence d&apos;échange</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                      <p className="text-gray-700">IA, Simulateur Campo, Simulateur F1, Réseaux sociaux</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">12:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Déjeuner</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace restauration</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12:00 - 13:30
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">14:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Programme simultané</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Plusieurs salles</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <p className="text-gray-700"><strong>Olympiades des sciences :</strong></p>
                        <ul className="list-disc list-inside text-gray-600 ml-4">
                          <li>Compétition chrono simu voiture</li>
                          <li>Énigmes Scratch</li>
                        </ul>
                        <p className="text-gray-700 mt-2"><strong>+ Conférences en parallèle</strong></p>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      14:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">18:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Up-Héro</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 12 DÉCEMBRE - SCIENCE BOOST */}
          <TabsContent value="jour5" className="space-y-8">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black relative inline-block">
                <span className="bg-[#ff5f3a] text-white px-2 py-1">Jeudi 12 Décembre 2025 - SCIENCE BOOST</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">08:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Accueil collégiens</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Entrée principale</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      08:00 - 08:30
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">08:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Bras robotique + simulateurs</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace simulateurs</span>
                      </div>
                      <p className="text-gray-700">Bras robotique + simulateur de vol/voiture</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      08:00 - 08:45
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">09:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférences</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                      <p className="text-gray-700">NSI, création de jeu vidéo, IA et l&apos;enfance face à l&apos;IA</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      09:00 - 12:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">10:15</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ateliers pratiques</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salles d&apos;ateliers</span>
                      </div>
                      <p className="text-gray-700">Atelier IA + bras robotique + simulateur de vol + live code</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      10:15 - 11:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">12:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Déjeuner</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Espace restauration</span>
                      </div>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12:00 - 13:30
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">14:00</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Conférences</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salle principale</span>
                      </div>
                      <p className="text-gray-700">Fake news, cybersécurité</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      14:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#013afb] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl font-heading font-bold text-[#013afb]">15:15</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">Ateliers pratiques</h4>
                      <div className="flex items-center gap-2 text-[#013afb] mb-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Salles d&apos;ateliers</span>
                      </div>
                      <p className="text-gray-700">Atelier IA + bras robotique + simulateur de vol + live code</p>
                    </div>
                    <div className="text-[#013afb] text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15:15 - 16:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
