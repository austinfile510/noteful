import React, { useContext } from 'react'
import AppContext from './AppContext'
import PropTypes from 'prop-types';

function NoteNav(props) {
    const context = useContext(AppContext)
    const note = props.note || context.notes.find(
        (item) => props.match && item.id === props.match.params.noteId
      ) || {}
      const folder = context.folders.find(
          (item) => item.id === note.folderId
      ) || {}
        return (
            <div>
                <button
                onClick={e => props.history.goBack()}
                >Back</button>
                <h2>{folder.name}</h2>
            </div>
        )

}

NoteNav.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
}

export default NoteNav