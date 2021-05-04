import React from "react";
import TaskController from './taskController'

const InputTaskForm = ({
  formInput,
  setFormInput,
  taskDeadline,
  setTaskDeadline,
  searchTask
}) => {
  return (
    (
      <div>
        <label>
          text:
          <input
            type="text"
            value={formInput}
            onChange={(event) => setFormInput(event.target.value)}
          />
        </label>
        <label>
          deadline:
          <input
            type="text"
            value={taskDeadline}
            onChange={(event) => setTaskDeadline(event.target.value)}
          />
        </label>
      </div>
    ),
    (<div>
      <TaskController formInput={formInput} taskDeadline={taskDeadline} searchTask={searchTask}/>
    </div>)
  );
};

export default InputTaskForm;
