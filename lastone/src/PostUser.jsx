import React, { useState } from "react";
import axios from "axios";


const PostUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [sucess,setSucess]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          email
        },
        setSucess(true)

      );

      // Add new user to UI
    //   setUsers(prev => [...prev, response.data]);
        const copy=[...users]
        copy.push(response.data)
        setUsers(copy)

      setName("");
      setEmail("");
    } catch (err) {
      console.error("Error posting user:", err);
    }
  };

  return (
    <div>
      <h2>Create User (POST)</h2>
        console.log(response.data)
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>

      {sucess && <p>User's added sucessfully</p>}  
      <h3>Created Users</h3>
      {users.map((user, idx) => (
        <div key={idx}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
    
  );
};

export default PostUser;
