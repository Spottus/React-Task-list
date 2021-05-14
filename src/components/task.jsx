import React from "react";
import {isExpired} from '../utils';
import { ImCross } from "react-icons/im";

const Task = ({index,id,text,deadline,completed,removeTask,completedSwitchTask}) => {

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
          {isExpired(deadline)? <p style = {{color:'red'}}>{deadline}</p>:<p style = {{color:'green'}}>{deadline}</p>}
        </p>
      )}
      {completed ? (
        <button onClick={() => completedSwitchTask(id,index)}>
          undo
        </button>
      ) : (
        <button onClick={() => completedSwitchTask(id,index)}>
          completo
        </button>
      )}
    </div>
  );
};

export default Task;
