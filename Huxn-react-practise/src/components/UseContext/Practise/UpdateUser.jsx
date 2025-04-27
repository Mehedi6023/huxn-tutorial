import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
