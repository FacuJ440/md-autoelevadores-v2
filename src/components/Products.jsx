import SectionLabel from '@/components/SectionLabel'

const catalogSections = [
  {
    title: 'Autoelevadores Linde',
    logo: 'logo-linde.png',
    subsections: [
      {
        title: 'Autoelevadores Térmicos',
        products: [
          { name: 'H 14-20 EVO', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-termicos/elevadores-h-14-20-evo/' },
          { name: 'H 20-25 EVO', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-termicos/elevadores-h-20-25-evo/' },
        ],
      },
      {
        title: 'Autoelevadores Eléctricos',
        products: [
          { name: 'E16 - E20 EVO', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-electricos/e16-e20-evo/' },
          { name: 'E12 - E20 EVO', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-electricos/e12-e20-evo/' },
        ],
      },
      {
        title: 'Apiladores de Pallet',
        products: [
          { name: 'L06 - L16 AC', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/apiladores-de-pallet/l06-l16-ac/' },
          { name: 'L14 - L20 AP', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/apiladores-de-pallet/' },
        ],
      },
      {
        title: 'Transpaletas Eléctricas',
        products: [
          { name: 'CiTi one', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/transpaletas-electricas/citi-one/' },
        ],
      },
      {
        title: 'Recogedores de Pedidos',
        products: [
          { name: 'N20 Vi / VLi', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/recogedores-de-pedidos/n20-vi-vli/' },
          { name: 'V10', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/recogedores-de-pedidos/v10/' },
        ],
      },
      {
        title: 'Autoelevadores Retráctiles',
        products: [
          { name: 'R10 - R16 B', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-retractiles/r10-r16-b/' },
        ],
      },
      {
        title: 'Pasillo Muy Estrecho',
        products: [
          { name: 'K', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-de-pasillo-muy-estrecho/k/' },
        ],
      },
      {
        title: 'Trenes Logísticos',
        products: [
          { name: 'FT08 - FT20 C', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/trenes-logisticos/ft08-ft20-c/' },
        ],
      },
      {
        title: 'Tractores de Remolque',
        products: [
          { name: 'P60 - P80, W08', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/tractores-de-remolque/p60-p80-w08/' },
        ],
      },
      {
        title: 'Automatizados',
        products: [
          { name: 'K-MATIC', href: 'https://www.mdautoelevadores.com.ar/elevadores-linde/elevadores-automatizados/k-matic/' },
        ],
      },
    ],
  },
  {
    title: 'Still',
    logo: 'still-logo.png',
    subsections: [
      {
        title: 'Apilador Eléctrico',
        products: [
          { name: 'EGV 14/16', href: 'https://www.mdautoelevadores.com.ar/still-es/apilador-electrico/apilador-electrico-egv-14-16/' },
        ],
      },
      {
        title: 'Apilador Retráctil',
        products: [
          { name: 'FM-X 17', href: 'https://www.mdautoelevadores.com.ar/still-es/apilador-retractil/apilador-retractil-fm-x-17/' },
        ],
      },
      {
        title: 'Autoelevadores Combustión',
        products: [
          { name: 'RC 44-25 C DUPLEX', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevadores-combustion/autoelevador-a-combustion-rc-44-25-c-duplex/' },
        ],
      },
      {
        title: 'Autoelevador Eléctrico',
        products: [
          { name: 'RX 60', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevador-electrico/' },
          { name: 'RX 70-20/35 Híbrida', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevadores-combustion/' },
        ],
      },
    ],
  },
  {
    title: 'Baterías Industriales',
    logo: 'png-transparent-hoppecke-hd-logo.png',
    subsections: [
      {
        title: 'Hoppecke',
        products: [
          { name: 'OpzS', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/opzs/' },
          { name: 'Tracción', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/' },
          { name: 'Cargadores', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/' },
          { name: 'Energía Li-Ion', href: 'https://www.mdautoelevadores.com.ar/baterias-industriales/' },
        ],
      },
    ],
  },
  {
    title: 'Equipos Especiales',
    logo: 'CVS-logo-top-retina.png',
    subsections: [
      {
        title: 'Equipos Hidráulicos',
        products: [
          { name: 'CVS Ferrari', href: 'https://www.mdautoelevadores.com.ar/equipos-especiales/' },
          { name: 'Battioni Pagani', href: 'https://www.mdautoelevadores.com.ar/equipos-especiales/' },
        ],
      },
      {
        title: 'Cerramientos Industriales',
        products: [
          { name: 'Plataformas Tijera', href: 'https://www.mdautoelevadores.com.ar/cerramientos-industriales/plataformas-tijera/' },
          { name: 'Puertas Rápidas', href: 'https://www.mdautoelevadores.com.ar/cerramientos-industriales/' },
        ],
      },
    ],
  },
]

export default function Products() {
  return (
    <section id="productos" className="bg-paper-white py-24">
      <div className="max-w-page mx-auto px-6">
        <h2 className="text-display font-light text-carbon-warm mb-4">
          Catálogo
        </h2>
        <p className="text-body font-normal text-mercury mb-16">
          Toda nuestra línea de equipos y soluciones industriales
        </p>

        <div className="space-y-12">
          {catalogSections.map((section) => (
            <div key={section.title}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}${section.logo}`}
                  alt={section.title}
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-heading font-light text-carbon-warm">
                  {section.title}
                </h3>
              </div>

              {/* Subsections grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {section.subsections.map((sub) => (
                  <div
                    key={sub.title}
                    className="bg-vellum rounded-lg p-5"
                  >
                    <h4 className="text-body font-bold text-carbon-warm mb-3">
                      {sub.title}
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      {sub.products.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body-sm font-normal text-mercury hover:text-[#D42027] transition-colors duration-200"
                        >
                          {product.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contacto"
            className="inline-block bg-carbon-warm text-white text-body-sm font-normal px-[22px] py-[18px] rounded-lg hover:bg-onyx-depth transition-colors"
          >
            Consultar por equipos
          </a>
        </div>
      </div>
    </section>
  )
}
