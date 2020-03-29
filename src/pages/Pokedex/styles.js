import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: 'center',
        marginBottom: 48
    },

    headerTitle: {
        fontSize: 40,
        letterSpacing: 4
    },

    pokemonList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    pokemonCard: {
        backgroundColor: '#89C893',
        borderRadius: 8,
        width: '48%',
        height: 120,
        justifyContent: "space-between",
        marginBottom: 20,
        margin: 2
    },

    cardName: {
        paddingTop: 10,
        paddingLeft: 10,
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    },

    cardType: {
        paddingTop: 10,
        color: '#fff',
        paddingLeft: 20,
    },

    cardPokemon: {
        alignSelf: 'flex-end',
        width: 60,
        height: 60,
        bottom: 50,
        right: 5,
    }

})