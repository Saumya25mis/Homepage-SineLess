import React from 'react';
import bg from './resources/Leaf-bg.png';
class Des extends React.Component{
    render(){
        return(
            <div style={{
                width:'100%',
                display: 'flex',
                flexDirection:'column',
                minHeight: '130vh',
                position:'relative',
                backgroundColor:'#F6F6EE',
                fontFamily:'Access'
            }}>
                <div style={{position:'absolute'}} ><img style={{maxWidth:'100%',height:'auto',zIndex:'-25'}} src={bg}/> </div>
                <div style={{zIndex:25,marginTop:'12%'}}><h2 style={{color:'#E7E7E1',fontSize:'100px'}}>SINless</h2></div>
                <div style={{display:'flex',justifyContent:'center'
            }}>
                    <div style={{width:'30%',height:'auto',fontSize:12,padding:10,lineHeight:1.7}}><h4 style={{margin:0,padding:0}}>Are you someone too conscious about your skin?</h4><br></br><br></br>
                    It's also no secret that you've always spent the majority of your time trying and experimenting with new products that you see each month on the store shelf.So, why not spend time on choosing a product that not just blends well with your skin, but at the same time you feel safe about using it?<br></br><br></br>
                    Yes, we also care less about SINning the environment and use those product ingredients that blends well with your body chemistry. After all, who doesn't have a passion for healthy living?
                    </div>
                    <div style={{width:'30%',height:'auto',fontSize:12,padding :10,lineHeight:1.7}}>And it was one of our personal passion for coming up with a complete overhaul in deriving better-for-you personal products for our customers.
                    Yes, we were determined that we would not use any chemical ingredients which has not just been challenging for the environment but for the health of the skin.
                    <br></br><br></br> As we wanted to instill in our customers 'Less Smelling and more Smiling' after using our products.<br></br><br></br>
                    Also we all are connected to nature in some way or the other. And we as a company has been striving to bring in small changes taht not just improves the lifestyle around us but also maintain the balance and harmony of the 'green' environment. Our 'green' choice of products is not just for us but for you as well. As not 'we' or 'you' alone but 'us' can jointly create an ecological difference. </div>
                     </div>
            </div>
        );
    }
}
export default Des;