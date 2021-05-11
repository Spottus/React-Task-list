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