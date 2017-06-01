// GET ALL NOTES
export const getNotes = () => {
  // Redux THUNK
  // anytime we have a async action like fetch we need a THUNK
  return(dispatch) => {
    fetch('/api/notes')
      .then( res => res.json() )
      .then( notes => dispatch({ type: 'NOTES', notes }))
  }
}

// ADD A NOTE
export const addNote = (title, body) => {
  return(dispatch) => {
    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body })
    }).then( res => res.json() )
      .then( note => dispatch({ type: 'ADD_NOTE', note }))
  }
}

// UPDATE A NOTE
export const updateNote = (id, title, body) => {
  return(dispatch) => {
    fetch(`/api/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body})
    }).then( res => res.json() )
      .then( note => dispatch({ type: 'UPDATE_NOTE', note }));
  }
}

// DELETE A NOTE
export const deleteNote = (id) => {
  return(dispatch) => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then( () => dispatch({ type: 'DELETE_NOTE', id }));
  }
}
