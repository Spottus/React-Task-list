import { cleanMerge } from "../utils/api-utils";
import { TaskContainer } from "./task-container";

const ApiContainer = (
  formInput,
  taskDeadline,
  searchTask,
  setSearchTask,
  setTaskDeadline,
  setFormInput
) => {
  const makeTaskJson = (uuid, formInput, taskDeadline, comp) => {
    const id = uuid;
    const text = formInput;
    const deadline = taskDeadline;
    const completed = comp;

    return { id, text, deadline, completed };
  };

  const fetchApi = async (setTargetState, localStorageTarget) => {
    let result = [];

    const local =
      localStorage.getItem(localStorageTarget) !== null
        ? JSON.parse(localStorage.getItem(localStorageTarget))
        : null;

    const response = await (await fetch("http://localhost:3001/tasks")).json();

    const data = local !== null ? response.concat(local) : response;
    data.forEach((element) => cleanMerge(element, result));
    setTargetState(result);
  };

  return (
    <TaskContainer
      formInput={formInput}
      taskDeadline={taskDeadline}
      searchTask={searchTask}
      setSearchTask={setSearchTask}
      setTaskDeadline={setTaskDeadline}
      setFormInput={setFormInput}
      makeTaskJson={makeTaskJson}
      fetchApi={fetchApi}
    />
  );
};

export default ApiContainer;
