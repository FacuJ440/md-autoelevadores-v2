/**
 * Build a correct asset URL by joining Vite's BASE_URL with the path.
 * Handles paths that may or may not start with a leading slash.
 *
 * Examples (base = '/'):
 *   assetUrl('logo.png')                      → '/logo.png'
 *   assetUrl('/images/products/h14-h20.png')  → '/images/products/h14-h20.png'
 */
export function assetUrl(path) {
  if (!path) return ''
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
