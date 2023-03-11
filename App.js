import './App.css';

function MyButton({label}) {
  return (
    <button className="CalcButton">
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

  export default function App() {
    const numberClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      console.log(value);
    }
    return(
    <div className="App">
      <h1> Welcome to my app </h1>
      <Display  display={0}/>
      <div className="ButtonContainer">
      <MyButton label={7} onClick={numberCLickHandler}/>
      <MyButton label={8} onClick={numberCLickHandler}/>
      <MyButton label={9} onClick={numberCLickHandler}/>
      <MyButton label={"+"} onClick={operatorCLickHandler}/>
      <MyButton label={4} onClick={numberCLickHandler}/>
      <MyButton label={5} onClick={numberCLickHandler}/>
      <MyButton label={6} onClick={numberCLickHandler}/>
      <MyButton label={"-"} onClick={operatorCLickHandler}/>
      <MyButton label={1} onClick={numberCLickHandler}/>
      <MyButton label={2} onClick={numberCLickHandler}/>
      <MyButton label={3} onClick={numberCLickHandler}/>
      <MyButton label={"*"} onClick={operatorCLickHandler}/>
      <MyButton label={"C"} onClick={operatorCLickHandler}/>
      <MyButton label={0} onClick={numberCLickHandler}/>
      <MyButton label={"="} onClick={operatorCLickHandler}/>
      <MyButton label={"+"} onClick={operatorCLickHandler}/>
      </div>
    </div>
  );
}


