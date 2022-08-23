
import NamePage from "./pages/namePage/NamePage";
import AgePage from "./pages/agePage/AgePage";

const user = {
  name: "Anna",
  age: "19"
}

function App() {
  return (
    <div className="App">
      <NamePage items ={user}/>
      <AgePage items = {user}/>
    </div>
  );
}

export default App;
