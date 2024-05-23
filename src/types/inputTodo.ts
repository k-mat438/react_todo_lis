import { ChangeEvent } from 'react';

export type InputTodoProps = {
  todoText: string;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}