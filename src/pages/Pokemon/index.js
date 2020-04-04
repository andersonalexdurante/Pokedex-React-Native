import React, { useEffect, useState} from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation,  } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Bar } from 'react-native-progress'

import pokeball from '../../assets/pokeball.png'
import styles from './styles'

import api from '../../services/api'

export default function Pokemon() {
    const routes = useRoute()
    const {pokemonData, sprite, color, name, types, pokemonSpeciesUrl} = routes.params
    
    const navigation = useNavigation()
    const tab = createMaterialTopTabNavigator()

    const [pokemonId, setPokemonId] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [description, setDescription] = useState('')
    const [abilities, setAbilities] = useState([])
    const [stats, setStats] = useState([])

    function backToPokedex() {
        navigation.navigate('Pokedex')
    }

    async function loadPokemonData() {
        setPokemonId(pokemonData.id)
        setHeight(pokemonData.height * 10)
        setWeight(pokemonData.weight / 10)
        setAbilities(pokemonData.abilities.map(ability => ability.ability.name))
        setStats(pokemonData.stats.map(stat => stat.base_stat))
        try {
            const res = await api.get(`${pokemonSpeciesUrl}`)
            setDescription(res.data.flavor_text_entries[1].flavor_text)
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
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', marginTop: 10}}>Abilities</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>   
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: `#${color}`, textShadowColor: 'black', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 1}}>{[abilities[0]].toString().charAt(0).toUpperCase() + [abilities[0]].toString().substring(1)}</Text>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: `#${color}`, textShadowColor: 'black', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 1}}>{[abilities[1]].toString().charAt(0).toUpperCase() + [abilities[1]].toString().substring(1)}</Text>
                </View>
            </View>
        )
    }

    function BaseStats() {
        return (
            <View style={{paddingHorizontal: 10}}>
                <View style={{flexDirection: "row", marginTop: 12, marginBottom: 3}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 10}}>HP:</Text>
                    <Bar progress={(stats[5] / 100) - 0.3} width={305} height={20} color={`#${color}`}>
                        <Text style={{position: "absolute", marginLeft: 100, fontWeight: 'bold'}}>{stats[5]}</Text>
                    </Bar>
                </View>
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 3}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 10}}>Attack:</Text>
                    <Bar progress={(stats[4] / 100) - 0.3} width={281} height={20} color={`#${color}`}>
                        <Text style={{position: "absolute", marginLeft: 100, fontWeight: 'bold'}}>{stats[4]}</Text>
                    </Bar>
                </View>
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 3}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 10}}>Defense:</Text>
                    <Bar progress={(stats[3] / 100) - 0.3} width={270} height={20} color={`#${color}`}>
                        <Text style={{position: "absolute", marginLeft: 100, fontWeight: 'bold'}}>{stats[3]}</Text>
                    </Bar>
                </View>
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 3}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 10}}>Special Attack:</Text>
                    <Bar progress={(stats[2] / 100) - 0.3} width={228} height={20} color={`#${color}`}>
                        <Text style={{position: "absolute", marginLeft: 100, fontWeight: 'bold'}}>{stats[2]}</Text>
                    </Bar>
                </View>
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 3}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 10}}>Special Defense:</Text>
                    <Bar progress={(stats[1] / 100) - 0.3} width={217} height={20} color={`#${color}`}>
                        <Text style={{position: "absolute", marginLeft: 100, fontWeight: 'bold'}}>{stats[1]}</Text>
                    </Bar>
                </View>
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 3}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 10}}>Speed:</Text>
                    <Bar progress={(stats[0] / 100) - 0.3} width={283} height={20} color={`#${color}`}>
                        <Text style={{position: "absolute", marginLeft: 100, fontWeight: 'bold'}}>{stats[0]}</Text>
                    </Bar>
                </View>
                
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