
import { combineReducers } from "redux";


combineReducers({
    count:(count=10,action)=>{
        if(action.type==='SHOW_COUNTER'){
            return count+1;
        }
       
        return count;
    }
});
 

export default combineReducers;
