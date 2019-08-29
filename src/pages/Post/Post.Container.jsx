import { connect } from "react-redux";
import Post from "./Post";
import { getPostList } from "./Post.Action";

const stateToProps = state => {
  return {
    user: state.user,
    post: state.getPostList
  };
};

export default connect(
  stateToProps,
  { getPostList }
)(Post);
