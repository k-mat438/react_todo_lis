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

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos,{task: todoText, completed: false}];
    setTodos(newTodos);
    setTodoText('');
    const newTotalTodo = totalTodo + 1;
    setTotal(newTotalTodo);
    const newIncompleteCount = incompleteCount + 1;
    setIncomplete(newIncompleteCount);
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
      const newTotalTodo = totalTodo - 1;
      setTotal(newTotalTodo);
      const newIncompleteCount = incompleteCount - 1;
      setIncomplete(newIncompleteCount);
    }
  }

  const onClickToggle = (index: number) => {
    alert(index);
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
