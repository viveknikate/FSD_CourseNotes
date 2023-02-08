import {useParams} from 'react-router-dom';

import React from 'react'

const Article = () => {
    const art = useParams();
  return (
    <h1>Articles here:{art.ArtNum}</h1>
  )
}
export default Article
