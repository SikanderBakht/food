import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ searchText, onSearchTextChange, onSearchTextSubmit }) => {

    return (
        <View style={styles.searchBackground}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
            autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={searchText}
                onChangeText={newText => onSearchTextChange(newText)}
                onEndEditing={() => onSearchTextSubmit()} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBackground: {
        height: 50,
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }

})

export default SearchBar