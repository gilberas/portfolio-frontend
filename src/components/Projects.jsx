import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="border border-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects