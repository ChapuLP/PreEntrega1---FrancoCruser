import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import ItemListComponent from "./component/ItemListComponent";
import { FaCar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1>E-Commerce</h1>
      <hr />
      <NavBar />
      <FaCar />
      <hr />
      <ItemListComponent />
    </div>
  );
}

export default App;
