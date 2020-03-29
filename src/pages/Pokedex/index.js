import React, { useState } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import Bulbasaur from '../../assets/bulba.png'
import styles from './styles'

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(20)

    async function loadPokemons(){
        if(loading){
            return;
        }

        if(pokemons.length === 964){
            return;
        }

        if(pokemons.length < 20) {
            const res = await api.get('');
            setLoading(true)
            setPokemons([...pokemons, ...res.data])
        }

        if(pokemons.length > 20) {
            const res = await api.get(`/?offset=${offset}&limit=20`)
            setLoading(true)
            setPokemons([...pokemons, ...res.data])
            setOffset(offset + 20)
        }


        setLoading(false)
    }


    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pokedex</Text>

                <TouchableOpacity>
                    <Feather name='menu' size={20}/>
                </TouchableOpacity>
            </View>

           <View style={styles.pokemonList}>

                <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

                    <View style={styles.pokemonCard}>
                        <Text style={styles.cardName}>Bulbasaur</Text>
                        <Text style={styles.cardType}>Grass</Text>
                        <Text style={styles.cardType}>Poison</Text>
                        <Image style={styles.cardPokemon} source={Bulbasaur}/>
                    </View>

            </View>
        
        </View>
    )
}