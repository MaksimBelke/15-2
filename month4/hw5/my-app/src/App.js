import React, {useState } from 'react';
import './App.css';

function App() {

  const [input,setInput] = useState({
    product:"",
    price:"",
    count:"",
  })
  
  return (
    <div className="App">

      <input type="text" onChange={(e)=> setInput({...input, product: e.target.value})} value ={input.product} placeholder='product' />
      
      <input type="text" onChange={(e)=> setInput({...input, price: e.target.value})} value ={input.price} placeholder='ptice' />
      
      <input type="text" onChange={(e)=> setInput({...input, count: e.target.value})} value ={input.count} placeholder='count' />
      
      <button onClick={()=> console.log(input)}>Добавить товар</button>

    </div>
  );
}

export default App;
