import {useColorScheme} from '@mui/joy'
import {BsMoonFill, BsSunFill} from 'react-icons/bs'

export default function ThemeToggle() {
  const {mode, setMode} = useColorScheme()

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
      }}
    >
      {mode === 'light' ? (
        <BsMoonFill
          size={28}
          className="text-slate-800 hover:text-slate-950 transition-colors duration-300"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
          }}
        />
      ) : (
        <BsSunFill
          size={28}
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(251, 191, 36, 0.5))'
          }}
        />
      )}
    </button>
  )
}
