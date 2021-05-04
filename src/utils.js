const utils = () => 
{
    const cleanMerge = (element, array_end) => {
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

      const fetchApi = async (targetLocation) => {
        let result = [];
        
        const local =
          localStorage.getItem("myTaskArray") !== null
            ? JSON.parse(localStorage.getItem("myTaskArray"))
            : null;
  
        const response = await (
          await fetch('http://localhost:3001/tasks')
        ).json();
  
        const data = local !== null ? response.concat(local) : response;
        data.forEach(element => cleanMerge(element,result))
        targetLocation(result);
      };
  
     return
     {
        cleanMerge:cleanMerge
        fetchApi:fetchApi
     }
};

export default utils