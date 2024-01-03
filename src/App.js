
import './App.css';
import { CounterContext } from './Context/CounterC';
import Counter from './components/Counter';
import { useContext } from 'react';

function App() {
  const counterState = useContext(CounterContext)
  console.log(counterState)
  return (
    <div className="App">
      <div>
        <h1>Count is {counterState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
