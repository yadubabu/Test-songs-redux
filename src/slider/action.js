export const getImg=(id)=>{


    return{
        type:'GET_IMG',
        payload:id
    }
}

export const nextImg=(id)=>{
    if(id===5){
        return{
            type:'NEXT_IMG',
            payload:0
        }
    }else{
        return {
            type:'NEXT_IMG',
            payload:id
        }
    }

        
}

export const prevImg=(id)=>{
    if(id===1){
        return{
            type:'PREV_IMG',
            payload:6
        }
    }else{
        return{
            type:'PREV_IMG',
            payload:id
        }
    }
    // return{
    //     type:"PREV_IMG",
    //     payload:id
    // }
}