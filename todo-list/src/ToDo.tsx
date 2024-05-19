type TodoType = {
  todos: Array<string>;
}

export const ToDo = (props: TodoType) => {
  const { todos } = props
  return(
    <div>
      {/* <ul> */}
        {/* <li> */}
          <p>{todos}</p>
          <button>編集</button>
          <button>削除</button>
        {/* </li> */}
      {/* </ul> */}
    </div>
  )
}