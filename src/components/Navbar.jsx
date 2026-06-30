import { useState, useRef, useEffect, useLayoutEffect } from 'react'

const navItems = [
  {
    label: 'Autoelevadores Linde',
    href: '#productos',
    subcategories: [
      { label: 'Autoelevadores térmicos', href: '#productos' },
      { label: 'Autoelevadores eléctricos', href: '#productos' },
      { label: 'Apiladores de Pallet', href: '#productos' },
      { label: 'Transpaletas eléctricas', href: '#productos' },
      { label: 'Recogedores de pedidos', href: '#productos' },
      { label: 'Autoelevadores retráctiles', href: '#productos' },
      { label: 'Autoelevadores de pasillo muy estrecho', href: '#productos' },
      { label: 'Trenes Logísticos', href: '#productos' },
      { label: 'Tractores de Remolque', href: '#productos' },
      { label: 'Autoelevadores Automatizados', href: '#productos' },
    ],
  },
  {
    label: 'Still',
    href: '#productos',
    subcategories: [
      { label: 'Apilador eléctrico', href: 'https://www.mdautoelevadores.com.ar/still-es/apilador-electrico/' },
      { label: 'Apilador Retráctil', href: 'https://www.mdautoelevadores.com.ar/still-es/apilador-retractil/' },
      { label: 'Autoelevadores Combustión', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevadores-combustion/' },
      { label: 'Autoelevador eléctrico', href: 'https://www.mdautoelevadores.com.ar/still-es/autoelevador-electrico/' },
    ],
  },
  { label: 'Baterías Industriales', href: '#productos' },
  { label: 'Alquiler', href: '#servicios' },
  { label: 'Servicio Técnico', href: '#servicios' },
]

const Chevron = ({ open }) => (
  <svg className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

function SubcategoryGrid({ subcategories, isOpen, onClose }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (contentRef.current) {
      // Temporarily show to measure, then hide
      const el = contentRef.current
      const parent = el.parentElement
      const prevMaxHeight = parent.style.maxHeight
      parent.style.maxHeight = 'none'
      setHeight(el.scrollHeight)
      parent.style.maxHeight = prevMaxHeight
    }
  }, [subcategories])

  if (!subcategories) return null
  const cols = 3
  const rows = Math.ceil(subcategories.length / cols)

  return (
    <div
      className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      style={{ maxHeight: isOpen ? height : 0 }}
    >
      <div ref={contentRef} className="mt-3 pt-3 border-t border-white/10 grid gap-x-6 gap-y-1" style={{ gridTemplateColumns: `repeat(${cols}, auto)` }}>
        {Array.from({ length: rows }).map((_, rowIdx) =>
          Array.from({ length: cols }).map((_, colIdx) => {
            const sub = subcategories[rowIdx * cols + colIdx]
            if (!sub) return null
            return (
              <a
                key={sub.label}
                href={sub.href}
                onClick={onClose}
                className="text-white/70 text-[11px] font-normal hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-200 whitespace-nowrap"
              >
                {sub.label}
              </a>
            )
          })
        )}
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
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="MD Autoelevadores"
            className={`h-14 md:h-20 w-auto transition-all duration-300 ease-in-out ${isOpen ? '-translate-x-[200%] opacity-0' : 'translate-x-0 opacity-100'}`}
          />
        </a>

        {/* Nav pill — grows downward without moving */}
        <nav
          className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-[24px] px-6 py-4"
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
