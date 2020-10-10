import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { getData, storeTask, editAndStoreTask } from './asyncStorage'
import { Header, TaskList, AddButton, AddTaskModal } from './components/index'
import { complete, submit, setInit, removeItem, editTask } from './reducers/todos'

const Main = ({ data, complete, submit, setInit, removeItem, editTask }) => {
    const [displayModal, setDisplayModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [itemToEdit, setItemToEdit] = useState(null)
    const openForm = () => setDisplayModal(!displayModal)

    useEffect(() => {
        getData('@todoTasks',[]).then(x => setInit(x), setIsLoading(false))
    }, [])

    const editItem = (data) => {
        setItemToEdit(data)
        setDisplayModal(true)
    }

    return (
        <View style={container} >
            <Header />
            {isLoading ?
                <ActivityIndicator color='purple' size='large'/> 
                :
                <TaskList
                    data={[...data]}
                    complete={complete}
                    removeItem={removeItem}
                    editItem={editItem}
                />
            }            
            <AddButton onPress={openForm}/>
            <AddTaskModal 
                display={displayModal} 
                onPress={openForm}
                submit={!itemToEdit ? submit : editTask}
                data={itemToEdit ? itemToEdit : null}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        data: state.todos
    }
}

const mapDispatchToProps = dispatch => ({
    complete: (_id) => dispatch(complete(_id)),
    submit: (values) => {
        storeTask(values)
        dispatch(submit(values))
    },
    setInit: (data) => dispatch(setInit(data)),
    removeItem: (_id) => dispatch(removeItem(_id)),
    editTask: (values) => {
        editAndStoreTask(values)
        dispatch(editTask(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

const { container } = styles