import TaskContainer from "./task-container";


const ApiContainer = () => {
  const makeTaskJson = (uuid, formInput, taskDeadline, comp) => {
    const id = uuid;
    const text = formInput;
    const deadline = taskDeadline;
    const completed = comp;

    return { id, text, deadline, completed };
  };

  const cleanDuplicated = (element, arrayEnd) => {
    let check = 0;
    for (let a in arrayEnd) {
      if (arrayEnd[a].id === element.id) check++;
    }

    if (check <1) arrayEnd.push(element);
  };

  const fetchApi = async (setTargetState, localStorageTarget) => {
    let result = [];

    const local =
      localStorage.getItem(localStorageTarget) !== null
        ? JSON.parse(localStorage.getItem(localStorageTarget))
        : null;

    const response = await (await fetch("http://localhost:3001/tasks")).json();

    const data = local !== null ? response.concat(local) : response;
    data.forEach((element) => cleanDuplicated(element, result));
    setTargetState(result);
  };

  return <TaskContainer makeTaskJson={makeTaskJson} fetchApi={fetchApi} cleanDuplicated={cleanDuplicated}/>
    
  
};

export default ApiContainer;


    
    
    
