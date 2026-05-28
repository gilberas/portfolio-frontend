// src/components/Testimonials.jsx

const testimonials = [
  {
    name: 'Amina Rashid',
    role: 'School Administrator',
    company: 'Client — School Management System',
    initials: 'AR',
    color: '#22a675',
    bgColor: '#0d3b2e',
    text: 'The school management system Gilbert built transformed how we run daily operations. Fee tracking, exam results, and attendance are now fully digital. It saved us hours of paperwork every week.',
  },
  {
    name: 'Brian Mollel',
    role: 'Business Owner',
    company: 'Client — E-Commerce Website',
    initials: 'BM',
    color: '#f0bc2e',
    bgColor: '#2d2200',
    text: 'Our online store was delivered on time and within budget. The checkout process is smooth, the admin dashboard is easy to use, and sales have improved since launch. Highly recommended.',
  },
  {
    name: 'Fatuma Juma',
    role: 'Warehouse Manager',
    company: 'Client — InventoryPro',
    initials: 'FJ',
    color: '#60a5fa',
    bgColor: '#0f1f3d',
    text: 'Managing stock across multiple locations used to be a nightmare. InventoryPro gave us full visibility — purchase orders, stock levels, expiry tracking. Gilbert understood exactly what we needed.',
  },
]

function Avatar({ initials, color, bgColor }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
      style={{ backgroundColor: bgColor, color: color, border: `2px solid ${color}33` }}
    >
      {initials}
    </div>
  )
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Feedback from clients who trusted me to build their digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7
                         hover:-translate-y-2 hover:border-slate-600
                         transition-all duration-300 relative flex flex-col"
            >
              {/* Large quote mark */}
              <span
                className="absolute top-5 right-6 text-6xl leading-none font-serif select-none"
                style={{ color: t.color, opacity: 0.12 }}
              >
                "
              </span>

              {/* Stars */}
              <StarRating />

              {/* Review text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-slate-800 pt-5">
                <div className="flex items-center gap-3">

                  {/* Initials avatar */}
                  <Avatar
                    initials={t.initials}
                    color={t.color}
                    bgColor={t.bgColor}
                  />

                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{t.name}</p>
                    <p className="text-slate-400 text-xs truncate">{t.role}</p>
                    {/* Company / project tag */}
                    <span
                      className="inline-block text-xs px-2 py-0.5 rounded-full mt-1 font-medium"
                      style={{ backgroundColor: t.bgColor, color: t.color }}
                    >
                      {t.company}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 text-xs mt-10">
          All projects were independently developed as freelance work.
        </p>

      </div>
    </section>
  )
}
