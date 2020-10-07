import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { storeTask, getData } from '../asyncStorage'
import Footer from './Footer'
import Header from './Header'
import AddButton from './AddButton'
import TaskList from './TaskList'
import newDate from '../dateResource'

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

    const addNote = (text = noteText) => {
        const salt = text[1] + text[2]
        const newId = !noteList ? 1 : noteList.length + 1
        const newNote = {
            id: `${newId}${salt}`,
            text,
            date: newDate()
        }
        storeTask([...noteList, newNote])
        setNoteText('')
    }

    const editNote = (text) => {

        console.log(id)
        const newArray = noteList.filter(x => {
            if (x.id === id) {
                x = edittingNote
                return x
            }
            return x
        })

        console.log(newArray)
        setIsEditting(false)
    }

    const loadExistentNote = async (id) => {
        setIsEditting(true)
        const note = await noteList.find(x => x.id === id)
        setEdittingNote({...note})
        console.log(edittingNote)
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
            <Footer handleText={setNewNote} val={newNote} addNote={addNote}/>
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