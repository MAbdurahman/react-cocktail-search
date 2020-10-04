/*===========================================
            components/CocktailList.js
===========================================*/
import React from 'react';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails, loading }) => {

   console.log(cocktails);
	if (loading) {
		return (
			<>
				<h2 className='section-title'>Loading...</h2>
			</>
		);
   }
   if (cocktails.length < 1) {
      return (
         <>
         <h2 className="section-title">No cocktails match your search criteria</h2>
         </>
      );
   }

	return (
		<section className="section">
			<h2 className="section-title">cocktails</h2>
			<div className="cocktails-center">
				{cocktails.map(drink => {
					return <Cocktail key={drink.id} {...drink}/>
				})}
			</div>
		</section>
	);
};

export default CocktailList;
