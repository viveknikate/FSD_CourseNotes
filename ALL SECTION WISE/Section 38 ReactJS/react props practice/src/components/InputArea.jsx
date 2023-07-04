import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.func} type="text" value={props.X} />
      <button onClick={props.adding}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
