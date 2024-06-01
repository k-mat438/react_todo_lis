import { FC } from 'react';
import { EditTodoProps } from "../types/editTodo";

export const EditTodo: FC<EditTodoProps> = (props) => {
  const {editText, onChangeEditText, onClickEditSave, index} = props
  return (
    <div className='editInput'>
      <input type="text" className='addInput' value={editText} onChange={onChangeEditText} />
      <button onClick={()=>onClickEditSave(index)}>Save</button>
    </div>
  );
};

