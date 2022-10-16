import Main from "./components/mainComponent";
import {Routes,Route} from 'react-router-dom';
import AboutChar from "./pages/aboutCharecter";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path={"/char/:id"} element={<AboutChar/>}> </Route>
  </Routes>
  </>
  );
}

export default App;