import React, {useState} from "react";
import styles from './SearchBar.module.css'
function SearchBar(props) {
  const [term, setTerm] = useState('')
  function passTerm() {
    props.onSearch(term)
  } 
  function handleTermChange({target}){
    setTerm(target.value);
  }
 
    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          // 1. make sure the term equals the input prior to the button being clicked
          onChange={handleTermChange}
        />
        <button className={styles.SearchButton} 
          //2. call search function declared on parent component
         onClick={passTerm} >
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;