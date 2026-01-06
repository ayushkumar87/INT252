import React from 'react'
import { useContext } from 'react'
import { LoginContext } from './context/LoginContextProvider'

const ChildComponent = () => {
  const login = useContext(LoginContext)
  console.log(login)
  return (
    <div>
      <h3>Single Post</h3>
      <p>Context Value: {JSON.stringify(login)}</p>
    </div>
  )
}

export default ChildComponent
