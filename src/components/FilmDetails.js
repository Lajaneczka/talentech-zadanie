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
    <div className='container__films-details'>
      <h3>Movie Title: {filmDetails.title}</h3>
      <h4>Director: {filmDetails.director}</h4>
      <h4>Release date: {filmDetails.release_date}</h4>
    </div>
      )
    }


