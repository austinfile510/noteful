import React, { useContext } from 'react';
import Note from './Note';
import AppContext from './AppContext'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NoteList(props) {
  const context = useContext(AppContext)
  const notes = context.notes.filter(
    (item) => item.folderId === props.match.params.folderId || !props.match.params.folderId
  )

  return (
    <div>
      {notes.map((item) => (
        <Note
          note={item}
          key={item.id}
        />
      ))}
      <Link to='/addnote'>Add Note</Link>

    </div>
  );
}

NoteList.propTypes = {
  match: PropTypes.any,
  name: PropTypes.string
}

export default NoteList;
