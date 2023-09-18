import React, { useEffect, useState } from "react";
import axios from "axios";
import USerCard from "./UserCard";

const UserList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        padding: "2%",
      }}
    >
      {usersList.map((users) => {
        return <USerCard key={users.id} name={users.name} />;
      })}
    </div>
  );
};
export default UserList;
