import React from "react"
import styles from './filmlist.module.css'

const FilmList = ({film}) => {

  return (
    <>
      <div>
        {film.map(({id, name, rating, img, genre})=> (
          <div className={styles.container} key={id}>
            <img className={styles.image} src={img} alt="film" />
            <div className={styles.box}>
            <h1 className={styles.film}>{name}</h1>
            <p className={styles.rating}>{rating}/10 звезд</p>
            <p className={styles.genre}>{genre}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FilmList;