
import './App.css'
import { Toaster } from 'react-hot-toast'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'

import Navbar from './sections/Navbar'
import Projects from './sections/Projects'

import Skills from './sections/Skills'
import Footer from './sections/Footer'

function App() {


  return (
   <div className="bg-background text-text min-h-screen">
      <Toaster position='top-right'/>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
