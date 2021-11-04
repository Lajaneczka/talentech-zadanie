  import React, { useState, useEffect } from 'react'
  

  export const  FilmDetails = ({data}) => {

      const [filmDetails, setFilmDetails] = useState([]);

      
  useEffect(() => {
      fetch(`${data}`)
          .then((resp) => resp.json())
          .then((data) => {
            setFilmDetails(data);
          }).catch(err => console.log(err))
    }, [...filmDetails]);


    return(
  <div className='filmdetails__container'>
    <h3>title: {filmDetails.title}</h3>
    <h4>director: {filmDetails.director}</h4>
    <h4>release_date: {filmDetails.release_date}</h4>
  </div>
    )
  }


