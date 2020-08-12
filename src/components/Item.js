import React, { useState, useEffect } from "react";
import axios from 'axios'
import Comment from './Comment'
import  { API, graphqlOperation } from "aws-amplify";
import {createBookmarks} from '../graphql/mutations'

const Item = ({i, getBookmarks}) => {
  
  const [comments, setComments] = useState([]);
 

  useEffect(() => {
      axios(`https://www.reddit.com${i.data.url}comments/.json?limit=3`)
        .then(response => setComments(response.data.data.children))
        .catch(error => console.log("Error", error));
  }, [i]);
  
  
const handleOnClick = async () => {
  const payload = i.data.display_name_prefixed
  await API.graphql(graphqlOperation(createBookmarks, {input : {"title": payload} }))
  getBookmarks()
  
}
   
    return  (
      <div className='card center' >
        <div className='card-inner'>
          <div className='card-front'>
          <h1>{i.data.display_name_prefixed}</h1> 
           <p >{i.data.public_description}</p>
          </div>
          <div className='card-back '>
          <h1 className= "center mx-auto">{i.data.display_name_prefixed}</h1>
            <ul>
                {comments.map((comment,i) => (
                
                 <Comment comment = {comment} key = {i}/>
               
                ))}
            </ul>
            <div className = "text-center">
            <button className = 'btn text-center' onClick = {handleOnClick} >Add to Bookmarks</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item