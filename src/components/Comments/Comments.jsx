import React, { Component } from "react";
import AddComment from "./AddComment";

class Comments extends Component {
  componentDidMount() {
    this.props.getCommentsByContentId(this.props.user, this.props.contentId);
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.text.length < 10) {
      console.log("Min length 10 char");
      return;
    }

    this.props.addComment(this.props.user, this.props.contentId, this.state);
  };

  render() {
    return (
      <div>
        <ul className='list-unstyled'>
          {this.props.comments.map(item => {
            const dateObj = new Date(item.createdAt);
            const date = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
            return (
              <li key={item._id} className='border border-info p-2 mb-2'>
                {item.username} {date} : {item.message}
              </li>
            );
          })}
        </ul>
        <AddComment onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Comments;
