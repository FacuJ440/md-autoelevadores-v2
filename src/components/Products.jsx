import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const catalogSections = [
  {
    title: 'Autoelevadores Linde',
    slug: 'linde',
    logo: 'logo-linde.png',
    image: 'maquinarias-linde.webp',
    description: 'Tecnología alemana de última generación. Autoelevadores térmicos, eléctricos y automatizados para máxima eficiencia.',
    subsections: [
      {
        title: 'Autoelevadores Térmicos',
        products: [
          { name: 'H 14-20 EVO', slug: 'h-14-20-evo', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-termicos/elevadores-h-14-20-evo/' },
          { name: 'H 20-25 EVO', slug: 'h-20-25-evo', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-termicos/elevadores-h-20-25-evo/' },
        ],
      },
      {
        title: 'Autoelevadores Eléctricos',
        products: [
          { name: 'E16 - E20 EVO', slug: 'e16-e20-evo', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-electricos/e16-e20-evo/' },
          { name: 'E12 - E20 EVO', slug: 'e12-e20-evo', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-electricos/e12-e20-evo/' },
        ],
      },
      {
        title: 'Apiladores de Pallet',
        products: [
          { name: 'L06 - L16 AC', slug: 'l06-l16-ac', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/apiladores-de-pallet/l06-l16-ac/' },
          { name: 'L14 - L20 AP', slug: 'l14-l20-ap', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/apiladores-de-pallet/' },
        ],
      },
      {
        title: 'Transpaletas Eléctricas',
        products: [
          { name: 'CiTi one', slug: 'citi-one', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/transpaletas-electricas/citi-one/' },
        ],
      },
      {
        title: 'Recogedores de Pedidos',
        products: [
          { name: 'N20 Vi / VLi', slug: 'n20-vi-vli', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/recogedores-de-pedidos/n20-vi-vli/' },
          { name: 'V10', slug: 'v10', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/recogedores-de-pedidos/v10/' },
        ],
      },
      {
        title: 'Autoelevadores Retráctiles',
        products: [
          { name: 'R10 - R16 B', slug: 'r10-r16-b', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-retractiles/r10-r16-b/' },
        ],
      },
      {
        title: 'Pasillo Muy Estrecho',
        products: [
          { name: 'K', slug: 'k', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-de-pasillo-muy-estrecho/k/' },
        ],
      },
      {
        title: 'Trenes Logísticos',
        products: [
          { name: 'FT08 - FT20 C', slug: 'ft08-ft20-c', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/trenes-logisticos/ft08-ft20-c/' },
        ],
      },
      {
        title: 'Tractores de Remolque',
        products: [
          { name: 'P60 - P80, W08', slug: 'p60-p80-w08', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/tractores-de-remolque/p60-p80-w08/' },
        ],
      },
      {
        title: 'Automatizados',
        products: [
          { name: 'K-MATIC', slug: 'k-matic', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-automatizados/k-matic/' },
        ],
      },
    ],
  },
  {
    title: 'Still',
    slug: 'still',
    logo: 'still-logo.png',
    image: 'still-1.webp',
    description: 'Soluciones robustas de manipulación. Apiladores, retráctiles y autoelevadores a combustión y eléctricos.',
    subsections: [
      {
        title: 'Apilador Eléctrico',
        products: [
          { name: 'EGV 14/16', slug: 'egv-14-16', href: 'https://www.mdautoelevadores.com.ar/still-es/apilador-electrico/apilador-electrico-egv-14-16/' },
        ],
      },
      {
        title: 'Apilador Retráctil',
        products: [
          { name: 'FM-X 17', slug: 'fm-x-17', href: 'https://www.mdautoelevadores.com.ar/still-es/apilador-retractil/apilador-retractil-fm-x-17/' },
        ],
      },
      {
        title: 'Autoelevadores Combustión',
        products: [
          { name: 'RC 44-25 C DUPLEX', slug: 'rc-44-25-c-duplex', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevadores-combustion/autoelevador-a-combustion-rc-44-25-c-duplex/' },
        ],
      },
      {
        title: 'Autoelevador Eléctrico',
        products: [
          { name: 'RX 60', slug: 'rx-60', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevador-electrico/' },
          { name: 'RX 70-20/35 Híbrida', slug: 'rx-70-20-35-hibrida', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevadores-combustion/' },
        ],
      },
    ],
  },
  {
    title: 'Baterías Industriales',
    slug: 'baterias',
    logo: 'png-transparent-hoppecke-hd-logo.png',
    image: 'baterias-hop.webp',
    description: 'Energía confiable para su flota. Baterías traccionarias, cargadores y soluciones Li-Ion Hoppecke.',
    subsections: [
      {
        title: 'Hoppecke',
        products: [
          { name: 'OpzS', slug: 'opzs', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/opzs/' },
          { name: 'Tracción', slug: 'traccion', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/' },
          { name: 'Cargadores', slug: 'cargadores', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/' },
          { name: 'Energía Li-Ion', slug: 'energia-li-ion', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/' },
        ],
      },
    ],
  },
  {
    title: 'Equipos Especiales',
    slug: 'equipos-especiales',
    logo: 'CVS-logo-top-retina.png',
    image: 'still-2.webp',
    description: 'Equipos hidráulicos, cerramientos industriales, plataformas y puertas rápidas.',
    subsections: [
      {
        title: 'Equipos Hidráulicos',
        products: [
          { name: 'CVS Ferrari', slug: 'cvs-ferrari', href: 'https://www.mdautoelevadores.com.ar/equipos-especiales/' },
          { name: 'Battioni Pagani', slug: 'battioni-pagani', href: 'https://www.mdautoelevadores.com.ar/equipos-especiales/' },
        ],
      },
      {
        title: 'Cerramientos Industriales',
        products: [
          { name: 'Plataformas Tijera', slug: 'plataformas-tijera', href: 'https://www.mdautoelevadores.com.ar/cerramientos-industriales/plataformas-tijera/' },
          { name: 'Puertas Rápidas', slug: 'puertas-rapidas', href: 'https://www.mdautoelevadores.com.ar/cerramientos-industriales/' },
        ],
      },
    ],
  },
]

export { catalogSections }

/* Chevron icon for accordion */
function Chevron({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

/* Search icon */
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

export default function Products() {
  const [expandedBrands, setExpandedBrands] = useState(catalogSections.map((s) => s.slug))
  const [searchQuery, setSearchQuery] = useState('')

  const toggleBrand = (slug) => {
    setExpandedBrands((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  /* Flatten all products for search */
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    const results = []
    catalogSections.forEach((section) => {
      section.subsections.forEach((sub) => {
        sub.products.forEach((product) => {
          if (
            product.name.toLowerCase().includes(q) ||
            sub.title.toLowerCase().includes(q) ||
            section.title.toLowerCase().includes(q)
          ) {
            results.push({
              ...product,
              category: sub.title,
              brand: section.title,
              brandSlug: section.slug,
            })
          }
        })
      })
    })
    return results
  }, [searchQuery])

  const isSearching = searchQuery.trim().length > 0

  return (
    <section id="productos" className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        {/* <h2 className="text-display font-light text-[#D42027] mb-4">
          Catálogo
        </h2> */}
        {/* <p className="text-body font-normal text-mercury mb-12">
          Toda nuestra línea de equipos y soluciones industriales
        </p> */}

        {/* Search bar */}
        <div className="relative mb-16">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-mercury">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar equipos, marcas o categorías…"
            className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm pl-12 pr-4 py-4 text-body font-normal text-carbon-warm placeholder:text-mercury/60 focus:outline-none focus:border-[#D42027]/40 transition-colors"
          />
        </div>

        {/* Search results */}
        {isSearching && (
          <div className="mb-16">
            {searchResults.length === 0 ? (
              <p className="text-body font-normal text-mercury">
                No se encontraron resultados para &ldquo;{searchQuery}&rdquo;
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/catalogo/${product.brandSlug}/${product.slug}`}
                    className="bg-paper-white rounded-sm p-5 hover:border-[#D42027]/30 border border-transparent transition-colors"
                  >
                    <span className="text-label font-normal text-[#D42027] uppercase tracking-wider">
                      {product.brand} · {product.category}
                    </span>
                    <h4 className="text-body font-bold text-carbon-warm mt-1">
                      {product.name}
                    </h4>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Brand sections (hidden while searching) */}
        {!isSearching && (
          <div className="space-y-6">
            {catalogSections.map((section) => {
              const isOpen = expandedBrands.includes(section.slug)
              return (
                <div key={section.slug} className="bg-paper-white rounded-sm overflow-hidden">
                  {/* Brand header — clickable accordion */}
                  <button
                    onClick={() => toggleBrand(section.slug)}
                    className="w-full flex items-center gap-5 p-6 text-left hover:bg-vellum/50 transition-colors"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${section.logo}`}
                      alt={section.title}
                      className="h-12 w-auto object-contain flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-heading font-light text-carbon-warm">
                        {section.title}
                      </h3>
                      <p className="text-body-sm font-normal text-mercury mt-1 line-clamp-1">
                        {section.description}
                      </p>
                    </div>
                    <Chevron open={isOpen} />
                  </button>

                  {/* Accordion content */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 border-t border-carbon-warm/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {section.subsections.map((sub) => (
                          <div key={sub.title} className="bg-vellum rounded-sm p-5">
                            <h4 className="text-body font-bold text-carbon-warm mb-3">
                              {sub.title}
                            </h4>
                            <div className="flex flex-col gap-1.5">
                              {sub.products.map((product) => (
                                <Link
                                  key={product.slug}
                                  to={`/catalogo/${section.slug}/${product.slug}`}
                                  className="text-body-sm font-normal text-mercury hover:text-[#D42027] transition-colors duration-200"
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16">
          <Link
            to="/contacto"
            className="inline-block bg-[#D42027] text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
          >
            Consultar por equipos
          </Link>
        </div>
      </div>
    </section>
  )
}
