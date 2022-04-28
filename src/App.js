import "./App.css";
import Header from "./Components/Header";
import Roles from "./Components/Roles";
import Backlogs from "./Components/Backlogs";
import Activities from "./Components/Activities";
import Estimering from "./Estimering";
import Artefacts from "./Artefacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Roles />
      <Backlogs />
      <Activities />
      <Artefacts />
      <Estimering />
    </div>
  );
}

export default App;
