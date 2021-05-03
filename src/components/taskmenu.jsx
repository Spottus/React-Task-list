import React from "react";
import TaskList from "./tasklist";
import { v4 as uuidv4 } from "uuid";
require('dotenv').config();

const TaskMenu = () => {
  return (
    <div>
      <TaskForm />
    </div>
  );
};

const TaskForm = () => {
  const [formValueText, setFormValueText] = React.useState("");
  const [arrayTask, setArrayTask] = React.useState([]);
  const [searchTask, setSearchTask] = React.useState("");
  const [time,setTime] = React.useState('')

  const makeTask = () => {
    const id = uuidv4();
    const text = formValueText;
    const completed = false;
    const deadline = time

    setArrayTask([...arrayTask, { id, text, completed,deadline }]);
  };

  const removeTask = (id) => {
    const result = arrayTask.filter((task) => task.id !== id);
    setArrayTask(result);
  };

  const taskStatusSwitch = (Id, index) => {
    const target = arrayTask.find((element) => element.id === Id);

    const id = target.id;
    const text = target.text;
    const completed = !target.completed;

    const newArrayTask = [...arrayTask];
    newArrayTask.splice(index, 1, { id, text, completed });

    setArrayTask(newArrayTask);
  };

  React.useEffect(() => {
    const load = async () => {
      let result = [];
      console.log(process.env.TASK_LIST_API)
      const local =
        localStorage.getItem("myTaskArray") !== null
          ? JSON.parse(localStorage.getItem("myTaskArray"))
          : null;

      const response = await (
        await fetch('http://localhost:3001/tasks')
      ).json();

      const data = local !== null ? response.concat(local) : response;
      data.forEach(element => cleanMerge(element,result))
      setArrayTask(result);
    };

    load();
  }, []);

  React.useEffect(() => {
    const data = arrayTask;

    const result = [];

    data.forEach((element) => cleanMerge(element, result));

    localStorage.setItem("myTaskArray", JSON.stringify(result));
  }, [arrayTask]);

  const cleanMerge = (element, array_end) => {
    if (!isDuplicated(element.id, array_end)) array_end.push(element);
  };

  const isDuplicated = (value, array) => {
    let check = 0;
    for (let a in array) {
      if (array[a].id === value) {
        check++;
      }
    }
    const result = check >= 1 ? true : false;
    return result;
  };

  console.log(arrayTask);
  return (
    <div>
      <label>
        text:
        <input
          type="text"
          value={formValueText}
          onChange={(event) => setFormValueText(event.target.value)}
        />
      </label>
      <button onClick={makeTask}>aggiungi task</button>
      <label>
        search:
        <input
          type="text"
          value={searchTask}
          onChange={(event) => setSearchTask(event.target.value)}
        />
      </label>
      <label>
        deadline:
        <input
          type="date"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </label>
      <TaskList
        taskArray={arrayTask}
        remove={removeTask}
        completeTask={taskStatusSwitch}
        searchTask={searchTask}
      />
    </div>
  );
};

export default TaskMenu;
