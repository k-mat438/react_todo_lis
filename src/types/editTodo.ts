import { ChangeEvent } from 'react';

export type EditTodoProps = {
  editText: string;
  onChangeEditText: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEditSave: (index: number) => void;
  index: number;
}