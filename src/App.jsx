import "./App.css";
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/counterSlice'

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>CONTADOR</h1>
      <hr />
      <button className='btn' onClick={() => dispatch(decrement())}> - 1</button>
      <span>El contador actual es: {counter}</span>
      <button className='btn' onClick={() => dispatch(increment())}>+ 1 </button>
    </div>
  );
}

export default App;


