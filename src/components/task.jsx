import React from "react";
import { ImCross } from "react-icons/im";

const Task = (props) => {
  return (
    <div>
      {props.completed ? (
        <del>
          {props.index}
          {props.text}
        </del>
      ) : (
        <p>
          {props.index}
          {props.text} <ImCross onClick={() => props.remove(props.id)} />
        </p>
      )}
      {props.completed ? (
        <button onClick={() => props.completeTask(props.id, props.index)}>
          undo
        </button>
      ) : (
        <button onClick={() => props.completeTask(props.id, props.index)}>
          completo
        </button>
      )}
    </div>
  );
};

export default Task;
