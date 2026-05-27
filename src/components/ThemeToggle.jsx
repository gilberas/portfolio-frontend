// src/components/ThemeToggle.jsx — REPLACE existing file
// Import now comes from App.jsx directly, no context folder needed

import { useTheme } from '../App'

export default function ThemeToggle() {
  const { dark, setDark } = useTheme()

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-10 h-10 rounded-xl border border-slate-700 hover:border-cyan-500 flex items-center justify-center transition duration-300 text-lg"
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
