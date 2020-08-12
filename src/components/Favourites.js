import React from 'react'
import {deleteBookmarks} from '../graphql/mutations'
import  { API, graphqlOperation } from "aws-amplify";


const Favourites = ({favs, getBookmarks, setQuery}) => {
  
  
    
  const handleDeleteClick = async fav => {
    const payload = fav.id 
    await API.graphql(graphqlOperation(deleteBookmarks, { input : {"id" : payload}} ))
    getBookmarks()
  }
  
   const handleBookmarkClick = async fav => {
     await setQuery(fav.title)
  }
  
 
  return   (
    <div className = "text-center">
     {favs.length > 0 ? <h5>Your Bookmarked Subreddits: </h5> : <h5> No Bookmarks yet . . .</h5>}
     <ul className="list-group" >
  {favs.map(fav => 
 
    <li  key = {fav.id} className= "list-group-item  list-group-item-dark  text-center mb-1">
    {fav.title}
    <div className="float-right">
    <button className="badge badge-success ml-2 mr-2" onClick = {() => handleBookmarkClick(fav) } >Load</button>
    <button className="badge badge-danger ml-2" onClick = {() =>  handleDeleteClick(fav) } >Remove</button>
    </div>
    </li>
  
  ) }
   </ul>
  </div>
);

}
export default Favourites