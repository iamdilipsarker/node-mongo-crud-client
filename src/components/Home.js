import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div>
      <h3>Users:{users.length} </h3>
      {users.map((user) => (
        <p key={user._id}>
          Name: {user.name} Email: {user.email} <button onClick>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
