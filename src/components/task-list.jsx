import Task from "./task";

const TaskList = ({
  taskArray,
  removeTask,
  checkbox,
  completedSwitchTask,
  onlySearched,
  onlyComplete,
  onlyExpired,
}) => {
let arrayToRender = taskArray

if(checkbox[1].check) arrayToRender = onlyComplete(arrayToRender)
if(checkbox[2].check) arrayToRender = onlyExpired(arrayToRender)

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
     {onlySearched(arrayToRender)!== null ? makeList(onlySearched(arrayToRender)):makeList(arrayToRender)}
    </ul>
  );
};

export default TaskList;
