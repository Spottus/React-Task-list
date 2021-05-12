import {isExpired} from '../utils';
import TaskList from "./task-list";
import Form from "./task-input-form";
import { useState, useContext } from "react";
import { InputContext } from "./input-context";

const Search = ({ taskArray, makeTask, removeTask, completedSwitchTask }) => {
  const [checkbox, setCheckbox] = useState([

    { name: "tutti",
      check: true,
      id:0
    },
    {
      name: "completi",
      check: false,
      id:1
    },
    {
      name: "scaduti",
      check: false,
      id:2
    }
  ]);

  const [, , seeked] = useContext(InputContext);

  const changeCheckBox = (id) => {
    const priorityFlag = checkbox.find((element) => element.name === "tutti");

    if (!priorityFlag.check) setCheckbox(!checkbox[id].check);

    if (priorityFlag.check && checkbox[id] === priorityFlag)
      setCheckbox(!checkbox[id].check);
  };

  const onlySearched = () => {
    return taskArray.filter(
      (element) => element.text.indexOf(seeked.seekedTask) !== -1
    );
  };

  const onlyComplete = () => {
    return taskArray.filter((element) => element.completed === true);
  };

  const onlyExpired = () => {
    return taskArray.filter(
      (element) => isExpired(element.deadline)
    );
  };

  return (
    <div>
      <Form
        makeTask={makeTask}
        checkbox={checkbox}
        changeCheckBox={changeCheckBox}
      />
      <TaskList
        taskArray={taskArray}
        removeTask={removeTask}
        completedSwitchTask={completedSwitchTask}
        onlySearched={onlySearched}
        onlyComplete={onlyComplete}
        onlyExpired={onlyExpired}
      />
    </div>
  );
};

export default Search;
