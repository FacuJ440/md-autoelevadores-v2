import Products from '@/components/Products'
import StillDivider from '@/components/StillDivider'
import BackButton from '@/components/BackButton'

export default function CatalogPage() {
  return (
    <div className="bg-vellum">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}maquinarias-linde.webp`}
          alt="Catálogo MD Autoelevadores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-warm/80 via-carbon-warm/20 to-carbon-warm/40" />
        <div className="relative z-10 max-w-page mx-auto w-full px-6 pb-24 pt-48">
          <h1 className="text-display font-light text-white max-w-3xl">
            Catálogo
          </h1>
          <p className="mt-6 text-body-sm text-white/70 max-w-xl">
            Equipos nuevos y usados, servicio técnico y alquiler. Representantes oficiales Linde, Still, Hoppecke y más.
          </p>
        </div>
      </section>
      <StillDivider />

      <Products />
      <BackButton />
    </div>
  )
}
