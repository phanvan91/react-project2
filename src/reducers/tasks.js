import * as type from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task,index)=>{
        if(task.id === id){
            result = index;
        }
    })
    return result;
}

var myReducer = (state = initialState,action) => {
    switch (action.type){
        case type.LIST_ALL :
            return state;
        case type.ADD_TASK :
            var randomstring = require("randomstring");
            var newTask = {
                id:randomstring.generate(),
                name: action.task.name,
                status:action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case type.UPDATE_STATUS:
            var id = action.id;
            var index = findIndex(state,id);
            // state[index].status = !state[index].status;
            var cloneTask = {...state[index]};
            console.log(cloneTask)
            cloneTask.status = !cloneTask.status;
            state[index] = cloneTask;
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        default : return state
    }
}

export default myReducer;