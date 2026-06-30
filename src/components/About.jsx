import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-display font-light text-[#D42027] mb-8">
              MD Autoelevadores
            </h2>
            <p className="text-body font-normal text-carbon-warm mb-6">
              Concesionario oficial en Zona Cuyo de Linde Material Handling. Calidad y tecnología al alcance de todos.
            </p>
            <p className="text-body font-normal text-mercury mb-8">
              Representantes en Mendoza, San Juan y San Luis de toda la línea de autoelevadores Linde, Still, Hako, baterías Hoppecke, equipos hidráulicos, CVS Ferrari y Battioni Pagani. Cerramientos industriales, puertas rápidas, plataformas y más.
            </p>
            <a
              href="#contacto"
              className="inline-block border border-carbon-warm text-carbon-warm text-body-sm font-normal px-[22px] py-[18px] rounded-lg hover:bg-carbon-warm hover:text-white transition-colors"
            >
              Conocer más
            </a>
          </div>

          {/* Image */}
          <div className="rounded-lg aspect-[4/3] overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}lindebanner.webp`}
              alt="Linde Material Handling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
