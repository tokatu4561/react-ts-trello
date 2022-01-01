import React from "react";
import { Task } from "./Task";

type Props = {
  inputText: string;
  taskList: any;
  setTaskList: any;
};

export const Tasks = (props: Props) => {
  const { taskList, setTaskList } = props;
  return (
    <div>
      {taskList.map((task: { id: number; text: string }, index: number) => (
        <Task
          key={index}
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
        />
      ))}
    </div>
  );
};
