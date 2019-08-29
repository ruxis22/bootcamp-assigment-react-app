import axios from "axios";

const getCommentsByContentId = ({ token }, contentId) => dispatch => {
  axios
    .get(`/api/v1/media/${contentId}/comments/`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_COMMENTS",
          payload: payload.comments
        });
      }
    });
};

const addComment = ({ token }, contentId, text) => dispatch => {
  axios
    .post(`/api/v1/media/${contentId}/comments/`, text, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 201) {
        dispatch({
          type: "ADD_COMMENT"
        });
      }
    });
};

export { getCommentsByContentId, addComment };