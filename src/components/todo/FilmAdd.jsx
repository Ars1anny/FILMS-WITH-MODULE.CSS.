import React, {useState} from "react"
import styles from './filmadd.module.css'
import FilmList from "./FilmList"

const FilmAdd = ({film, setFilm}) => {
  const [inputName, setInputName] = useState('');
  const [inputImg, setInputImg] = useState('');
  const [inputRating, setInputRating] = useState('');
  const [inputGenre, setInputGenre] = useState('');

  const handleAdd = () => {
   
    const newFilm = {
      id: Math.random(),
      name: inputName,
      img: inputImg,
      rating: inputRating,
      genre: inputGenre
    }

    setFilm(
      [
        ...film, newFilm
      ]
      )
      
      setInputName('');
      setInputImg('');
      setInputRating('');
      setInputGenre('');

   
  }

  return (
    <>
      <div>
        <h2 className={styles.title}>MY FILMS</h2>
  
        <input type="text"
               placeholder="Название фильма"
               value={inputName}
               className={styles.input}
               onChange={(e) => {
                 setInputName(e.target.value)
               }}/>
        <input type="url"
               placeholder="URL-ссылка"
               value={inputImg}
               className={styles.input}
               onChange={(e) => {
                 setInputImg(e.target.value)
               }}/>
        <input type="number"
               placeholder="Рейтинг"
               value={inputRating}
               className={styles.input}
               min={1}
               max={10}
               onChange={(e) => {
                 setInputRating(e.target.value)
               }}/>
        <input type="text"
               placeholder="Жанр"
               value={inputGenre}
               className={styles.input}
               onChange={(e) => {
                 setInputGenre(e.target.value)
               }}/>
        <button className={styles.add} onClick={handleAdd}>+ Добавить</button>
      </div>
    </>
  );
};
export default FilmAdd;