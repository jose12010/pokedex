import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from "../components/PokemonCard";
import axios from 'axios'
import SearchPokemon from '../components/SearchPokemon';
import SelectionPokemon from '../components/SelectionPokemon'
import Pagination from '../components/Pagination';

const Pokedex = () => {



  const user = useSelector(state => state.user)
  const [pokemon, setPokemon] = useState()
  const [typeSelected, setTypeSelected] = useState("All pokemons")
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPage, setElementPage] = useState(20)

  useEffect(() => {
    if(typeSelected == "All pokemons"){
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
      axios.get(URL)
        .then(res => {
          setPokemon(res.data.results)
          // console.log(pokemon)
        })
        .catch(error => console.log(error))
    }else{
      axios.get(typeSelected)
      .then(res => {
        const pokemonVector = res.data.pokemon.map(pokemonSelected => pokemonSelected.pokemon) 
        // console.log(pokemonVector)
        setPokemon(pokemonVector)
        })
      .catch(error => console.log(error))
    }
  }, [typeSelected])
  
  const lastPostIndex = currentPage*elementsPage
  const firstPostIndex = lastPostIndex-elementsPage
  const currentPost =  pokemon?.slice(firstPostIndex, lastPostIndex)
  return (
    <div className='main_pokedex'>
      <div className="title_pokedex">
        <h1>Pokedex</h1>
        <h2>Bienvenido, {user}! Escoge tu favorito:</h2>
      </div>
      <div className='srch_fltr_pokedex'>
          <SearchPokemon/>
        <div className="fltr">
          <SelectionPokemon setTypeSelected={setTypeSelected}/>
        </div>
      </div>
      
      <div className="pokemons_pokedex">
          {currentPost?.map(pokemons => (
            <PokemonCard
              key={pokemons.url} 
              url={pokemons.url}
          />
          ))}
      </div>

      <div className="pagination">
        <Pagination length={pokemon?.length} elementsPage={elementsPage} setCurrentPage={setCurrentPage}/>
      </div>


    </div>
  )
}

export default Pokedex