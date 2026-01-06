import React, { useEffect, useState } from 'react'

const Useeff1 = () => {
    const [count,setCount]=useState(0);
    const [othercount,setOtherCount]=useState(5)

    useEffect(()=>{
        document.title=`${count} new mesg`
    },[count])
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase</button>

      <h3>Other Count : {othercount}</h3>
      <button onClick={()=>{
        setOtherCount(othercount+5)
      }}>Increase by 5</button>
    </div>
  )
}

export default Useeff1
