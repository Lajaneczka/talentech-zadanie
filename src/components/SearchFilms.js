    import React, { useState} from 'react'
    import { FilmDetails } from './FilmDetails';

    export const SearchFilms = ({people}) => {
          const [search, setSearch] = useState('');
    
          const onSubmit = (e) => {
            e.preventDefault();
          }
        return (
            <div className='container__films'>
            <form className='form__container'>
            
              <input
                type="text"
                placeholder="Search Film"
                className="films-input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" onClick={(e) => onSubmit(e)} className='btn-search'>Search</button>
            </form>
            {
              search && (
                <div className='container__films-searched'>
                <ul>
              {people
                .filter((person) =>
                  person.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((details) => details.films)
                .map((film) =>
                  film.map(item => (
                    <FilmDetails data={item} />
                  ))
                )}
            </ul>
            </div>
              )
            }

          </div>
        )
    }







