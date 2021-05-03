import React from "react";
import Task from "./task";

const TaskList = (props) => {
  const taskList = props.taskArray.map((task, index) => (
    <li>
      {" "}
      <Task
        index={index}
        key={index}
        id={task.id}
        text={task.text}
        deadline = {task.deadline}
        remove={props.remove}
        completeTask={props.completeTask}
        completed={task.completed}
      />
    </li>
  ));

  
  const filteredArray = props.taskArray.filter(
    (elements) =>  elements.text.indexOf(props.searchTask )!== -1 );
  const filteredTaskList = filteredArray.map((task, index) => (
    <li>
      {" "}
      <Task
        index={index}
        key={index}
        id={task.id}
        text={task.text}
        time = {task.time}
        remove={props.remove}
        completeTask={props.completeTask}
        completed={task.completed}
      />
    </li>
  ));

  return (
  <ul>{(filteredArray.length >=1)? filteredTaskList:taskList}</ul>
  )
};

export default TaskList;
