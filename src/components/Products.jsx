import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { catalogCategories } from '@/data/catalogData'

/* Derive unique brands from data */
const brandLogos = {
  linde: 'logo-linde.png',
  still: 'still-logo.png',
}

const brands = [...new Set(catalogCategories.map((c) => c.brandSlug))].map((slug) => {
  const cat = catalogCategories.find((c) => c.brandSlug === slug)
  return { name: cat.brand, slug, logo: brandLogos[slug] || null }
})

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

/* Placeholder image icon */
function PlaceholderImage() {
  return (
    <div className="w-full h-full bg-carbon-warm/5 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-mercury/40"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  )
}

/* ── Scrollable tab strip with arrows ── */
function ScrollableTabs({ items, activeKey, onSelect, colorActive = 'bg-[#D42027] text-white', isBrandLevel = false }) {
  const ref = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const update = () => {
    const el = ref.current
    if (!el) return
    setCanLeft(el.scrollLeft > 2)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }

  useEffect(() => {
    update()
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [items])

  /* Scroll active into view */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const btn = el.querySelector('[data-active="true"]')
    if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeKey])

  const scroll = (dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -el.clientWidth * 0.6 : el.clientWidth * 0.6, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {canLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-paper-white border border-carbon-warm/10 rounded-full shadow-md hover:bg-carbon-warm/5 transition-colors -ml-0.5"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-carbon-warm">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      <div
        ref={ref}
        className="flex gap-1.5 overflow-x-auto scrollbar-hide py-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <button
            key={item.key}
            data-active={activeKey === item.key ? 'true' : 'false'}
            onClick={() => onSelect(item.key)}
            className={`flex-shrink-0 flex items-center gap-2 px-3 py-1.5 text-label font-normal rounded-sm transition-all duration-200 whitespace-nowrap ${
              activeKey === item.key
                ? colorActive
                : 'bg-paper-white text-carbon-warm hover:bg-carbon-warm/5'
            }`}
          >
            {isBrandLevel && item.logo && (
              <img
                src={`${import.meta.env.BASE_URL}${item.logo}`}
                alt={item.label}
                className="h-4 w-auto object-contain transition-all duration-200"
              />
            )}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {canRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-paper-white border border-carbon-warm/10 rounded-full shadow-md hover:bg-carbon-warm/5 transition-colors -mr-0.5"
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-carbon-warm">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {canLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-vellum to-transparent pointer-events-none z-[5]" />
      )}
      {canRight && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-vellum to-transparent pointer-events-none z-[5]" />
      )}
    </div>
  )
}

/* ── Main component ── */
export default function Products() {
  const [activeBrand, setActiveBrand] = useState(brands[0].slug)
  const [activeCategory, setActiveCategory] = useState(catalogCategories[0].slug)
  const [searchQuery, setSearchQuery] = useState('')

  /* Categories for the active brand */
  const brandCategories = useMemo(
    () => catalogCategories.filter((c) => c.brandSlug === activeBrand),
    [activeBrand]
  )

  /* When brand changes, select its first category */
  const handleBrandChange = (slug) => {
    setActiveBrand(slug)
    const first = catalogCategories.find((c) => c.brandSlug === slug)
    if (first) setActiveCategory(first.slug)
  }

  /* Flatten all products for search */
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    const results = []
    catalogCategories.forEach((cat) => {
      cat.products.forEach((product) => {
        if (
          product.name.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q)
        ) {
          results.push({ ...product, category: cat.title, categorySlug: cat.slug })
        }
      })
    })
    return results
  }, [searchQuery])

  const isSearching = searchQuery.trim().length > 0
  const currentCategory = catalogCategories.find((c) => c.slug === activeCategory)

  /* Brand tab items */
  const brandItems = brands.map((b) => ({ key: b.slug, label: b.name, logo: b.logo }))

  /* Category tab items — strip brand name from label to avoid redundancy */
  const categoryItems = brandCategories.map((c) => {
    const brandName = brands.find((b) => b.slug === activeBrand)?.name || ''
    const label = c.title.replace(new RegExp(`\\s*${brandName}\\s*`, 'i'), '').trim() || c.title
    return { key: c.slug, label }
  })

  return (
    <section id="productos" className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        {/* Search bar */}
        <div className="relative mb-10">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/catalogo/${product.categorySlug}/${product.slug}`}
                    className="group bg-paper-white rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-carbon-warm/5">
                      {product.image ? (
                        <img
                          src={`${import.meta.env.BASE_URL}${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <PlaceholderImage />
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-label font-normal text-[#D42027] uppercase tracking-wider">
                        {product.brand} · {product.category}
                      </span>
                      <h4 className="text-subheading font-bold text-carbon-warm mt-1 group-hover:text-[#D42027] transition-colors">
                        {product.name}
                      </h4>
                      {product.description && (
                        <p className="text-body-sm font-normal text-mercury mt-2 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Brand + Category tabs + product grid (hidden while searching) */}
        {!isSearching && (
          <>
            {/* Brand tabs (top level) — dark style with logos */}
            <div className="mb-4">
              <ScrollableTabs
                items={brandItems}
                activeKey={activeBrand}
                onSelect={handleBrandChange}
                colorActive="bg-[#D42027] text-white shadow-md ring-1 ring-[#D42027]/30"
                isBrandLevel
              />
            </div>

            {/* Category tabs (second level) — red style */}
            <div className="mb-10">
              <ScrollableTabs
                items={categoryItems}
                activeKey={activeCategory}
                onSelect={setActiveCategory}
              />
            </div>

            {/* Product grid for active category */}
            {currentCategory && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.products.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/catalogo/${currentCategory.slug}/${product.slug}`}
                    className="group bg-paper-white rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-carbon-warm/5">
                      {product.image ? (
                        <img
                          src={`${import.meta.env.BASE_URL}${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <PlaceholderImage />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-label font-normal text-[#D42027] uppercase tracking-wider">
                        {product.brand}
                      </span>
                      <h3 className="text-subheading font-bold text-carbon-warm mt-1 group-hover:text-[#D42027] transition-colors duration-200">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-body-sm font-normal text-mercury mt-2 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      )}
                      <div className="mt-4 pt-3 border-t border-carbon-warm/10">
                        <span className="text-body-sm font-bold text-carbon-warm group-hover:text-[#D42027] transition-colors duration-200">
                          Ver equipo →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
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
