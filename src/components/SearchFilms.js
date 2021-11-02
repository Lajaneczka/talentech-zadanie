import React,  { useState, useEffect } from 'react'

export const SearchFilms = ({ searchQuery, setSearchQuery}) => {

      const [films, setFilms] = useState([]);
    //   const [searchQuery, setSearchQuery] = useState('');

      useEffect(() => {
        fetch("https://swapi.dev/api/films/")
            .then((resp) => resp.json())
            .then((data) => {
           
                setFilms(data.results);
                //    console.log('data',data)
            }).catch(err => console.log(err))
      }, []);

console.log('films', films)




// const filterFilms = (searchInput) => {
//     people
//     .filter(film => {
//       if (searchInput === '') return true
//       return film.title
//         .toLowerCase()
//         .includes(searchInput.toLowerCase())
//     })
//   }

// const filteredFilms = films.filter(film => 
//     coin.name.toLowerCase().includes(search.toLowerCase())
//     );


    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input    
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="films-input" 
         />
        <button type="submit">Search</button>
        </form>
    )
}


// onChange={() => filterFilms(search)}




