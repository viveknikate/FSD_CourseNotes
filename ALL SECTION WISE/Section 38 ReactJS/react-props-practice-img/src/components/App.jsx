import React from "react";
import contcts from "../contacts";
import Avatar from "./Avatar";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cOVE8YmNjAIjh3ysyKfHFZL9vcDzNInHiWwOu_gthA&s' />
      {/* <Card
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
      /> */}

      {
        contcts.map((i,index)=>{
          return(
            <Card 
              num = {index}
              key ={i.name}   //this key should be unique not duplicated. & this key is not a prop its used to render all DOM item properly.
              name= {i.name}
              imgURL = {i.imgURL}
              phone = {i.phone}
              email = {i.email}
            />
          );
        })
      }

    </div>
  );
}

export default App;
