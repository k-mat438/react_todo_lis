import { FC } from "react";

type todo = {
  task: string;
  completed: boolean;
}

type TodoType = {
  todos: Array<todo>;
  onClickEdit: (index: number) => void;
  onClickDelete: (index: number) => void;
  // completed? = false;
  onClickToggle: (index: number) => void;
}

export const ToDo: FC<TodoType> = (props) => {
  const { todos, onClickEdit, onClickDelete, onClickToggle } = props;
  
  // const onClickToggle = () => {
  //   alert()
  // }
  return(
      <ul>
        <div>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" checked={false} onChange={() => onClickToggle(index)}/>
              <p>{todo.task}</p>
              <button onClick={() => onClickEdit(index)}>編集</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          ))}
        </div>       
      </ul>
  )
}