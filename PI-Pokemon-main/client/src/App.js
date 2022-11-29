import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/create'>
        <Form/>
      </Route>
    </div>
  );
}

export default App;
