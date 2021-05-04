import Task from "./task";

const TaskList = ({ taskArray, removeTask, taskStatusSwitch }) => {
  const tList = taskArray.map((task, index) => (
    <li>
      <Task
        index={index}
        key={index}
        id={task.id}
        text={task.text}
        deadline={task.deadline}
        removeTask={removeTask}
        taskStatusSwitch={taskStatusSwitch}
        completed={task.completed}
      />
    </li>
  ));

  const filteredArray = taskArray.filter(
    (elements) => elements.text.indexOf(props.searchTask) !== -1
  );

  const filteredTlist = filteredArray.map((task, index) => (
    <li>
      <Task
        index={index}
        key={index}
        id={task.id}
        text={task.text}
        deadline={task.deadline}
        removeTask={removeTask}
        taskStatusSwitch={taskStatusSwitch}
        completed={task.completed}
      />
    </li>
  ));

  return <ul>{filteredArray.length >= 1 ? filteredTlist : tList}</ul>;
};

export default TaskList;