import React,  { useState, useEffect } from 'react'

export const SearchFilms = ({people}) => {

      const [films, setFilms] = useState([]);
      const [search, setSearch] = useState('');

      useEffect(() => {
        fetch("https://swapi.dev/api/films/")
            .then((resp) => resp.json())
            .then((data) => {
           
                setFilms(data.results);
                //    console.log('data',data)
            }).catch(err => console.log(err))
      }, []);

console.log('films', films)




const filterFilms = (searchInput) => {
    people
    .filter(film => {
      if (searchInput === '') return true
      return film.title
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    })
  }


    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input type="text" placeholder="Search" className="films-input" onChange={() => filterFilms(search)} value={search}/>
        <button type="submit">Search</button>
        </form>
    )
}





