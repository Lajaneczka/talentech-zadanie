    import React, { useState} from 'react'
    import { FilmDetails } from './FilmDetails';

    export const SearchFilms = ({people}) => {
          const [search, setSearch] = useState('');
    

        return (
            <div className='container__films'>
            <form>
              <label htmlFor="header-search">
                <span className="visually-hidden">Search Film </span>
              </label>
              <input
                type="text"
                placeholder="Search Film"
                className="films-input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Search</button>
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







