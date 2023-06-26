import React from "react";

function Note({ title, content }) {
  return (
    <div className="note">
      {/*  HardCoded
      <h1>This is the note title</h1>
      <p>This is the note content</p> */}

      {/* Dynamic */}
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;
