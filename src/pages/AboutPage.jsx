import SectionLabel from '@/components/SectionLabel'

const activities = [
  {
    title: 'Ventas de equipos nuevos',
    items: [
      'Autoelevadores eléctricos a batería',
      'Carretillas, transpalets y apiladoras: hidráulicas, manuales y eléctricas',
      'Barreaspiradoras compactas: manuales y autopropulsadas',
      'Lavasecadoras compactas: autopropulsadas',
    ],
  },
  {
    title: 'Repuestos y servicios',
    items: [
      'Alquiler de autoelevadores sin chofer con servicio full',
      'Repuestos para todo tipo y marca de autoelevadores, apiladoras y transpallets',
      'Provisión de repuestos originales',
      'Cubiertas industriales',
    ],
  },
  {
    title: 'Servicios técnicos',
    items: [
      'Mecánicos, hidráulicos, eléctricos y electrónicos',
      'Mantenimientos preventivos programados y correctivos',
      'Autoelevadores motor térmico: gas (LPG) y diesel',
    ],
  },
]

const locations = [
  {
    city: 'Mendoza',
    address: 'Av. Bandera de los Andes 6970 - Rodeo de la Cruz (5525)',
    phone: '(0261) 421-2133 / 421-5082',
    map: 'mendoza.png',
  },
  {
    city: 'San Juan',
    address: 'Saturnino Sarassa 464 Este (5400) - Ciudad',
    phone: '(0264) 421-4057 / 421-2067',
    map: 'sanjuan.png',
  },
]

const brands = ['Linde', 'Still', 'Hako', 'Hoppecke', 'Kelley', 'Raynor', 'Nergeco', 'CVS Ferrari', 'Battioni Pagani']

export default function AboutPage() {
  return (
    <div className="bg-vellum">
      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}lindebanner.webp`}
          alt="MD Autoelevadores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <h1 className="text-display font-light text-white max-w-3xl">
            MD Autoelevadores
          </h1>
          <p className="mt-6 text-body-sm text-white/70 max-w-xl">
            Concesionario oficial en Zona Cuyo de Linde Material Handling. Calidad y tecnología al alcance de todos.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-page mx-auto px-6">
          <h2 className="text-subheading font-bold text-carbon-warm mb-6">
            Representantes en Zona Cuyo
          </h2>
          <p className="text-body font-normal text-mercury mb-6">
            Representantes en Mendoza, San Juan y San Luis de toda la línea de autoelevadores Linde, Still, Hako, baterías Hoppecke, equipos hidráulicos, CVS Ferrari y Battioni Pagani. Cerramientos industriales, puertas rápidas, plataformas y más.
          </p>
          <p className="text-body font-normal text-mercury">
            Representantes en Zona Cuyo de: Linde, Kelley, Raynor y Nergeco. Cerramientos industriales, puertas: rápidas, corta fuego y residenciales, niveladores de andén, plataformas tijera, rampas móviles, y otros productos.
          </p>
        </div>
      </section>
{/* 
      Brands
      <section className="pb-16">
        <div className="max-w-page mx-auto px-6">
          <h2 className="text-subheading font-bold text-carbon-warm mb-8">
            Marcas que representamos
          </h2>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="bg-paper-white text-carbon-warm text-body-sm font-normal px-5 py-3 rounded-lg border border-carbon-warm/10"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Activities */}
      <section className="pb-16">
        <div className="max-w-page mx-auto px-6">
          <h2 className="text-subheading font-bold text-carbon-warm mb-8">
            Nuestra actividad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-paper-white rounded-lg p-6">
                <h3 className="text-subheading font-bold text-[#D42027] mb-4">
                  {activity.title}
                </h3>
                <ul className="space-y-3">
                  {activity.items.map((item) => (
                    <li key={item} className="text-body-sm font-normal text-mercury flex gap-2">
                      <span className="text-[#D42027] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="pb-24">
        <div className="max-w-page mx-auto px-6">
          <h2 className="text-subheading font-bold text-carbon-warm mb-8">
            Sucursales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-paper-white rounded-lg p-6 flex gap-6 items-start">
                <img
                  src={`${import.meta.env.BASE_URL}${loc.map}`}
                  alt={`Mapa ${loc.city}`}
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-subheading font-bold text-[#D42027] mb-2">
                    {loc.city}
                  </h3>
                  <p className="text-body-sm font-normal text-mercury mb-1">
                    {loc.address}
                  </p>
                  <p className="text-body-sm font-normal text-carbon-warm">
                    {loc.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-body-sm font-normal text-mercury mt-6">
            Horario: Lunes a Viernes de 09:00 a 18:00
          </p>
        </div>
      </section>
    </div>
  )
}
