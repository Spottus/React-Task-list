export const fetchApi = async (setTargetState, localStorageTarget) => {
  let result = [];

  const local =
    localStorage.getItem(localStorageTarget) !== null
      ? JSON.parse(localStorage.getItem(localStorageTarget))
      : null;

  const response = await (await fetch("http://localhost:3001/tasks")).json();

  const data = local !== null ? response.concat(local) : response;
  data.forEach((element) => cleanMerge(element, result));
  setTargetState(result)
};

export const makeTaskJson = (uuid, formInput, taskDeadline, comp) => {
  const id = uuid;
  const text = formInput;
  const deadline = taskDeadline;
  const completed = comp;

  return { id, text, deadline, completed };
};

export const cleanMerge = (element, array_end) => {
  if (!isDuplicated(element.id, array_end)) array_end.push(element);
};

const isDuplicated = (value, array) => {
  let check = 0;
  for (let a in array) {
    if (array[a].id === value) {
      check++;
    }
  }
  const result = check >= 1 ? true : false;
  return result;
};
