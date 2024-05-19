import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { ToDo } from "./ToDo";
import { TaskCounter } from "./TaskCounter";
// import { InputTodo } from "./InputTodo";


function App() {

  const [ todoText, setTodoText ] = useState<string>("");
  const [ todos, setTodos ] = useState<Array<string>>(["タスク１","タスク２"]);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos,todoText]
    setTodos(newTodos)
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {/* <InputTodo /> */}
      <input type="text" value={todoText} onChange={onChangeText}/>
      <button onClick={onClickAdd}>Save</button>
      <TaskCounter />
      <ToDo todos={todos}/>
    </div>
  );
}

export default App;
