type TodoType = {
  todos: Array<string>;
  onClickEdit: (index: number) => void;
  onClickDelete: (index: number) => void;
}

export const ToDo = (props: TodoType) => {
  const { todos, onClickEdit, onClickDelete } = props;
  
  return(
      <ul>
        <div>
          {todos.map((todo, index) => (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => onClickEdit(index)}>編集</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          ))}
        </div>       
      </ul>
  )
}