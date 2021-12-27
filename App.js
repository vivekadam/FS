import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Todos from './Todos';

function App() {

  const [inputList,setInputList] 

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }
  return (
    <>
    <Header/ >
    <div className='main.div'>
      <div className='center_div'>
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder ="Add items" onChange={itenEvent}/>
        <button> + </button>
        
        <ol>
          <li> {inputList} </li>
          </ol>
      </div>
    </div>
    </>
    
  
  );
}

export default App;
