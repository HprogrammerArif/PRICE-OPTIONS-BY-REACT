import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/Navbar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";
// import Navbar2 from "./Components/Navbar/Navbar2";

function App() {

  
  return (
    <>
      <NavBar></NavBar>
      {/* <Navbar2/> */}
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-6xl bg-cyan-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
