import React from 'react';
import bg from './resources/bg-_FOREST.png';
import deo from './resources/All_deo.png';
import logo from './resources/logo-white.svg'
import supermarket from './resources/add-cart-white.svg'
import user from './resources/user.svg'
class Header extends React.Component{
    render(){
        return(
            <div style={{width:'100%',minHeight:'48vw',
                position:'relative'}}>
                <div style={{position:'absolute'}}> <img  style={{maxWidth:'100%',height:'auto'}} src={bg}/></div>
                <div style={{position:'absolute',left:'13vw',top:'2vw'}}><img src={logo}></img></div>
                <div style={{position:'absolute',left:'74vw',top:'2vw'}}><span style={{marginRight:'1vw',marginBottom:'50%',fontWeight:'bold'}}>SHOP</span><img style={{backgroundColor:'#A67B7B',marginRight:'1vw',padding:5,borderRadius:'50%'}} src={supermarket}></img><img src={user} style={{backgroundColor:'#23CC92',padding:5,borderRadius:'50%'}}></img></div>
                <div style={{position:'absolute',left:'13vw',top:'15vw',color:'white',textAlign:'left',fontSize:'2.5vw'}}>Be Earth-friendly,<br></br>Be SINless<br></br><input type="submit" value="SHOP NOW" style={{
                  backgroundColor:'#D8EF04',
                  fontSize:'0.7vw',
                  fontWeight:'bold',
                  padding:3,
                  border:0,
                  borderRadius:3,
                  width:'6vw',
                  height:'2vw'
                }}/></div>
                <div style={{position:'absolute',bottom:'0',right:'0'}} ><img style={{maxWidth:'80%',height:'auto'}} src={deo}/> </div>
            </div>
        );
    }
}
export default Header;