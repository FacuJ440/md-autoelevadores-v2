import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import FeaturedProducts from '@/components/FeaturedProducts'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CatalogPage from '@/pages/CatalogPage'
import AboutPage from '@/pages/AboutPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FeaturedProducts />
      <Contact />
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
    <HashRouter>
      <ScrollToTop />
      <div className="bg-vellum min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  )
}

export default App
