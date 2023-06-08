import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({watchList, page, setPage, movieList, addMovie, removeMovie}) => {

    const movieDisplay = movieList.map((movie,index) => {
        return <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchList={watchList}
        />
    });

    return (
        <div className='page'>
            <h1>Omair's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='movie-container'>
                {movieDisplay}
            </div>
        </div>
    )
};


export default MovieScreen;