// import logo from './logo.svg';
import { Container } from "reactstrap";
import "./App.css";
import Button from "./components/ButtonComp/ButtonComp";
import Heading from "./components/Heading/Heading";
import TodoWrapper from "./components/Todo/TodoWrapper";

function App() {
  const eventHandler = (eventName) => {
    alert("Click BUtton === " + eventName);
  };
  return (
    <div className="App">
      <Container>
        <TodoWrapper />
      </Container>
      <Heading text="" />
      <Heading text="dgfh" />
      <Button
        type="button"
        text="Add"
        color="primary"
        onClick={() => {
          eventHandler("Add");
        }}
      />
    </div>
  );
}

export default App;
