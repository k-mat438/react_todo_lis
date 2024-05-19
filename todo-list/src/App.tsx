import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { ToDo } from "./ToDo";
import { TaskCounter } from "./TaskCounter";
import { InputTodo } from "./InputTodo";


function App() {

  const [ todoText, setTodoText ] = useState<string>("");
  const [ todos, setTodos ] = useState<Array<string>>(["タスク１","タスク２"]);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos,todoText];
    setTodos(newTodos);
    setTodoText('');
  };

  const onClickEdit = (index: number) => {
    alert(index)
  }

  const onClickDelete = (index: number) => {
    alert(index);
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <InputTodo todoText={todoText} onChangeText={onChangeText} onClickAdd={onClickAdd}/>
      <TaskCounter />
      <ToDo todos={todos} onClickEdit={onClickEdit} onClickDelete={onClickDelete}/>
    </>
  );
}

export default App;
