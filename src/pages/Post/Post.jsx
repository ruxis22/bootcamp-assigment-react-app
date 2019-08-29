import React, { Component, Fragment } from "react";
import Comments from "../../components/Comments"
import Spinner from "../../components/Spinner";

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(this.props.user, this.props.match.params.postId);
  }

  render() {
    const { postId } = this.props.match.params;
    const { post } = this.props;
    if (!post.media) {
      return <Spinner type='Puff' color='#00BFFF' height='100' width='100' />;
    }

    return (
      <Fragment>
        <div>
          <h3>{this.props.post.title}</h3>
          <img src={this.props.post.media.path} alt='' className='w-25' /> <br/>
          <a>{`Created by ${this.props.post.username} on ${this.props.post.createdAt}`}</a><br/>
        <a>{`Category: ${this.props.post.category}`}</a><br/>
        </div>
        <Comments contentId={postId} />  
      </Fragment>
    );
  }
}

export default Post;


