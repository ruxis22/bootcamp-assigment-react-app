import { connect } from "react-redux";
import Comments from "./Comments";
import { getCommentsByContentId, addComment } from "./Comments.Action";

const stateToProps = state => {
  return {
    user: state.user,
    comments: state.comments
  };
};

export default connect(
  stateToProps,
  { getCommentsByContentId, addComment }
)(Comments);
