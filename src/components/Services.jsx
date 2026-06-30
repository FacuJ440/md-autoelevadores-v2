import SectionLabel from './SectionLabel'

const services = [
  {
    title: 'Ventas de Autoelevadores',
    description: 'Unidades 0km y usados Diesel, GLP y Eléctrico. Asesoramiento personalizado para cumplir con la necesidad del cliente. Venta de baterías traccionarias y cubiertas industriales.',
  },
  {
    title: 'Alquiler de Autoelevadores',
    description: 'Equipos nuevos o seminuevos en excelente estado de conservación. Alquileres sin chofer a partir de 15 días, precio especial a partir de los 3 meses. Zona Cuyo: Mendoza, San Juan y San Luis.',
  },
  {
    title: 'Servicio Técnico',
    description: 'Rápido y sencillo al momento de la solicitud del cliente. Servicio programado y de emergencia. Repuestos originales Linde para garantizar la máxima confiabilidad.',
  },
  {
    title: 'Baterías Industriales',
    description: 'Baterías traccionarias Hoppecke y cargadores. Soluciones completas de energía para la intralogística. Asesoramiento técnico y mantenimiento.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        <SectionLabel>Servicios</SectionLabel>
        <h2 className="text-display font-light text-carbon-warm mb-16">
          Lo que ofrecemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-paper-white rounded-body p-[22px] flex flex-col"
            >
              <h3 className="text-subheading font-normal text-carbon-warm mb-3">
                {service.title}
              </h3>
              <p className="text-body font-normal text-mercury flex-1">
                {service.description}
              </p>
              <div className="mt-6 pt-4 border-t border-carbon-warm/10">
                <a
                  href="#contacto"
                  className="text-body-sm font-normal text-carbon-warm hover:text-mercury transition-colors"
                >
                  Solicitar información →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
