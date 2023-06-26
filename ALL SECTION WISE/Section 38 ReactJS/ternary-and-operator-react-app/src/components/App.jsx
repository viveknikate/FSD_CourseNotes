import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  console.log(!userIsRegistered); //reverse the value ! true
  console.log(userIsRegistered); //original value false

  return (
    <div className="container">
      <Form UR={userIsRegistered} />
    </div>
  );
}

export default App;
