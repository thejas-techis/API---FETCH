import React from "react";
import { useState, useEffect } from "react";
import Content from "./Content";





export default function App ()
{
  const [posts , setPosts] = useState([])

  const fetchPost = async () => {
  const response = await fetch(
    "https://all-the-weather.herokuapp.com/cities"
  );
  const data = await response.json();
  
  setPosts(data.items)
  //console.log(data.items)

  
  }

  console.log(posts[0]);

  useEffect(() => {
    fetchPost()
  } , []);


  return(
    <>
    <button className="head" >Region</button>
    <button className="head">Country</button>
    <button className="head">City</button> <br/> 

    {
      (posts).map(item => 
        <Content regionCode={item.regionCode} countryCode={item.countryCode} name={item.name} />
    
        )
    }
    </>
  );

}