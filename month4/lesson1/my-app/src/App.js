
import './App.css';
//
// function User (props) {
//   return (
//     <ul>
//       <li>name: {props.name}</li>
//       <li>lastName:{props.lastName}</li>
//       <li>age: {props.age}</li>
//     </ul>
//   );
// }
//
// function Product (props) {
//   return(
//     <ul>
//       <li>name:{props.name}</li>
//       <li>price: {props.price}</li>
//     </ul>
//   );
// }
//
//
// function Title(props) {
// console.log(props.title)
//   return (
//     <h1>Some title</h1>
//   )
// }
// function MainPage () {
//   return (
//     <>
//       <Title title="Hello World"/>
//       <p>lorem lorem lorem</p>
//       <User name= "Maksim" lastName="Belke" age="29"/>
//       <Product name ="Telephone" price= "15000Com"/>
//       <Product name = "Notebook" price= "40000Com"/>
//       <Product name = "Book" price= "1000Com"/>
//     </>
//   );
// }

import MainPage from "./pages/mainPage/MainPage";
import AboutPages from "./pages/aboutPages/AboutPages";


function App() {
  const info = {
    title: "I am title",
    body: "Lorem inpsum bla bla bla"
  }
  return (
    <div className="App">
      <AboutPages info={info}/>
    </div>
  );
}

export default App;
