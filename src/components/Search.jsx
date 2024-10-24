import React from 'react'
import style from "../style/Search.module.css"
const Search = () => {
  return (
    <div id={style.search}>
    <input type="text" placeholder='Search ...' />
    <button>Search</button>
    </div>
  )
}

export default Search