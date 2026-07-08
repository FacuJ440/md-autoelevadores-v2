import { Link } from 'react-router-dom'
import StillDivider from '@/components/StillDivider'
import BackButton from '@/components/BackButton'

const postVentaServices = [
  {
    title: 'Mantenimiento Preventivo Programado',
    description:
      'Chequeos específicos y reemplazo de elementos según las horas de uso estipuladas por el fabricante. Este servicio es fundamental para prevenir futuras roturas que generen un mantenimiento correctivo, asegurando la máxima disponibilidad de sus equipos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: 'Mantenimiento Correctivo',
    description:
      'Reparaciones por desgaste o rotura de componentes. Realizamos reparaciones completas e integrales de unidades que han superado las horas de uso estimadas como óptimas, devolviendo los equipos a su máximo rendimiento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Full Service y Personal Especializado',
    description:
      'Contratos de mantenimiento total de flota con personal técnico capacitado en el lugar de trabajo, de Lunes a Sábado en doble turno. El Full Service incluye todos los repuestos necesarios con un abono mensual fijo. También ofrecemos contratos con personal especializado para mantención y reparación.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Servicio de Emergencia',
    description:
      'Asistencia rápida ante paradas no programadas. Nuestro equipo técnico está disponible para atender urgencias y minimizar el tiempo de inactividad de sus equipos en Mendoza, San Juan y San Luis.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

const comercialServices = [
  {
    title: 'Venta de Equipos Nuevos y Usados',
    description:
      'Unidades 0km y usadas Diesel, GLP y Eléctrico. Asesoramiento personalizado para cumplir con la necesidad del cliente. Representantes oficiales Linde y Still en Zona Cuyo.',
    image: 'maquinarias-linde.webp',
  },
  {
    title: 'Alquiler de Autoelevadores',
    description:
      'Equipos nuevos o seminuevos en excelente estado de conservación. Alquileres sin chofer a partir de 15 días, precio especial a partir de los 3 meses. Disponibilidad inmediata en Mendoza, San Juan y San Luis.',
    image: '011733_01autoelevadores.webp',
  },
  {
    title: 'Venta de Baterías y Accesorios',
    description:
      'Baterías traccionarias Hoppecke, cargadores y soluciones Li-Ion. Cubiertas industriales, accesorios y adaptaciones para todo tipo de equipos.',
    image: 'baterias-hop.webp',
  },
]

const adaptaciones = [
  'Adaptación de horarios de trabajo',
  'Instalación de accesorios especiales',
  'Montaje de plumas y extensiones',
  'Sistemas de pesaje integrados',
  'Cámaras y sensores de proximidad',
  'Luces LED y sistemas de iluminación',
  'Porta-rollos y pinzas especiales',
  'Sistemas de frío para cámaras',
]

export default function ServicesPage() {
  return (
    <div className="bg-vellum">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}013119_whatsappimage20230331at21.22.231.webp`}
          alt="Servicios MD Autoelevadores"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <h1 className="text-display font-light text-white max-w-3xl">
            Servicios
          </h1>
          <p className="mt-6 text-body-sm text-white/70 max-w-xl">
            Para más seguridad, eficiencia y confort. Soluciones integrales de post venta y servicio técnico para su flota en Zona Cuyo.
          </p>
        </div>
      </section>
      <StillDivider />

      {/* Post Venta */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6">
          <span className="text-label font-normal text-[#D42027] uppercase tracking-wider">
            Post Venta
          </span>
          <h2 className="text-heading font-light text-carbon-warm mt-2 mb-4">
            Para más seguridad, eficiencia y confort
          </h2>
          <p className="text-body font-normal text-mercury mb-16 max-w-2xl">
            Nuestro compromiso no termina con la venta. Acompañamos a cada cliente con un servicio técnico especializado que garantiza la máxima disponibilidad y rendimiento de sus equipos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postVentaServices.map((service) => (
              <div
                key={service.title}
                className="bg-paper-white rounded-sm p-8 flex gap-6"
              >
                <div className="flex-shrink-0 text-[#D42027]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-subheading font-bold text-carbon-warm mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body-sm font-normal text-mercury leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Divider accent */}
      <StillDivider />

      {/* Servicios Comerciales */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6">
          <span className="text-label font-normal text-[#E87830] uppercase tracking-wider">
            Comercial
          </span>
          <h2 className="text-heading font-light text-carbon-warm mt-2 mb-4">
            Soluciones a su medida
          </h2>
          <p className="text-body font-normal text-mercury mb-16 max-w-2xl">
            Equipos nuevos y usados, alquiler flexible y todo lo que necesita para optimizar su logística en Mendoza, San Juan y San Luis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comercialServices.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-sm overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-paper-white">
                  <h3 className="text-subheading font-bold text-carbon-warm mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body-sm font-normal text-mercury leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptaciones y Accesorios */}
      <section className="py-24 bg-paper-white">
        <div className="max-w-page mx-auto px-6">
          <span className="text-label font-normal text-[#D42027] uppercase tracking-wider">
            Accesorios
          </span>
          <h2 className="text-heading font-light text-carbon-warm mt-2 mb-4">
            Adaptaciones y accesorios
          </h2>
          <p className="text-body font-normal text-mercury mb-12 max-w-2xl">
            Personalizamos sus equipos con accesorios y adaptaciones especiales para maximizar su rendimiento en cada aplicación.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adaptaciones.map((item) => (
              <div
                key={item}
                className="bg-vellum rounded-sm px-5 py-4 text-body-sm font-normal text-carbon-warm flex items-center gap-3"
              >
                <span className="text-[#E87830] text-lg">•</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6 text-center">
          <h2 className="text-heading font-light text-carbon-warm mb-4">
            ¿Necesita asistencia técnica?
          </h2>
          <p className="text-body font-normal text-mercury mb-10 max-w-xl mx-auto">
            Contacte con nuestro departamento de servicios. Respuesta rápida y soluciones efectivas para su operación.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-[#D42027] text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
          >
            Contactá con nosotros
          </Link>
        </div>
      </section>

      <BackButton />
    </div>
  )
}
