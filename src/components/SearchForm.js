/*===========================================
            components/SearchForm.js
===========================================*/
import React, { useEffect, useRef } from 'react';

const SearchForm = ({ setSearchTerm }) => {
	//**************** Hook useRef ****************//
	const searchValue = useRef('');

	//**************** Hook useEffect ****************//
	useEffect(() => {
      searchValue.current.focus();
      
   }, []);
   
	//**************** Functionality ****************//
	function searchCocktail() {
		setSearchTerm(searchValue.current.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className='section'>
			<h2 className='section-title'>search cocktails</h2>
			<form className='form search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name'>search your favorite cocktail</label>
					<input
						type='text'
						name='name'
						id='name'
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
