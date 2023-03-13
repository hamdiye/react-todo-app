import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TodoWrapper from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <div className='container'>
        My Todos
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
