import React from 'react';
import pic1 from './resources/Earth-friendly.png';
import pic2 from './resources/Inorganic.png';
import pic3 from './resources/Biodegradable.png';
import pic4 from './resources/Free of Toxins.png';
import bg from './resources/insta_icon.png';
import Sliderr from './Slider';
 class Flex extends React.Component{
     render(){
        return(
            <div style={{backgroundColor:'#F6F6EE'}}>
                <h2 style={{paddingTop:'12vw',margin:0,paddingBottom:'5vw'}}>Stay Fresh with SINless</h2>
                <div style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                    <div style={{display:'flex',justifyContent:'center'}}><img style={{width:'15vw',height:'15vw',paddingLeft:35}} src={pic1}></img>
                    <hr style={{marginTop:'auto',marginBottom:'auto',marginLeft:0,marginRight:0,color:'black',backgroundColor:'black',width:'7vw',height:'0.09vw'}}/>
                    <div style={{width:'15vw',textAlign:'left',padding:25,fontSize:'0.9vw',fontFamily:'access'}}><h3 style={{fontSize:'1.5vw'}}>Earth-friendly ingredients</h3>
                    <span style={{lineHeight:'1.2vw'}}>We want to set  an example in the cosmetic space by using earth friendly green products thereby reducing the undesired effects controversial ingredients on our health.</span>
                    </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{width:'15vw',textAlign:'left',paddingLeft:'6vw',fontSize:'0.9vw',fontFamily:'access'}}><h3 style={{fontSize:'1.5vw'}}>Inorganic <br></br>Packaging</h3>
                    <span style={{lineHeight:'1.2vw'}}>We want to set  an example in the cosmetic space by using earth friendly green products thereby reducing the undesired effects controversial ingredients on our health.</span>
                    </div>
                    <hr style={{marginTop:'auto',marginBottom:'auto',marginLeft:0,marginRight:0,color:'black',backgroundColor:'black',width:'7vw',height:'0.09vw'}}/>
                    <img style={{width:'15vw',height:'15vw',paddingRight:35}} src={pic2}></img>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}><img style={{width:'15vw',height:'15vw',paddingLeft:35}} src={pic3}></img>
                    <hr style={{marginTop:'auto',marginBottom:'auto',marginLeft:0,marginRight:0,color:'black',backgroundColor:'black',width:'7vw',height:'0.09vw'}}/>
                    <div style={{width:'15vw',textAlign:'left',padding:25,fontSize:'0.9vw',fontFamily:'access'}}><h3 style={{fontSize:'1.5vw'}}>Biodegradable</h3>
                    <span style={{lineHeight:'1.2vw'}}>We want to set  an example in the cosmetic space by using earth friendly green products thereby reducing the undesired effects controversial ingredients on our health.</span>
                    </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{width:'15vw',textAlign:'left',paddingLeft:'6vw',fontSize:'0.9vw',fontFamily:'access'}}><h3 style={{fontSize:'1.5vw'}}>Free of Toxins and Allergens</h3>
                    <span style={{lineHeight:'1.2vw'}}>We want to set  an example in the cosmetic space by using earth friendly green products thereby reducing the undesired effects controversial ingredients on our health.</span>
                    </div>
                    <hr style={{marginTop:'auto',marginBottom:'auto',marginLeft:0,marginRight:0,color:'black',backgroundColor:'black',width:'7vw',height:'0.09vw'}}/>
                    <img style={{width:'15vw',height:'15vw',paddingRight:35}} src={pic4}></img>
                    </div>
                    <div></div>
                </div>
                <Sliderr/>
                <img style={{margin:-10,padding:0}} src={bg}></img>
            </div>
        );
     }
 }
 export default Flex;