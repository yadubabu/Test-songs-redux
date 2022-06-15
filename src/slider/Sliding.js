import './style.css';
import { getImg } from './action';
import {connect} from 'react-redux';
import { nextImg } from './action';
import { prevImg } from './action';

const Sliding=(props)=>{
   
    const imgSrc=require(`./img/img${props.id}.jpg`);
   
    return(
        <div className='item'>
            <div className='box'>
                <button className='left-arrow'onClick={()=>props.prevImg(props.id)}>&lt;</button>
                <img src={imgSrc} height={200} width={200}/>
                <button className='right-arrow' onClick={()=>props.nextImg(props.id)}>&gt;</button>

            </div>

            <div>
            
            <button onClick={()=>props.getImg(1)}>1</button>
            <button onClick={()=>props.getImg(2)}>2</button>
            <button onClick={()=>props.getImg(3)}>3</button>
            <button onClick={()=>props.getImg(4)}>4</button>
            <button onClick={()=>props.getImg(5)}>5</button>
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