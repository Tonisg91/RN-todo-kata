import AsyncStorage from '@react-native-community/async-storage'

const storeTask = async (value) => {
    try {
        const currentData = await getData('@todoTasks', [])
        const updatedArr = currentData ? [...currentData, value] : value
        const jsonValue = JSON.stringify(updatedArr)
        await AsyncStorage.setItem('@todoTasks', jsonValue)
    } catch (e) {
        console.log(e)
    }
}

const editAndStoreTask = async (value) => {
    try {
        const currentData = await getData('@todoTasks', [])
        const jsonValue = JSON.stringify(currentData.map(x => {
            if (x._id === value._id) return value
            return x
        }))
        await AsyncStorage.setItem('@todoTasks', jsonValue)
    } catch (error) {
        
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

export { storeTask, getData, editAndStoreTask }