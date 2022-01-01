import React, { useState } from "react";
import { TaskType } from "../types/Task";
import { TaskCardType } from "../types/TaskCard";
import { DeleteTaskCardButton } from "./button/DeleteTaskCardButton";
import { TaskCardTitle } from "./button/TaskCardTitle";
import { AddTaskInput } from "./input/AddTaskInput";
import { Tasks } from "./Tasks";

type Props = {
  key: number;
  taskCardList: TaskCardType[];
  setTaskCardList: any;
};

export const TaskCard = (props: Props) => {
  const { key, taskCardList, setTaskCardList } = props;
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  return (
    <div className="taskCard">
      <div className="flex-area">
        <TaskCardTitle />
        <DeleteTaskCardButton
          taskCardId={key}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      </div>
      <AddTaskInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};
