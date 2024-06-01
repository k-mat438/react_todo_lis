import { todo } from "../types/todo"
import { ChangeEvent } from "react";


export type TodoListType = {
  todos: Array<todo>;
  onClickEdit: (index: number) => void;
  onClickDelete: (index: number) => void;
  onClickToggle: (index: number) => void;
  editText: string;
  onChangeEditText: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEditSave: (index: number) => void;
}
