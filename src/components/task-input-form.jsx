import React from "react";

const Form = ({
  formInput,
  taskDeadline,
  searchTask,
  taskSwitch,
  setTaskSwitch,
  setSearchTask,
  setTaskDeadline,
  setFormInput,
  makeTask,
  checkbox,
}) => {

  const renderCheckbox = () => {
    return checkbox.map((element,index) => (
      <input type="checkbox" name={element.name}  id = {index}  checked={element.check} />
    ));
  };

  return (
    <div>
      <label>text:</label>
      <input
        type="text"
        value={formInput}
        onChange={(event) => setFormInput(event.target.value)}
      />
      <button onClick={makeTask}>aggiungi task</button>
      <label>deadline:</label>
      <input
        type="datetime-locaL"
        value={taskDeadline}
        onChange={(event) => setTaskDeadline(event.target.value)}
      />
      <label>search:</label>
      <input
        type="text"
        value={searchTask}
        onChange={(event) => setSearchTask(event.target.value)}
      />
      <div>
        {renderCheckbox}
      </div>
    </div>
  );
};

export default Form;
