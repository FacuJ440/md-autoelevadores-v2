import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-vellum min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
