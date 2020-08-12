import React, { useState, useEffect } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator, AmplifySignOut }  from '@aws-amplify/ui-react';
import awsconfig from "./aws-exports";
import './App.css'
import axios from 'axios'
import Grid from './components/Grid'
import Pagination from './components/Pagination'
import {listBookmarkss} from './graphql/queries'
import Jumbo from './components/Jumbo'

Amplify.configure(awsconfig); 


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [favs, setFavs] = useState([]) ;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentSubreddits = items.slice(indexOfFirstPost, indexOfLastPost);
  

  useEffect(() => {
    getBookmarks()
    
    if (query.length >= 3) {
      axios(`https://www.reddit.com/subreddits/search.json?q=${query}`)
        .then(response => setItems(response.data.data.children.slice(0,100)))
        .catch(error => console.log("Error", error));
    }
  
   setIsLoading(false);
  }, [query]);
  

  const getBookmarks = async() => {
    const {data} = await API.graphql(graphqlOperation(listBookmarkss))
    setFavs(data.listBookmarkss.items)

  }
  
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
<div className="container" >

  <AmplifySignOut />
  <Jumbo favs= {favs} setQuery = {setQuery} getBookmarks = {getBookmarks} isLoading= {isLoading}/> 
  <input type="text" value={query} placeholder= "Search Subreddits . . ." onChange={e => setQuery(e.target.value)} />
  <Grid className= "card" items={currentSubreddits} isLoading={isLoading} getBookmarks = {() => {getBookmarks()}} />
  <Pagination postsPerPage={postsPerPage}    totalPosts={items.length}   paginate={paginate}  />
     
</div>
  );
}


export default withAuthenticator(App)
