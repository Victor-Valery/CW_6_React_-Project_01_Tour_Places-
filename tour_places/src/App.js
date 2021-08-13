
import './App.css';
import Card from "../src/components/cards/Card";
import Navbar from "../src/components/navbar/Navbar";
import Header from "../src/components/header/Header";
import {places} from "./helper/Data";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {places.map(x =>(<Card placeName={x.placeName} placeImgSrc={x.placeImg} placeText={x.placeText}></Card>))}
    </div>
  );
}

export default App;
