import React, { Component } from "react";
import Spinner from "../../components/Spinner";

class User extends Component {
  componentDidMount() {
    this.props.getSelfInfo(this.props.user);
  }
  render() {
    const { userInfo } = this.props.user;

    if (!userInfo) {
      return <Spinner type='Puff' color='#00BFFF' height='100' width='100' />;
    }

    return (
      <table>
        <tbody>
          <tr>
            <td>Your email is: {userInfo.email}</td> 
            <td>You Registered at: {userInfo.createdAt}</td>
            <td>Your Username is: {userInfo.username}</td> 
          </tr>
        </tbody>
      </table>
    );
  }
}
export default User;