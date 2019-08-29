import { connect } from "react-redux";
import { getSelfInfo } from "./User.Actions";
import User from "./User";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getSelfInfo }
)(User);
