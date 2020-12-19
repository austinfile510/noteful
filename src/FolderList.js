import React, { useContext } from 'react'
import Folder from './Folder'
import AppContext from './AppContext'
import { Link } from 'react-router-dom';

function FolderList() {
    const context = useContext(AppContext)
  return (
    <div>
        {context.folders.map((item) => (
          <Folder name={item.name} id={item.id} key={item.id} />
        ))}
      <Link to='/addfolder'>Add Folder</Link>
    </div>
  );
}

export default FolderList;
