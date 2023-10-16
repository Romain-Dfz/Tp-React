import axios from "axios";
import React, { useEffect, useState } from "react";



const HomePage = () => {
  const {articles, setArticles} = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/artciles")
    .then(response => {
      setArticles(response.data)
    })
  })
    return (
      <>
        <h1>Bienvenue</h1>
        <div>
          {articles.map((e) => ( <div>{e.Titre}</div>
            
          ))}
        </div>
      </>
    )
  }
  
  export default HomePage