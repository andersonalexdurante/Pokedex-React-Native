import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import { Colors } from './colors'
import pokeball from '../../assets/pokeball.png'
import styles from './styles'

export default function pokemonCard(props){
    const [name, setName] = useState('')
    const [types, setTypes] = useState([])
    const [sprite, setSprite] = useState(null)
    const [color, setColor] = useState('')
    const [pokemonId, setPokemonId] = useState(0)
    const [pokemonSpeciesUrl, setPokemonSpeciesUrl] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        loadPokemonData();
    },[color])


    function navigateToPokemon(pokemonId, sprite, color, name, types, pokemonSpeciesUrl, height, weight) {
        navigation.navigate('Pokemon', {pokemonId, sprite, color, name, types, pokemonSpeciesUrl, height, weight})
    }

    async function loadPokemonData() {
        setName(props.pokemon.name)
        try{
            const res = await api.get(`${props.pokemon.url}`)
            setTypes(res.data.types.map(type => type.type.name))
            setColor(Colors(types[0]))
            setSprite(`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${res.data.id}.png`)
            setPokemonId(res.data.id) 
            setPokemonSpeciesUrl(res.data.species.url)
            setHeight(res.data.height * 10)
            setWeight(res.data.weight / 10)
        } catch( err ) {
            console.log("Deu problema pra carregar a API")
        }

    }

    return(
        <TouchableOpacity style={[styles.pokemonCard, {backgroundColor: `#${color}`}]} onPress={() => navigateToPokemon(pokemonId, sprite, color, name, types, pokemonSpeciesUrl, height, weight)}>
            <Text style={styles.cardName}>{name.charAt(0).toUpperCase() + name.substring(1)}</Text>
            <Text style={[styles.cardType, {borderRadius: 20, maxWidth: 80, backgroundColor: '#F5AC78', textAlign: 'center'}]}>{[types[0]].toString().charAt(0).toUpperCase() + [types[0]].toString().substring(1)}</Text>
            <Text style={[styles.cardType, {borderRadius: 20,  maxWidth: 80, textAlign: 'center'}]}>{[types[1]].toString().charAt(0).toUpperCase() + [types[1]].toString().substring(1)}</Text>
            <Image style={styles.pokeballList} source={pokeball} />
            <Image style={styles.cardPokemon} source={{sprite} ? {uri: `${sprite}`} : pokeball}/>
        </TouchableOpacity>
    )
}