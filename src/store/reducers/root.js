import {ADD_TASK, DONE_TASK, INC_CREATE, INC_DELETE, INC_DONE, REMOVE_TASK} from "../actions/action";
import {initialState} from "./inithialState";

const todos = (state = initialState, action)=>{
    if(typeof  state ==='undefined'){
        return initialState;
    }

    switch (action.type){
        case ADD_TASK:
            return {...state,
                // сначала новый таск, чтобы он появлялся вверху списка
                todos: [{id:action.id, text: action.text, completeStatus: false},...state.todos]
            }

        case DONE_TASK: {

            const newState = {...state, todos: state.todos.map((task) => {
                if (task.id === action.id && !task.completeStatus) {
                    task.completeStatus = !task.completeStatus;
                }
                return task;
            })}
            return newState;
        }

        case REMOVE_TASK:{
            return {...state, todos: state.todos.filter((task) => task.id !== action.id)}
        }
        case INC_CREATE:{
            let copy = Object.assign({},state);
            copy.countCreate++;
            return copy;
        }
        case INC_DELETE:{
            let copy = Object.assign({},state);
            copy.countDelete++;
            return copy;
        }
        case INC_DONE:{
            let copy = Object.assign({},state);
            copy.countDone++;
            return copy;
        }

        default:
            return state;
    }
};

export default todos;