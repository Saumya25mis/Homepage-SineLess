import React from 'react';
import bg2 from './resources/Bg_2.png';
import cart1 from './resources/slider-1.png';
import cart2 from './resources/slider-2.png';
import cart3 from './resources/slider-4.png';
import cart4 from './resources/slider-3.png';
import icon1 from './resources/wishlist.svg';
import icon2 from './resources/shopping-cart -black.svg';
import icon3 from './resources/view.svg';
class Content extends React.Component{
    render(){
        return(
            <div style={{
                width:'100%',
                display: 'flex',
                flexDirection:'column',
                minHeight: '100vh',
                position:'relative',
                backgroundColor:'#F6F6EE',
            }}>
                <div style={{position:'absolute',top:-50,left:0}} ><img style={{maxWidth:'100%',height:'auto',zIndex:'-25'}} src={bg2}/> </div>
                <div style={{zIndex:25,marginTop:'11%',marginRight:'12%'}}><h2 style={{color:'#E7E7E1',fontSize:'8vw',marginBottom:0}}>Deodorant</h2></div>
                <div style={{zIndex:25,display:'flex',width:'100vw',justifyContent:'center',marginTop:'13vw'}}>
                    <div style={{position:'relative',backgroundColor:'#B55AE7',width:'12vw',marginRight:'2vw',height:'11vw',borderRadius:'3px'}}>
                        <img style={{width:'6vw',position:'absolute',marginLeft:'-25%',marginTop:'-13vw'}} src={cart1}></img>
                        <div style={{position:'absolute',marginTop:'70%',marginLeft:'25%'}}><span style={{backgroundColor:'white',borderRadius:'100%',width:'3vw',padding:'0.5vw',marginRight:4}}><img src={icon1}></img></span><span style={{backgroundColor:'white',borderRadius:'100%',width:'3vw',padding:'0.5vw',marginRight:4}}><img src={icon2}></img></span><span style={{backgroundColor:'white',borderRadius:'100%',width:'3vw',padding:'0.5vw',marginRight:4}}><img src={icon3}></img></span></div>
                        <div style={{position:'absolute',marginTop:'100%',textAlign:'left',width:'12vw',fontWeight:'bold',opacity:'0.8'}}><span style={{float:'left'}}>Lavender <br></br> Deodorant</span><span style={{float:'right'}}>$ 80.00</span></div>
                    </div>
                    <div  style={{position:'relative',backgroundColor:'#F6C462',width:'12vw',marginRight:'2vw',borderRadius:'3px'}}>
                        <img style={{width:'6vw',position:'absolute',marginLeft:'-25%',marginTop:'-13vw'}} src={cart2}></img>
                        <div style={{position:'absolute',marginTop:'100%',textAlign:'left',width:'12vw',fontWeight:'bold',opacity:'0.8'}}><span style={{float:'left'}}>Peppermint <br></br> Deodorant</span><span style={{float:'right'}}>$ 80.00</span></div>
                   
                    </div>
                    <div  style={{position:'relative',backgroundColor:'#DB831B',width:'12vw',marginRight:'2vw',borderRadius:'3px'}}>
                        <img style={{width:'6vw',position:'absolute',marginLeft:'-25%',marginTop:'-13vw'}} src={cart3}></img>
                        <div style={{position:'absolute',marginTop:'100%',textAlign:'left',width:'12vw',fontWeight:'bold',opacity:'0.8'}}><span style={{float:'left'}}>Sweet Orange<br></br> Deodorant</span><span style={{float:'right'}}>$ 80.00</span></div>
                   
                    </div>
                    <div  style={{position:'relative',backgroundColor:'#23CC92',width:'12vw',marginRight:'2vw',borderRadius:'3px'}}>
                        <img style={{width:'6vw',position:'absolute',marginLeft:'-25%',marginTop:'-13vw'}} src={cart4}></img>
                        <div style={{position:'absolute',marginTop:'100%',textAlign:'left',width:'12vw',fontWeight:'bold',opacity:'0.8'}}><span style={{float:'left'}}>Eucalptus <br></br> Deodorant</span><span style={{float:'right'}}>$ 80.00</span></div>
                   
                    </div>
                    </div>
            </div>
        );
    }
}
export default Content;