export function Partners() {
  return (
    <section id="partners" className="py-20 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            NOS PARTENAIRES
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-16" />

        {/* Partenaires Platine */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-400">Partenaires Platine</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-800 border-2 border-yellow-500/30 rounded-xl p-8 flex items-center justify-center h-40 hover:border-yellow-500 transition-colors"
              >
                <span className="text-slate-400 text-lg">Logo Partenaire {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partenaires Or */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-300">Partenaires Or</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-center justify-center h-32 hover:border-yellow-400 transition-colors"
              >
                <span className="text-slate-400">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partenaires Argent */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-slate-300">Partenaires Argent</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-center justify-center h-24 hover:border-slate-500 transition-colors"
              >
                <span className="text-slate-500 text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Devenir partenaire */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-300 mb-6">Vous souhaitez devenir partenaire ?</p>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  )
}
