import { useState } from "react";
import TaskList from "./task-list";
import Form from "./task-input-form";

const Search = ({
  formInput,
  taskDeadline,
  seekedTask,
  taskArray,
  setSeekedTask,
  setTaskDeadline,
  setFormInput,
  makeTask,
  removeTask,
  completedSwitchTask,
}) => {
  const [checkbox, setCheckbox] = useState({
   "firstBox":{
    name:"tutti",
    check:true},
   "secondBox":{
    check:"completi",
   value:false},
   "thirdBox":{
    name:"scaduti",
   check:false}
  });

  const changeCheckBox = (index) =>
  {
    for(let index in checkbox)
    {
        
    }
    setCheckbox(!checkbox[index].check)
  }


  const searchTask = () =>
  { 
    const result =  taskArray.filter((elements) => elements.text.indexOf(searchTask) !== -1);
    return result
  }

  return (
    <div>
      <TaskList
        formInput={formInput}
        taskDeadline={taskDeadline}
        seekedTask={seekedTask}
        setSeekedTask={setSeekedTask}
        setTaskDeadline={setTaskDeadline}
        setFormInput={setFormInput}
        makeTask={makeTask}
        removeTask={removeTask}
        completedSwitchTask={completedSwitchTask}
      />

      <Form
       
       checkbox={checkbox}
       />
    </div>
  );
};

export default Search;
