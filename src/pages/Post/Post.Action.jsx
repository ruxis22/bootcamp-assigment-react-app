import axios from "axios";

const getPostList = ({ token }, postId) => dispatch => {
  axios
    .get(`http://localhost:3005/api/v1/media/${postId}/`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_MEDIA",
          payload
        });
      }
    });
};

export { getPostList };
