import React, { useState, useEffect } from 'react'

export const  FilmDetails = ({data}) => {


    const [filmDetails, setFilmDetails] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [showDetails, setShowDetails] = useState(false);

    
useEffect(() => {
    fetch(`${data}`)
        .then((resp) => resp.json())
        .then((data) => {
          setFilmDetails(data);
        }).catch(err => console.log(err))
//   setLoading(false)
  }, [...filmDetails]);




  return(
<div>
  <p>title: {filmDetails.title}</p>
  <p>release_date: {filmDetails.release_date}</p>
  <p>director: {filmDetails.director}</p>
  
</div>
  )
}


