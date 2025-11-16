export function Footer() {
  return (
    <footer className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#013afb] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FT</span>
              </div>
              <span className="text-2xl font-bold text-[#013afb]">Forum Tech</span>
            </div>
            <p className="text-[#7eb9a6] leading-relaxed">
              Le rendez-vous incontournable de la technologie et de l'innovation dans la région. Rejoignez-nous pour
              trois jours d'apprentissage, de networking et d'inspiration.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-[#00ff97] font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#00ff97] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#00ff97] transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-[#00ff97] transition-colors">
                  Intervenants
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#00ff97] transition-colors">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#00ff97] font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>david.figueiredo@epitech.eu</li>
              <li>+33 (0)6 63 42 83 07gii</li>
              <li>Epitech Moulins</li>
              <li>03000 Moulins, France</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#7eb9a6]/20 pt-8 text-center">
          <p className="text-[#7eb9a6]">© 2025 Forum Tech. Tous droits réservés. | Organisé par Epitech Moulins</p>
        </div>
      </div>
    </footer>
  )
}
