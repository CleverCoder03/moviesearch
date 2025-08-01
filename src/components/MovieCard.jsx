import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.imgURL} alt={movie.title} />
        <div className='movie-overlay'>
          <button className='favourite-btn'>
            🤍
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard