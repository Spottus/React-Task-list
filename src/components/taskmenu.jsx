import React from "react";
import TaskList from "./tasklist";
import { v4 as uuidv4 } from "uuid";

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

  console.error(arrayTask)

  const makeTask = () => {
    let id = uuidv4();
    let text = formValueText;
    let completed = false;

    setArrayTask([...arrayTask, { id, text, completed }]);
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
    
    const load = async () =>
    {
      const response = await fetch("http://localhost:3001/tasks");
      const data = await response.json();
      console.error(arrayTask)
      setArrayTask(data);
    }

    load()
  }, []);

  React.useEffect(() => {
    const data = arrayTask.concat(JSON.parse(localStorage.getItem("myTaskArray")))
    
    let unique = [];
    const result = [];

    data.forEach((element) => {
      if (!unique.find((uniq) => uniq === element.id)) {
        unique.push(element.id);
      }
    });

    unique = unique.filter(
      (element, index, array) => array.indexOf(element) === index
    );

    data.forEach((element, index, array) => {
      if (
        unique.find((uniq) => uniq === element.id) &&
        !isDuplicated(element.id, result)
      ) {
        result.push(array[index]);
      }
    });

    localStorage.setItem("myTaskArray", JSON.stringify(result));
  }, [arrayTask]);

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
