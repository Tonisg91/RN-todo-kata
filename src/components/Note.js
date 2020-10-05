import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

const Note = ({ data, deleteNote }) => {
    const { text, date, id } = data
    return (
        <View style={note} key={id}>
            <Text style={noteText}>{text}</Text>
            <Text style={noteText}>{date}</Text>
            <TouchableOpacity
                onPress={() => deleteNote(id)}
                style={noteDelete}
            >
                <FontAwesome name='trash' size={32} color='#e91e63' />
            </TouchableOpacity>
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftColor: '#2980b9',
        borderLeftWidth: 10,
        color: 'black'
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: '#fff'
    }
})

const { note, noteText, noteDelete, noteDeleteText } = styles