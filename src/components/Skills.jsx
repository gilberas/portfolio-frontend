import skills from '../data/Skills'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ color: 'var(--accent)' }}>
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-8 rounded-2xl border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              <h3 className="text-2xl font-semibold capitalize mb-6"
                  style={{ color: 'var(--text-primary)' }}>
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{
                      background: 'var(--accent-bg)',
                      color: 'var(--accent)',
                    }}
                  >
                    {skill}
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
