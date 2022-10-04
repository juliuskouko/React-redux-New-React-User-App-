import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";

function App() {
  const [users, setUsers] = useState([
    //   { name: "Mason Mount", position: "Midfielder", jerseyNumber: 19, id: "1659431731207" },
    //   { name: "Hudson-Odoi", position: "Midfielder", jerseyNumber: 20, id: "1659431734534" },
    //
  ]);

  const handleSubmit = (user) => {
    setUsers([
      ...users,
      {
        name: user.name,
        team: user.team,
        position: user.position,
        id: new Date().getTime().toString(),
      },
    ]);
  };

  // delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // edit user
  const handleEdit = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddUserForm addUser={handleSubmit} />
          </div>
          <div className="col-md-6">
            <AllUsers
              userData={users}
              deleteUser={deleteUser}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
