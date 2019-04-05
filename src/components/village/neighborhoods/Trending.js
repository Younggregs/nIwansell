import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import CategoryProduct from './blocks/Category Product'
import Heading from './blocks/houses/Heading'
import ProductImage from './blocks/houses/Product Image'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class Trending extends React.Component {

  state = {
    isLoading: true,
    trendList_1: [],
    trendList_2: [],
    trendList_3: [],
    trendList_4: [],
    trendList_5: [],
    media: null,
    category_id: 0,
    campus_id: 1
  }


  trending_1 = 'Clothes'
  trending_url_1='clothes'

  trending_2 = 'Shoes'
  trending_url_2='shoes'

  trending_3 = 'Accomodation'
  trending_url_3='accommodation'

  trending_4 = 'Phones/Tablets'
  trending_url_4='phones_and_tablets'

  trending_5 = 'Computers/Laptops'
  trending_url_5 ='computers_and_laptops'


  async componentWillMount() {

    this.setState({ campus_id: this.state.campus_id})


    try {
      const res = await fetch('https://www.iwansell.com/api/trending/' + this.props.campus_id + '/' + this.trending_url_1 + '/');
      const trendList_1 = await res.json();
      this.setState({
        trendList_1
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const res = await fetch('https://www.iwansell.com/api/trending/' + this.props.campus_id + '/' +  this.trending_url_2 + '/');
      const trendList_2 = await res.json();
      this.setState({
        trendList_2
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const res = await fetch('https://www.iwansell.com/api/trending/' + this.props.campus_id + '/' +  this.trending_url_3 + '/');
      const trendList_3 = await res.json();
      this.setState({
        trendList_3
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const res = await fetch('https://www.iwansell.com/api/trending/' + this.props.campus_id + '/' + this.trending_url_4 + '/');
      const trendList_4 = await res.json();
      this.setState({
        trendList_4
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const res = await fetch('https://www.iwansell.com/api/trending/' + this.props.campus_id + '/' +  this.trending_url_5 + '/');
      const trendList_5 = await res.json();
      this.setState({
        trendList_5
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })

  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }


  emptyResult(trendlist){

    var empty_set = false

    if(trendlist.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }


       render() {
         return (
           <section className="trending">
            {this.state.isLoading ? (
                <Spinner/>
              ) : (
                <section>
                <Col lg={12} md={12} smHidden xsHidden>

                <Row>
                <Heading title = {this.trending_1} trending={true}/>

                {this.emptyResult(this.state.trendList_1) ? (
                  <section className="product-image">
                  <div class="image">

                     <Image src={ require ('./blocks/houses/images/empty.png') } alt="product_image"/>
                    )}
                   </div>
                </section>
                ): (
                  <div>
                  {this.state.trendList_1.map(item =>

                    <Col lg={3} md={3} smHidden xsHidden>



                      {this.setMedia(item.product_image)}
                      <Link to={`/product/${ item.id } `}>
                      <section className="product-container">
                        <ProductImage media={this.state.media}/>
                        <div className="product-tip">
                          <p>{item.product_name}</p>
                        </div>
                      </section>
                      </Link>


                    </Col>

                    )}
                     </div>


                )}



                </Row>



                <Row>
                <Heading title = {this.trending_2} trending={true}/>

                {this.emptyResult(this.state.trendList_2) ? (
                  <section className="product-image">
                  <div class="image">

                     <Image src={ require ('./blocks/houses/images/empty1.png') } alt="product_image"/>
                    )}
                   </div>
                </section>
                ): (
                  <div>

                {this.state.trendList_2.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">

                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                  <section className="product-container">
                        <ProductImage media={this.state.media}/>
                        <div className="product-tip">
                          <p>{item.product_name}</p>
                        </div>
                      </section>
                  </Link>

                 </div>
                </Col>

                )}
                </div>
                )}
                </Row>

                <Row>
                  <CategoryProduct campus_id={this.props.campus_id} show_more={true}/>
                </Row>



                <Row>
                <Heading title = {this.trending_3} trending={true}/>


                {this.emptyResult(this.state.trendList_3) ? (
                  <section className="product-image">
                  <div class="image">

                     <Image src={ require ('./blocks/houses/images/empty2.png') } alt="product_image"/>
                    )}
                   </div>
                </section>
                ): (
                  <div>
                {this.state.trendList_3.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">

                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                  <section className="product-container">
                        <ProductImage media={this.state.media}/>
                        <div className="product-tip">
                          <p>{item.product_name}</p>
                        </div>
                      </section>
                  </Link>

                 </div>
                </Col>

                )}
                </div>
                )}
                </Row>




                <Row>
                <Heading title = {this.trending_4} trending={true}/>

                {this.emptyResult(this.state.trendList_4) ? (
                  <section className="product-image">
                  <div class="image">

                     <Image src={ require ('./blocks/houses/images/empty3.png') } alt="product_image"/>
                    )}
                   </div>
                </section>
                ): (
                  <div>

                {this.state.trendList_4.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">

                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                  <section className="product-container">
                        <ProductImage media={this.state.media}/>
                        <div className="product-tip">
                          <p>{item.product_name}</p>
                        </div>
                      </section>
                  </Link>

                 </div>
                </Col>

                )}
                </div>
                )}
                </Row>



                <Row>
                <Heading title = {this.trending_5} trending={true}/>

                {this.emptyResult(this.state.trendList_5) ? (
                  <section className="product-image">
                    <div class="image">

                       <Image src={ require ('./blocks/houses/images/empty4.png') } alt="product_image"/>
                      )}
                     </div>
                  </section>
                ): (
                  <div>

                {this.state.trendList_5.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">


                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                  <section className="product-container">
                        <ProductImage media={this.state.media}/>
                        <div className="product-tip">
                          <p>{item.product_name}</p>
                        </div>
                      </section>
                  </Link>

                 </div>
                </Col>

                )}
                </div>
                )}
                </Row>





             </Col>

             <Col sm={12} xs={12} lgHidden mdHidden>

             <Row>
              <Heading title = {this.trending_1} trending={true}/>

              {this.emptyResult(this.state.trendList_1) ? (
                 <img  height="100" width="auto" src={ require ('./blocks/houses/images/empty.png') } alt="thumbnail"/>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_1.map(item =>

                <div class="card">
                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <img  height="100" width="auto" src= { `${this.state.media}` } alt="thumbnail"/>
                  <p>{item.product_name}</p>
                </Link>

                </div>
                )}

              </div>
              )}

              </Row>




              <Row>
              <Heading title = {this.trending_2} trending={true}/>

              {this.emptyResult(this.state.trendList_2) ? (
                   <img  height="100" width="auto" src={ require ('./blocks/houses/images/empty1.png') } alt="thumbnail"/>
                ): (


              <div class="scrolling-wrapper">

                {this.state.trendList_2.map(item =>

                <div class="card">
                {this.setMedia(item.product_image)}

              <Link to={`/product/${ item.id } `}>
                <img  height="100" width="auto" src= { `${this.state.media}` } alt="thumbnail"/>
                <p>{item.product_name}</p>
              </Link>

              </div>
                )}

              </div>
              )}

              </Row>


              <CategoryProduct campus_id={this.props.campus_id} show_more={true}/>




              <Row>
              <Heading title = {this.trending_3} trending={true}/>

              {this.emptyResult(this.state.trendList_3) ? (
                   <img  height="100" width="auto" src={ require ('./blocks/houses/images/empty2.png') } alt="thumbnail"/>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_3.map(item =>

                <div class="card">
                {this.setMedia(item.product_image)}

              <Link to={`/product/${ item.id } `}>
                <img  height="100" width="auto" src= { `${this.state.media}` } alt="thumbnail"/>
                <p>{item.product_name}</p>
              </Link>

              </div>
                )}

              </div>
                )}

              </Row>





              <Row>
              <Heading title = {this.trending_4} trending={true}/>

              {this.emptyResult(this.state.trendList_4) ? (
                   <img  height="100" width="auto" src={ require ('./blocks/houses/images/empty3.png') } alt="thumbnail"/>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_4.map(item =>
                <div class="card">
                {this.setMedia(item.product_image)}

              <Link to={`/product/${ item.id } `}>
                <img  height="100" width="auto" src= { `${this.state.media}` } alt="thumbnail"/>
                <p>{item.product_name}</p>
              </Link>

              </div>
                )}

              </div>
                )}

              </Row>










              <Row>
              <Heading title = {this.trending_5} trending={true}/>

              {this.emptyResult(this.state.trendList_5) ? (
                   <img  height="100" width="auto" src={ require ('./blocks/houses/images/empty4.png') } alt="thumbnail"/>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_5.map(item =>

                <div class="card">
                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <Image  height="100" width="auto" src= { `${this.state.media}` } alt="thumbnail" responsive/>
                  <p>{item.product_name}</p>
                </Link>

                </div>
                )}

              </div>
                )}

              </Row>








             </Col>
            </section>
              )}

            </section>
         )
       }
  }
