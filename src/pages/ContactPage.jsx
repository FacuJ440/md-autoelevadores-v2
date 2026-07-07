import { useState } from 'react'
import SectionLabel from '@/components/SectionLabel'
import StillDivider from '@/components/StillDivider'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-vellum">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}lindebanner.webp`}
          alt="MD Autoelevadores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <h1 className="text-display font-light text-white max-w-3xl">
            Contacto
          </h1>
          <p className="mt-6 text-body-sm text-white/70 max-w-xl">
            Estamos para asesorarlo. Visite nuestras sucursales o envíenos su consulta.
          </p>
        </div>
      </section>
      <StillDivider />

      {/* Content */}
      <section className="py-16">
        <div className="max-w-page mx-auto px-6">
          <SectionLabel>CONTACTO</SectionLabel>
          <h2 className="text-display font-light text-carbon-warm mb-16">
            Hablemos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
                  placeholder="Su nombre"
                />
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Celular
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
                  placeholder="Su celular"
                />
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
                  placeholder="Su email"
                />
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors resize-none"
                  placeholder="Cuéntenos su necesidad"
                />
              </div>
              <button
                type="submit"
                className="bg-carbon-warm text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
              >
                Enviar consulta
              </button>
            </form>

            {/* Info + Maps */}
            <div className="space-y-10">
              {/* Mendoza */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-subheading font-normal text-carbon-warm">Mendoza</h3>
                  <p className="text-body font-normal text-mercury leading-relaxed">
                    Av. Bandera de los Andes 6970<br />
                    CP 5521 — Guaymallén, Mendoza<br />
                    Tel: (0261) 421-2133 / 421-5082
                  </p>
                </div>
                <div className="rounded-sm overflow-hidden aspect-[4/3]">
                  <iframe
                    title="Ubicación MD Autoelevadores - Mendoza"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-68.8!3d-32.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Bandera+de+los+Andes+6970%2C+Guaymall%C3%A9n%2C+Mendoza!5e0!3m2!1ses!2sar!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80"
                  />
                </div>
              </div>

              {/* San Juan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-subheading font-normal text-carbon-warm">San Juan</h3>
                  <p className="text-body font-normal text-mercury leading-relaxed">
                    Ruta 20 km 5.5<br />
                    Santa Lucía — San Juan<br />
                    Tel: (0264) 486-7943
                  </p>
                </div>
                <div className="rounded-sm overflow-hidden aspect-[4/3]">
                  <iframe
                    title="Ubicación MD Autoelevadores - San Juan"
                    src="https://maps.google.com/maps?q=-31.555544577714016,-68.47126742698686+(MD+Autoelevadores)&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80"
                  />
                </div>
              </div>

              {/* Horario & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-subheading font-normal text-carbon-warm mb-3">Horario</h3>
                  <p className="text-body font-normal text-mercury leading-relaxed">
                    Lunes a Viernes: 08:30 — 17:30<br />
                    Sábado: 08:30 — 12:30
                  </p>
                </div>
                <div>
                  <h3 className="text-subheading font-normal text-carbon-warm mb-3">Email</h3>
                  <a
                    href="mailto:info@mdautoelevadores.com.ar"
                    className="text-body font-normal text-carbon-warm hover:text-mercury transition-colors"
                  >
                    info@mdautoelevadores.com.ar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
