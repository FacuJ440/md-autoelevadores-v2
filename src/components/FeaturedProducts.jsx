import { Link } from 'react-router-dom'

const featuredProducts = [
  {
    name: 'H 14-20 EVO',
    category: 'Autoelevadores Térmicos',
    brand: 'Linde',
    brandSlug: 'linde',
    productSlug: 'h-14-20-evo',
    image: 'ac_h14h20.png',
    description: 'Máximo rendimiento de trabajo y costes de mantenimiento bajos. Aire acondicionado, asientos de confort, Linde Safety Pilot.',
  },
  {
    name: 'E16 - E20 EVO',
    category: 'Autoelevadores Eléctricos',
    brand: 'Linde',
    brandSlug: 'linde',
    productSlug: 'e16-e20-evo',
    image: 'ae_e16e20.png',
    description: 'Movilidad y estabilidad máximas. Piloto de seguridad de Linde, cargador de alta frecuencia, sistema de reemplazo de batería hidráulica.',
  },
  {
    name: 'R10 - R16 B',
    category: 'Autoelevadores Retráctiles',
    brand: 'Linde',
    brandSlug: 'linde',
    productSlug: 'r10-r16-b',
    image: 'ar_r10r16b1.png',
    description: 'Cómodo y rentable para usar en almacenes de estante alto. Vista panorámica, dirección 360°, mango de madera para joysticks.',
  },
  {
    name: 'E10',
    category: 'Autoelevadores Eléctricos',
    brand: 'Linde',
    brandSlug: 'linde',
    productSlug: 'e10',
    image: 'aee10.png',
    description: 'Compacto y ágil para espacios reducidos. Batería de litio opcional, maniobrabilidad excepcional y bajo coste operativo.',
  },
  {
    name: 'EGV 14/16',
    category: 'Apilador Eléctrico',
    brand: 'Still',
    brandSlug: 'still',
    productSlug: 'egv-14-16',
    image: 'egv.png',
    description: 'Máximo aprovechamiento del espacio en almacenes de gran altura. Dirección eléctrica precisa y sistema de estabilización avanzado.',
  },
  {
    name: 'RC 44-25 C DUPLEX',
    category: 'Autoelevadores Combustión',
    brand: 'Still',
    brandSlug: 'still',
    productSlug: 'rc-44-25-c-duplex',
    image: 'rc_44.png',
    description: 'Ideal para trabajos de carga y descarga. Diseñado y producido en Brasil, robusto y confiable.',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="destacados" className="bg-vellum pt-24 pb-12">
      <div className="max-w-page mx-auto px-6">
        <h2 className="text-display font-light text-[#D42027] mb-4">
          Productos destacados
        </h2>
        <p className="text-body font-normal text-mercury mb-12">
          Equipos seleccionados de nuestra línea Linde y Still
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.name}
              to={`/catalogo/${product.brandSlug}/${product.productSlug}`}
              className="group bg-paper-white rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
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
                <p className="text-body-sm font-normal text-mercury flex-1 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 pt-3 border-t border-carbon-warm/10">
                  <span className="text-body-sm font-bold text-carbon-warm group-hover:text-[#D42027] transition-colors duration-200">
                    Ver equipo →
                  </span>
                </div>
              </div>
            </Link>
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
