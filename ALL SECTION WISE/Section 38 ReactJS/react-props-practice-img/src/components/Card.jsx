import React from "react";
import Avatar from "./Avatar";
import Details from "./Information";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.num+1}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.imgURL}/>
      </div>
      <div className="bottom">
        <Details info={props.phone} />
        <Details info={props.email}/>
      </div>
    </div>
  );
}

export default Card;
