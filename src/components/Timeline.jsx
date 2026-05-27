// src/components/Timeline.jsx
import { useEffect, useRef, useState } from "react";

const timeline = [
 {
  year: "2026",
  title: "Final Year Student — BSc. Data Science",
  place: "Eastern Africa Statistical Training Centre (EASTC)",
  description:
    "Currently in my final year pursuing a Bachelor of Science in Data Science. Expected to graduate in 2026. Focusing on statistical analysis, machine learning, database systems, and full-stack web development.",
  type: "education",
  icon: "🎓",
},
  {
    year: "2025",
    title: "School Management System",
    place: "Freelance Project",
    description:
      "Built a comprehensive school administration system using Laravel + Livewire covering student enrollment, attendance, exams, results, fee collection, timetables, and role-based access for admins, teachers, finance officers, and parents.",
    type: "project",
    icon: "💻",
  },
  {
    year: "2025",
    title: "Audit Officer Intern — Field Training",
    place: "Tanzania Revenue Authority (TRA), Audit Department",
    description:
      "Participated in tax audit processes for corporate and individual taxpayers. Assisted senior auditors in reviewing financial records, identifying non-compliance, and preparing audit working papers.",
    type: "experience",
    icon: "🏛️",
  },
  {
    year: "2025",
    title: "InventoryPro & E-Commerce Website",
    place: "Personal / Client Projects",
    description:
      "Developed InventoryPro — a multi-warehouse inventory system with purchase order workflows, stock tracking, and real-time dashboard. Also built a full e-commerce platform with product catalog, cart, secure checkout, and order management.",
    type: "project",
    icon: "🚀",
  },
  {
    year: "2026",
    title: "InternConnect Platform",
    place: "Personal Project",
    description:
      "Built a platform connecting students with internship opportunities, featuring company listings, student profiles, application tracking, and real-time notifications using React, Node.js, Express, and MySQL.",
    type: "project",
    icon: "🤝",
  },
  {
    year: "2022",
    title: "A-Level — PCM Combination",
    place: "Shinyanga Secondary School, Shinyanga",
    description:
      "Completed Advanced Level Certificate of Secondary Education (ACSEE) with Physics, Chemistry, and Mathematics combination. Division III — 13 Points.",
    type: "education",
    icon: "📗",
  },
  {
    year: "2017",
    title: "O-Level Secondary Education",
    place: "Ngokolo Secondary School, Shinyanga Region",
    description:
      "Completed Ordinary Level Certificate of Secondary Education (CSEE). Division II — 18 Points.",
    type: "education",
    icon: "📚",
  },
];

const TYPE_STYLES = {
  education:  { border: "border-emerald-500/50",  badge: "bg-emerald-500/10 text-emerald-400",  dot: "bg-emerald-500",  hover: "group-hover:border-emerald-400/60"  },
  project:    { border: "border-cyan-500/40",      badge: "bg-cyan-500/10 text-cyan-400",        dot: "bg-cyan-500",     hover: "group-hover:border-cyan-400/60"      },
  experience: { border: "border-amber-500/50",     badge: "bg-amber-500/10 text-amber-400",      dot: "bg-amber-500",    hover: "group-hover:border-amber-400/60"     },
};

const TYPE_LABELS = {
  education:  "Education",
  project:    "Project",
  experience: "Experience",
};

function TimelineItem({ item, index }) {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const ts = TYPE_STYLES[item.type] || TYPE_STYLES.project;

  return (
    <div
      ref={ref}
      className="relative flex gap-6 group"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateX(0)" : "translateX(-28px)",
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms`,
      }}
    >
      {/* Icon circle */}
      <div
        className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-slate-800 border-2 ${ts.border} ${ts.hover} flex items-center justify-center text-2xl transition duration-300 shadow-lg`}
      >
        {item.icon}
        {/* Animated glow dot */}
        <span
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${ts.dot} border-2 border-slate-900`}
        />
      </div>

      {/* Card */}
      <div
        className={`flex-1 bg-slate-800/50 border border-slate-700/80 ${ts.hover} rounded-2xl p-6 transition duration-300 hover:bg-slate-800/80 hover:shadow-xl`}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${ts.badge}`}>
              {TYPE_LABELS[item.type]}
            </span>
          </div>
          <span className="text-cyan-400 text-sm font-semibold bg-cyan-500/10 px-3 py-1 rounded-full flex-shrink-0">
            {item.year}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-3 font-medium">{item.place}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    /* id="experience" is the primary anchor; id="education" div below
       lets both Footer nav links (#experience and #education) scroll here */
    <section id="experience" className="py-24 px-6 bg-slate-900">
      {/* Invisible anchor so #education link also works */}
      <div id="education" />

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            My Journey
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Experience &amp; Education</h2>
          {/* Legend */}
          <div className="flex items-center justify-center gap-5 flex-wrap mt-4">
            {Object.entries(TYPE_LABELS).map(([key, label]) => (
              <span key={key} className="flex items-center gap-1.5 text-sm text-slate-400">
                <span className={`w-2.5 h-2.5 rounded-full ${TYPE_STYLES[key].dot}`} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
