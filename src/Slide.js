import React from 'react';
import car1 from './resources/img-1.jpg';
import car2 from './resources/img-2.jpg';
import car3 from './resources/img-3.jpg';
import car4 from './resources/img-4.jpg';
import car5 from './resources/img-5.jpg';
import car6 from './resources/img-6.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 class Slide extends React.Component{
     render(){
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              partialVisibilityGutter: 3,
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return(<div style={{backgroundColor:'#F6F6EE',width:'100vw'}}> <Carousel style={{position:'absolute',zIndex:'25px',width:'100vw'}}
        arrows={false}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoFocus={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
autoPlaySpeed={1000}
customTransition="all .5"
transitionDuration={2000}
containerClass="carousel-container"
deviceType={this.props.deviceType}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
centerMode={true}
      >
        <img style={{width:'16vw',height:'18vw',marginRight:'1vw'}} src={car1}></img>
        <img style={{width:'16vw',height:'18vw',marginRight:'1vw'}} src={car2}></img>
        <img style={{width:'16vw',height:'18vw',marginRight:'1vw'}} src={car3}></img>
        <img style={{width:'16vw',height:'18vw',marginRight:'1vw'}} src={car4}></img>
        <img style={{width:'16vw',height:'18vw',marginRight:'1vw'}} src={car5}></img>
        <img style={{width:'16vw',height:'18vw',marginRight:'1vw'}} src={car6}></img>
      </Carousel></div>);
     }
 }
 export default Slide;