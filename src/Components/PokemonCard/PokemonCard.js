import React, { useState, useSyncExternalStore } from 'react'
import styled from 'styled-components'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemo.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weigth}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard