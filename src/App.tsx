import { useState, ChangeEvent } from 'react';
import './App.css';
import { ToDo } from "./compornents/ToDo";
import { TaskCounter } from "./compornents/TaskCounter";
import { InputTodo } from "./compornents/InputTodo";
import { todo } from "./types/todo"

function App() {
  const [ todoText, setTodoText ] = useState<string>('');
  const [ todos, setTodos ] = useState<Array<todo>>([{task: "タスク1", completed:false, editing:false}]);
  const [ editText, setEditText ] = useState<string>('');

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
  const onChangeEditText = (event: ChangeEvent<HTMLInputElement>) => setEditText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos,{task: todoText, completed: false, editing:false}];
    setTodos(newTodos);
    setTodoText('');
  };

  const onClickEdit = (index: number) => {
    const editTodos = [...todos];
    editTodos[index].editing = true; 
    setTodos(editTodos);
    setEditText(editTodos[index].task);
  }

  const onClickEditSave = (index: number) => {
    const newTodos = [...todos];
    if (editText === "") return;
    newTodos[index].task = editText;
    newTodos[index].editing = false;
    setEditText('');
    setTodos(newTodos);
  }

  const onClickDelete = (index: number) => {
    let result = window.confirm('本当に削除しますか');
    if (result) {
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
    }
  }

  const onClickToggle = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <InputTodo todoText={todoText} onChangeText={onChangeText} onClickAdd={onClickAdd}/>
      <TaskCounter todos={todos}/>
      <ToDo todos={todos} onClickEdit={onClickEdit} onClickDelete={onClickDelete} onClickToggle={onClickToggle} editText={editText} onChangeEditText={onChangeEditText} onClickEditSave={onClickEditSave}/>
    </>
  );
}

export default App;
