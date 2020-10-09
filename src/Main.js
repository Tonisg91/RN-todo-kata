import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Header, TaskList, AddButton, AddTaskModal } from './components/index'
import { complete } from './reducers/todos'

const Main = ({ data, complete }) => {
    const [displayModal, setDisplayModal] = useState(false)

    const openForm = () => setDisplayModal(!displayModal)

    return (
        <View style={container} >
            <Header />
            <TaskList 
                data={[...data]}
                complete={complete}
            />
            <AddButton onPress={openForm}/>
            <AddTaskModal display={displayModal} onPress={openForm}/>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        data: state.todos
    }
}

const mapDispatchToProps = dispatch => ({
    complete: (_id) => dispatch(complete(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

const { container } = styles