import { FC } from "react"
import { todo } from "../types/todo";

type todos = {
  todos: Array<todo>;
}
export const TaskCounter: FC<todos> = (props) => {
  const { todos } = props
  const total = todos.length
  const complete = todos.filter(todo => todo.completed).length
  const incomplete = todos.filter(todo => !todo.completed).length
  return (
    <div className="Area">
      <div className="counter">全てのタスク数: <span className="variable">{total}</span></div>
      <div className="counter">To do 完了タスク数: <span className="variable">{complete}</span></div>
      <div className="counter">To do 未完了タスク数: <span className="variable">{incomplete}</span></div>
    </div>
  )
}

