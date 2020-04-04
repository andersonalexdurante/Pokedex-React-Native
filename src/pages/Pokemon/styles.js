import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },

    divisionTop: {
        maxHeight: Dimensions.get('screen').height / 2
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    pokemonTopInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    pokemonTopLeft: {
        paddingHorizontal: 10,
    },

    pokemonTopRight: {
        paddingHorizontal: 10,
    },

    pokemonTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },

    pokemonType: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
        paddingTop: 3,
        paddingLeft: 20,
    },

    pokemonNumber: {
        color: '#fff',
        fontSize: 20,
        transform: [{translateY: 20}]
    },

    images:{
        transform: [{translateY: -5}, {translateX: (Dimensions.get('window').width / 4) - 10}],
        paddingHorizontal: 10,
    },

    pokemonImage: {
        height: 250,
        width: 250,
        zIndex: 1,
        transform: [{translateX: -20}]
    },

    pokeballImage: {
        position: 'absolute',
        height: 250,
        width: 250,
        opacity: 0.2,
        transform: [{translateX: -20}]
    },

    divisionBottom: {
        zIndex: -1,
        height: Dimensions.get('screen').height / 2
    },

    tabView: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

})