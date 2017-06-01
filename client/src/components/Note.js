import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../actions/notes';
import EditForm from './EditForm'

class Note extends Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  deleteNote = () => {
    let { dispatch, note, history } = this.props;
    dispatch(deleteNote(note._id))
    history.push('/notes')

  }
  updateNote = (title, body) => {
    let { dispatch, note, history } = this.props
    dispatch(updateNote(note._id, title, body ))
    history.push('/notes')
  }

  render() {
    let { note: { title, body, updatedAt, createdAt, edit }} = this.props;
    let state = this.props
    // TODO:check if this.state.edit is true
    // if it si render a edit form
    // once the form is submitted dispatch the editNote action
    // reset component edit stae to false - call this.toggleEdit();
    if(this.state.edit === true) {
      return <EditForm
              toggleEdit={this.toggleEdit}
              updateNote={this.updateNote}/>
    }
    return (
      <div className="container">
        <h4 className="center">{title}</h4>
        <span className="grey-text">{`Created: ${createdAt}`}</span>
        <br />
        <span className="grey-text">{`Updated: ${updatedAt}`}</span>
        <p>{body}</p>
        <div style={{ cursor: 'pointer' }}>
          <i className="blue-text material-icons" onClick={this.toggleEdit}>edit</i>
          <i className="red-text material-icons" onClick={this.deleteNote}>delete</i>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n._id === props.match.params.id) || {} }
}

export default connect(mapStateToProps)(Note);
