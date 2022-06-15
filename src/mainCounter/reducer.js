import { combineReducers } from "redux";


const reducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        case 'GET_COUNTER':
            return state;
        default:
            return state;
    }
}



export default combineReducers({
    counter:reducer
})
