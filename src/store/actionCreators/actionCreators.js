
import {ADD_TASK,DONE_TASK,REMOVE_TASK} from "../actions/action";
let nextTodoId = 0;

export const addTask = (text) =>({
    type: ADD_TASK,
    id:nextTodoId++,
    text,
});

export const doneTask = (id) =>({
    type: DONE_TASK,
    id,
});

export const removeTask = (id)=>({
    type: REMOVE_TASK,
    id
})
