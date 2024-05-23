import { FC } from "react";
import { EditTodo } from "./EditTodo";
import { TodoListType } from "../types/todoList";

export const ToDo: FC<TodoListType> = (props) => {
  const { todos, onClickEdit, onClickDelete, onClickToggle, editText, onChangeEditText, onClickEditSave} = props;
  
  return(
      <ul>
        <div>
          {todos.map((todo, index) => (
            <li key={index} className="ToDo-item">
              <input type="checkbox" checked={todo.completed} onChange={() => onClickToggle(index)}/>
              {todo.editing ? (
                <EditTodo editText={editText} onChangeEditText={onChangeEditText} onClickEditSave={onClickEditSave} index={index}/>
              ) : (
                <p>{todo.task}</p>
              )}
              {todo.editing ? (<></>) : (<button onClick={() => onClickEdit(index)}>編集</button>)}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          ))}
        </div>       
      </ul>
  )
}