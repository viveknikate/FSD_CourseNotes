import React from "react";
import contcts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contcts[0].name}
        email={contcts[0].email}
        phone={contcts[0].phone}
        imgURL={contcts[0].imgURL}
      />
      <Card
        name={contcts[1].name}
        email={contcts[1].email}
        phone={contcts[1].phone}
        imgURL={contcts[1].imgURL}
      />
      <Card
        name={contcts[2].name}
        email={contcts[2].email}
        phone={contcts[2].phone}
        imgURL={contcts[2].imgURL}
      />
      <Card
        name={contcts[3].name}
        email={contcts[3].email}
        phone={contcts[3].phone}
        imgURL={contcts[3].imgURL}
      />
    </div>
  );
}

export default App;
