import React from 'react'
import { UserContext } from "./context/UserContext"
import { useState } from 'react'
import Dashboard from './Dashboard'
import Login from './Login'
const App = () => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <Dashboard /> : <Login />}
    </UserContext.Provider>
  )
}

export default App
