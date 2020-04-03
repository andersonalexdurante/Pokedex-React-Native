import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

import styles from './styles'

export default function Pokemon() {

    const routes = useRoute()
    const name = routes.params.pokemon.name

    return(
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    )
}