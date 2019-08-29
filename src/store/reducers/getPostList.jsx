const getPostsList = (state = [], action) => {
    if (action.type === "GET_MEDIA") {
      return action.payload;
    }
    return state;
  };
  
  export default getPostsList;
  