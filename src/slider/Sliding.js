import './style.css';
import { getImg } from './action';
import {connect} from 'react-redux';
import { nextImg } from './action';
import { prevImg } from './action';

const Sliding=(props)=>{
    const renderImg=(el)=>{
        if(props.id===el){
            return `btn${props.id} current`;
        }

        // switch(props.id){
        //     case '2':
        //         return 'btn2 current';
        //     case '3':
        //         return 'btn3 current';
        //     case '4':
        //         return 'btn4 current';
        //     case '5':
        //         return 'btn5 current';
        //     default :
        //         return 'btn1 current'
        // }
        // const btns=[1,2,3,4,5];
    
        // for(let i=0;i<btns.length;i++){
        //     // const cur=props.id===btns[i] ? 'current' : '';
        //     // return `btn${props.id} ${cur}`
        //     if(props.id===btns[i]){
        //         return `btn${props.id} current`;
        //         break;
        //     }else{
        //         return `btn${props.id}`
        //     }

        // }
    } 
    
    const imgSrc=require(`./img/img${props.id}.jpg`);
    // const cur=props.id>1 ? 'current' : '' ; 
    return(
        <div className='item'>
            <div className='box'>
                <button className='left-arrow'onClick={()=>props.prevImg(props.id)}>&lt;</button>
                <img src={imgSrc} height={200} width={200}/>
                <button className='right-arrow' onClick={()=>props.nextImg(props.id)}>&gt;</button>

            </div>

            <div className='btn'>
            
            <button id='1' className={renderImg(1)} onClick={()=>props.getImg(1)}>1</button>
            <button id='2' className={renderImg(2)} onClick={()=>props.getImg(2)}>2</button>
            <button id='3' className={renderImg(3)} onClick={()=>props.getImg(3)}>3</button>
            <button id='4' className={renderImg(4)} onClick={()=>props.getImg(4)}>4</button>
            <button id='5' className={renderImg(5)} onClick={()=>props.getImg(5)}>5</button> 
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        id:state.id,
        getImg:state.getImg,
        nextImg:state.nextImg,
        prevImg:state.prevImg,
    }
}
export default connect(mapStateToProps,{getImg,nextImg,prevImg})(Sliding); 