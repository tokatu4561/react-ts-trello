import React, { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCardTitle } from "./button/TaskCardTitle";
import { AddTaskInput } from "./input/AddTaskInput";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<any>([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <AddTaskCardButton />
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
