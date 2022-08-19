import {Title,TitleTwo} from "../../components/Title";

function MainPage ({info}) {
  return(
    <>
      <h1>{info.name}</h1>
      <h3>{info.model}</h3>
    </>
  )
}


export default MainPage;