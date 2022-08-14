import './App.css';


import './App.css';

function AboutUs () {
  return(
    <>
      <h1>title</h1>
      <p>text</p>
    </>
  );
};

function Portfolio () {
  return(
    <ul>
      <li>test1</li>
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <Portfolio/>
    </div>
  );
}

export default App;

