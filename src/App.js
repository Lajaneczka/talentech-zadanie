import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'  
import {Details} from './components/Details'
import { SearchFilms } from './components/SearchFilms';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false)
  


useEffect(() => {
  fetch("https://swapi.dev/api/people/")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log('data',data)
          setPeople(data.results);
      }).catch(err => console.log(err))
setLoading(false)
// console.log('people', people)
}, []);






const handlePress = () => {
  setShowDetails(!showDetails)
}

  return (
   <Container>
   {loading ? (
     <Dimmer active inverted>
       <Loader inverted>Loading</Loader>
     </Dimmer>
   ) : (
   
    <Table basic>

    <Table.Body>
    <h1>Name</h1>
        {people.map((person, i) => {
            return ( 
                <Table.Row>
                <Table.Cell key={i} >{person.name}
                <button onClick={handlePress}>
                    detailss
        
          </button>{ showDetails &&
          (
        <Details
        key={i}
        height={person.height}
        mass={person.mass}
        haircolor={person.hair_color}
        skincolor={person.skin_color}
        eyecolor={person.eye_color}
        birthyear={person.birth_year}
        gender={person.gender}
        homeworld={person.homeworld}
        films={person.films}
        />
    )
}

                </Table.Cell>
            </Table.Row>
            )
           
        })}
    </Table.Body>
  </Table>
   )}

<SearchFilms people={people}/>

   </Container>
  );
}

export default App;




