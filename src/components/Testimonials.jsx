// src/components/Testimonials.jsx
// Add this section between Projects and Contact

const testimonials = [
  {
    name: 'Dr. James Mwangi',
    role: 'Supervisor, University Project',
    avatar: '👨‍🏫',
    text: 'Gilbert demonstrated exceptional problem-solving skills during his school management system project. His ability to translate complex requirements into clean, working code is impressive.',
  },
  {
    name: 'Sarah Kimani',
    role: 'Project Collaborator',
    avatar: '👩‍💻',
    text: 'Working with Gilbert on the InternConnect platform was a great experience. He is detail-oriented, communicates well, and always delivers on time.',
  },
  {
    name: 'Mark Oduya',
    role: 'Client — E-Commerce Project',
    avatar: '👨‍💼',
    text: 'The e-commerce platform Gilbert built for us exceeded our expectations. The UI is clean, the system is fast, and he was responsive throughout the entire process.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 text-center">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            What People Say
          </p>
          <h2 className="text-4xl font-bold text-white">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:-translate-y-1 transition duration-300 relative"
            >
              {/* Quote mark */}
              <span className="text-5xl text-cyan-500/20 font-serif absolute top-4 right-6 leading-none">"</span>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
