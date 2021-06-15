import React from 'react';
import bg from './resources/footer-bg-5.png';
import bg1 from './resources/footer-bg-3.png';
import bg4 from './resources/footer-bg-4.png';
import bgg from './resources/footer-bg-1.jpg';
import Slide from './Slide';
 
import logo from './resources/logo-white.svg'
import twitter from './resources/twitter.svg'
import facebook from './resources/facebook.svg'
import instagram from './resources/instagram.svg'
class Footer extends React.Component{
    render(){
        return (
          <div style={{width:'100vw',height:'100vw',postion :'relative'}}>
              <img style={{maxWidth:'100%',height:'auto',position:'absolute',left:0,marginTop:'10vw'}} src={bgg}/>
              <Slide style={{position:'absolute',width:'100vw'}}/>
              <div style={{display:'flex',position:'absolute',width:'100vw', justifyContent:'center',marginTop:'6vw'}}><div style={{textAlign:'left',width:'20vw',fontSize:'1vw',fontFamily:'access',lineHeight:'25px'}}><span style={{fontSize:'1.5vw'}}>Looking for <br></br>Cleaner-Ingredient Products?<br></br></span><span style={{fontSize:'2vw'}}>Just Stay Up for it.</span><br></br>
              <hr style={{width:'2.5vw',backgroundColor:'black',marginLeft:'-0.1vw'}}></hr>
              We Would Love To Hear From You. <br></br>Call Us Directly At: <br></br>+91-70-3344-6743</div>
              <div style={{display:'flex',width:'30vw',flexWrap:'wrap'}}>
                <div style={{width:'50%',textAlign:'left',fontSize:'1vw',marginTop:'2px'}}><label for="fname">First name</label>
                <div><input style={{width:'80%',borderRadius:2,border:0,height:'2vw',marginTop:2}} type="text" id="fname" name="fname"/></div></div>
                     <div style={{width:'50%',textAlign:'left',fontSize:'1vw',marginTop:'2px'}}><label for="lname">Last name</label>
                     <div><input  style={{width:'80%',borderRadius:2,border:0,height:'2vw' ,marginTop:2}} type="text" id="lname" name="lname"/></div></div>
                     <div style={{width:'50%',textAlign:'left' ,fontSize:'1vw',marginTop:'2px'}}><label for="email">Email</label>
                <div><input  style={{width:'80%' ,borderRadius:2,border:0,height:'2vw',marginTop:2}} type="text" id="email" name="email"/></div></div>
                <div style={{width:'50%' ,textAlign:'left' ,fontSize:'1vw',marginTop:'2px'}}><label for="subject">Subject</label>
                <div><input  style={{width:'80%',borderRadius:2,border:0,height:'2vw',marginTop:2}} type="text" id="subject" name="subject"/></div></div>
                <div style={{width:'100%' ,textAlign:'left' ,fontSize:'1vw',marginTop:'2px'}}><label for="message">Your Message</label>
                <div><input  style={{width:'90%',borderRadius:2,border:0,height:'7vw',marginTop:2}} type="text" id="message" name="message"/></div></div>
                <input type="submit" value="SEND" style={{
                  backgroundColor:'#D8EF04',
                  marginTop:8,
                  border:0,
                  borderRadius:4,
                  width:'6vw',
                  height:'2vw'
                }}/>
          </div>
              </div>
              <div style={{position:'absolute',display:'flex',width:'100vw',justifyContent:'center',marginTop:'58vw',zIndex:30}}> <hr style={{width:'30vw',backgroundColor:'white',height:1,border:0}}></hr><img src={logo} style={{}}></img> <hr style={{width:'30vw',backgroundColor:'white',height:1,border:0}}></hr></div>
              <div style={{position:'absolute',display:'flex',width:'100vw',justifyContent:'center',marginTop:'62vw',zIndex:30}}><img src={twitter} style={{padding:'3vw'}}></img><img src={facebook} style={{padding:'3vw'}}></img><img src={instagram} style={{padding:'3vw'}}></img></div>
              <div style={{position:'absolute',marginTop:'68vw',marginLeft:'0.5vw',zIndex:30,borderLeft:'2px solid white',height:'2vw',left:'50%'}}></div>
              <div style={{position:'absolute',width:'100vw',marginTop:'71vw',zIndex:30,color:'white',alignItems:'center',fontSize:'0.9vw',marginLeft:'auto',marginRight:'auto'}}>WEEKLY NEWSLETTER</div>
              <div style={{position:'absolute',width:'100vw',marginTop:'74vw',zIndex:30,color:'white',alignItems:'center',fontSize:'0.9vw',marginLeft:'auto',marginRight:'auto'}}>
              <input style={{width:'20%',height:'2vw',opacity:0.7,padding:4, background:'transparent',color:'white',marginTop:2,border:'1px solid white'}} type="text" id="email" name="email" placeholder="NAME@EMAIL.COM"/>
              <input type="submit" value="SUBSCRIBE" style={{
                  border:'1px solid white',
                  background:'transparent',
                  opacity:0.7,
                  marginTop:2,
                  width:'10%',
                  color:'white',
                  height:'2.7vw'
                }}/>
              </div>
              <div style={{position:'absolute',width:'100vw',marginTop:'80vw',zIndex:30,color:'white',fontSize:'0.9vw'}}><span style={{fontWeight:'bold',opacity:0.8,float:'left',marginLeft:'1vw'}}><span style={{padding:'1vw'}}>FAQs</span><span>Blog</span></span>
              <span style={{fontWeight:'bold',opacity:0.5,marginLeft:'18vw'}}><span style={{padding:'0.5vw'}}>&copy; 2020 SINLESS</span></span>
              <span style={{fontWeight:'bold',opacity:0.8,float:'right',marginRight:'4vw'}}><span style={{padding:'1.5vw'}}>Privacy Policy</span><span style={{padding:'1.5vw'}}>Terms of Use</span><span>Terms of Sale</span></span>
              </div>
              <div style={{
              position:'absolute',
              marginTop:'24vw'
                }} >
              <img style={{maxWidth:'100%',height:'auto',zIndex:5}} src={bg}/>
            </div>
            <div style={{position:'absolute',zIndex:25, marginTop:'24vw'}}>
              <img style={{maxWidth:'100%',height:'auto'}} src={bg1}/>
        </div>
        <div style={{
          position:'absolute',marginTop:'62vw'
        }}>  <img style={{maxWidth:'100%',height:'auto',zIndex:5}} src={bg4}/></div>
        </div>
          );
    }
}
export default Footer;