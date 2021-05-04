import { useState } from "react";
import InputTaskForm from './inputTaskForm'
import { v4 as uuidv4 } from "uuid";

const InputTask = () => {
  const [formInput, setFormInput] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [searchTask, setSearchTask] = useState("");
 

  
  return <InputTaskForm formInput={formInput} setFormInput={setFormInput} taskDeadline={taskDeadline} setTaskDeadline={setTaskDeadline}/>
};
