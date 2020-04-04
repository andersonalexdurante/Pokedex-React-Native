import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: 'center',
        marginBottom: 30
    },

    headerTitle: {
        fontSize: 40,
        letterSpacing: 4,
        fontWeight: 'bold'
    },

    pokeballMenu: {
        position: 'absolute',
        zIndex: -1,
        height: 200,
        width:200,
        alignSelf: "flex-end",
        opacity: 0.1,
        transform: [{translateY: -90}, {translateX: 87}]
    },

    pokemonList: {
       flexBasis: 1
    },

    pokemonCard: {
        borderRadius: 8,
        width: (Dimensions.get('window').width / 2) - 14 ,
        justifyContent: "space-between",
        marginBottom: 10,
        margin: 2
    },

    cardName: {
        transform: [{translateY: 10}],
        paddingLeft: 10,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    cardType: {
        transform: [{translateY: 30}],
        fontSize: 15,
        fontWeight: '800',
        color: '#fff',
        transform: [{translateX: 10}, {translateY: 15}]
    },

    cardPokemon: {
        alignSelf: 'flex-end',
        width: 100,
        height: 100,
        right: 1
    },

    pokeballList: {
        height: 110,
        width: 110,
        zIndex: -1,
        position: 'absolute',
        alignSelf: 'flex-end',
        opacity: 0.1,
        transform: [{translateY: 65}, {translateX: 5}]
    }

})