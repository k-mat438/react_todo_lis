import React, { ChangeEvent, FC } from 'react';

type InputTodoProps = {
  todoText: string;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}

export const InputTodo: FC<InputTodoProps> = (props) => {
  const { todoText, onChangeText, onClickAdd } = props;
  return (
    <div>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button onClick={onClickAdd}>Save</button>
    </div>
  );
};

