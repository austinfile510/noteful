import { render } from "@testing-library/react";
import React from "react";


function Note(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <button>Delete Note</button>
    </div>
  );
}

export default Note;
