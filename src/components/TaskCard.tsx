import React from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCardTitle } from "./button/TaskCardTitle";
import { AddTaskInput } from "./input/AddTaskInput";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <AddTaskCardButton />
      <AddTaskInput />
      <Tasks />
    </div>
  );
};
