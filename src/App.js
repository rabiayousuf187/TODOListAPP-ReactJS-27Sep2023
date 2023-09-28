// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';

function App() {
  const eventHandler = (eventName) =>{
    alert("CLick BUtton === ", eventName)
  }
  return (
    <div className="App">
      <Heading text="Welcome"/>
      <Heading text="dgfh"/>
      <Button text="Add" />
    </div>
  );
}

export default App;
