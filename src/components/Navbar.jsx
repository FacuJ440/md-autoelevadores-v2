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
    <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-8">
      {/* Logo */}
      <img src="/logo.png" alt="MD Autoelevadores" className="h-14 md:h-20 w-auto" />

      {/* Nav pill */}
      <nav className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-[24px] px-6 py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-xs  font-normal hover:text-mercury transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-body-sm font-normal hover:text-mercury transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  )
}
