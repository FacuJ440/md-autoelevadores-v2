import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import FeaturedProducts from '@/components/FeaturedProducts'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import PageTransition from '@/components/PageTransition'
import CatalogPage from '@/pages/CatalogPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ContactPage from '@/pages/ContactPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FeaturedProducts />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-vellum min-h-screen">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/catalogo" element={<PageTransition><CatalogPage /></PageTransition>} />
        <Route path="/catalogo/:categorySlug/:productSlug" element={<PageTransition><ProductDetailPage /></PageTransition>} />
        <Route path="/nosotros" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
