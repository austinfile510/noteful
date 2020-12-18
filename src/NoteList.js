import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import Note from './Note';
import AppContext from './AppContext'

function NoteList(props) {
  const context = useContext(AppContext)
  const notes = context.notes.filter(
    (item) => item.folderId == props.match.params.folderId || !props.match.params.folderId
  )

  return (
    <div>
      {notes.map((item) => (
        <Note
          note={item}
        />
      ))}
      <button>Add Note</button>

      <p></p>
    </div>
  );
}

export default NoteList;
