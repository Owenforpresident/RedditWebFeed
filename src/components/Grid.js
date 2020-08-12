import React from 'react'
import Item from './Item'

const Grid = ({ items, isLoading, getBookmarks }) => {
  
  
  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <div>
      {items.map(i => (
        <Item key={i.data.display_name_prefixed} i={i} getBookmarks = {() => {getBookmarks()}} />
      ))}
    </div>
  );
};

export default Grid