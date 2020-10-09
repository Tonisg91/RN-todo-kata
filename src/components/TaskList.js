import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Note from './Note'

const TaskList = ({ data, ...rest }) => {
    return (
        <FlatList 
            style={list}
            data={data}
            renderItem={({item}) => (
                <Note 
                    data={item} 
                    actions={rest}
                />
            )}
            keyExtractor={el => el._id}
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
