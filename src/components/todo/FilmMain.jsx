import React, { useState } from "react";
import FilmAdd from "./FilmAdd";
import Filter from "./Filter";
import FilmList from "./FilmList";
import data from "../../data/data";

const FilmMain = () => {
  const [film, setFilm] = useState(data);

  return (
    <>
      <FilmAdd film={film} setFilm={setFilm} />
      <Filter film={film} setFilm={setFilm} />
      <FilmList film={film} />
    </>
  );
};
export default FilmMain;