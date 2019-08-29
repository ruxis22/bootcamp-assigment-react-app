import React from "react";

const AddComment = props => {
  const { onSubmit, onChange } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor=''>Leave comment</label>
        <textarea name='text' onChange={onChange} className='form-control' />
      </div>
      <button type='submit' className='btn btn-success float-right'>
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
