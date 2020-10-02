/*===========================================
            pages/SingleCocktail.js
===========================================*/
import React from 'react';
import {useParams} from 'react-router-dom';

const SingleCocktail = () => {
   const {id} = useParams();
   return (
      <div>
         <h1>pages/SingleCocktail.js id: {id}</h1>
      </div>
   )
}

export default SingleCocktail;
