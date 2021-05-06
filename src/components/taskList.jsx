import Task from "./task";

const TaskList = ({ taskArray, removeTask, taskStatusSwitch,searchTask}) => {
  const tList = taskArray.map((task, index) => (
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

  const filteredArray = taskArray.filter(
    (elements) => elements.text.indexOf(searchTask) !== -1
  );

  const filteredTlist = filteredArray.map((task, index) => (
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

  return <ul>{filteredArray.length >= 1 ? filteredTlist : tList}</ul>;
};

export default TaskList;