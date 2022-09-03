import React from "react"
import{useState} from"react"

function CountPage(props){

    const[count,setcount]=useState(0)



    const increment = () => {
        setcount(count +1)
    }
    const increment1 = () => {
        setcount(count -1)
    }
    
    


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                +
            </button>
            <button onClick={increment1}>
                -
            </button>
        </div>
    );
}

export default CountPage;