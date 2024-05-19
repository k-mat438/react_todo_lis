import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { ToDo } from "./compornents/ToDo";
import { TaskCounter } from "./compornents/TaskCounter";
import { InputTodo } from "./compornents/InputTodo";

type todo = {
  task: string;
  completed: boolean;
}

function App() {
  const [ todoText, setTodoText ] = useState<string>("");
  const [ todos, setTodos ] = useState<Array<todo>>([{task: "タスク1", completed:false}]);

  const [ totalTodo, setTotal ] = useState<number>(1);
  const [ completeCount, setComplete ] = useState<number>(0);
  const [ incompleteCount, setIncomplete ] = useState<number>(1);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
  const updateCounts = (newTodos: Array<todo>) => {
    setTotal(newTodos.length);
    setIncomplete(newTodos.filter(todo => !todo.completed).length);
    setComplete(newTodos.filter(todo => todo.completed).length);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos,{task: todoText, completed: false}];
    setTodos(newTodos);
    setTodoText('');
    updateCounts(newTodos);
  };

  const onClickEdit = (index: number) => {
    alert(index);
  }

  const onClickDelete = (index: number) => {
    let result = window.confirm('本当に削除しますか');
    if (result) {
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
      updateCounts(newTodos);
    }
  }

  const onClickToggle = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    updateCounts(newTodos);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <InputTodo todoText={todoText} onChangeText={onChangeText} onClickAdd={onClickAdd}/>
      <TaskCounter total={totalTodo} complete={completeCount} incomplete={incompleteCount}/>
      <ToDo todos={todos} onClickEdit={onClickEdit} onClickDelete={onClickDelete} onClickToggle={onClickToggle}/>
    </>
  );
}

export default App;
