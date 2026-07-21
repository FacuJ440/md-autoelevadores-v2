import { useState, useRef, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { catalogCategories } from '@/data/catalogData'

/**
 * Simple seeded pseudo-random number generator (Lehmer / Park-Miller).
 * Returns a function that produces values in [0, 1).
 */
function createRng(seed) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/**
 * Get a seed that changes every 48 hours.
 * Based on days since epoch divided by 2 (so it flips every 48h).
 */
function get48hSeed() {
  const now = Date.now()
  const msPer48h = 48 * 60 * 60 * 1000
  return Math.floor(now / msPer48h)
}

/**
 * Pick `count` items from `array` using a seeded RNG (Fisher-Yates partial shuffle).
 */
function pickRandom(array, count, seed) {
  const rng = createRng(seed)
  const pool = [...array]
  const picked = []
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(rng() * pool.length)
    picked.push(pool.splice(idx, 1)[0])
  }
  return picked
}

/**
 * Flatten all products from catalogCategories, enriching each with
 * category title and slug for linking.
 */
function getAllProducts() {
  const all = []
  for (const category of catalogCategories) {
    for (const product of category.products) {
      if (product.image) {
        all.push({
          name: product.name,
          slug: product.slug,
          brand: product.brand,
          brandSlug: product.brandSlug,
          image: product.image,
          description: product.description,
          categoryTitle: category.title,
          categorySlug: category.slug,
        })
      }
    }
  }
  return all
}

const FEATURED_COUNT = 6

function ProductCard({ product }) {
  return (
    <Link
      to={`/catalogo/${product.categorySlug}/${product.slug}`}
      className="group bg-paper-white rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 h-full"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-label font-normal uppercase tracking-[0.12em] text-[#D42027]">
            {product.brand}
          </span>
          <span className="text-label text-mercury">·</span>
          <span className="text-label font-normal text-mercury">
            {product.categoryTitle}
          </span>
        </div>
        <h3 className="text-subheading font-bold text-carbon-warm mb-3 group-hover:text-[#D42027] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-body-sm font-normal text-mercury leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <div className="mt-auto pt-3 border-t border-carbon-warm/10">
          <span className="text-body-sm font-bold text-carbon-warm group-hover:text-[#D42027] transition-colors duration-200">
            Ver equipo →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedProducts() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  /* Pick featured products from catalog, rotating every 48h */
  const featuredProducts = useMemo(() => {
    const all = getAllProducts()
    const seed = get48hSeed()
    return pickRandom(all, FEATURED_COUNT, seed)
  }, [])

  /* Track which card is centered for dot indicators */
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft
      const cardWidth = el.scrollWidth / featuredProducts.length
      const idx = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(idx, featuredProducts.length - 1))
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [featuredProducts.length])

  const scrollTo = (index) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / featuredProducts.length
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  }

  return (
    <section id="destacados" className="bg-vellum pt-24 pb-12">
      <div className="max-w-page mx-auto px-6">
        <h2 className="text-display font-light text-[#D42027] mb-4">
          Productos destacados
        </h2>
        <p className="text-body font-normal text-mercury mb-12">
          Equipos seleccionados de nuestra línea Linde y Still
        </p>

        {/* Mobile: horizontal scroll carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="flex-shrink-0 w-[85vw] snap-start h-[540px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {featuredProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === activeIndex ? 'bg-[#D42027]' : 'bg-carbon-warm/20'
                }`}
                aria-label={`Ir a producto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/catalogo"
            className="inline-block bg-carbon-warm text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  )
}
