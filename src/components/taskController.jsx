import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from './taskList'
import utils from '../utils'

const {fetchApi,cleanMerge} = utils()

const TaskController = ({ formInput, taskDeadline,searchTask }) => {
  const [taskArray, setTaskArray] = useState([]);

  const makeTask = () => {
    const id = uuidv4();
    const text = formInput;
    const deadline = taskDeadline;
    const completed = false;

    setTaskArray([...taskArray, { id, text, deadline, completed }]);
  };

  const removeTask = (id) => {
    const result = taskArray.filter((task) => task.id !== id);
    setTaskArray(result);
  };

  const taskStatusSwitch = (Id, index) => {
    const target = taskArray.find((element) => element.id === Id);

    const id = target.id;
    const text = target.text;
    const deadline = target.deadline;
    const completed = !target.completed;

    const newArrayTask = [...taskArray];
    newArrayTask.splice(index, 1, { id, text, deadline, completed });

    setTaskArray(newArrayTask);
  };

  useEffect(() => fetchApi(setTaskArray), []);

  useEffect(() => {
    const data = taskArray;
    const result = [];

    data.forEach((element) => cleanMerge(element, result));

    localStorage.setItem("myTaskArray", JSON.stringify(result));
  }, [taskArray]);

  return <TaskList taskArray={taskArray} removeTask={removeTask} taskStatusSwitch={taskStatusSwitch} searchTask={searchTask}/>
};

export default TaskController;
