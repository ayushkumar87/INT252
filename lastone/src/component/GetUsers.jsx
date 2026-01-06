import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GetUsers = () => {
    const [users,setUSers]=useState([])
    const [showUsers, setShowUsers] = useState(false); // toggle display
    const [loading, setLoading] = useState(true); // loading state

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const response=await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(response.data)
                setUSers(response.data)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchUsers();
    },[])

    if(loading) return <p>Loading users...</p>
  return (
    <div>
        <h2>Users List(get)</h2>


        {/* {users.map((user,idx)=>{
            return(
                <div key={idx}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })} */}

        <button onClick={()=>{
            setShowUsers(!showUsers)
        }}>
            {showUsers? "Hide Users":"Show Users"}
        </button>

        {/* Display users only if showUsers is true */}

        {showUsers && (
            <div>
            {users.map((user)=>{
                return(
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
            </div>
        )}


    </div>
  )
}

export default GetUsers
