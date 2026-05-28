// src/components/Skills.jsx  — fixes the missing {skill} text bug
import skills from '../data/Skills'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
            >
              <h3 className="text-2xl font-semibold capitalize mb-6">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}  {/* ← this was missing in your original */}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
