import { useContext } from "react";
import { InputContext } from "./input-context";
const Form = ({ makeTask, checkbox, changeCheckBox,removeCompletedTask }) => {
  const [input, deadline, seeked] = useContext(InputContext);

  const renderCheckbox = () => {
    
    const result = checkbox.map((element) => (
      <input
        type="checkbox"
        name={element.name}
        key={element.id}
        checked={element.check}
        onClick={() => changeCheckBox(element.id)}
      />
    ));
    return result;
  };
  return (
    <div>
      <label>text:</label>
      <input
        type="text"
        value={input.formInput}
        onChange={(event) => input.setFormInput(event.target.value)}
      />
      <button onClick={makeTask}>aggiungi task</button>
      <label>deadline:</label>
      <input
        type="datetime-locaL"
        value={deadline.taskDeadline}
        onChange={(event) => deadline.setTaskDeadline(event.target.value)}
      />
      <label>search:</label>
      <input
        type="text"
        value={seeked.seekedTask}
        onChange={(event) => seeked.setSeekedTask(event.target.value)}
      />

      {renderCheckbox()}
      <button onClick={removeCompletedTask}>remove completed</button>
    </div>
  );
};

export default Form;
