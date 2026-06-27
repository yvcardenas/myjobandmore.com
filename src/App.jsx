// App.jsx
// This is the "root" component — it imports all the section components
// and lays them out in order. Think of it as the skeleton of the page.
// Each import pulls in both the JSX component and its CSS file.

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import ComoFunciona from './components/ComoFunciona'
import PorQueElegirnos from './components/PorQueElegirnos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

import './components/Navbar.css'
import './components/Hero.css'
import './components/Servicios.css'
import './components/ComoFunciona.css'
import './components/PorQueElegirnos.css'
import './components/Contacto.css'
import './components/Footer.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <ComoFunciona />
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
