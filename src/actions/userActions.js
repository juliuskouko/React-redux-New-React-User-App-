export const AddNewUser = (newUser) => {
  return {
    type: "ADD_NEW_USER",
    payload: newUser,
  };
};
export const DeleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const EditUser = (data) => {
  return {
    type: "EDIT_USER",
    payload: { data },
  };
};

// export const getAllUsers = () => {
//   return (dispatch, state , {getFirestore}) => {
//     getFirestore().collection("users").onSnapshot((snapshot)=>{
//       let users = [];
//       snapshot.forEach((doc)=>{
//         users.push(doc.data())
//       });
//       console.log(users)
//       dispatch({
//         type: "SET_ALL_USERS",
//         payload: users
//       })
//     },
//     (error)=>{}
//     )
//   }
// }
