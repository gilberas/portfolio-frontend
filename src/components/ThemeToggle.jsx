import { useTheme } from '../App'

export default function ThemeToggle() {
  const { dark, setDark } = useTheme()

  return (
    <button
      onClick={() => setDark(!dark)}
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        position: 'relative',
        width: '52px',
        height: '28px',
        borderRadius: '14px',
        border: '1.5px solid',
        borderColor: dark ? 'rgba(34,211,238,0.4)' : 'rgba(8,145,178,0.3)',
        background: dark
          ? 'rgba(34,211,238,0.08)'
          : 'rgba(8,145,178,0.12)',
        cursor: 'pointer',
        transition: 'background 0.35s, border-color 0.35s',
        flexShrink: 0,
        outline: 'none',
      }}
    >
      {/* Track icons */}
      <span style={{
        position: 'absolute',
        left: '6px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '11px',
        opacity: dark ? 0.4 : 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        lineHeight: 1,
      }}>☀️</span>

      <span style={{
        position: 'absolute',
        right: '6px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '11px',
        opacity: dark ? 0 : 0.4,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        lineHeight: 1,
      }}>🌙</span>

      {/* Thumb */}
      <span style={{
        position: 'absolute',
        top: '3px',
        left: dark ? '26px' : '3px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: dark
          ? 'rgba(34,211,238,0.9)'
          : 'rgba(8,145,178,0.85)',
        transition: 'left 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.35s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        boxShadow: dark
          ? '0 0 8px rgba(34,211,238,0.5)'
          : '0 0 8px rgba(8,145,178,0.4)',
      }}>
        {dark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
