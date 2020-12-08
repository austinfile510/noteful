import React from 'react';
import NoteList from './NoteList';
import { Link } from 'react-router-dom';

function Folder(props) {
    return (
        <div>
            <Link to={'/folder/' + props.id}><p>{props.name}</p></Link>
        </div>
    )
}

export default Folder;