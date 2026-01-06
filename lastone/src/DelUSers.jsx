import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DelUsers = () => {
  const [users, setUSers] = useState([])
  const [showUsers, setShowUsers] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUSers(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const handleDelete = (id) => {
    setUSers(prevUsers =>
      prevUsers.filter(user => user.id !== id)
    )
  }

  if (loading) return <p>Loading users...</p>

  return (
    <div>
      <h2>Users List (GET)</h2>

      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "Hide Users" : "Show Users"}
      </button>

      {showUsers && (
        <div>
          {users.map(user => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DelUsers;
