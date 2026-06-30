import { useState } from 'react'
import SectionLabel from './SectionLabel'

export default function Contact() {
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
    <section id="contacto" className="bg-vellum py-24">
      <div className="max-w-page mx-auto px-6">
        <h2 className="text-display font-light text-carbon-warm mb-16">
          Hablemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                className="w-full bg-paper-white border border-carbon-warm/10 rounded-body px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
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
                className="w-full bg-paper-white border border-carbon-warm/10 rounded-body px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
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
                className="w-full bg-paper-white border border-carbon-warm/10 rounded-body px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
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
                className="w-full bg-paper-white border border-carbon-warm/10 rounded-body px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors resize-none"
                placeholder="Cuéntenos su necesidad"
              />
            </div>
            <button
              type="submit"
              className="bg-carbon-warm text-white text-body-sm font-normal px-[22px] py-[18px] rounded-pills hover:bg-onyx-depth transition-colors"
            >
              Enviar consulta
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-subheading font-normal text-carbon-warm mb-3">Mendoza</h3>
              <p className="text-body font-normal text-mercury">
                Av. Bandera de los Andes 6970<br />
                Rodeo de la Cruz (5525)<br />
                Tel: (0261) 421-2133 / 421-5082
              </p>
            </div>
            <div>
              <h3 className="text-subheading font-normal text-carbon-warm mb-3">San Juan</h3>
              <p className="text-body font-normal text-mercury">
                Saturnino Sarassa 464 Este<br />
                Ciudad - San Juan (5400)<br />
                Tel: (0264) 421-4057 / 421-2067
              </p>
            </div>
            <div>
              <h3 className="text-subheading font-normal text-carbon-warm mb-3">Horario</h3>
              <p className="text-body font-normal text-mercury">
                Lunes a Viernes<br />
                9:00 — 18:00
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
    </section>
  )
}
