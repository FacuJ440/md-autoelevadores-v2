import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * Cloudflare Turnstile captcha component.
 *
 * Docs: https://developers.cloudflare.com/turnstile/
 *
 * Setup:
 *   1. Go to https://dash.cloudflare.com → Turnstile
 *   2. Create a widget (choose "Managed" challenge)
 *   3. Copy the Site Key and set VITE_TURNSTILE_SITE_KEY in .env
 *
 * @param {Function} props.onValidate - called with (true, token) on success
 *                                     or (false, null) on expiry/error
 */
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

// Unique counter so multiple widgets on one page don't collide
let widgetIdCounter = 0

export default function Captcha({ onValidate }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const callbackRef = useRef(onValidate)
  const [widgetId] = useState(() => `turnstile-${++widgetIdCounter}`)

  // Keep callback ref updated without re-rendering the widget
  useEffect(() => {
    callbackRef.current = onValidate
  }, [onValidate])

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile) return

    // Clean up any previous render
    if (widgetIdRef.current !== null) {
      try {
        window.turnstile.remove(widgetIdRef.current)
      } catch {
        /* noop */
      }
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'light',
      language: 'es-419',
      callback: (token) => callbackRef.current(true, token),
      'expired-callback': () => callbackRef.current(false, null),
      'error-callback': () => callbackRef.current(false, null),
    })
  }, [])

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return

    // If the script is already loaded, render immediately
    if (window.turnstile) {
      renderWidget()
      return
    }

    // Otherwise wait for the script to load
    const handleLoad = () => renderWidget()
    window.addEventListener('turnstile-loaded', handleLoad)
    return () => window.removeEventListener('turnstile-loaded', handleLoad)
  }, [renderWidget])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          /* noop */
        }
      }
    }
  }, [])

  // No site key configured — show a helpful message
  if (!TURNSTILE_SITE_KEY) {
    return (
      <div>
        <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
          Verificación
        </label>
        <p className="text-body-sm text-mercury/60">
          Requiere configuración de Turnstile (ver .env).
        </p>
      </div>
    )
  }

  return (
    <div>
      <label className="block text-label font-normal uppercase tracking-[0.12em] text-carbon-warm mb-2">
        Verificación
      </label>
      <div ref={containerRef} id={widgetId} />
    </div>
  )
}
