import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './AppContext'
import PropTypes from 'prop-types';

function Note(props) {
  const context = useContext(AppContext)
  const note = props.note || context.notes.find(
    (item) => props.match && item.id === props.match.params.noteId
  ) || {}
  return (
    <div>
    <Link to={"/note/" + note.id}>
      <h3>{note.name}</h3>
    </Link>
      {props.note?(null):(
        <p>{note.content}</p>
      )}
      <button
      onClick= { e => {
        context.onDelete(note.id)
        if (props.history) {
          props.history.push("/") 
        }
      }
      }
      >Delete Note</button>
    </div>
  );
}

Note.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any
}

export default Note;
