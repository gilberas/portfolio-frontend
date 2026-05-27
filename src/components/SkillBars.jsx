// src/components/SkillBars.jsx  — NEW FILE
// Shows proficiency bars that animate when scrolled into view
// Add this inside your Skills.jsx or as a separate section

import { useEffect, useRef, useState } from 'react'

const proficiencies = [
  { skill: 'React',            level: 85, color: 'from-cyan-500 to-blue-500' },
  { skill: 'Laravel',          level: 88, color: 'from-red-500 to-orange-400' },
  { skill: 'Node.js / Express',level: 80, color: 'from-green-500 to-emerald-400' },
  { skill: 'MySQL',            level: 82, color: 'from-orange-500 to-yellow-400' },
  { skill: 'Python',           level: 75, color: 'from-yellow-500 to-amber-400' },
  { skill: 'Machine Learning', level: 65, color: 'from-purple-500 to-violet-400' },
  { skill: 'QGIS',             level: 70, color: 'from-teal-500 to-green-400' },
  { skill: 'Networking',       level: 72, color: 'from-indigo-500 to-blue-400' },
]

function SkillBar({ skill, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{skill}</span>
        <span className="text-cyan-400 text-sm font-bold">{level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function SkillBars() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="proficiency" className="py-24 px-6 bg-slate-950" ref={ref}>
      <div className="max-w-4xl mx-auto">

        <div className="mb-12 text-center">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Proficiency
          </p>
          <h2 className="text-4xl font-bold text-white mb-3">Skill Levels</h2>
          <p className="text-slate-400">Honest self-assessment of my current technical proficiency.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {proficiencies.map((item, i) => (
            <SkillBar key={i} {...item} animate={animate} />
          ))}
        </div>

      </div>
    </section>
  )
}
