import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import {db} from "../src/Firebase/config"
import { useDispatch } from "react-redux";
import { AddNewUser } from "./actions/userActions";

function App() {

  const dispatch = useDispatch();

	useEffect(() => {
		const readData = async () => {
			const q = query(collection(db, "users"), );
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				const usersArr = [];
				querySnapshot.forEach((doc) => {
					usersArr.push(doc.data());
				});
				dispatch(AddNewUser(usersArr));
				// console.log(usersArr);
			});
		};
		readData();
	}, []);

  const [users, setUsers] = useState([
    //   { name: "Mason Mount", email: "Midfielder", gen: 19, id: "1659431731207" },
    //   { name: "Hudson-Odoi", email: "Midfielder", gen: 20, id: "1659431734534" },
    //
  ]);

  const handleSubmit = (user) => {
    setUsers([
      ...users,
      {
        name: user.name,
        email: user.email,
        gen: user.gen,
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

  // Listen to multiple documents in a collection  
  // const q = query(collection(db, "users"), );
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   const users = [];
  //   querySnapshot.forEach((doc) => {
  //     users.push(doc.data().name);
  //   });
  //   console.log("Current cities in CA: ", users.join(", "));
  // });

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
