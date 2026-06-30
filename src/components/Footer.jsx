const brands = ['LINDE', 'STILL', 'HOPPECKE', 'HAKO', 'AGP', 'CVS FERRARI', 'BATTIONI PAGANI']

export default function Footer() {
  return (
    <footer className="bg-onyx-depth py-12">
      <div className="max-w-page mx-auto px-6">
        {/* Brands */}
        <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-white/10">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-label font-normal uppercase tracking-[0.12em] text-white/40"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-body-sm font-normal text-white/60">
              MD Autoelevadores y Equipos S.R.L.
            </p>
            <p className="text-label font-normal text-white/30 mt-1">
              © 2004 — 2024 MD Autoelevadores. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="mailto:info@mdautoelevadores.com.ar"
              className="text-body-sm font-normal text-white/40 hover:text-white/60 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.mdautoelevadores.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm font-normal text-white/40 hover:text-white/60 transition-colors"
            >
              Sitio original
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
