
import { connect } from "react-redux";
import Posts from "./Posts";
import { getPostsList } from "./Posts.Action";

const stateToProps = state => {
  return {
    user: state.user,
    posts: state.getPostsList
  };
};

export default connect(
  stateToProps,
  { getPostsList }
)(Posts);
