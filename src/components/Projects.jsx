import projects from '../data/projects'

const statusStyles = {
  Completed: {
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  "In Progress": {
    dot: "bg-yellow-400 animate-pulse",
    badge: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  },
  Planned: {
    dot: "bg-slate-400",
    badge: "bg-slate-500/10 text-slate-400 border border-slate-500/20",
  },
}

function StatusBadge({ status }) {
  const style = statusStyles[status] || statusStyles["Planned"]
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  )
}

function FeatureChecklist({ features }) {
  const done = features.filter((f) => f.done).length
  const total = features.length
  const percent = Math.round((done / total) * 100)

  return (
    <div className="mb-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400 font-medium">Progress</span>
        <span className="text-xs text-cyan-400 font-semibold">{done}/{total} features</span>
      </div>
      <div className="w-full h-1.5 bg-slate-800 rounded-full mb-4">
        <div
          className="h-1.5 bg-cyan-500 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Feature list */}
      <ul className="space-y-1.5">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs">
            {feature.done ? (
              <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" />
              </svg>
            )}
            <span className={feature.done ? "text-slate-300" : "text-slate-500"}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              {/* Screenshot or placeholder */}
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="w-full h-44 object-cover object-top"
                />
              ) : (
                <div className="w-full h-44 bg-slate-800 flex flex-col items-center justify-center gap-2 border-b border-slate-700">
                  <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path strokeLinecap="round" d="M3 9h18M9 21V9" />
                  </svg>
                  <span className="text-slate-600 text-xs">Screenshot coming soon</span>
                </div>
              )}

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Status + title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>

                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Features checklist */}
                <FeatureChecklist features={project.features} />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub button */}
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
