import { useState, useEffect, useCallback } from 'react'

/**
 * Image carousel with thumbnail navigation and lightbox.
 * Click the main image to open a fullscreen lightbox.
 */
export default function ImageCarousel({ images = [], alt = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const baseUrl = import.meta.env.BASE_URL

  /* Lock body scroll when lightbox is open */
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxOpen])

  /* Keyboard navigation in lightbox */
  const handleKeyDown = useCallback(
    (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      }
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }
    },
    [lightboxOpen, images.length]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!images || images.length === 0) return null

  /* Single image – no carousel, but still clickable for lightbox */
  if (images.length === 1) {
    return (
      <>
        <button
          onClick={() => setLightboxOpen(true)}
          className="aspect-[4/3] rounded-sm overflow-hidden bg-carbon-warm/5 w-full cursor-zoom-in block"
        >
          <img
            src={`${baseUrl}${images[0]}`}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </button>

        {lightboxOpen && (
          <Lightbox
            images={images}
            activeIndex={0}
            setActiveIndex={setActiveIndex}
            onClose={() => setLightboxOpen(false)}
            alt={alt}
            baseUrl={baseUrl}
          />
        )}
      </>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Main image */}
        <div className="aspect-[4/3] rounded-sm overflow-hidden bg-carbon-warm/5 relative group">
          <button
            onClick={() => setLightboxOpen(true)}
            className="w-full h-full cursor-zoom-in block"
          >
            <img
              src={`${baseUrl}${images[activeIndex]}`}
              alt={`${alt} - ${activeIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-carbon-warm/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-carbon-warm/80"
            aria-label="Imagen anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-carbon-warm/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-carbon-warm/80"
            aria-label="Imagen siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image counter */}
          <span className="absolute bottom-3 right-3 bg-carbon-warm/60 text-white text-xs px-2 py-1 rounded-sm">
            {activeIndex + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                i === activeIndex
                  ? 'border-[#D42027] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={`${baseUrl}${img}`}
                alt={`${alt} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={() => setLightboxOpen(false)}
          alt={alt}
          baseUrl={baseUrl}
        />
      )}
    </>
  )
}

/**
 * Fullscreen lightbox overlay.
 */
function Lightbox({ images, activeIndex, setActiveIndex, onClose, alt, baseUrl }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        aria-label="Cerrar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${baseUrl}${images[activeIndex]}`}
          alt={`${alt} - ${activeIndex + 1}`}
          className="max-w-[90vw] max-h-[85vh] object-contain select-none"
        />

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Imagen anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Imagen siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Counter */}
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {activeIndex + 1} / {images.length}
      </span>
    </div>
  )
}
