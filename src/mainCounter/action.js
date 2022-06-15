

export const getCount=()=>{
    return{
        type:'GET_COUNTER',
    }
}


export const incCount=()=>{
    return {
        type:'INCREMENT'
    }
}
export const decCount=()=>{
    return {
        type:'DECREMENT'
    }
}