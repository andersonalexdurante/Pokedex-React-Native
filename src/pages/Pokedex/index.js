import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'
import PokemonCard from './pokemonCard'
import pokeball from '../../assets/pokeball.png'

import styles from './styles'

export default function Pokedex() {
    const [pokemonsIndex, setPokemonsIndex] = useState([])
    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState('')

    async function loadPokemons(){
        if(loading){
            return;
        }

        if(pokemonsIndex.length == 120){
            return;
        }

        if(pokemonsIndex.length == 0) {
            const res = await api.get('https://pokeapi.co/api/v2/pokemon/?offset=386&limit=20');
            setLoading(true)
            setPokemonsIndex(res.data['results'])
            setNext(res.data.next)
            setLoading(false)
            return;
        }

        const res = await api.get(`${next}`)
        setLoading(true)
        setPokemonsIndex([...pokemonsIndex, ...res.data['results']])
        setNext(res.data.next)

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
                    <Feather name='menu' size={24}/>
                    <Image style={styles.pokeballMenu} source={pokeball}/>
                </TouchableOpacity>
               
            </View>

           <FlatList 
            style={styles.pokemonList}
            numColumns={numColumns}
            data={pokemonsIndex}
            keyExtractor={pokemon => String(pokemon.name)}
            showsVerticalScrollIndicator={true}
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.2}
            windowSize={5}
            refreshing={true}
            renderItem={ ({item: pokemon}) => (
                <PokemonCard pokemon={{
                    name: pokemon.name,
                    url: pokemon.url
                }}/>
            )}
            />
        </View>
    )
}