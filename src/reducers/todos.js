const initialState = [
    {
        _id: '1',
        completed: false,
        desc: 'Description 1',
        title: 'Comprar desayuno',
        selectedColor: 'blue'
    },
    {
        _id: '2',
        completed: false,
        desc: 'Description 2',
        title: 'Limpiar coche',
        selectedColor: 'green'
    }
]

const COMPLETE = 'COMPLETE'
const ADD_TASK = 'ADD_TASK'

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export const submit = data => ({
    type: ADD_TASK,
    payload: data
})

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE:
            const updatedState = state.map(x => (
                x._id === action.payload ? 
                { ...x, completed: !x.completed} 
                : x))
            return updatedState
        case ADD_TASK:
            return [...state, action.payload]
        default:
            return state
    }
}