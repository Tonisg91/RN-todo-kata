import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Footer from './Footer'
import Header from './Header'
import AddButton from './AddButton'
import TaskList from './TaskList'
import newDate from '../dateResource'

const Main = () => {
    const [noteList, setNoteList] = useState([])
    const [noteText, setNoteText] = useState('')

    const deleteNote = id => {
        const updatedTasks = [...noteList].filter(el => el.id !== id)
        setNoteList(updatedTasks)
    }

    const addNote = (text = noteText) => {
        const newNote = {
            id: String(noteList.length + 1),
            text,
            date: newDate()
        }
        setNoteList([
            ...noteList,
            newNote
        ])
        setNoteText('')
    }

    return (
        <View style={container} >
            <Header />
            <TaskList data={noteList} deleteNote={deleteNote}/>
            <Footer handleText={setNoteText} val={noteText}/>
            <AddButton addNote={addNote}/>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

const { container } = styles