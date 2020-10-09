const initialState = [
    {
        _id: '1',
        completed: false,
        desc: 'Description 1',
        title: 'Comprar desayuno',
        color: 'blue'
    },
    {
        _id: '2',
        completed: false,
        desc: 'Description 2',
        title: 'Limpiar coche',
        color: 'green'
    }
]

const COMPLETE = 'COMPLETE'

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE:
            const updatedState = state.map(x => (
                x._id === action.payload ? 
                { ...x, completed: !x.completed} 
                : x))
            return updatedState
        default:
            return state
    }
}