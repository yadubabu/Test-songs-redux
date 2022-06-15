export const getImg=(id)=>{


    return{
        type:'GET_IMG',
        payload:id
    }
}

export const nextImg=(id)=>{
    return{
        type:"NEXT_IMG",
        payload:id
    }
}

export const prevImg=(id)=>{
    return{
        type:"PREV_IMG",
        payload:id
    }
}