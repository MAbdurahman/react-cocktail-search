/*===========================================
            components/CocktailList.js
===========================================*/
import React from 'react';
import Loader from './Loader';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails, loading }) => {
	console.log(cocktails);
	if (loading) {
		return (
			<section>
				{/* <h2 className='section-title'>
					loading...
				</h2> */}
				<Loader type='spinningBubbles' color='#476A2E' className='loader-center'/>
			</section>
		);
	}
	if (cocktails.length < 1) {
		return (
			<>
				<h2 className='section-title'>
					No cocktails match your search criteria
				</h2>
			</>
		);
	}

	return (
		<section className='section'>
			<h2 className='section-title'>cocktails</h2>
			<div className='cocktails-center'>
				{cocktails.map(drink => {
					return <Cocktail key={drink.id} {...drink} />;
				})}
			</div>
		</section>
	);
};

export default CocktailList;
