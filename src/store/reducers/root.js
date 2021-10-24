import {ADD_TASK, DONE_TASK, INC_CREATE, INC_DELETE, INC_DONE, REMOVE_TASK} from "../actions/action";
import {initialState} from "./inithialState";

const todos = (state = initialState, action)=>{
    if(typeof  state ==='undefined'){
        return initialState;
    }

    switch (action.type){
        case ADD_TASK:{
            let copy = Object.assign({},state);
            copy.todos.unshift({id:action.id,text:action.text,completeStatus: false})
            return copy;


    }
        case DONE_TASK:{
            let copy = Object.assign({},state);
            copy.todos.map((task) => {
                    if (task.id === action.id) {
                        if(task.completeStatus === true){return copy}
                        task.completeStatus = !task.completeStatus;
                    }
                }

            );
            return copy;
        }

        case REMOVE_TASK:{
            let copy = Object.assign({},state);
            console.log(action.id,)
            copy.todos = copy.todos.filter((task)=> task.id !== action.id);
            return copy

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