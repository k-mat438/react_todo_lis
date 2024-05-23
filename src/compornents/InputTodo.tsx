import { FC } from 'react';
import { InputTodoProps } from "../types/inputTodo";

export const InputTodo: FC<InputTodoProps> = (props) => {
  const { todoText, onChangeText, onClickAdd } = props;
  return (
    <div>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button onClick={onClickAdd}>Save</button>
    </div>
  );
};

