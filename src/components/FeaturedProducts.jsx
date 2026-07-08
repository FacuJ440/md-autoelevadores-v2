import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const featuredProducts = [
  {
    name: 'H 14-20 EVO',
    category: 'Autoelevadores Térmicos',
    categorySlug: 'termicos',
    brand: 'Linde',
    productSlug: 'h-14-20-evo',
    image: 'ac_h14h20.png',
    description: 'Máximo rendimiento de trabajo y costes de mantenimiento bajos. Aire acondicionado, asientos de confort, Linde Safety Pilot.',
  },
  {
    name: 'E16 - E20 EVO',
    category: 'Autoelevadores Eléctricos',
    categorySlug: 'electricos',
    brand: 'Linde',
    productSlug: 'e16-e20-evo',
    image: 'ae_e16e20.png',
    description: 'Movilidad y estabilidad máximas. Piloto de seguridad de Linde, cargador de alta frecuencia, sistema de reemplazo de batería hidráulica.',
  },
  {
    name: 'R10 - R16 B',
    category: 'Autoelevadores Retráctiles',
    categorySlug: 'retractiles',
    brand: 'Linde',
    productSlug: 'r10-r16-b',
    image: 'ar_r10r16b1.png',
    description: 'Cómodo y rentable para usar en almacenes de estante alto. Vista panorámica, dirección 360°, mango de madera para joysticks.',
  },
  {
    name: 'H 20-25 EVO',
    category: 'Autoelevadores Térmicos',
    categorySlug: 'termicos',
    brand: 'Linde',
    productSlug: 'h-20-25-evo',
    image: 'ac_h14h20.png',
    description: 'Tecnología eficiente para aumentar la productividad. Especialmente robustas, rentables y productivas.',
  },
  {
    name: 'H 25-35 EVO',
    category: 'Autoelevadores Térmicos',
    categorySlug: 'termicos',
    brand: 'Linde',
    productSlug: 'h-25-35-evo',
    image: 'ac_h14h20.png',
    description: 'Alto rendimiento y procesos seguros. Transmisión directa hidrostática y motores con elevado par de giro.',
  },
  {
    name: 'H40-H50 EVO',
    category: 'Autoelevadores Térmicos',
    categorySlug: 'termicos',
    brand: 'Linde',
    productSlug: 'h40-h50-evo',
    image: 'ac_h14h20.png',
    description: 'Rendimiento máximo sostenido en aplicaciones exigentes. Calidad que se destaca en usos intensivos.',
  },
]

function ProductCard({ product }) {
  return (
    <Link
      to={`/catalogo/${product.categorySlug}/${product.productSlug}`}
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
            {product.category}
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
  }, [])

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
