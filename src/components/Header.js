import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={header}>
            <Text style={headerText}>TODO NATIVE APP</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#c56cf0',
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
        paddingTop: 25
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 25,
        fontWeight: '700'
    },
})

const { header, headerText } = styles