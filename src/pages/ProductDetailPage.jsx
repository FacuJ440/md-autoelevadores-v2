import { useParams, Link } from 'react-router-dom'
import { catalogCategories } from '@/data/catalogData'
import BackButton from '@/components/BackButton'
import ImageCarousel from '@/components/ImageCarousel'
import { motion } from 'framer-motion'
import useSEO from '@/hooks/useSEO'
import { useEffect } from 'react'

/* Staggered entrance for product detail layout */
const detailContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const detailItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

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

  /* Dynamic SEO per product */
  useSEO({
    title: product ? `${product.name} - ${product.brand}` : 'Producto no encontrado',
    description: product
      ? `${product.name} ${product.brand}. ${product.description?.slice(0, 150) || ''}`
      : 'Producto no encontrado en el catálogo de MD Autoelevadores.',
    path: `/catalogo/${categorySlug}/${productSlug}`,
    image: product?.image,
  })

  /* Inject Product + BreadcrumbList JSON-LD */
  useEffect(() => {
    if (!product || !category) return

    const productJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${product.name} ${product.brand}`,
      description: product.description || '',
      brand: { '@type': 'Brand', name: product.brand },
      category: category.title,
      image: product.image
        ? `https://md-autoelevadores.com${product.image}`
        : undefined,
      url: `https://md-autoelevadores.com/catalogo/${category.slug}/${product.slug}`,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'ARS',
        seller: { '@type': 'Organization', name: 'MD Autoelevadores y Equipos S.R.L.' },
      },
    }

    const breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://md-autoelevadores.com/' },
        { '@type': 'ListItem', position: 2, name: 'Catálogo', item: 'https://md-autoelevadores.com/catalogo' },
        { '@type': 'ListItem', position: 3, name: category.title, item: `https://md-autoelevadores.com/catalogo/${category.slug}` },
        { '@type': 'ListItem', position: 4, name: product.name, item: `https://md-autoelevadores.com/catalogo/${category.slug}/${product.slug}` },
      ],
    }

    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.text = JSON.stringify(productJsonLd)
    script1.id = 'product-jsonld'
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.text = JSON.stringify(breadcrumbJsonLd)
    script2.id = 'breadcrumb-jsonld'
    document.head.appendChild(script2)

    return () => {
      document.getElementById('product-jsonld')?.remove()
      document.getElementById('breadcrumb-jsonld')?.remove()
    }
  }, [product, category])

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


      {/* Product info */}
      <section className="pt-32 pb-24">
        <div className="max-w-page mx-auto px-6">
          <motion.div
            variants={detailContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left: product image carousel */}
            <motion.div variants={detailItem}>
              <ImageCarousel
                images={product.images || (product.image ? [product.image] : [])}
                alt={product.name}
              />
            </motion.div>

            {/* Right: product details */}
            <motion.div variants={detailItem}>
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BackButton to={`/catalogo?cat=${category.slug}`} />
    </div>
  )
}
