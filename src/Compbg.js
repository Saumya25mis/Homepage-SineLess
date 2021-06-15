import React from 'react';
import bg from './resources/millennial-gir.jpg';
import deo from './resources/03.png';
class Comp extends React.Component{
    render(){
        return(
            <div style={{
                position:'relative',
                width:'100%',
                height:'auto',
            }}>
            <img src={bg} style={{width:'100%'}}></img>
            <div style={{position:'absolute',top:'-10%',left:'13%',backgroundColor:'#A67B7B',paddingLeft:15,paddingRight:15,color:'white',display:'flex',borderRadius:3,alignItems:'center',width:'24vw',height:'30vw'}}>
                <div style={{fontSize:'2vw',textAlign:'left'}}>Long-lasting<br></br> odor protection<br></br> at just 1-2 <br></br>swipes!</div>
                <img src={deo} style={{width:'10vw'}}></img>
            </div>
            </div>
        );
    }
}
export default Comp;