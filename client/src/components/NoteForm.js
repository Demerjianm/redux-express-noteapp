import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const NoteForm = ({ dispatch }) => {
  let title, body, form

  return (
    <div>
      <h5 className="center">Add A Note</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          dispatch(addNote(title.value, body.value))
          form.reset();
          
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <textarea ref={ n => body = n } placeholder="Note Body"></textarea>
        <button className="btn">Save</button>
      </form>
    </div>
  )
}
//when you connect a component you get dispatch as a prop
//mapStateToProps - graps state out of redux and passes it as props
export default connect()(NoteForm);
