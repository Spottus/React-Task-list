import { isExpired } from "../utils";
import TaskList from "./task-list";
import Form from "./task-input-form";
import { useState, useContext } from "react";
import { InputContext } from "./input-context";

const Search = ({ taskArray, makeTask, removeTask, completedSwitchTask,removeCompletedTask}) => {
  const [checkbox, setCheckbox] = useState([
    { name: "tutti", check: true, id: 0 },
    { name: "completi", check: false, id: 1 },
    { name: "scaduti", check: false, id: 2 },
  ]);

  const [, , seeked] = useContext(InputContext);

  const changeCheckBox = (id) => {
   
    let [all,complete,expired] = checkbox
    let newCheckboxGroup = []
    const target = checkbox.find((element) =>element.id === id )
   
    if(complete === target )
    {
      all.check = false
      complete.check =  !complete.check
    }

    if(expired === target)
    {
      all.check = false
      expired.check = !expired.check
    }

    if(all === target)
    {
      complete.check = false
      expired.check = false
      all.check = !all.check
    }
    
    newCheckboxGroup.push(all,complete,expired)
    setCheckbox(newCheckboxGroup)
  };

  const onlySearched = (array) => {
    return array.filter(
      (element) => element.text.indexOf(seeked.seekedTask) !== -1
    );
  };

  const onlyComplete = (array) => {
    return array.filter((element) => element.completed === true);
  };

  const onlyExpired = (array) => {
    return array.filter((element) => isExpired(element.deadline));
  };

  return (
    <div>
      <Form
        makeTask={makeTask}
        checkbox={checkbox}
        changeCheckBox={changeCheckBox}
        removeCompletedTask={removeCompletedTask}
      />
      <TaskList
        taskArray={taskArray}
        checkbox={checkbox}
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
