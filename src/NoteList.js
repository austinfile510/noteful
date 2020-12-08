import { render } from '@testing-library/react';
import React from 'react';
import Note from './Note';

function NoteList(props) {
        return (
            <div>
            {props.notes.map( item => <Note name={item.name} id={item.folderId} content={item.content}/> )}
            <button>Add Note</button>

            <p></p>
            </div>
        )
}

export default NoteList;