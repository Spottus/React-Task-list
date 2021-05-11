import Task from "./task";
import { taskSelector } from "../../logic/array";

const TaskList = ({ taskArray, removeTask, taskStatusSwitch,taskSwitch, searchTask }) => {
  
  const targets = taskArray.filter(
    (elements) => elements.text.indexOf(searchTask) !== -1
  );

 
  const makeList = (arr) =>
  {
    return arr.map((task, index) => (
      <li>
        <Task
          index={index}
          key={index}
          id={task.id}
          text={task.text}
          deadline={task.deadline}
          completed={task.completed}
          removeTask={removeTask}
          taskStatusSwitch={taskStatusSwitch}
        />
      </li>
    ));
  }
  return <ul>{targets!==null? makeList(taskSelector(targets,taskSwitch)):makeList(taskSelector(taskArray,taskSwitch))}</ul>;
};

export default TaskList;
