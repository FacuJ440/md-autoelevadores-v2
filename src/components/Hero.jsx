import StillDivider from '@/components/StillDivider'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}slider_la_mejor_jugadora_para_tu_equipo.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />

        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <h1 className="text-display font-light text-white max-w-3xl">
            Soluciones industriales para su logística
          </h1>
          <p className="mt-6 text-body-sm text-white/70 max-w-xl">
            Representantes oficiales Linde y Still en Cuyo. Autoelevadores, servicio técnico y alquiler en Mendoza, San Juan y San Luis.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#productos"
              className="inline-block bg-[#D42027] text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-onyx-depth transition-colors"
            >
              Descubrir equipos
            </a>
            <Link
              to="/contacto"
              className="inline-block border border-white text-white text-body-sm font-normal px-[22px] py-[18px] rounded-sm hover:bg-white/10 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>

      <StillDivider />
    </>
  )
}
