import React from 'react';

function  Avatar(props){
     return(
          <img src={props.img} alt="avatar_img" className="circle-img" />
     );
}

export default Avatar;