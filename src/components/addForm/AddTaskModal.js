import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import Form from './Form'

const AddTaskModal = ({display, onPress, submit, data}) => {
    return (
        <Modal
            visible={display}
            animationType="slide"
            transparent
        >
            <View
                style={container}
            >
                <View style={content}>
                    <Text style={title}>Add Task</Text>
                    <Form 
                        onPress={onPress}
                        submit={submit}
                        data={data}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default AddTaskModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
        paddingBottom: 50,
        paddingHorizontal: 30,
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "stretch",
        borderRadius: 25
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: 'bold',
        paddingVertical: 15,
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 1
    },
})

const { container, content, title } = styles