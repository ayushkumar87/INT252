import React, { useEffect, useState } from 'react'

const Usereff2 = () => {
    const [time,setTime]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(time+1)
        },1000)

        // if(time===3)
        // return clearInterval(timer)
    })

  return (
    <div>
      <h3>{time} in seconds</h3>
    </div>
  )
}

export default Usereff2
