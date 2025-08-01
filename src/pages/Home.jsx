import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Gangs of Wasseypur", release_date: "2012" },
    { id: 2, title: "The Social Network", release_date: "2002" },
    { id: 3, title: "The Social Dilemma", release_date: "2010" },
  ];
  const handleSearch = (e) => {
    e.preventDefault()
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie ..."
          className="search-input"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
