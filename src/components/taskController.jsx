import TaskList from "./taskList";
import { v4 as uuidv4 } from "uuid";
import useInterval from "@use-it/interval";
import { useState, useEffect } from "react";
import InputTaskForm from "./inputTaskForm";
import { cleanMerge, fetchApi, makeTaskJson } from "../logic/api-utils";

const TaskController = ({
  formInput,
  taskDeadline,
  searchTask,
  setFormInput,
  setTaskDeadline,
  setSearchTask,
}) => {
  const [taskArray, setTaskArray] = useState([]);
  const [verifyExpired, setVerifyExpired] = useState(false);

  const localStorageName = "myTaskArray";

  const makeTask = () => {
    setTaskArray([
      ...taskArray,
      makeTaskJson(uuidv4(), formInput, taskDeadline, false),
    ]);
  };

  const removeTask = (id) => {
    const result = taskArray.filter((task) => task.id !== id);
    setTaskArray(result);
  };

  const taskStatusSwitch = (targetId) => {
    debugger
    const target = taskArray.find((element) => element.id === targetId);
    let newArrayTask = [...taskArray];
    
    newArrayTask.forEach((element, index, array) => {
      if (element.id === target.id) {
        array[index] = makeTaskJson(
          target.id,
          target.text,
          target.deadline,
          !target.completed
        );
      }
    });

    setTaskArray(newArrayTask);
  };

  useEffect(() => {
    fetchApi(setTaskArray, localStorageName);
  }, []);

  useEffect(() => {
    const data = taskArray;
    const result = [];

    data.forEach((element) => cleanMerge(element, result));

    localStorage.setItem(localStorageName, JSON.stringify(result));
  }, [taskArray]);

  useInterval(() => setVerifyExpired(!verifyExpired), 30000);

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
