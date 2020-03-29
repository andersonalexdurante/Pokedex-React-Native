import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

const AppStack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Pokedex" component={Pokedex}/>
                <AppStack.Screen name="Pokemon" component={Pokemon}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}