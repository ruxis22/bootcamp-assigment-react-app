import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";




class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList(this.props.user);
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='container '>
          <div className='row'>
            <ul className='list-unstyled'>
          {posts.map(item => (
            <li key={item._id}>
                <div className='card container' style={{width: '400px'}}>
                <img src={item.media.path}  className='container fluid' />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{`Created by ${item.username} on ${item.createdAt}`}</p>
                    <p>{`category ${item.category}`}</p>
                    <a href={`/posts/${item._id}`} className="btn btn-primary">Open post</a>
                </div>
                </div>
               
                
            </li>
          ))}
        </ul>
        </div>
        </div>
    );
  }
}

export default Posts;

