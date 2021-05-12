import { v4 as uuidv4 } from "uuid";
import Search from './search-container'
import useInterval from "@use-it/interval";
import { InputContext } from "./input-context";
import { useState, useEffect, useContext } from "react";



const TaskContainer = ({ makeTaskJson, fetchApi, cleanDuplicated }) => {
  const [taskArray, setTaskArray] = useState([]);
  const [verifyExpired, setVerifyExpired] = useState(false);
  const [input, deadline] = useContext(InputContext);
  const localStorageName = "myTaskArray";

  const makeTask = () => {
    setTaskArray([
      ...taskArray,
      makeTaskJson(uuidv4(), input.formInput, deadline.taskDeadline, false),
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
  }, [fetchApi]);

  useEffect(() => {
    const data = taskArray;
    const result = [];

    data.forEach((element) => cleanDuplicated(element, result));

    localStorage.setItem(localStorageName, JSON.stringify(result));
  }, [taskArray,cleanDuplicated]);

  useInterval(() => setVerifyExpired(!verifyExpired), 30000);

return <Search taskArray={taskArray} makeTask={makeTask} removeTask={removeTask} completedSwitchTask={completedSwitchTask} />
  

};

export default TaskContainer;
