import React from "react";
import { ImCross } from "react-icons/im";

const Task = ({index,id,text,deadline,completed,removeTask,taskStatusSwitch}) => {

  const isExpired = Date.now()> Date.parse(deadline) 

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
          {isExpired? <p style = {{color:'red'}}>{deadline}</p>:<p style = {{color:'green'}}>{deadline}</p>}
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
