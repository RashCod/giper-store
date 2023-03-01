import React from 'react'
import search from '../../.././img/headerIMG/search.svg';
import styles from ".././Header.module.css";
import { setSearchValue } from '../../../redux/slices/searchSlice';
import { useDispatch,useSelector } from 'react-redux';

export const Search = () => {


const searchValue = useSelector(state => state.searchSlice.search)
const dispatch = useDispatch()



  return (
    <div className={styles.searchBlock}>
    <input value={searchValue} onChange={(e) => dispatch(setSearchValue(e.target.value))} className="search" type="text" />
    <img src={search} alt="search" className={styles.inputSearch} />
  </div>
  )
}
