import { combineReducers } from "redux";

const reducer=(state,action)=>{
        switch(action.type){
            case 'GET_IMG':
                return 0+action.payload;
            case 'NEXT_IMG':
                               
                return 1+action.payload;
            case 'PREV_IMG':
                return action.payload-1;
            default :
            return 1;
        }
}

export default combineReducers({
    id:reducer,
})

