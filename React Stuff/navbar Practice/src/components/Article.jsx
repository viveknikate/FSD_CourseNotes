import React from 'react'
import { useParams } from 'react-router-dom';

const Article = () => {
  const arts = useParams();
  return (
        <> 
          <h1>Article Page</h1>
          <h2>{arts.artNums}</h2>
        </>
    );
}
export default Article;
