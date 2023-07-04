import React, { useState } from "react";

function ToDoItem(props) {
  const [clicked, setClick] = useState(false);

  function chnageStyle() {
    // setClick(!clicked);

    // or
    setClick((oldValue) => {
      return !oldValue;
    });

    //or

    // let i = clicked;
    // if (i == true) setClick(false);
    // else setClick(true);

    console.log(clicked);
  }

  const customStyle = { textDecoration: clicked ? "line-through" : "none" };

  return (
    <li onClick={chnageStyle} style={customStyle}>
      {props.name}
    </li>
  );
}

export default ToDoItem;
