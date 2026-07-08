import { useParams, Link } from 'react-router-dom'
import { catalogSections } from '@/components/Products'
import StillDivider from '@/components/StillDivider'
import BackButton from '@/components/BackButton'

export default function ProductDetailPage() {
  const { brandSlug, productSlug } = useParams()

  /* Find the brand section */
  const brand = catalogSections.find((s) => s.slug === brandSlug)

  /* Find the product and its category */
  let product = null
  let category = null
  if (brand) {
    for (const sub of brand.subsections) {
      const found = sub.products.find((p) => p.slug === productSlug)
      if (found) {
        product = found
        category = sub.title
        break
      }
    }
  }

  if (!brand || !product) {
    return (
      <div className="bg-vellum min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-heading font-light text-carbon-warm mb-4">
            Producto no encontrado
          </h1>
          <p className="text-body font-normal text-mercury mb-8">
            El equipo que buscás no existe en nuestro catálogo.
          </p>
          <Link
            to="/catalogo"
            className="inline-block bg-[#D42027] text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-vellum">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}${brand.image}`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <span className="text-label font-normal text-white/60 uppercase tracking-wider">
            {brand.title} · {category}
          </span>
          <h1 className="text-display font-light text-white max-w-3xl mt-2">
            {product.name}
          </h1>
        </div>
      </section>
      <StillDivider />

      {/* Product info */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-body-sm font-normal text-mercury mb-8">
              <Link to="/catalogo" className="hover:text-[#D42027] transition-colors">
                Catálogo
              </Link>
              <span>/</span>
              <Link to="/catalogo" className="hover:text-[#D42027] transition-colors">
                {brand.title}
              </Link>
              <span>/</span>
              <span className="text-carbon-warm">{product.name}</span>
            </nav>

            {/* Brand logo */}
            <img
              src={`${import.meta.env.BASE_URL}${brand.logo}`}
              alt={brand.title}
              className="h-14 w-auto object-contain mb-8"
            />

            <h2 className="text-heading font-light text-carbon-warm mb-4">
              {product.name}
            </h2>
            <p className="text-body font-normal text-mercury mb-2">
              Categoría: {category}
            </p>
            <p className="text-body font-normal text-mercury mb-8">
              Marca: {brand.title}
            </p>
            <p className="text-body font-normal text-mercury mb-12">
              {brand.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="inline-block bg-[#D42027] text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
              >
                Solicitar cotización
              </Link>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-carbon-warm text-carbon-warm text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-carbon-warm hover:text-white transition-colors"
              >
                Ver en web original →
              </a>
            </div>
          </div>
        </div>
      </section>

      <BackButton />
    </div>
  )
}
