import React from 'react'
import {useParams} from 'react-router-dom';  

const Product = () => {
  const p1 = useParams();
  return (
    <h1>Product:{p1.id}</h1>
  )
}

export default Product
