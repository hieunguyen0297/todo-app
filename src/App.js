import React, { useState}  from 'react'
import Form from "./components/Form";
import TodoList from './components/TodoList'

function App() {
  const [count, setCount ] = useState(0)
  const [value, setValue] = useState('')

  const [ todos, setTodos ] = useState([])

  const increment = () => {
    setCount(count + 1)
  }

 
 

  return (
    <div className="container">
      <header className="bg-primary text-light mb-2 text-center">
        <h1>TODO APP</h1>
        <h2>Counter {count}</h2>
        <button className='mr-2 ' onClick={increment}>Plus</button>
        <button onClick={() => setCount(count -1)}>Minus</button>
      </header>
      <Form todos={todos} setTodos={setTodos} value={value} setValueInput={setValue}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
