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
        letterSpacing: 4
    },

    pokemonList: {
       flexBasis: 1
    },

    pokemonCard: {
        backgroundColor: '#89C893',
        borderRadius: 8,
        width: (Dimensions.get('window').width / 2) - 14 ,
        justifyContent: "space-between",
        marginBottom: 10,
        margin: 2
    },

    cardName: {
        paddingTop: 10,
        paddingLeft: 10,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    cardType: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#fff',
        top: 15,
        paddingLeft: 20,
    },

    cardPokemon: {
        alignSelf: 'flex-end',
        width: 70,
        height: 70,
        bottom: 5
    }

})