import Image from "next/image"

export function Partners() {
  // Liste des 35 logos avec leurs extensions
  const logos = [
    { id: 1, ext: "jpeg" },
    { id: 2, ext: "png" },
    { id: 3, ext: "png" },
    { id: 4, ext: "jpeg" },
    { id: 5, ext: "jpeg" },
    { id: 6, ext: "png" },
    { id: 7, ext: "jpeg" },
    { id: 8, ext: "png" },
    { id: 9, ext: "png" },
    { id: 10, ext: "png" },
    { id: 11, ext: "png" },
    { id: 12, ext: "jpeg" },
    { id: 13, ext: "jpeg" },
    { id: 14, ext: "jpeg" },
    { id: 15, ext: "jpeg" },
    { id: 16, ext: "jpeg" },
    { id: 17, ext: "jpeg" },
    { id: 18, ext: "png" },
    { id: 19, ext: "jpeg" },
    { id: 20, ext: "jpeg" },
    { id: 21, ext: "png" },
    { id: 22, ext: "jpeg" },
    { id: 23, ext: "png" },
    { id: 24, ext: "png" },
    { id: 25, ext: "jpeg" },
    { id: 26, ext: "jpeg" },
    { id: 27, ext: "png" },
    { id: 28, ext: "png" },
    { id: 29, ext: "jpeg" },
    { id: 30, ext: "png" },
    { id: 31, ext: "jpeg" },
    { id: 32, ext: "png" },
    { id: 33, ext: "jpeg" },
    { id: 34, ext: "jpeg" },
    { id: 35, ext: "png" },
  ]

  return (
    <section id="partners" className="py-0.5 px-4 bg-[url('/fond.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-[#013afb] bg-clip-text bg-gradient-to-r">
            NOS PARTENAIRES
          </span>
        </h2>
        <div className="w-24 h-1 bg-[#00ff97] mx-auto mb-8" />

        {/* Grille de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-center h-32 hover:bg-white/20 transition-all hover:scale-105 shadow-xl group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/logos/logo${logo.id}.${logo.ext}`}
                  alt={`Partenaire ${logo.id}`}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
