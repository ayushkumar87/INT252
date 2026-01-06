import React from 'react'
import { LoginContext } from '../App'

const Incontext = () => {
  
    
        const login=useContext(LoginContext)
        console.log(login)
        return <h3>Single post</h3>

    
  
}

export default Incontext
