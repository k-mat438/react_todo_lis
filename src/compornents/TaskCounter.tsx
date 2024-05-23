import { FC } from "react"
import { countProps } from "../types/taskCounter"

export const TaskCounter: FC<countProps> = (props) => {
  const { total, complete, incomplete } = props
  return (
    <>
      <div>全てのタスク数: {total}</div>
      <div>To do 完了タスク数: {complete}</div>
      <div>To do 未完了タスク数: {incomplete}</div>
    </>
  )
}

