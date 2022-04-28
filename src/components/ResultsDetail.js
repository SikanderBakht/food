import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}></Image>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default ResultDetail