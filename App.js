import './App.css';
import { useState } from "react";

function MyButton({label , onClick}) {
  return (
    <button className="Calculator" onClick={onClick}>
      {label}
    </button>
  );
}

function Display({display}) {
  return (
    <div className="CalcDisplay">
    {display}
    </div>
  );
}

function App() {

  const[disp, setDisp] = useState();


  const numberClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      console.log(value);
      setDisp(value);

    }

    const operatorClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      console.log(value);
      setDisp(value);
    }

    const equalClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      console.log(value);
      setDisp(value);
    }

    const clearClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      console.log(value);
      setDisp(value);
    }
    return(
    <div className="App">
      <h1> My Calculator </h1>
      <Display display={0}/>
      <div className="ButtonContainer">
      <MyButton label={7} onClick={numberClickHandler}/>
      <MyButton label={8} onClick={numberClickHandler}/>
      <MyButton label={9} onClick={numberClickHandler}/>
      <MyButton label={"+"} onClick={operatorClickHandler}/>
      <MyButton label={4} onClick={numberClickHandler}/>
      <MyButton label={5} onClick={numberClickHandler}/>
      <MyButton label={6} onClick={numberClickHandler}/>
      <MyButton label={"-"} onClick={operatorClickHandler}/>
      <MyButton label={1} onClick={numberClickHandler}/>
      <MyButton label={2} onClick={numberClickHandler}/>
      <MyButton label={3} onClick={numberClickHandler}/>
      <MyButton label={"*"} onClick={operatorClickHandler}/>
      <MyButton label={"C"} onClick={clearClickHandler}/>
      <MyButton label={0} onClick={numberClickHandler}/>
      <MyButton label={"="} onClick={equalClickHandler}/>
      <MyButton label={"+"} onClick={operatorClickHandler}/>
      </div>
    </div>
  );
}

export default App;
