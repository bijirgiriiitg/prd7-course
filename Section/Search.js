import React from "react";

// import Bookmark from "@material-ui/icons";
import subject from "./Recordings/subject.jpg";
import styles from "./Recordings//search.module.css";
import styled from "styled-components";
import {Link } from "react-router-dom";
function Search({items,recents, yes, searchHandler}) {

  const searchTopic=(e)=>{
    e.preventDefault();

    if(e.target[0].value==="") return searchHandler(recents);
    
    const filtered = [];
   

    recents.forEach((recent,i)=>{
      const nameArray = recent.name.toLowerCase().split(" ");
      if(nameArray.includes(e.target[0].value.toLowerCase())){
        filtered.push(recent);
      };
    })

    searchHandler(filtered);
   
  }

  return (
    <>
      <div className={styles.container} >
        <div className={styles.first}>
          <p className={styles.firstHeading}>{yes ? ("Recorded Lectures"): ("Notes")}</p>

          <form onSubmit={searchTopic}>
          <div className={styles.box}>
            <input
              type="text"
              className={styles.input}
              placeholder="Search for lecture by name"
            />
            <button className={styles.search}>Search</button>
            
          </div>
          </form>

        </div>
        <div className={styles.second}>
          <p className={styles.secondHeading}> {yes ? ("Recent Lectures"): ("Recent Notes")} </p>
          {/* <p className={styles.load}>view more </p> */}
        </div>
        <div className={styles.third}> 
        {
          recents ? (
            
          [0,1].map( (i,idx) => {
            return(
          <div className={styles.cards} onClick={()=> {console.log(items,idx)}}>
            <img src={subject} alt="topic" className={styles.img} />
            <div className={styles.lower}>
            <ViewLink key ={i} to={{pathname: `/topic/${recents[i]._id}`, state: { topicsData:items , topicIndex:{i} }}}>
              <div className={styles.about}>
                <p className={styles.number}>{idx+1}.</p>
                <p className={styles.text}>{recents[i].name}</p>
              </div>
              </ViewLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              
            </div>
          
            <p className={styles.time}>30mintutes</p>
          </div>
          )})
        ) : ( <></>)} 
          
        </div>
      </div>
    </>
  );
}
const ViewLink = styled(Link)`
text-decoration: none;
color: black;
font-style: auto;
font-weight: auto;
&:hover {
  color: #1bbc9b;
}
`;
export default Search;
