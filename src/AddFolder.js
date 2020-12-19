import React, { useContext } from "react";
import AppContext from "./AppContext";
import PropTypes from 'prop-types';

function AddFolder(props) {
  const context = useContext(AppContext);
  const submitFolder = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const folder = {
      name,
    };
    fetch(`http://localhost:9090/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(folder),
    }).then((response) => {
      console.log(response);
      context.getData();
      props.history.push("/");
    });
  };
  return (
    <div>
      <form name="folder-name" onSubmit={submitFolder}>
        <input
          name="name"
          type="text"
          placeholder="Enter title here"
          required
        />
        <button name="add-Folder-button">Create Folder</button>
      </form>
    </div>
  );
}

AddFolder.propTypes = {
    history: PropTypes.any
}

export default AddFolder;
