import { useState, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { MdBrightness2, MdBrightnessMedium} from 'react-icons/md'

export default function Nav() {
  const [theme, setTheme] = useState('dark')
  const hanldeTheme = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }

   useEffect(() => {
    // check if default system is prefer dark or not if dark then dark
    if(window.matchMedia('(prefers-color-scheme: dark)').mathces) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
     if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  return <nav className='nav'>
    <button className='logo'>
      <h1>Logo</h1>
    </button>

    <div className='flex items-center gap-8 outline-none'>
      <button onClick={hanldeTheme} className='theme'>
        { theme === 'dark'
          ? <MdBrightness2 size='25' />
          : <MdBrightnessMedium size='25' />
        }
      </button>

      <a href="https://github.com/Zeddnyx" className='git'><BsGithub size='25' /></a>
    </div>
  </nav>
}
