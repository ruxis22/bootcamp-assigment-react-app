import axios from "axios";
import { error } from "react-notification-system-redux";

const getPostsList = ({ token }) => dispatch => {
  axios
    .get("http://localhost:3005/api/v1//media", { headers: { authorization: `Bearer ${token}` } })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_MEDIA_LIST",
          payload: {}
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Auth failed, check email or password",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getPostsList };