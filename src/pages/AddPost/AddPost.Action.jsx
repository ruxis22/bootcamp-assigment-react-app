import axios from "axios";

const addPost = ({ token }, { media, text }) => async dispatch => {
  const formData = new FormData();
  formData.append("media", media);

  const contentId = await axios
    .post("http://localhost:3005/api/v1/media/content/image", formData, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        return response.data.payload.contentId;
      }
    });

  axios
    .post(
      `/api/v1/media/`,
      {
        contentId,
        caption: text
      },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    )
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: response.data.payload
        });
      }
    });
};

export { addPost };