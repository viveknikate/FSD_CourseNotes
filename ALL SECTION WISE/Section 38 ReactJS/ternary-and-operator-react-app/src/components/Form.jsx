import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* {props.UR ? null : (
        <input type="password" placeholder="Confirm Password" />
      )} */}

      {/* or */}
      
      {/* {props.UR === false && (
        <input type="password" placeholder="Confirm Password" />
      )} */}

      {/* or */}

      {!(props.UR) && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.UR ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
