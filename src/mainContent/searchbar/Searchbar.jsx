import React, {useEffect} from 'react'
import './searchbar.css'
import {BsSearch} from 'react-icons/bs'
function Searchbar({setSearchText, searchText}) {

  useEffect(()=>{

  })
  const handleSearchResults = (e) => {
    if(searchText==='') ;
    if(e.target.value===''||e.target.value===undefined||e.target.value===""|| e.target.value===' ') setSearchText('')
    else
    setSearchText(e.target.value);
  };

  
  return (
    <div class="bar" >
      <input class="searchbar" id='searchbar' onChange={(e) => handleSearchResults(e)} placeholder='search' type="text" title="Search"/>
        <i class="s_icon"><BsSearch/></i>
    </div>
  )
}

export default Searchbar
