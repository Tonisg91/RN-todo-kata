import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { FontAwesome, EvilIcons } from '@expo/vector-icons'; 

const Note = ({ data, deleteNote, loadNote }) => {
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
            <TouchableOpacity
                onPress={() => loadNote(id)}
                style={noteEdit}
            >
                <EvilIcons name="pencil" size={32} color="#2980b9" />
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
    },
    noteEdit: {
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        top: 10,
        bottom: 10,
        right: 50
    }
})

const { note, noteText, noteDelete, noteEdit } = styles