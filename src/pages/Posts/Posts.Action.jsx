import axios from "axios";

const getPostsList = ({ token }) => dispatch => {
  axios
    .get("http://localhost:3005/api/v1/media/", {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_MEDIA_LIST",
          payload
        });
      }
    });
};

export { getPostsList };
