import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionLabel>La Compañía</SectionLabel>
            <h2 className="text-display font-light text-carbon-warm mb-8">
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
              className="inline-block border border-carbon-warm text-carbon-warm text-body-sm font-normal px-[22px] py-[18px] rounded-pills hover:bg-carbon-warm hover:text-white transition-colors"
            >
              Conocer más
            </a>
          </div>

          {/* Image placeholder */}
          <div className="rounded-cards bg-carbon-warm/5 aspect-[4/3] flex items-center justify-center overflow-hidden">
            <div className="text-center text-mercury">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-carbon-warm/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-carbon-warm/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-label uppercase tracking-[0.12em]">Imagen industrial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
