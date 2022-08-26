import React from "react";
import UsersList from "../../components/usersList/UsersList";


function MainPage(props) {
  const users = [
    {
      id:1,
      name: "Maksim",
      age: 29
    },
    {
      id:2,
      name: "Anara",
      age: 25
    },
    {
      id:3,
      name: "Ioan",
      age: 21
    }

  ];
  return(
    <div>
      <h1>user list</h1>
      <UsersList userList = {users}/>
    </div>

  )
}


export default MainPage;




