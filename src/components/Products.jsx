import SectionLabel from './SectionLabel'

const categories = [
  {
    title: 'Autoelevadores Linde',
    description: 'Contrapeso térmico Diesel, GLP y eléctrico. Pasillo estrecho, recogedores de pedidos y apiladores.',
    items: ['H 14-20 EVO', 'N20 Vi / VLi', 'L14 - L20 AP', 'K系列 Pasillo Estrecho'],
  },
  {
    title: 'Still',
    description: 'Carretillas contrapesadas eléctricas y híbridas RX. Alta eficiencia energética y productividad.',
    items: ['RX 70-20/35 Híbrida', 'RX 60 Eléctrica', 'BMX iGo', 'Cubix'],
  },
  {
    title: 'Baterías Industriales',
    description: 'Baterías traccionarias y de arranque Hoppecke. Cargadores y sistemas de energía.',
    items: ['OpzS', 'Tracción', 'Cargadores', 'Energía Li-Ion'],
  },
  {
    title: 'Equipos Especiales',
    description: 'Equipos hidráulicos, plataformas, componentes electrónicos y accesorios.',
    items: ['CVS Ferrari', 'Battioni Pagani', 'Plataformas', 'Componentes'],
  },
]

export default function Products() {
  return (
    <section id="productos" className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        <h2 className="text-display font-light text-carbon-warm mb-16">
          Nuestra línea
        </h2>

        <div className="space-y-0">
          {categories.map((category, index) => (
            <div key={category.title}>
              <div className="py-8 border-t border-carbon-warm/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <h3 className="text-subheading font-normal text-carbon-warm">
                      {category.title}
                    </h3>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-body font-normal text-mercury">
                      {category.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-label font-normal text-carbon-warm bg-paper-white rounded-buttons px-3 py-1.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index === categories.length - 1 && (
                <div className="border-t border-carbon-warm/10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contacto"
            className="inline-block bg-carbon-warm text-white text-body-sm font-normal px-[22px] py-[18px] rounded-pills hover:bg-onyx-depth transition-colors"
          >
            Consultar por equipos
          </a>
        </div>
      </div>
    </section>
  )
}
