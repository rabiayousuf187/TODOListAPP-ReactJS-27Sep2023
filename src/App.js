// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';

function App() {
  const eventHandler = (eventName) =>{
    alert("Click BUtton === "+eventName)
  }
  return (
    <div className="App">
      <Heading text=""/>
      <Heading text="dgfh"/>
      <Button type="button" text="Add" color="primary" onClick={()=>{eventHandler('Add')}} />
    </div>
  );
}

export default App;
