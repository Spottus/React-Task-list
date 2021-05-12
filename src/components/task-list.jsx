import Task from "./task";

const TaskList = ({
  taskArray,
  removeTask,
  taskStatusSwitch,
  completedSwitchTask,
  onlySearched,
  onlyComplete,
  onlyExpired,
}) => {

  const makeList = (arr) => {
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
          completedSwitchTask={completedSwitchTask}
        />
      </li>
    ));
  };
  return (
    <ul>
     {onlySearched()!== null ? makeList(onlySearched()):makeList(taskArray)}
    </ul>
  );
};

export default TaskList;
