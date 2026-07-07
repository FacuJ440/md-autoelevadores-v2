const brands = [
  { name: 'LINDE', logo: 'logo-linde.png' },
  { name: 'STILL', logo: 'still-logo.png' },
  { name: 'BATTIONI PAGANI', logo: 'logo_bp_150.jpg' },
]

export default function Footer() {
  // Repeat brands 6× so one "set" always fills the viewport
  const allBrands = Array.from({ length: 6 }, () => brands).flat()

  return (
    <footer className="bg-gray-700 py-12">
      {/* Brand carousel — full width, outside max-w container */}
      <div className="mb-12 pb-12 border-b border-white/10 overflow-hidden">
        <div className="inline-flex animate-scroll">
          {allBrands.map((brand, i) => (
            <div key={i} className="flex-shrink-0 mx-16 flex items-center justify-center h-16">
              <img
                src={`${import.meta.env.BASE_URL}${brand.logo}`}
                alt={brand.name}
                className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-page mx-auto px-6">

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-body-sm font-normal text-white/60">
              MD Autoelevadores y Equipos S.R.L.
            </p>
            <p className="text-label font-normal text-white/30 mt-1">
              © 2026 MD Autoelevadores. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
