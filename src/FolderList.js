import React, { useContext } from 'react'
import Folder from './Folder'
import AppContext from './AppContext'

function FolderList(props) {
    const context = useContext(AppContext)
  return (
    <div>
      <p>
        {context.folders.map((item) => (
          <Folder name={item.name} id={item.id} />
        ))}
      </p>
      <button>Add Folder</button>
      <button>Delete Folder</button>
    </div>
  );
}

export default FolderList;
