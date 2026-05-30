// src/App.jsx
import { createContext, useContext, useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import SkillBars from './components/SkillBars'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

function App() {
  const [dark, setDark] = useState(true)

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])

  // Apply class to <html> whenever dark changes
  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.add('light')
      html.classList.remove('dark')
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <ScrollProgress />
      <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <SkillBars />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
