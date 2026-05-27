// src/App.jsx — REPLACE your existing App.jsx
// ThemeContext moved inline — no separate context folder needed

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
import ThemeToggle from './components/ThemeToggle'

// ── Theme context defined right here — no extra folder needed ──
export const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {/* Cyan scroll progress bar fixed at very top */}
      <ScrollProgress />

      <div className="bg-slate-950 text-white min-h-screen">
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
