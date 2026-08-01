import { useEffect } from 'react'

const SITE_URL = 'https://mdautoelevadores.com'
const DEFAULT_TITLE = 'MD Autoelevadores | Linde y Still en Mendoza, San Juan y San Luis'
const DEFAULT_DESCRIPTION =
  'Concesionario oficial Linde y Still en Zona Cuyo. Venta y alquiler de autoelevadores eléctricos y térmicos, servicio técnico, repuestos y baterías. Mendoza, San Juan y San Luis.'

/**
 * Hook to dynamically update document title, meta description, canonical URL,
 * and Open Graph / Twitter tags per page.
 *
 * @param {object} options
 * @param {string} options.title - Page title (without site suffix)
 * @param {string} options.description - Meta description
 * @param {string} options.path - URL path (e.g. '/catalogo')
 * @param {string} [options.image] - Optional OG image path
 */
export default function useSEO({ title, description, path, image }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | MD Autoelevadores`
      : DEFAULT_TITLE
    const desc = description || DEFAULT_DESCRIPTION
    const url = `${SITE_URL}${path}`
    const img = image ? `${SITE_URL}${image}` : `${SITE_URL}/maquinarias-linde.webp`

    // Title
    document.title = fullTitle

    // Helper to upsert a meta tag
    const upsertMeta = (attr, key, content) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Description
    upsertMeta('name', 'description', desc)

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', img)

    // Twitter
    upsertMeta('property', 'twitter:title', fullTitle)
    upsertMeta('property', 'twitter:description', desc)
    upsertMeta('property', 'twitter:url', url)
    upsertMeta('property', 'twitter:image', img)

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = DEFAULT_TITLE
      upsertMeta('name', 'description', DEFAULT_DESCRIPTION)
      upsertMeta('property', 'og:title', DEFAULT_TITLE)
      upsertMeta('property', 'og:description', DEFAULT_DESCRIPTION)
      upsertMeta('property', 'og:url', SITE_URL)
      upsertMeta('property', 'og:image', `${SITE_URL}/maquinarias-linde.webp`)
      upsertMeta('property', 'twitter:title', DEFAULT_TITLE)
      upsertMeta('property', 'twitter:description', DEFAULT_DESCRIPTION)
      upsertMeta('property', 'twitter:url', SITE_URL)
      upsertMeta('property', 'twitter:image', `${SITE_URL}/maquinarias-linde.webp`)
      canonical.setAttribute('href', SITE_URL)
    }
  }, [title, description, path, image])
}
