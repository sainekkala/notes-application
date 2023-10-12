import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchText} from '../Slice/NotesSlice';


function SearchBar() {
  const searchValue = useSelector((state) => state.searchText);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const text = e.target.value;
    dispatch(setSearchText(text));
  }
  return (
    <div className='container mt-3'>
      <input 
      type='text'
      placeholder='Search....'
      value={searchValue}
      onChange={handleSearch}
       />
    </div>
  )
}

export default SearchBar;
