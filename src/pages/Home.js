/*===========================================
            pages/Home.js
===========================================*/
import React, {useState, useEffect} from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';


const Home = () => {
	//**************** Hook useState ****************//
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('ab');
	const [cocktails, setCocktails] = useState([]);

   //**************** Hook useEffect ****************//
   useEffect(() => {

      setLoading(true);
      
		async function getDrinks() {

			try {
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
				);
				const data = await response.json();
				const { drinks } = data;
				if (drinks) {
					const newCocktails = drinks.map(drink => {
						const {
							idDrink,
							strDrink,
							strDrinkThumb,
							strAlcoholic,
							strGlass,
						} = drink;

						return {
							id: idDrink,
							name: strDrink,
							image: strDrinkThumb,
							info: strAlcoholic,
							glass: strGlass,
						};
               });
               
               setCocktails(newCocktails);
               
				} else {
               setCocktails([]);
               
            }
            
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		}

      getDrinks();
      
	}, [searchTerm]);



	return (
		<main>
			<SearchForm setSearchTerm={setSearchTerm} />
			<CocktailList loading={loading} cocktails={setCocktails} />
		</main>
	);
}

export default Home;
