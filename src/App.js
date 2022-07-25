import React, { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  const [isDark, setDark] = useState(false);
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(url);

      let data = await response.json();

      setUsers(data);
    }
    getUsers();
  }, []);

  console.log("users", users);

  return (
    <>
      <div className="navbar">
        <h1>My React APP</h1>
        <button
          onClick={() => setDark((prev) => !prev)}
          className="app__button">
          Light Switch
        </button>
      </div>

      

      <div className={`app ${isDark && "darkmode"}`}>
        <div className="app__userlist">
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
