import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { useState } from 'react'

const Login = () => {
    const {setUser}=useContext(UserContext)
    const [name,setName]=useState("")

    const handleLogin=()=>{
        setUser(name)
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
