import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Footer = ({val, handleText, addNote}) => {
    const handleChange = (value) => handleText(value)

    return (
        <View style={footer}>
            <TextInput
                value={val}
                style={input}
                placeholder='Enter a new task...'
                placeholderTextColor='white'
                underlineColorAndroid='transparent'
                onChangeText={handleChange}
                onSubmitEditing={() => addNote(val)}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    input: {
        alignSelf: "stretch",
        color: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 35,
        backgroundColor: '#596275',
        fontSize: 20,
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
})

const { footer, input } = styles
