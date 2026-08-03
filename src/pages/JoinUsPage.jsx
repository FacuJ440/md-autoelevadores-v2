import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import StillDivider from '@/components/StillDivider'
import BackButton from '@/components/BackButton'
import Captcha from '@/components/Captcha'
import { assetUrl } from '@/utils/assetUrl'
import useSEO from '@/hooks/useSEO'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_CV_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CV_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const POSITIONS = [
  'Servicio Técnico',
  'Ventas',
  'Administración',
  'Operario de Autoelevador',
  'Logística / Depósito',
  'Otro',
]

export default function JoinUsPage() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [captchaValid, setCaptchaValid] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileError, setFileError] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) {
      setFileName('')
      setFileError('')
      return
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!allowedTypes.includes(file.type)) {
      setFileError('Solo se aceptan archivos PDF, DOC o DOCX')
      setFileName('')
      e.target.value = ''
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setFileError('El archivo no puede superar 2 MB')
      setFileName('')
      e.target.value = ''
      return
    }

    setFileError('')
    setFileName(file.name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaValid || !fileName || fileError) return
    setStatus('sending')

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_CV_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
        setFileName('')
        setCaptchaValid(false)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  useSEO({
    title: 'Unite al Equipo',
    description: 'Sumate al equipo de MD Autoelevadores. Envianos tu CV y postulate para trabajar en Mendoza, San Juan o San Luis.',
    path: '/unete-al-equipo',
    image: '/lindebanner.webp',
  })

  const canSubmit = captchaValid && fileName && !fileError && EMAILJS_SERVICE_ID && EMAILJS_CV_TEMPLATE_ID

  return (
    <div className="bg-vellum">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={assetUrl('lindebanner.webp')}
          alt="MD Autoelevadores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <h1 className="text-display font-light text-white max-w-3xl">
            Unite a nuestro equipo
          </h1>
          <p className="mt-6 text-body-sm text-white/70 max-w-xl">
            Somos concesionario oficial de Linde y Still en Zona Cuyo. Sumate a un equipo comprometido con la excelencia.
          </p>
        </div>
      </section>
      <StillDivider />

      {/* Content */}
      <section className="py-16">
        <div className="max-w-page mx-auto px-6">
          <h2 className="text-display font-light text-carbon-warm mb-16">
            Postulate
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
                  placeholder="Su nombre completo"
                />
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Celular
                </label>
                <input
                  type="tel"
                  name="from_phone"
                  required
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
                  name="from_email"
                  required
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors"
                  placeholder="Su email"
                />
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Área de interés
                </label>
                <select
                  name="position"
                  required
                  defaultValue=""
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm focus:outline-none focus:border-carbon-warm/30 transition-colors"
                >
                  <option value="" disabled>Seleccione un área</option>
                  {POSITIONS.map((pos) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-paper-white border border-carbon-warm/10 rounded-sm px-4 py-3 text-body font-normal text-carbon-warm placeholder:text-mercury focus:outline-none focus:border-carbon-warm/30 transition-colors resize-none"
                  placeholder="Cuéntenos sobre su experiencia"
                />
              </div>
              <div>
                <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
                  CV / Currículum
                </label>
                <div className="flex items-center gap-3">
                  <label className="bg-carbon-warm text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors cursor-pointer whitespace-nowrap">
                    Seleccionar archivo
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-body-sm text-mercury truncate">
                    {fileName || 'PDF, DOC o DOCX (máx. 2 MB)'}
                  </span>
                </div>
                {fileError && (
                  <p className="text-body-sm text-[#D42027] mt-2">{fileError}</p>
                )}
              </div>
              <Captcha onValidate={setCaptchaValid} />
              <button
                type="submit"
                disabled={status === 'sending' || !canSubmit}
                className={`text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm transition-colors ${
                  status === 'success'
                    ? 'bg-green-600'
                    : status === 'error'
                      ? 'bg-[#D42027]'
                      : !canSubmit
                        ? 'bg-mercury cursor-not-allowed'
                        : 'bg-carbon-warm hover:bg-onyx-depth'
                }`}
              >
                {status === 'sending'
                  ? 'Enviando…'
                  : status === 'success'
                    ? '¡Postulación enviada!'
                    : status === 'error'
                      ? 'Error al enviar, intente de nuevo'
                      : 'Enviar postulación'}
              </button>

              {!EMAILJS_CV_TEMPLATE_ID && (
                <p className="text-body-sm text-mercury/60 mt-2">
                  Falta configurar el template de EmailJS para CV (VITE_EMAILJS_CV_TEMPLATE_ID en .env).
                </p>
              )}
            </form>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-subheading font-normal text-carbon-warm mb-3">Sobre MD Autoelevadores</h3>
                <p className="text-body font-normal text-mercury leading-relaxed">
                  Somos concesionario oficial de Linde y Still en Zona Cuyo, con presencia en Mendoza, San Juan y San Luis. Nos dedicamos a la venta, alquiler y servicio técnico de autoelevadores y equipos de manipulación de materiales.
                </p>
              </div>
              <div>
                <h3 className="text-subheading font-normal text-carbon-warm mb-3">Qué buscamos</h3>
                <ul className="text-body font-normal text-mercury leading-relaxed space-y-2">
                  <li>— Profesionales con vocación de servicio y atención al cliente</li>
                  <li>— Técnicos con experiencia en mecánica y electricidad</li>
                  <li>— Vendedores con conocimiento del sector industrial</li>
                  <li>— Operarios con manejo de autoelevadores (se ofrece capacitación)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-subheading font-normal text-carbon-warm mb-3">Qué ofrecemos</h3>
                <ul className="text-body font-normal text-mercury leading-relaxed space-y-2">
                  <li>— Estabilidad laboral en empresa consolidada</li>
                  <li>— Capacitación continua en marcas líderes</li>
                  <li>— Oportunidades de crecimiento profesional</li>
                  <li>— Trabajo en equipo y buen ambiente laboral</li>
                </ul>
              </div>
              <div>
                <h3 className="text-subheading font-normal text-carbon-warm mb-3">Ubicaciones</h3>
                <p className="text-body font-normal text-mercury leading-relaxed">
                  Mendoza · San Juan · San Luis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackButton />
    </div>
  )
}
