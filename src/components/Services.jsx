import SectionLabel from './SectionLabel'

const services = [
  {
    title: 'Ventas de Autoelevadores',
    description: 'Unidades 0km y usados Diesel, GLP y Eléctrico. Asesoramiento personalizado para cumplir con la necesidad del cliente. Venta de baterías traccionarias y cubiertas industriales.',
    image: 'still-1.webp',
    color: '#67e1ff',
    hoverColor: '#6797ff',
  },
  {
    title: 'Alquiler de Autoelevadores',
    description: 'Equipos nuevos o seminuevos en excelente estado de conservación. Alquileres sin chofer a partir de 15 días, precio especial a partir de los 3 meses. Zona Cuyo: Mendoza, San Juan y San Luis.',
    image: 'still-2.webp',
    color: '#67e1ff',
    hoverColor: '#6797ff',
  },
  {
    title: 'Servicio Técnico',
    description: 'Rápido y sencillo al momento de la solicitud del cliente. Servicio programado y de emergencia. Repuestos originales Linde para garantizar la máxima confiabilidad.',
    image: 'maquinarias-linde.webp',
    color: '#67e1ff',
    hoverColor: '#6797ff',
  },
  {
    title: 'Baterías Industriales',
    description: 'Baterías traccionarias Hoppecke y cargadores. Soluciones completas de energía para la intralogística. Asesoramiento técnico y mantenimiento.',
    image: 'baterias-hop.webp',
    color: '#67e1ff',
    hoverColor: '#6797ff',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        <h2 className="text-display font-light text-[#D42027] mb-16">
          Lo que ofrecemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative w-full aspect-[4/3] rounded-lg shadow-[0_0_10px_5px_rgba(0,0,0,0.15)] transition-all duration-400 cursor-pointer hover:rounded-lg hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              {/* Image: stays visible, scales up on hover */}
              <img
                src={`${import.meta.env.BASE_URL}${service.image}`}
                alt={service.title}
                className="card-image-pan absolute inset-0 w-full h-full object-cover"
              />

              {/* Title overlay: fades out on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-subheading font-bold text-white text-center leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description: slides up from bottom on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 translate-y-full opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-subheading font-bold text-white text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 text-body-sm text-center leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-4 inline-block text-body-sm font-bold text-white hover:text-mercury transition-colors"
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
