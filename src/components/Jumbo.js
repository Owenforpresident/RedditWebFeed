import React from 'react'
import Favourites from './Favourites'

const Jumbo = ({ favs, getBookmarks, setQuery }) => {
  
  return  (
     <div className="card center" style={{background: "grey", height: "100%", padding: "10px"}} >
        <h1 className = "text-center"> Reddify Web </h1>
        <img src= "https://i.redd.it/2qy7unjo2j331.png" alt= "Reddit Logo"/> 
        <Favourites favs= {favs} key = {favs.length}  getBookmarks = {() => {getBookmarks()}} setQuery = {setQuery}/>
    </div>
)
};

export default Jumbo