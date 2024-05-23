import { FC } from "react"
import { countProps } from "../types/taskCounter"

export const TaskCounter: FC<countProps> = (props) => {
  const { total, complete, incomplete } = props
  return (
    <div className="Area">
      <div className="counter">全てのタスク数: <span className="variable">{total}</span></div>
      <div className="counter">To do 完了タスク数: <span className="variable">{complete}</span></div>
      <div className="counter">To do 未完了タスク数: <span className="variable">{incomplete}</span></div>
    </div>
  )
}

