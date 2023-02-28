import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${user.name}`
    );
    console.log("deleting user with id:", user.id);
  };
  return (
    <div>
      <h3>Users:{users.length} </h3>
      {users.map((user) => (
        <p key={user._id}>
          Name: {user.name} Email: {user.email}{" "}
          <button onClick={() => handleDelete(user)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
