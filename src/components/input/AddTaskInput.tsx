import React, { FormEvent } from "react";

type Props = {
  inputText: string;
  setInputText: any;
  taskList: [];
  setTaskList: any;
};

export const AddTaskInput = (props: Props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;

  const handleChangeText = (e: any) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
      },
    ]);
    setInputText("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="入力してください"
          onChange={handleChangeText}
          value={inputText}
        />
      </form>
    </div>
  );
};
