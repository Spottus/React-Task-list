import React from "react";
import Switch from 'rc-switch';

const InputTaskForm = ({
  formInput,
  taskDeadline,
  searchTask,
  setFormInput,
  setTaskDeadline,
  setSearchTask,
  makeTask
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
        <button onClick={makeTask}>aggiungi task</button>
        <label>
          deadline:
          <input
            type="datetime-locaL"
            value={taskDeadline}
            onChange={(event) => setTaskDeadline(event.target.value)}
          />
        </label>
        <label>
        search:
        <input
          type="text"
          value={searchTask}
          onChange={(event) => setSearchTask(event.target.value)}
        />
      </label>
      <label>
      <Switch
      checkedChildren="completi"
      unCheckedChildren="scaduti"
      />
     
      </label>
      </div>
    ) 
  );
};

export default InputTaskForm;
