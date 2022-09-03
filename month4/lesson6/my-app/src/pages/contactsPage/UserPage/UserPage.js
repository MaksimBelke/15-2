import React from "react";


class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }


    getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({users: data}))
    }

    render() {
        return (
            <div>
                <button onClick={this.getUser}>get users</button>
                <ul>
                    {
                        this.state.users.map(user => <li key={user.id}>{user.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default UsersPage;

