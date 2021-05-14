import { useState } from "react";

import ApiContainer from './api-container'
import { InputContext } from "./input-context";


const Input = () => {
  const [formInput, setFormInput] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [seekedTask, setSeekedTask] = useState("");

  return (
    <InputContext.Provider
      value={[
        { formInput, setFormInput },
        { taskDeadline, setTaskDeadline },
        { seekedTask, setSeekedTask },
      ]}
    >
      <ApiContainer/>
    </InputContext.Provider>
  );
};

export default Input;
