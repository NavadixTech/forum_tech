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
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-[#00ff97] text-center">📧 Email</h3>
            <a
              href="david.figueiredo@epitech.eu"
              className="text-[#ff5f3a] hover:text-[#ff5f3a] transition-colors block"
            >
              david.figueiredo@epitech.eu
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-[#00ff97] text-center">📱 Téléphone</h3>
            <a
              href="tel:+33663428307"
              className="text-[#ff5f3a] hover:text-[#ff5f3a] transition-colors block text-center"
            >
              +33 (0)6 63 42 83 07
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-[#00ff97] text-center">🔗 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/showcase/epitech-moulins/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5f3a] hover:text-[#ff5f3a] transition-colors block text-center"
            >
              Epitech Moulins
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
