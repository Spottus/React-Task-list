import { useState } from "react";
import TaskController from "./taskController";


const InputTask = () => {
  const [formInput, setFormInput] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [searchTask, setSearchTask] = useState("");

  return (
    <TaskController
      formInput={formInput}
      taskDeadline={taskDeadline}
      searchTask={searchTask}
      setFormInput={setFormInput}
      setTaskDeadline={setTaskDeadline}
      setSearchTask={setSearchTask}
    />
  );
};

export default InputTask;
