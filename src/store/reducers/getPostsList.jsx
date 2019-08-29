const getPostsList = (state = [], action) => {
    if (action.type === "GET_MEDIA_LIST") {
      return action.payload;
    }
    return state;
  };
  
  export default getPostsList;
  