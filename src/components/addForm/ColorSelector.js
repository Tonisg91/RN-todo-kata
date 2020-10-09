import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const ColorSelector = ({colors, selectedColor, onPress}) => {
    const displaySelectors = colors.map((e,i) => {
        const selected = i === selectedColor ? {borderWidth: 3, borderColor: 'black'} : null
        return (
            <TouchableOpacity 
                key={e}
                onPress={() => onPress(e)}
                style={[box, { backgroundColor: e}, selected]}>
            </TouchableOpacity>
        )
    })

    return (
        <View style={container}>
            {displaySelectors}
        </View>
    )
}

export default ColorSelector

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: 50,
        height: 50,
    }
})

const { container, box } = styles
