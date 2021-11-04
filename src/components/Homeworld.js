    import React, { useState, useEffect } from 'react'

    export const Homeworld = ({data}) => {

        const [planetName, setPlanetName] = useState([])

        useEffect(() => {
            fetch(`${data}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setPlanetName(data);
                }).catch(err => console.log(err))
        }, []);



        return (
            <div>Homeworld: {planetName.name}</div>
        )
    }


