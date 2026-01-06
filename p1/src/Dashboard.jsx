import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'


const Dashboard = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <div>
      <h2>Welcome {user}</h2>
      <button onClick={() => {
        setUser("")
      }}>Logout</button>
    </div>
  )
}

export default Dashboard
