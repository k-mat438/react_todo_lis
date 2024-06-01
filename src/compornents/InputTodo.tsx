import { FC } from 'react';
import { InputTodoProps } from "../types/inputTodo";

export const InputTodo: FC<InputTodoProps> = (props) => {
  const { todoText, onChangeText, onClickAdd } = props;
  return (
    <div className='Area'>
      <input type="text" className='addInput' value={todoText} onChange={onChangeText} />
      <button onClick={onClickAdd}>Save</button>
    </div>
  );
};

