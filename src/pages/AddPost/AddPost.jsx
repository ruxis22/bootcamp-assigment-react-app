import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class AddPost extends Component {
  state = {
    text: "",
    media: "",
    category: ""
  };

  fileInput = React.createRef();

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onPick = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const media = this.fileInput.current.files[0];
    if (!media) {
      console.log("Media is required");
      return;
    }
    const { text } = this.state;
    this.props.addPost(this.props.user, { text, media });
  };

  render() {
    const { isCreated } = this.props;
    if (isCreated._id) {
      return <Redirect to={`/posts/${isCreated._id}`} />;
    }
    return (

        
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Title</label>
          <input
            name='text'
            type='text'
            className='form-control'
            onChange={this.onChange}
          />
        </div>
        
        <div className='form-group'>
          <label htmlFor=''>Photo</label>
          <input
            name='media'
            type='file'
            className='form-control'
            ref={this.fileInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Category</label>
          <select 
            value={this.state.value}
            name='category'
            type='text'
            className='form-control'
            onPick={this.state.value}
          >
            <option value="sport">Sport</option>
            <option value="supercar">Supercar</option>
            <option value="afordable">Afordable</option>
            <option value="calassic">Classic</option>
            <option value="luxus">Luxus</option>
          </select>
        </div>
    
        <button type='submit' className='btn btn-secondary float-right'>
          Add
        </button>

      </form>
    );
  }
}

export default AddPost;

