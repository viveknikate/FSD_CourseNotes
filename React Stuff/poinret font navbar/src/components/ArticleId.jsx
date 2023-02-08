import React from 'react'
import {useParams} from 'react-router-dom';

const ArticleId = () => {
    const id = useParams();
  return (
    <h1>Article - {id.id}</h1>
  )
}

export default ArticleId
