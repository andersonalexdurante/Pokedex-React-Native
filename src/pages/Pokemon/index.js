import React, { useEffect, useState} from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import pokeball from '../../assets/pokeball.png'
import styles from './styles'

export default function Pokemon() {
    const routes = useRoute()
    const { pokemon, sprite, color, name, types } = routes.params
    const navigation = useNavigation()
    function backToPokedex() {
        navigation.navigate('Pokedex')
    }

    function loadPokemonData() {

    }

    useEffect(() => {
        loadPokemonData()
    }, [])

    return(
        <View style={[styles.container, {backgroundColor: `#${color}`}]}>  
            <View style={styles.header}>
                <TouchableOpacity onPress={() => backToPokedex()}>
                    <Feather name='arrow-left' size={24} color='#fff'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name='heart' size={24} color='#fff'/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.pokemonTopInformation}>
                <View style={styles.pokemonTopLeft}>
                    <Text style={styles.pokemonTitle}>{name.charAt(0).toUpperCase() + name.substring(1)}</Text>
                    <Text style={styles.pokemonType}>{[types[0]].toString().charAt(0).toUpperCase() + [types[0]].toString().substring(1)}    {[types[1]].toString().charAt(0).toUpperCase() + [types[1]].toString().substring(1)}</Text>
                </View>
                <View style={styles.pokemonTopRight}>
                    <Text style={styles.pokemonNumber}>#{pokemon.id}</Text>
                </View>
            </View>         

            <View style={styles.images}>
                <Image style={styles.pokemonImage} source={{uri: `${sprite}`}}/>
                <Image style={styles.pokeballImage} source={pokeball}/>
            </View>     
    

        </View>
    )
}