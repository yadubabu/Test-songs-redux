import React from 'react';
import { connect } from 'react-redux';
import { incCount } from './action';
import { decCount } from './action';

 const Counter = (props) => {
  return (
    <div>
        <h1>
            Counter:{props.counter}
        </h1>
        <button onClick={props.incCount}>Increment</button>
        <button onClick={props.decCount}>Decrement</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        counter:state.counter,
        incCount:state.incCount,
        decCount:state.decCount,
    }
}

export default connect(mapStateToProps,{incCount,decCount})(Counter);