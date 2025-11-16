export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-[#013afb]">NOUS CONTACTER</span>
        </h2>
        <div className="w-24 h-1 bg-[#00ff97] mx-auto mb-8" />
        <p className="text-center text-[#7eb9a6] text-lg mb-12">
          Une question ? Une suggestion ? N&apos;hésitez pas à nous contacter !
        </p>

        {/* Informations de contact */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-black/40 p-8 rounded-xl border border-[#7eb9a6]/30 hover:border-[#00ff97] transition-all hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#00ff97] text-center">📧 Email</h3>
            <a
              href="mailto:contact@forumtech.fr"
              className="text-[#ff5f3a] hover:text-[#00ff97] transition-colors block text-center"
            >
              david.figueiredo@epitech.eu
            </a>
          </div>

          <div className="bg-black/40 p-8 rounded-xl border border-[#7eb9a6]/30 hover:border-[#00ff97] transition-all hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#00ff97] text-center">📱 Téléphone</h3>
            <a
              href="tel:+33470355025"
              className="text-[#ff5f3a] hover:text-[#00ff97] transition-colors block text-center"
            >
              +33 (0)6 63 42 83 07
            </a>
          </div>

          <div className="bg-black/40 p-8 rounded-xl border border-[#7eb9a6]/30 hover:border-[#00ff97] transition-all hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#00ff97] text-center">🔗 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/showcase/epitech-moulins/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5f3a] hover:text-[#00ff97] transition-colors block text-center"
            >
              Epitech Moulins
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
