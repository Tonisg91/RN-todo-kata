import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity 
            style={addButton}
            onPress={onPress}
        >
            <Text style={addButtonText}> + </Text>
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    addButton: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: '#c56cf0',
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 11,
        right: 40,
        bottom: 45,
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: "bold"
    }
})

const { addButton, addButtonText } = styles
