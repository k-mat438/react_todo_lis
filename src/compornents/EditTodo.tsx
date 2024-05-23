import { FC } from 'react';
import { EditTodoProps } from "../types/editTodo";

export const EditTodo: FC<EditTodoProps> = (props) => {
  const {editText, onChangeEditText, onClickEditSave, index} = props
  return (
    <div>
      <input type="text" value={editText} onChange={onChangeEditText} />
      <button onClick={()=>onClickEditSave(index)}>Save</button>
    </div>
  );
};

