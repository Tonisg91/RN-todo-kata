import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Note from './Note'

const TaskList = ({ data, deleteNote, loadNote, editNote }) => {
    return (
        <FlatList 
            style={list}
            data={data}
            renderItem={({item}) => <Note data={item} deleteNote={deleteNote} loadNote={loadNote} editNote={editNote}/>}
            keyExtractor={el => el.id}
        />
    )
}

export default TaskList

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginBottom: 75
    },
})

const { list } = styles
