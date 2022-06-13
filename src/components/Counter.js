import React from 'react';
import {connect} from 'react-redux';
import { showCounter } from '../actions/couterActions';

 const Counter = (props) => {
     console.log(props);
  return (
    <div>Counter<br/>
        {/* <button onClick={increment}>increment</button><br/><span>{inc}</span> */}
        {/* <button onClick={decrement}>decrement</button><span>{dec}</span> */}
    </div>
  )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        
        count:state.count
    }
}

export default connect(mapStateToProps,{showCounter})(Counter);
