import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };

         return (
           <section>
             <Row>
              <Col lg={12} md={12} className="d-none d-md-block">
                    <Heading title="SHOP BY CATEGORY"/>

                    <section className="category-slide">

                       <Slider {...settings_lg}>
                       {this.state.categoryList.map(item => (
                         <Col lg={3} md={3}>

                        <div className="slide-items">

                        {this.setMedia(item.image)}
                        <div className="product-image">
                           <div class="image">
                            <Link to={`/category_view/${ item.id }`}>
                              <Image src= { `${this.state.media}` } alt="iwansell" responsive/>
                            </Link>
                         </div></div>
                         </div>
                         <p>{item.name}</p>

                         </Col>
                       ))}

                       </Slider>
                    </section>
                </Col>

                <Col sm={12} xs={12} className="d-md-none">
                    <Heading title="SHOP BY CATEGORY"/>

                    <section className="category-slide">

                       <Slider {...settings_sm}>
                       {this.state.categoryList.map(item => (
                         <Col sm={12} xs={12}>

                        <div className="slide-items">

                        {this.setMedia(item.image)}
                        <div className="product-image">
                           <div class="image">
                            <Link to={`/category_view/${ item.id }`}>
                              <Image src= { `${this.state.media}` } alt="iwansell" responsive/>
                            </Link>
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
