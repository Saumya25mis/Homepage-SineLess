import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
class CustomLeftArrow extends React.Component{
    render(){
        return <p>Hiii</p>
    }
}
class CustomRightArrow extends React.Component{
    render(){
        return <p>Hiii</p>
    }
}
class Carousal extends React.Component{
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              partialVisibilityGutter: 3,
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
          return ( <Carousel 
            arrows={true}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
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
  renderDotsOutside={true}
          >
            <div>Item 1 Item 1 Item 1<br></br>Item 1Item 1Item 1Item 1</div>
            <div>Item 2 Item 1Item 1Item 1<br></br>Item 1Item 1Item 1</div>
            <div>Item 3 Item 1Item 1<br></br>Item 1Item 1Item 1Item 1</div>
          </Carousel>);
    }
}
export default Carousal;