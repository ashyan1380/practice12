import React, { useState } from 'react';
import Name from './component/Name'
import NamesList from './component/NamesList';
import PEOPLE from './data'
import './App.css';
import Search from './component/Search';
import ClearList from './component/ClearList';
import Favorites from './component/Favorites'
function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (search) =>{
    setSearch(search)
  }

  const handleClearInput = () =>{
    setSearch('')
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} search={search}/>
      <NamesList datas={PEOPLE} search={search}/>
      {search && <ClearList content='Clear List' onClick={handleClearInput}/>}
      <Favorites/>
    </div>
  );
}

export default App;
