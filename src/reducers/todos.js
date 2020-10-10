const COMPLETE      = 'COMPLETE'
const ADD_TASK      = 'ADD_TASK'
const EDIT_TASK     = 'EDIT_TASK'
const SET_INIT      = 'SET_INIT'
const REMOVE_ITEM   = 'REMOVE_ITEM'


//Actions

export const setInit = data => ({
    type: SET_INIT,
    payload: data
})

export const submit = data => ({
    type: ADD_TASK,
    payload: data
})

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: id
})

export const editTask = data => ({
    type: EDIT_TASK,
    payload: data
})


//Reducer
export default (state = [], action) => {
    switch (action.type) {
        case SET_INIT: 
                return action.payload.length ? [...action.payload] : state
        case COMPLETE:
            return state.map(x => (
                x._id === action.payload ? 
                { ...x, completed: !x.completed} 
                : x
                ))
        case ADD_TASK:
            console.log('addtask')
            return [...state, action.payload]
        case REMOVE_ITEM:
            return state.filter(x => x._id !== action.payload)
        case EDIT_TASK:
            return state.map(x => {
                if (x._id === action.payload._id) return action.payload
                return x
            })
        default:
            return state
    }
}