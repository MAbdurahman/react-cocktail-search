/*===========================================
            pages/SingleCocktail.js
===========================================*/
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleCocktail = () => {
	const { id } = useParams();

	//**************** Hook useState ****************//
	const [loading, setLoading] = useState(false);
	const [cocktail, setCocktail] = useState(null);

	//**************** Hook useEffect ****************//
	useEffect(() => {
		setLoading(true);

		async function getCocktail() {
			try {
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
				);
				const data = await response.json();

				if (data.drinks) {
					//**************** destruct properties of data.drinks[0] from API ****************//
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];

					//**************** assign values to array ingredients ****************//
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];
					//**************** create newCocktail with same properties as above ****************//
					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
					//**************** assign newCocktail as SingleCocktail ****************//
					setCocktail(newCocktail);
				} else {
               setCocktail(null);
               
				}
			} catch (error) {
				console.log(error);
			}

			setLoading(false);
		}

		getCocktail();
   }, [id]);
   
   if (loading) {
      return <h2 className='section-title'>Loading...</h2>;

   }
   if (!cocktail) {
      return <h2 className='section-title'>no cocktail to display</h2>;

   } else {

      const {
			name,
			image,
			category,
			info,
			glass,
			instructions,
			ingredients,
      } = cocktail;

      return (
			<section className='section cocktail-section'>
				<Link to='/' className='btn btn-primary'>
					back home
				</Link>
				<h2 className='section-title'>{name}</h2>
				<div className='drink'>
					<img src={image} alt={name}></img>
					<div className='drink-info'>
						<p>name : {name}</p>
						<p>category: {category}</p>
						<p>info: {info}</p>
						<p>glass : {glass}</p>
						<p>instructions : {instructions}</p>
						<p>
							ingredients :{' '}
							{ingredients.map((item, index) => {
								return item ? <span key={index}>{item}</span> : null;
							})}
						</p>
					</div>
				</div>
			</section>
		);
   }
};

export default SingleCocktail;
