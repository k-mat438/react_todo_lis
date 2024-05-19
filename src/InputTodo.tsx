import React, { ChangeEvent, FC } from 'react';

interface InputTodoProps {
  todoText: string;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}

export const InputTodo: FC<InputTodoProps> = ({ todoText, onChangeText, onClickAdd }) => {
  return (
    <div>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button onClick={onClickAdd}>Save</button>
    </div>
  );
};

