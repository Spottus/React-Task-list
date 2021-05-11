import { v4 as uuidv4 } from "uuid";
import useInterval from "@use-it/interval";
import { useState, useEffect } from "react";
import { cleanMerge } from "../utils/api-utils";
import Search from "./search-container";

const TaskContainer = ({
  formInput,
  taskDeadline,
  seekedTask,
  setSeekedTask,
  setTaskDeadline,
  setFormInput,
  makeTaskJson,
  fetchApi,
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

  const completedSwitchTask = (targetId) => {
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
    <Search
      formInput={formInput}
      taskDeadline={taskDeadline}
      seekedTask={seekedTask}
      taskArray={taskArray}
      setTaskArray={setTaskArray}
      setSeekedTask={setSeekedTask}
      setTaskDeadline={setTaskDeadline}
      setFormInput={setFormInput}
      makeTask={makeTask}
      removeTask={removeTask}
      completedSwitchTask={completedSwitchTask}
    />
  );
};

export default TaskContainer;
