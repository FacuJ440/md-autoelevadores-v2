import { useState, useRef, useEffect } from 'react'
import { MessageCircle, MapPin, X } from 'lucide-react'

const branches = [
  { name: 'Mendoza', number: '542616145636' },
  { name: 'San Juan', number: '542644448647' },
]

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  /* Close popup when clicking outside */
  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {/* Branch selector popup */}
      {open && (
        <div className="absolute bottom-16 right-0 bg-white rounded-sm shadow-xl border border-carbon-warm/10 overflow-hidden w-56 animate-in">
          <div className="flex items-center justify-between px-4 py-3 bg-carbon-warm">
            <span className="text-white text-body-sm font-normal">
              Seleccione sucursal
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {branches.map((branch) => (
            <a
              key={branch.number}
              href={`https://wa.me/${branch.number}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-vellum transition-colors border-b border-carbon-warm/5 last:border-b-0"
            >
              <MapPin className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <span className="text-body-sm font-normal text-carbon-warm">
                {branch.name}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#25D366] rounded-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  )
}
