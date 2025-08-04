import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  const addToFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };
  const removeFromFavourites = (movieID) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieID));
  };
  const isFavourite = (movieId) => {
    return favourites.some(movie => movie.id === movieId);
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
