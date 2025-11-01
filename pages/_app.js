import {CssVarsProvider, useColorScheme} from '@mui/joy'
import {useEffect} from 'react'
import '../styles/globals.css'

function ThemeSync() {
  const {mode} = useColorScheme()

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return null
}

function App({Component, pageProps}) {
  return (
    <CssVarsProvider defaultMode="system">
      <ThemeSync />
      <Component {...pageProps} />
    </CssVarsProvider>
  )
}

export default App
