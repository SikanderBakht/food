import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ResultsList = ({ results, title }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>
                {title}
            </Text>
            <Text>{results.length}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList