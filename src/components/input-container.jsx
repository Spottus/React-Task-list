import { useState } from "react";
import ApiContainer from "./api-container";

const Input = () => {
  const [formInput, setFormInput] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [seekedTask, setSeekedTask] = useState("");

  return (
    <ApiContainer
      formInput={formInput}
      taskDeadline={taskDeadline}
      seekedTask={seekedTask}
      setSeekedTask={setSeekedTask}
      setTaskDeadline={setTaskDeadline}
      setFormInput={setFormInput}
    />
  );
};

export default Input;

