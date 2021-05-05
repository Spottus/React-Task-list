import TaskList from "./taskList";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import InputTaskForm from "./inputTaskForm";
import { cleanMerge, fetchApi } from "../api-utils";

const TaskController = ({
  formInput,
  taskDeadline,
  searchTask,
  setFormInput,
  setTaskDeadline,
  setSearchTask,
}) => {
  const [taskArray, setTaskArray] = useState([]);
  const [expired, setExpired] = useState(false);

  const localStorageName = "myTaskArray";

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

  useEffect(() => fetchApi(setTaskArray, localStorageName), []);

  useEffect(() => {
    const data = taskArray;
    const result = [];

    data.forEach((element) => cleanMerge(element, result));

    localStorage.setItem(localStorageName, JSON.stringify(result));
  }, [taskArray]);

  const isExpired = (id) => {
    const today = new Date();
    const target = taskArray.filter((task) => task.id !== id);
    if (today.getTime() > new Date(target.deadline).getTime()) setExpired(true);
  };

  return (
    <div>
      <InputTaskForm
        formInput={formInput}
        taskDeadline={taskDeadline}
        searchTask={searchTask}
        setFormInput={setFormInput}
        setTaskDeadline={setTaskDeadline}
        setSearchTask={setSearchTask}
        makeTask={makeTask}
      />
      <TaskList
        searchTask={searchTask}
        taskArray={taskArray}
        removeTask={removeTask}
        taskStatusSwitch={taskStatusSwitch}
      />
    </div>
  );
};

export default TaskController;
