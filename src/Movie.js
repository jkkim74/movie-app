import React from 'react';
import ProtoTypes from 'prop-types';
import './Movie.css';

function Movie({title,poster}){
    return(
             <div>
              <h1>{title}</h1>
             <MoviePoster poster={poster}/>
             </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt='Movie Poster'/>
    )
}
export default Movie;