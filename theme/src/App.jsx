import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import Navbar from './Navbar'

const App = () => {
  const [theme,setTheme]=useState("light")
  const appStyle={
    backgroundColor: theme ==="light"? "#ffffff":"#121212",
    minHeight:"100vh",
    color:theme ==="light"? "#121212":"#ffffff"
  }
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div style={appStyle}>
          <Navbar/>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
