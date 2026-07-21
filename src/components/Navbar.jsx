import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  {
    label: 'Autoelevadores Linde',
    href: '#productos',
    subcategories: [
      { label: 'Autoelevadores Térmicos', href: '/catalogo?cat=termicos' },
      { label: 'Autoelevadores Eléctricos', href: '/catalogo?cat=electricos' },
      { label: 'Almacenaje', href: '/catalogo?cat=almacenaje' },
      { label: 'Transporte', href: '/catalogo?cat=transporte' },
      { label: 'Preparación de Pedidos', href: '/catalogo?cat=preparacion-pedidos' },
      { label: 'Cubiertas', href: '/catalogo?cat=cubiertas' },
    ],
  },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const Chevron = ({ open }) => (
  <svg className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

function SubcategoryGrid({ subcategories, isOpen, onClose }) {
  if (!subcategories) return null

  return (
    <div className="grid transition-[grid-template-rows] duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
      <div className="overflow-hidden">
        <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-x-6 gap-y-1">
          {subcategories.map((sub) => {
            const isInternal = sub.href.startsWith('/')
            return isInternal ? (
              <Link
                key={sub.label}
                to={sub.href}
                onClick={onClose}
                className="text-white/70 text-[11px] font-normal hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-200 whitespace-nowrap"
              >
                {sub.label}
              </Link>
            ) : (
              <a
                key={sub.label}
                href={sub.href}
                onClick={onClose}
                className="text-white/70 text-[11px] font-normal hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-200 whitespace-nowrap"
              >
                {sub.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleExpand = (label) => {
    setExpandedItem(expandedItem === label ? null : label)
  }

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex items-start justify-between px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="MD Autoelevadores"
            className={`h-14 md:h-20 w-auto transition-all duration-300 ease-in-out ${isOpen ? '-translate-x-[200%] opacity-0' : 'translate-x-0 opacity-100'}`}
          />
        </Link>

        {/* Nav pill — grows downward without moving */}
        <nav
          className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-sm px-6 py-4"
          onMouseLeave={() => setExpandedItem(null)}
        >
          {/* Desktop */}
          <div className="hidden md:flex flex-col">
            {/* Top row: all main links */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                item.subcategories ? (
                  <div
                    key={item.label}
                    onMouseEnter={() => setExpandedItem(item.label)}
                  >
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className="text-white text-xs font-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      {item.label}
                      <Chevron open={expandedItem === item.label} />
                    </button>
                  </div>
                ) : item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setExpandedItem(null)}
                    className="text-white text-xs font-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setExpandedItem(null)}
                    className="text-white text-xs font-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            {/* Animated subcategories */}
            {navItems.filter(n => n.subcategories).map((item) => (
              <SubcategoryGrid
                key={item.label}
                subcategories={item.subcategories}
                isOpen={expandedItem === item.label}
                onClose={() => setExpandedItem(null)}
              />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-[20px] cursor-pointer block"
            aria-label="Toggle menu"
          >
            <span className={`block absolute h-1 w-full bg-white left-0 transition-all duration-250 ease-in-out ${isOpen ? 'rotate-45 top-0 left-[5px]' : 'top-0'}`} style={{ transformOrigin: 'left center' }} />
            <span className={`block absolute h-1 w-full bg-white left-0 transition-all duration-250 ease-in-out top-1/2 -translate-y-1/2 ${isOpen ? 'w-0 opacity-0' : ''}`} style={{ transformOrigin: 'left center' }} />
            <span className={`block absolute h-1 w-full bg-white left-0 transition-all duration-250 ease-in-out ${isOpen ? '-rotate-45 top-[28px] left-[5px]' : 'top-full -translate-y-full'}`} style={{ transformOrigin: 'left center' }} />
          </button>
        </nav>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1a1a1a]/95 backdrop-blur-md z-[49] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-4 pt-28 px-8">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.subcategories ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="text-white text-body font-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200 text-left flex items-center justify-between w-full cursor-pointer"
                  >
                    {item.label}
                    <Chevron open={expandedItem === item.label} />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{ maxHeight: expandedItem === item.label ? 500 : 0 }}
                  >
                    <div className="flex flex-col gap-2 pl-4 mt-2">
                      {item.subcategories.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => { setIsOpen(false); setExpandedItem(null) }}
                          className="text-white/70 text-sm font-normal hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-200"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-body font-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-body font-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200"
                >
                  {item.label}
                </a>
              )}
            </div>
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
