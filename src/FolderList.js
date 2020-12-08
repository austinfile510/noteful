import React from 'react';
import Folder from './Folder';

function FolderList(props) {
    return (
        <div>
        <p>{props.folders.map( item => <Folder name={item.name} id={item.id} /> )}</p>
        <button>Add Folder</button>
        </div>
    )
}

export default FolderList;