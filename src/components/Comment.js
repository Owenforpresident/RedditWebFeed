import React, { useState, useEffect } from "react";
import axios from 'axios'


const Comment = ({comment}) => {
 const [replies, setReplies] = useState([]);

  useEffect(() => {

      axios(`${comment.data.link_permalink}.json?limit=5`)
      .then(response => setReplies(response.data[1].data.children))
      .catch(error => console.log("Error", error));
  }, []);
  
  
    return  (
      <div className="comment" >
  <span style={{color: '#FF4500'}} > {comment.data.link_title.substring(0,300)} </span> 
  {replies.map( (reply, i) => ( 
      reply.data.body !== undefined ? 
      <div  style= {{"fontSize": "14px"}}  key ={i} >   
     <p className = "mt-1 badge badge-primary" style= {{"margin":"0"}}  > {reply.data.author} </p><p> {reply.data.body}</p>  
     </div> 
     :<p key = {i} ></p>
) )}
      </div>
    )
}

export default Comment