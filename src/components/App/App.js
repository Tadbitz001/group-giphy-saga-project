import React from 'react';
import SearchGiphy from '../SearchGiphy/SearchGiphy';
import GiphyList from '../GiphyList/GiphyList';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchGiphy />
      <GiphyList />

    </div>
  );
}

export default App;
