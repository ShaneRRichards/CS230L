import Card from './Card';
import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="Class">CS 230L</h1>
      <h2 className="Section">Section - 001</h2>
      <p className="ID">WVU ID: 800375608</p>
      <p className="Greeting">Hi I am Shane</p>
      <Card />
    </div>
  );
}

export default App;
