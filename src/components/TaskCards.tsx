import React, { useState } from "react";
import { TaskCardType } from "../types/TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState<TaskCardType[]>([
    { id: 0, draggableId: "item0" },
  ]);
  return (
    <div className="taskCardsArea">
      {taskCardList.map((taskCard) => (
        <TaskCard key={taskCard.id}></TaskCard>
      ))}
      <AddTaskCardButton
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
      />
    </div>
  );
};
