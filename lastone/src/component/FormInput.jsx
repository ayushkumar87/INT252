//forminput.jsx
import React, { useState } from 'react'

const FormInput = ({onSubmitData}) => {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")

    const handleclick=(e)=>{
        e.preventDefault();
        onSubmitData({name,age})
        setName("")
        setAge("")
    }

  return (
    <div>
      <form onSubmit={handleclick}>
        <input type="text" placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="number" value={age} placeholder='enter number' onChange={(e)=>{setAge(e.target.value)}}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FormInput
