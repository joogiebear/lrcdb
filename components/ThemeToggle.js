import {IconButton} from '@mui/joy'
import {useColorScheme} from '@mui/joy'
import {BsMoonFill, BsSunFill} from 'react-icons/bs'

export default function ThemeToggle() {
  const {mode, setMode} = useColorScheme()

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <IconButton
      onClick={toggleTheme}
      variant="outlined"
      color="neutral"
      className="mt-4"
      aria-label="Toggle theme"
    >
      {mode === 'light' ? <BsMoonFill /> : <BsSunFill />}
    </IconButton>
  )
}
