import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import Bulbasaur from '../../assets/bulba.png'
import styles from './styles'

export default function Pokedex() {
    const [pokemonsIndex, setPokemonsIndex] = useState([])
    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState('')
    const [pokemons, setPokemons] = useState([])

    const aux = []

    async function loadPokemons(){
        if(loading){
            return;
        }

        if(pokemonsIndex.length === 40){
            return;
        }

        if(pokemonsIndex.length < 20) {
            const res = await api.get('https://pokeapi.co/api/v2/pokemon');
            setLoading(true)
            setPokemonsIndex([...pokemonsIndex, ...res.data['results']])
            console.log(res.data['results'].url)
            setNext(res.data.next)
            console.log({next})
        }

        if(pokemonsIndex.length >= 20) {
            const res = await api.get(`${next}`)
            setLoading(true)
            setPokemonsIndex([...pokemonsIndex, ...res.data['results']])
            setNext(res.data.next)
            console.log({next})
        }

        setLoading(false)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    const numColumns = 2
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pokedex</Text>

                <TouchableOpacity>
                    <Feather name='menu' size={20}/>
                </TouchableOpacity>
            </View>

           <FlatList 
            style={styles.pokemonList}
            numColumns={numColumns}
            data={pokemonsIndex}
            keyExtractor={pokemon => String(pokemon.name)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.2}
            renderItem={ ({item: pokemon}) => (
                <TouchableOpacity style={styles.pokemonCard}>
                    <Text style={styles.cardName}>{pokemon.name}</Text>
                    <Text style={styles.cardType}>Grass</Text>
                    <Text style={styles.cardType}>Poison</Text>
                    <Image style={styles.cardPokemon} source={Bulbasaur}/>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}