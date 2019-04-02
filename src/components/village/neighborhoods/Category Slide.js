import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Thumbnail, Image } from 'react-bootstrap'
import Slider from 'react-slick'
import Heading from './blocks/houses/Heading'

export default class CategorySlide extends React.Component {

  state = {
    category : 'All Categories',
    categoryList: [],
    categoryProductList: [],
    campus_id: 1,
    media: null
  }


  async componentWillMount() {

    try {
        const res = await fetch('https://www.iwansell.com/api/category/');
        const categoryList = await res.json();
        this.setState({
          categoryList
        });
      } catch (e) {
        console.log(e);
      }

}


setMedia(media_name){
  this.state.media = 'https://www.iwansell.com' + media_name
}


       render() {

        var settings_lg = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1
          };


          var settings_sm = {
            slideToShow: 3,
            slideToScroll: 2,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 2000,
          };

         return (
           <section>
             <Row>
              <Col lg={12} md={8} smHidden xsHidden>

                    <Heading title="SHOP BY CATEGORY"/>

                    <section className="category-slide">

                       <Slider {...settings_lg}>
                       {this.state.categoryList.map(item => (
                         <Col lg={3} md={3} smHidden xsHidden>

                        <div className="slide-items">

                        {this.setMedia(item.image)}
                        <div className="product-image">
                           <div class="image">
                           <Image src= { `${this.state.media}` } alt="iwansell" responsive/>
                         </div></div>
                         </div>
                         <p>{item.name}</p>

                         </Col>
                       ))}

                       </Slider>
                    </section>
                </Col>
             </Row>
           </section>
         )
       }
  }
