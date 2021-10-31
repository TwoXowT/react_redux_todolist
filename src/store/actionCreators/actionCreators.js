
import {
    ADD_CATEGORY,
    ADD_TASK,
    DONE_TASK,
    INC_CREATE,
    INC_DELETE,
    INC_DONE,
    REMOVE_TASK
} from "../actions/action";
let nextTodoId = 0;

export const addCategory =(category)=>({
    type: ADD_CATEGORY,
    category,
})

export const addTask = (text,category) =>({
    type: ADD_TASK,
    id:nextTodoId++,
    text,
    category,
});

export const doneTask = (id) =>({
    type: DONE_TASK,
    id,
});

export const removeTask = (id)=>({
    type: REMOVE_TASK,
    id
})

export const inc_create_task= ()=>({
    type:INC_CREATE,
})
export const inc_delete_task= ()=>({
    type:INC_DELETE,
})
export const inc_done_task= ()=>({
    type:INC_DONE,
})
