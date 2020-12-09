import logo from "./logo.svg";
import "./App.css";
import ListOfRecipes from "./components/listOfRecipes";
import SeasonalVegetables from "./components/seasonalVegetables";

function App() {

  
  return (
    <div className="App">
      <SeasonalVegetables />
      <ListOfRecipes />
    </div>
  );
}

export default App;
