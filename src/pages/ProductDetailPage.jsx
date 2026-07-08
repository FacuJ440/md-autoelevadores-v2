import { useParams, Link } from 'react-router-dom'
import { catalogCategories } from '@/data/catalogData'
import StillDivider from '@/components/StillDivider'
import BackButton from '@/components/BackButton'

/* Placeholder image icon */
function PlaceholderImage({ large }) {
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
        className={`${large ? 'w-16 h-16' : 'w-10 h-10'} text-mercury/40`}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  )
}

export default function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams()

  /* Find the category */
  const category = catalogCategories.find((c) => c.slug === categorySlug)

  /* Find the product */
  const product = category?.products.find((p) => p.slug === productSlug)

  if (!category || !product) {
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
        {product.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-carbon-warm/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <span className="text-label font-normal text-white/60 uppercase tracking-wider">
            {product.brand} · {category.title}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: product image */}
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-carbon-warm/5">
              {product.image ? (
                <img
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlaceholderImage large />
              )}
            </div>

            {/* Right: product details */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-body-sm font-normal text-mercury mb-8 flex-wrap">
                <Link to="/catalogo" className="hover:text-[#D42027] transition-colors">
                  Catálogo
                </Link>
                <span>/</span>
                <Link
                  to={`/catalogo/${category.slug}`}
                  className="hover:text-[#D42027] transition-colors"
                >
                  {category.title}
                </Link>
                <span>/</span>
                <span className="text-carbon-warm">{product.name}</span>
              </nav>

              <h2 className="text-heading font-light text-carbon-warm mb-2">
                {product.name}
              </h2>
              <p className="text-body-sm font-normal text-[#D42027] uppercase tracking-wider mb-6">
                {product.brand} · {category.title}
              </p>

              {product.description && (
                <p className="text-body font-normal text-mercury mb-8 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-body font-bold text-carbon-warm mb-3">
                    Características principales
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-body-sm font-normal text-mercury"
                      >
                        <span className="text-[#D42027] mt-0.5 flex-shrink-0">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contacto"
                  className="inline-block bg-[#D42027] text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackButton />
    </div>
  )
}
