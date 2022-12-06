import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from './components/Home/Home.jsx'
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route exact path='/pokemons'>
        <Home/>
      </Route>
      <Route exact path='/pokemons/:id'>
        <Details/>
      </Route>
      <Route exact path='/create'>
        <Create/>
        </Route> 
    </div>
  );
}

export default App;
