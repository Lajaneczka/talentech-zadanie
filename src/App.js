import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react'  
import { People } from './components/People';
// import { Films } from './components/Films';

function App() {
  const [people, setPeople] = useState([]);
  // const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("https://swapi.dev/api/people/")
      .then((resp) => resp.json())
      .then((data) => {
          setPeople(data.results);
      }).catch(err => console.log(err))
setLoading(false)
}, []);



  return (
   <Container>
   {loading ? (
     <Dimmer active inverted>
       <Loader inverted>Loading</Loader>
     </Dimmer>
   ) : (
   <People data={people}/>
   )}
   </Container>
  );
}

export default App;


// useEffect(() => {
//   async function fetchPeople() {
//     let res = await fetch("https://swapi.dev/api/people/")
//     let data = res.json();
//     setPeople(data)
//   }
//   fetchPeople()
// }, [])

// console.log('people', people)

