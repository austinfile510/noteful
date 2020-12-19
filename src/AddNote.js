import React, { useContext } from "react";
import AppContext from "./AppContext";
import PropTypes from 'prop-types';

function AddNote(props) {
  const context = useContext(AppContext);
  const submitNote = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const content = e.target.content.value;
    const folderId = e.target.folderId.value;
    const note = {
      name,
      content,
      folderId,
    };
    fetch(`http://localhost:9090/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(note),
    }).then((response) => {
        console.log(response);
      context.getData();
      props.history.push("/") 
    });
  };

  return (
    <div>
      <form name="note-name" onSubmit={submitNote}>
        <input name="name" type="text" placeholder="Enter title here" required/>
        <textarea name="content" required></textarea>
        <select name="folderId">
          {" "}
          {context.folders.map((folder) => (
            <option value={folder.id} key={folder.id}>
              {folder.name}
            </option>
          ))}
        </select>
        <button name="add-note-button">Create Note</button>
      </form>
    </div>
  );
}

AddNote.propTypes = {
    history: PropTypes.any
}

export default AddNote;
