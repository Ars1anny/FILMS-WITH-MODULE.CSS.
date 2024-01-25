import React, {useState} from "react"
import styles from './filter.module.css'
import data from "../../data/data";


const Filter = ({film, setFilm}) => {
  const [select, setSelect] = useState();

  const handleSelect = (e) => {
    const selected = e.target.value;
    setSelect(selected);

    if(selected === 'all'){
      setFilm(data);
    }else if(selected === 'comedy'){
      const filteredFilm = data.filter((item) => item.genre === 'Комедия');
      setFilm(filteredFilm);
    }else if(selected === 'action'){
      const filteredFilm = data.filter((item) => item.genre === 'Боевик');
      setFilm(filteredFilm);
    }else if(selected === 'thriller'){
      const filteredFilm = data.filter((item) => item.genre === 'Триллер');
      setFilm(filteredFilm);
    }else if(selected === 'drama'){
      const filteredFilm = data.filter((item) => item.genre === 'Драма');
      setFilm(filteredFilm);
    }else if(selected === 'melodrama'){
      const filteredFilm = data.filter((item) => item.genre === 'Мелодрама');
      setFilm(filteredFilm);
    }else if(selected === 'horror'){
      const filteredFilm = data.filter((item) => item.genre === 'Ужасы');
      setFilm(filteredFilm);
    }
  }


  return (
    <>
      <div>
        <select className={styles.select} value={select} onChange={handleSelect}>
          <option className={styles.option} value='all'>Все фильмы</option>
          <option className={styles.option} value='comedy'>Комедия</option>
          <option className={styles.option} value='action'>Боевик</option>
          <option  className={styles.option}value='thriller'>Триллер</option>
          <option className={styles.option} value='drama'>Драма</option>
          <option className={styles.option} value='melodrama'>Мелодрама</option>
          <option className={styles.option} value='horror'>Ужасы</option>
        </select>
      </div>
    </>
  );
};
export default Filter;