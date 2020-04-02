import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import api from '../../services/api'

import pokeball from '../../assets/pokeball.png'
import styles from './styles'

export default function pokemonCard(props){
    const [name, setName] = useState('')
    const [types, setTypes] = useState([])
    const [sprite, setSprite] = useState(null)

    useEffect(() => {
        loadPokemonData();
    },[])

    async function loadPokemonData() {
        setName(props.pokemon.name)
        try{
            const res = await api.get(`${props.pokemon.url}`)
            setTypes(res.data.types.map(type => type.type.name))
            setSprite(res.data.sprites.front_default)
            
        } catch( err ) {
            console.log("Deu problema pra carregar a API")
        }

    }

    return(
        <TouchableOpacity style={styles.pokemonCard}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardType}>{[types[0]]}</Text>
            <Text style={styles.cardType}>{[types[1]]}</Text>
            <Image style={styles.cardPokemon} source={{sprite} ? {uri: `${sprite}`} : pokeball}/>
        </TouchableOpacity>
    )
}