import React, { useEffect, useState} from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation,  } from '@react-navigation/native'
import { Feather, AntDesign } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import pokeball from '../../assets/pokeball.png'
import styles from './styles'

import api from '../../services/api'

export default function Pokemon() {
    const routes = useRoute()
    const { pokemonId, sprite, color, name, types, pokemonSpeciesUrl, height, weight } = routes.params
    const navigation = useNavigation()
    const tab = createMaterialTopTabNavigator()
    const [description, setDescription] = useState('')

    function backToPokedex() {
        navigation.navigate('Pokedex')
    }

    async function loadPokemonData() {
        try {
            const res = await api.get(`${pokemonSpeciesUrl}`)
            setDescription(res.data.flavor_text_entries[17].flavor_text)
        } catch(error) {
            console.log(error)
        }  
    }

    useEffect(() => {
        loadPokemonData()
    }, [])

    function About() {
        return (
            <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: '#fff'}}>
                <Text style={{fontSize: 15, textAlign: 'center', paddingTop: 10, fontWeight: '800'}}>{description}</Text>
                <View style={{justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderStyle: 'solid', borderColor: `#${color}` }}>
                    <View>
                        <Text style={{color: '#b5b8bd', fontWeight: '700', textAlign: 'center', marginBottom: 5}}>Height</Text>
                        <Text style={{fontWeight: 'bold'}}>{(height / 30.48).toFixed(2)} ft ({height} cm)</Text>
                    </View>
                    <View>
                        <Text style={{color: '#b5b8bd', fontWeight: '700', textAlign: 'center', marginBottom: 5}}>Weight</Text>
                        <Text style={{fontWeight: 'bold'}}>{(weight * 2.205).toFixed(2)} lbs ({weight} kg)</Text>
                    </View>
                </View>

                <View style={{marginTop: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 2}}>Breeding</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{color: '#b5b8bd', marginRight: 90, fontSize: 15, fontWeight: '700'}}>Gender</Text>
                        <AntDesign name='man' size={16} color='blue'/>
                        <Text style={{marginLeft: 5, marginRight: 40}}>87,5%</Text>
                        <AntDesign name='woman' size={16} color='pink' />
                        <Text>12,5%</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#b5b8bd', marginRight: 75, fontSize: 15, fontWeight: '700'}}>Egg Groups</Text>
                        <Text>Monster</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#b5b8bd', marginRight: 85, fontSize: 15, fontWeight: '700'}}>Egg Cycle</Text>
                        <Text>Grass</Text>
                    </View>
                </View>
            </View>
        )
    }

    function BaseStats() {
        return (
            <View style={styles.container}>
            
            </View>
        )
    }

    function Evolution() {
        return (
            <Text>Evolution Chain</Text>
        )
    }

    function Moves() {
        return (
            <Text>Moves</Text>
        )
    }

    return(
        <View style={[styles.container, {backgroundColor: `#${color}`}]}>  
            
            <View style={styles.divisionTop}>

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
                        <Text style={styles.pokemonNumber}>#{pokemonId}</Text>
                    </View>
                </View>         

                <View style={styles.images}>
                    <Image style={styles.pokemonImage} source={{uri: `${sprite}`}}/>
                    <Image style={styles.pokeballImage} source={pokeball}/>
                </View>

            </View>

            <View style={styles.divisionBottom}>
                <tab.Navigator
                style={styles.tabView} 
                tabBarOptions={{ labelStyle: {fontSize: 10, fontWeight: 'bold'} }}>
                    <tab.Screen name="About" component={About}/>
                    <tab.Screen name="Base Stats" component={BaseStats}/>
                    <tab.Screen name="Evolution" component={Evolution}/>
                    <tab.Screen name="Moves" component={Moves}/>
                </tab.Navigator>
            </View>

        </View>
    )
}