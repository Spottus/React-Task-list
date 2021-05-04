import { useState } from "react";
import InputTaskForm from './inputTaskForm'

const InputTask = () => {
  const [formInput, setFormInput] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [searchTask, setSearchTask] = useState("");
 

  
  return <InputTaskForm formInput={formInput} setFormInput={setFormInput} taskDeadline={taskDeadline} setTaskDeadline={setTaskDeadline} searchTask={searchTask}/>
};

export default InputTask