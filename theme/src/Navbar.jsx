import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {
    const {theme,setTheme}=useContext(ThemeContext)

    
  return (
    <>
        <div>
        <h2>NAvbar</h2>
        <button onClick={()=>setTheme(theme === "light" ? "dark" :"light")}>Toggle Theme</button>
        </div>
        <p>{theme}</p>
    </>
    
  )
}

export default Navbar
