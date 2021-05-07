import Task from "./task";

const TaskList = ({ taskArray, removeTask, taskStatusSwitch, searchTask }) => {
  
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
 
  return <ul>{targets!==null? makeList(targets):makeList(taskArray)}</ul>;
};

export default TaskList;
