import React from "react";

type Props = {
  task: {
    id: number;
    text: string;
  };
  taskList: any;
  setTaskList: any;
};
export const Task = (props: Props) => {
  const { task, taskList, setTaskList } = props;

  const handleDeteleTask = (id: number) => {
    const newTasks = taskList.filter((task: any) => task.id !== id);
    setTaskList(newTasks);
  };
  return (
    <div className="taskBox">
      <p className="taskTitle">{task.text}</p>
      <button
        className="taskTrashButton"
        onClick={() => {
          handleDeteleTask(task.id);
        }}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
