import React from 'react'
import {useParams } from 'react-router-dom';

const Blognum = () => {
    const p1 = useParams();
  return (
    <h1>Blog num - {p1.num}</h1>
  );
}
export default Blognum;
