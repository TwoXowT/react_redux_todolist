import {ADD_TASK, DONE_TASK, REMOVE_TASK} from "../actions/action";
import {initialState} from "./inithialState";

const todos = (state = initialState, action)=>{
    if(typeof  state ==='undefined'){
        return initialState;
    }

    switch (action.type){
        case ADD_TASK:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completeStatus: false,
                },
            ];
        case DONE_TASK:
            return state.map((task) =>
                task.id === action.id
                    ? {...task, completedStatus: !task.completedStatus}
                    : task
            );
        case REMOVE_TASK:{
            return state.filter((task)=> task.id!== action.id);

        }


        default:
            return state;
    }
};

export default todos;