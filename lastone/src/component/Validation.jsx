import React, { useState } from 'react'

const Validation = () => {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [pno,setPno]=useState("")
    const [pass,setPass]=useState("")
    const [error,setError]=useState("")
    const [submitted, setSubmitted] = useState(false); // new state

    const handleSubmit=(e)=>{
        e.preventDefault();

        const trimedPass=pass.trim()
        const passwordRegx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[0-9]).{6,}$/

        if(name===""){
            setError("feilds is mandatory")
        }
        else if (age==="") {
            setError("Age is mandatory");
        }
        else if (pno==="") {
            setError("pno is mandatory");
        }
        else if(trimedPass===""){
            setError("pass is mandatory");
        }
        else if(Number(age)>18){
            setError("Age greater than 18 is not allowed");
        }
        else if(pno.length!=10){
            setError("Wrong phone no");
        }
        else if(!passwordRegx.test(trimedPass)){
            setError("Password must be at least 6 characters and include upper, lower, digit, and special character");
        }
        else{
            setError("")
            
            setSubmitted(true);
            // alert("Form Submitted")
        }
    }
  return (
    <div>
        {!submitted?(
        
        <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>

            <br></br>

        <input type="number" placeholder='Enter Age' value={age} onChange={(e)=>{
                setAge(e.target.value)
        }}/>

        <input type="number" placeholder='Enter number' value={pno} onChange={(e)=>{
            setPno(e.target.value)
        }}/>

        <input type="password" placeholder='enter password' value={pass}  onChange={(e)=>{
            setPass(e.target.value)
        }}/>

        {error ? <p>{error}</p>:null}        

        <button type='submit'>Submit</button>
      </form>)
      :(
        <h2>🎉 Congratulations, {name}! Your form has been submitted.</h2>
      )
    }
      
    </div>
  )
}

export default Validation
