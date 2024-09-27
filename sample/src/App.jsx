import {  useState } from 'react';
import "./index.css";

const App = () => {
  const[advice, setadvice] = useState("Please Click Button to Get Advice");
   const[count, setcount] = useState(0);

async function getadvice(){
  const res = await fetch("https://api.adviceslip.com/advice");
  //console.log(res);
  const data= await res.json();
  //console.log(data);
  setadvice(data.slip.advice);
  setcount((c) => c+1);
}


  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getadvice}>Get Advice</button>
      <p>
    You have read <b>{count}</b> pieces of advice
    </p>
    </div>
  );
};



export default App
