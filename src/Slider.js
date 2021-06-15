import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import Hellan from './resources/Hellan.png';
import next from './resources/slider_next.svg';
import pre from './resources/slider_pre.svg';

const array = [{img:Hellan,name:"Hellana",des:"I am so attached to using the roll-on deodoranto of Sinless and preferable the reason is I don't stink as before, even after 24 hours. I'm so happy that finally I found something that works"},{img:Hellan,name:"Elizabeth",des:"I am so attached to using the roll-on deodoranto of Sinless and preferable the reason is I don't stink as before, even after 24 hours. I'm so happy that finally I found something that works"},{img:Hellan,name:"Jaffinoe",des:"I am so attached to using the roll-on deodoranto of Sinless and preferable the reason is I don't stink as before, even after 24 hours. I'm so happy that finally I found something that works"},{img:Hellan,name:"Saumya",des:"I am so attached to using the roll-on deodoranto of Sinless and preferable the reason is I don't stink as before, even after 24 hours. I'm so happy that finally I found something that works"}];

function Sliderr() {
    const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <img src={next} style={{height:'1vw'}}></img>
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <img src={pre}  style={{height:'1vw'}}></img>
        </div>
      );
    };
  
    const [imageIndex, setImageIndex] = useState(0);
  
    const settings = {
       autoplay:true,
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
      centerPadding: 0,
      centerMode:true,
      beforeChange: (current, next) => setImageIndex(next),
    };
  
    return (
      <div className="Appp">
        <Slider {...settings}>
          {array.map((img, idx) => (
            <div  style={{width:'50vw'}} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img style={{marginLeft:'7vw'}} src={img.img} alt={img} />
              <div style={{fontSize:'6vw',fontWeight:'bold',width:'40vw'}}>{img.name}</div>
              <div  className={idx === imageIndex ?  "display": "hidden"} style={{fontSize:'4vw',width:'50vw'}}>{img.des}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default Sliderr;