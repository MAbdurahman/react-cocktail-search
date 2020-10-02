/*===========================================
            pages/Error.js
===========================================*/
import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
   return (
      <section className="section error-page">
         <div className="error-container">
            <h1>oops! end of the road</h1>
            <Link to="/" className="btn btn-primary">back to home</Link>
         </div>
      </section>
   )
}

export default Error;
