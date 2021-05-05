import React from "react";
import { ImCross } from "react-icons/im";

const Task = ({index,id,text,deadline,removeTask,taskStatusSwitch,completed}) => {
  return (
    <div>
      {completed ? (
        <del>
          {index}
          {text}
        </del>
      ) : (
        <p>
          {index}
          {text} <ImCross onClick={() => removeTask(id)} />
          {deadline}
        </p>
      )}
      {completed ? (
        <button onClick={() => taskStatusSwitch(id,index)}>
          undo
        </button>
      ) : (
        <button onClick={() => taskStatusSwitch(id,index)}>
          completo
        </button>
      )}
    </div>
  );
};

export default Task;
