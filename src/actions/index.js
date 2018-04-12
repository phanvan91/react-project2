import * as type from './../constants/ActionType';
export const listAll = () => {
    return {
        type:type.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type:type.ADD_TASK,
        task //task:task
    }
}

export const toggleForm = () => {
    return{
        type:type.TOGGLE_FORM
    }
}

export const openForm = () => {
    return{
        type:type.OPEN_FORM
    }
}

export const closeForm = () => {
    return{
        type:type.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: type.UPDATE_STATUS,
        id
    }
}