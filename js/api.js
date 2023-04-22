import{SERVER_URL} from './constant.js';

const getData = () =>
  fetch(SERVER_URL).then((response) => {
    if(response.ok){
      return response.json();
    }else{
      throw new Error;
    }
  });
export { getData };
