import React, {useMemo, useState} from 'react';
import './App.css';

const ExpensiveComponent = ({number}) => {
  const computeExpensiveValue = (num) => {
     console.log("Computing expensive value...");

     return num * 2;
  };

  const expensiveValue = useMemo(() => computeExpensiveValue(number),[number]) ;

  return (
    <div>
      <p>Number: {number}</p>
      <p>Computed Value: {expensiveValue}</p>
    </div>
  );
};

const App = () => {
  const [number, setNumber] = useState(1);
  return (
  <div>
    <button onClick={() => setNumber(prev => prev + 1)}>Increment Number</button>
    <ExpensiveComponent number={number} />
  </div>
  )
}
export default App;
