import React from 'react'
import { useParams } from 'react-router-dom'

const Products = ({value='24'} ) => {
  const param = useParams();
  return (
    <>
      <h1>Product Page</h1>
      <h2>{param.pid}</h2>
      <h3>
      
      </h3>
      <h4>Value: {value} </h4>
    </>
  )
}

export default Products
