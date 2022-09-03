import React from "react";



class MainPage extends React.Component{

    constructor(props) {
        super(props)
        this.state = {count:0}
    }

    componentDidMount(){
        this.sayHello()
    }

    componentDidUpdate(prev){
        if(prevState.count !== this.state.count){}
        console.log(this.state.count)
    }

    sayHello = () =>{
        console.log("hello")
    }

    increment = ()=>{
        this.setState({count:this.state.count +1})
        
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onclick={this.increment}>+</button>
            </div>
        );
    }
}

export default MainPage;