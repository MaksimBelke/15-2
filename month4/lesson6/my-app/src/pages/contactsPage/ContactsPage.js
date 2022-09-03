import React from "react"

class ContactsPage extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            user: {
                Lastname:"",
                email:"",
                age:0
            }
        }
    }

    changinput = (e) => {
    
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    submit =() =>{
        console.log(this.state)
    }

    


    render(){
        return(

            <div>
                <input
                    type = "text"
                    placeholder="lastName"
                    name="LastName"
                    onChange={this.changinput}
                />
                <input
                    type = "text"
                    placeholder="email"
                    name="email"
                    onChange={this.changinput}
                /> 
                <input
                    type = "text"
                    placeholder="age"
                    name="age"
                    onChange={this.changinput}
                />


                <button onclick ={this.submit}>submit</button>

            </div>
        );
    }
}


export default ContactsPage;