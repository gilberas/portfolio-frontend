function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 text-center md:text-left">

            <p className="text-cyan-400 text-lg mb-4 font-medium">
              Full-Stack Developer & Data Scientist
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building Modern
              <span className="text-cyan-400"> Digital Solutions</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              I design and develop scalable web applications, intelligent systems,
              and data-driven solutions focused on real-world impact.
            </p>

             {/* CTA Buttons — including CV download */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Me
              </a>
              {/* ── CV Download ── put your CV PDF in public/cv/Gilbert_Lyimo_CV.pdf */}
              <a
               href="/CV/Gilbert_Isidory_CV_v2.pdf"
  download="Gilbert_Isidory_CV.pdf"
  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500 px-8 py-4 rounded-xl font-semibold transition"
>
  <span>⬇️</span> Download CV
</a>
          
            </div>


            
          </div>


          {/* ── RIGHT: Profile Photo ── */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">

              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-20 scale-110"></div>

              {/* Rotating dashed ring — increased to match larger photo */}
              <div
                className="relative rounded-full border-2 border-dashed border-cyan-500/40 flex items-center justify-center"
                style={{
                  width: '420px',
                  height: '420px',
                  animation: 'spin 12s linear infinite',
                }}
              >
                {/* Photo — enlarged */}
                <img
                  src="/images/WhatsApp Image 2026-05-26 at 11.27.09.jpeg"
                  alt="Gilbert"
                  style={{ width: '380px', height: '380px' }}
                  className="rounded-full object-cover object-top border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />

                {/* Fallback if image not found */}
                <div
                  className="rounded-full bg-slate-800 border-4 border-cyan-500 items-center justify-center"
                  style={{ width: '380px', height: '380px', display: 'none' }}
                >
                  <span className="text-8xl">👤</span>
                </div>

              </div>

              {/* Floating badge — projects */}
              <div className="absolute top-6 -left-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-center shadow-lg">
                <span className="text-cyan-400 text-xl font-bold block">4</span>
                <span className="text-slate-400 text-xs">Projects</span>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute bottom-6 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-center shadow-lg">
                <span className="text-cyan-400 text-xl font-bold block">3+</span>
                <span className="text-slate-400 text-xs">Years Coding</span>
              </div>

              {/* Floating badge — available (top right) */}
              <div className="absolute top-4 -right-6 bg-slate-900 border border-green-500/30 rounded-xl px-3 py-2 text-center shadow-lg z-20">
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Inline keyframe for spin — no tailwind.config.js needed */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  )
}

export default Hero
