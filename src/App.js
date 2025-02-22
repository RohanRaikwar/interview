import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import BattlesCardWrapper from "./components/BattelsCardWrapper";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="card-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <BattlesCardWrapper />
    </div>
  );
}

export default App;
