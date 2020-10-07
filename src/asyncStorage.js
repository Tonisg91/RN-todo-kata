import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'

const storeTask = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@todoTasks', jsonValue)
    } catch (e) {
        console.log(e)
    }
}

const getData = async (key, defaultVal) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : defaultVal;
    } catch (e) {
        console.log(e)
    }
}

export { storeTask, getData }