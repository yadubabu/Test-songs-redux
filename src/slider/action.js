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
            payload:1
        }
    }else{
        return {
            type:'NEXT_IMG',
            payload:id
        }
    }
    // if(id<6 && id>0){
    //     return{
    //         type:"NEXT_IMG",
    //         payload:id
    //     }
    // }else return{
    //     type:'NEXT_IMG',
    //     payload:1
    // }
        
}

export const prevImg=(id)=>{
    if(id===1){
        // document.getElementsByClassName('left-arrow').setAttribute('disabled',true)
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