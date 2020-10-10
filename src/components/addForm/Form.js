import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import ColorSelector from './ColorSelector'
import useForm from '../../hooks/useForm'

const Form = ({ onPress, submit, data }) => {
    const initialState = data || {
        _id: Math.random().toString(36),
        title: '',
        desc: '',
        completed: false,
        selectedColor: 'blue'
    }
    const onSubmit = values => {
        submit(values)
        onPress()
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
    
    const colors = ['blue', 'green', 'gold', 'orange', 'red']
    const changeColor = (color) => {
        subscribe('selectedColor')(color)
    }
    
    return (
        <View style={container}>
            <View>
                <TextInput
                    style={input}
                    placeholder='Title'
                    value={inputs.title}
                    onChangeText={subscribe('title')}
                />
                <TextInput
                    style={input}
                    value={inputs.desc}
                    placeholder='Description'
                    onChangeText={subscribe('desc')}
                />
                <ColorSelector 
                    colors={colors}
                    selectedColor={colors.indexOf(inputs.selectedColor)}
                    onPress={changeColor}
                />
            </View>
            <Button 
                title="SAVE"
                onPress={handleSubmit}
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
        backgroundColor: 'rgba(0,0,0, .05)',
        fontSize: 18
    }
})

const { input, container } = styles