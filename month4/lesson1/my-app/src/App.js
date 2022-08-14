
import './App.css';

function Header () {

  return(
 <>
 <Title/>
    <ul>
      <li>Main page</li>
      <li>About page</li>
      <li>Contact page</li>
    </ul></>
  );
}

function Content () {

  return (
  <>
  <Title/>
    <p>lorem lorem lorem</p>
  </>
  );
}

function Title () {

  return (
    <h1>Some title</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
