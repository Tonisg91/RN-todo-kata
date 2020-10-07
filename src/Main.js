import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { storeTask, getData } from './asyncStorage'
import { Header, TaskList, Footer, AddButton } from './components/index'

import newDate from './dateResource'

const Main = () => {
    const initialNoteState = {
        id: '',
        text: '',
        date: ''
    }
    const [noteList, setNoteList] = useState([])
    const [newNote, setNewNote] = useState(initialNoteState)
    const [isEditting, setIsEditting] = useState(false)
    const [edittingNote, setEdittingNote] = useState({})

    const getStoredData = () => {
        getData('@todoTasks', []).then(setNoteList)
    }

    useEffect(() => {
        getStoredData()
    }, [noteList])

    const deleteNote = id => {
        const updatedTasks = [...noteList].filter(el => el.id !== id)
        storeTask(updatedTasks)
    }

    const addNote = (text = newNote.text) => {
        const noteToAdd = {
            id: Math.random().toString(36),
            text: newNote.text,
            date: newDate()
        }
        
        storeTask([...noteList, noteToAdd])
        setNewNote(initialNoteState)
    }

    const editNote = (text) => {
        const newArray = noteList.filter(x => {
            if (x.id === id) {
                x = edittingNote
                return x
            }
            return x
        })
        setIsEditting(false)
    }

    const loadExistentNote = async (id) => {
        setIsEditting(true)
        const note = await noteList.find(x => x.id === id)
        setEdittingNote({...note})
        setNoteText(edittingNote.text)
    }

    return (
        <View style={container} >
            <Header />
            <TaskList 
                data={noteList} 
                deleteNote={deleteNote}
                loadNote={loadExistentNote}
                editNote={editNote}
            />
            <Footer handleText={setNewNote} data={newNote} addNote={addNote}/>
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