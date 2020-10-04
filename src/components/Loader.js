/*===========================================
            components/Loader.js
===========================================*/
import React from 'react';
import ReactLoading from 'react-loading';


const Loader = ({type, color, className}) => {
   return (
		<ReactLoading type={type} color={color} className={className} height={'20%'} width={'20%'} />
	);
};

export default Loader;
