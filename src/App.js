  import React, { useState, useEffect } from 'react';
  import './App.css';
  import { Container, Table, Loader} from 'semantic-ui-react' 
  import {PersonDetails} from './components/PersonDetails'
  import { SearchFilms } from './components/SearchFilms';

  function App() {
    const [people, setPeople] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [activePerson, setActivePerson] = useState('')


  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
        .then((resp) => resp.json())
        .then((data) => {
            setPeople(data.results);
        }).catch(err => console.log(err))
  }, []);


  const handlePress = (e, id) => {
    setActivePerson(id)
    setShowDetails(!showDetails)
  }

  if (people.length === 0) {
    return (
      <div className='loader'>
        <p>Loading</p>
    <Loader active inline='centered' />
    </div>
    )
  } 
    return (
    <Container >
  <Table basic>

      <Table.Body>
      <h1>Name</h1>
          {people.map((person, i) => {
              return ( 

                  <Table.Row >
                   
                  <Table.Cell key={i} >{person.name}
                  <button   onClick={(e) => handlePress(e, person.name)} className='button' >
                    Details
          
            </button>

            { (showDetails && person.name===activePerson) &&
            (
          <PersonDetails
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
    

  <SearchFilms people={people}/>

    </Container>
    );
  }

  export default App;




