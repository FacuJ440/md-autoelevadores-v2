import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Autoelevadores Linde', href: '#productos' },
    { label: 'Still', href: '#productos' },
    { label: 'Baterías', href: '#productos' },
    { label: 'Alquiler', href: '#servicios' },
    { label: 'Servicio Técnico', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-8">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <img
            src="/logo.png"
            alt="MD Autoelevadores"
            className={`h-14 md:h-20 w-auto transition-all duration-300 ease-in-out ${isOpen ? '-translate-x-[200%] opacity-0' : 'translate-x-0 opacity-100'}`}
          />
        </a>

        {/* Nav pill */}
        <nav className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-[24px] px-6 py-4">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-xs font-normal hover:text-mercury transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-[20px] cursor-pointer block"
            aria-label="Toggle menu"
          >
            <span className={`block absolute h-1 w-full bg-white rounded-[9px] left-0 transition-all duration-250 ease-in-out ${isOpen ? 'rotate-45 top-0 left-[5px]' : 'top-0'}`} style={{ transformOrigin: 'left center' }} />
            <span className={`block absolute h-1 w-full bg-white rounded-[9px] left-0 transition-all duration-250 ease-in-out top-1/2 -translate-y-1/2 ${isOpen ? 'w-0 opacity-0' : ''}`} style={{ transformOrigin: 'left center' }} />
            <span className={`block absolute h-1 w-full bg-white rounded-[9px] left-0 transition-all duration-250 ease-in-out ${isOpen ? '-rotate-45 top-[28px] left-[5px]' : 'top-full -translate-y-full'}`} style={{ transformOrigin: 'left center' }} />
          </button>
        </nav>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1a1a1a]/95 backdrop-blur-md z-[49] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-6 pt-28 px-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-body font-normal hover:text-mercury transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[48] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
