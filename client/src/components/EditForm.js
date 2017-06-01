import React, { Component} from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/notes';




class EditForm extends Component {

render() {
  let { title, body, form, note , dispatch, edit } = this.props
  return (
    <div>
      <h5 className="center">Update A Note</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          this.props.toggleEdit()
          this.props.updateNote(title.value, body.value)
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <textarea ref={ n => body = n } placeholder="Note Body"></textarea>
        <button className="btn">Save</button>
      </form>
    </div>
  )
}
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n._id === props.match.params.id) || {} }
}
//when you connect a component you get dispatch as a prop
//mapStateToProps - graps state out of redux and passes it as props
export default connect()(EditForm);
