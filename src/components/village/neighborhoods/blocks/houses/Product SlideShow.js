import React from 'react'
import Slider from 'react-slick'
import { Row, Col } from 'react-bootstrap'
import Heading from './Heading.js'

export default class ProductSlideShow extends React.Component {

  state = {
    imagesList: [],
  }

  async componentWillMount() {
    try {
        const res = await fetch('http://199.192.21.172:8000/product_images/' + this.props.product_id);
        const imagesList = await res.json();
        this.setState({
          imagesList
        });
      } catch (e) {
        console.log(e);
      }

  }

  setMedia(media_name){
    this.state.media = 'http://199.192.21.172:8000' + media_name
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
                <Heading title="More Images"/>
               </Row>
               <Row>
               <Col lg={10} lgOffset={1} md={10} mdOffset={1} smHidden xsHidden>
          <Slider {...settings}>

            { this.state.imagesList.map(item => (
                    <div className="sponsored-images">
                      <div className="sponsored-image">
                    {this.setMedia(item.image)}
                    <img src= { `${this.state.media}` } alt="thumbnail"/>
                    </div>
                    </div>
                 )
                )}
         </Slider>
      
             </Col>

			<Col sm={12} xs={12} lgHidden mdHidden>

				<div class="scrolling-wrapper">
                { this.state.imagesList.map(item => (
                    <div class="card">
                    {this.setMedia(item.image)}
                    <img src= { `${this.state.media}` } alt="thumbnail"/>
                    </div>
                 )
                )}
  
                </div>

             </Col>
              </Row>
              
           </section>
         )
       }
  }
