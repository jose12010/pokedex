import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SelectionPokemon = ({setTypeSelected}) => {

    const [selection, setSelection] = useState()
    

    useEffect(() => {
        const URL = "https://pokeapi.co/api/v2/type"
        axios.get(URL)
            .then(res => setSelection(res.data))
            .catch(error => console.log(error))
    }, [])
    
    
    const typeSelection = (event) => {
        setTypeSelected(event.target.value)
        // console.log(event.target)
    }

  return (
    <select onChange={typeSelection}>
            <option value="All pokemons">All pokemons</option>
            {
                selection?.results.map(pokemonType => <option key={pokemonType.url} value={pokemonType.url}>{pokemonType.name}</option>)
            }
    </select>
  )
}

export default SelectionPokemon