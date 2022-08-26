import React from 'react';

function UsersList({userList}) {

  const getUser = (e) => {
    console.log(e.target.dataset.id)
  }

  return (
    <div>
      <ul>
        {
          userList.map((user,key) => <li key={user.id}>
            name:{user.name} age: {user.age}
            <button onClick={getUser} data-id = {user.id}>show</button>
          </li>)
        }
      </ul>
    </div>
  );
}

export default UsersList;