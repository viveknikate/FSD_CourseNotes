import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.func(props.num);
      }}
    >
      {props.txt}
    </li>
  );
}

export default ToDoItem;
