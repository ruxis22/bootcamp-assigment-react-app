import axios from "axios";

const getSelfInfo = ({ token }) => dispatch => {
  axios
    .get("http://localhost:3005/api/v1/users/self", {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_USER_INFO",
          payload
        });
      }
    });
};

export { getSelfInfo };
