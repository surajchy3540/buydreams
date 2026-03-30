import React, { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favourites"));
    if (saved) setFavourites(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (property) => {
    if (!favourites.find((item) => item.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((item) => item.id !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};