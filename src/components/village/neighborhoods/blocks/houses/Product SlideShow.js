import React from 'react'
import Slider from 'react-slick'
import { Row, Col, Image } from 'react-bootstrap'
import Heading from './Heading.js'

export default class ProductSlideShow extends React.Component {

  state = {
    imagesList: [],
    media: null,
  }

  async componentWillMount() {
    try {
        const res = await fetch('https://www.iwansell.com/api/product_images/' + this.props.product_id);
        const imagesList = await res.json();
        this.setState({
          imagesList
        });
      } catch (e) {
        console.log(e);
      }

  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }

       render() {

        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };


        return (
          <section className="sponsored">
              <Row>
               <div className="trending-header">
                 <p className="trending-title-t">More Media</p>
               </div>
               </Row>
         
         <Row className="justify-content-md-center">
         <Slider {...settings}>
             
               {this.state.imagesList.map(item => (
                 <div className="slide-items">
                   <div className="sponsored-images">
                     <div className="sponsored-image">
                       {this.setMedia(item.image)}
                       <Image src= { `${this.state.media}` } alt="product images"/>
                   </div>
                   </div>
                 </div>
                )
               )}

         </Slider>
         </Row>

          </section>
        )
      }
 }
