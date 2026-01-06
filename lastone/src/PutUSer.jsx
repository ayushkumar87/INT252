import React, { useState } from "react";
import axios from "axios";

const PutUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { name, email }
      );

      console.log("Updated user:", response.data);
      setSuccess(true);

      setId("");
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div>
      <h2>Update User (PUT)</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="number"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="New name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="New email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Update User</button>
      </form>

      {success && <p>User updated successfully ✅</p>}
    </div>
  );
};

export default PutUser;
