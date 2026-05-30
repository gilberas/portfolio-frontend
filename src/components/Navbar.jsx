import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md border-b z-50"
         style={{ background: 'var(--nav-bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
          Gilbert Isidory
        </h1>

        <div className="flex items-center gap-6 text-sm md:text-base">
          {['about','skills','projects','contact'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="capitalize transition hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {id}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
