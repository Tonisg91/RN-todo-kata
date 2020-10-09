import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const Form = () => {
    return (
        <View style={container}>
            <View>
                <TextInput
                    style={input}
                    placeholder='Title'
                />
                <TextInput
                    style={input}
                    placeholder='Description'
                />
            </View>
            <Button 
                title="SAVE"
            />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    input: {
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        fontSize: 18
    }
})

const { input, container } = styles