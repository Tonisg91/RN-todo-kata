import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome, EvilIcons } from '@expo/vector-icons'; 

const Note = ({data, actions: {complete}}) => {
    const { title, _id, selectedColor, completed } = data

    const containerStyle = !completed ? container : [container, containerCompleted]
    const noteStyle = !completed ? noteTitle : [noteCompleted, noteTitle]
    const iconName = !completed ? 'check-square' : 'rotate-left'


    return (
        <View style={containerStyle} key={_id}>
            <Text 
                style={[
                    noteStyle, 
                    {borderLeftColor: selectedColor}
                ]}
            >
                {title}
            </Text>
            <TouchableOpacity
                onPress={() => console.log('Editing', title)}
                style={noteEdit}
            >
                <EvilIcons name="pencil" size={42} color="#2980b9" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => complete(_id)}
                style={noteDelete}
            >
                <FontAwesome name={iconName} size={32} color='#e91e63' />
            </TouchableOpacity>
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    containerCompleted: {
        backgroundColor: '#f3f3f3'
    },
    noteTitle: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        color: 'black',
        fontSize: 18,
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
    },
    noteCompleted: {
        textDecorationLine: 'line-through',
    }
})

const { container, containerCompleted, noteTitle, noteDelete, noteEdit, noteCompleted } = styles