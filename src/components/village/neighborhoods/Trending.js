import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import CategoryProduct from './blocks/Category Product'
import Heading from './blocks/houses/Heading'
import ProductImage from './blocks/houses/Product Image'

export default class Trending extends React.Component {

  state = {
    trendList_1: [],
    trendList_2: [],
    trendList_3: [],
    trendList_4: [],
    trendList_5: [],
    media: null,
    category_id: 0,
    campus_id: 1
  }


  trending_1 = 'Guys Clothes'
  trending_url_1='guys_clothes'

  trending_2 = 'Girls Clothes'
  trending_url_2='girls_clothes'

  trending_3 = 'Footwear'
  trending_url_3='footwear'

  trending_4 = 'Phones/Tablets'
  trending_url_4='phones_tablets'

  trending_5 = 'Laptops/Computers'
  trending_url_5 ='laptops_computers'



  async componentWillMount() {

    this.setState({ campus_id: this.props.campus_id})


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

  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
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
             <Grid>
             <Row>
              <Col lg={12} md={12} smHidden xsHidden>


                <Row>
                <Heading title = {this.trending_1} trending={true}/>

                {this.emptyResult(this.state.trendList_1) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (
                  <div>
                  {this.state.trendList_1.map(item =>

                    <Col lg={3} md={3} smHidden xsHidden>



                      {this.setMedia(item.product_image)}
                      <Link to={`/product/${ item.id } `}>
                        <ProductImage media={this.state.media}/>
                      </Link>


                    </Col>

                    )}
                     </div>


                )}



                </Row>



                <Row>
                <Heading title = {this.trending_2} trending={true}/>

                {this.emptyResult(this.state.trendList_2) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (
                  <div>

                {this.state.trendList_2.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">

                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                    <ProductImage media={this.state.media}/>
                  </Link>

                 </div>
                </Col>

                )}
                </div>
                )}
                </Row>


                <CategoryProduct campus_id={this.props.campus_id}/>



                <Row>
                <Heading title = {this.trending_3} trending={true}/>


                {this.emptyResult(this.state.trendList_3) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (
                  <div>
                {this.state.trendList_3.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">

                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                    <ProductImage media={this.state.media}/>
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
                  <p className="err-msg">No trends here yet</p>
                ): (
                  <div>

                {this.state.trendList_4.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">

                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                    <ProductImage media={this.state.media}/>
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
                  <p className="err-msg">No trends here yet</p>
                ): (
                  <div>

                {this.state.trendList_5.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>
                 <div className="image-size">


                  {this.setMedia(item.product_image)}

                  <Link to={`/product/${ item.id } `}>
                    <ProductImage media={this.state.media}/>
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
                  <p className="err-msg">No trends here yet</p>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_1.map(item =>

                <div class="card">


                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <img src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>

                </div>
                )}

              </div>
              )}

              </Row>




              <Row>
              <Heading title = {this.trending_2} trending={true}/>

              {this.emptyResult(this.state.trendList_2) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (


              <div class="scrolling-wrapper">

                {this.state.trendList_2.map(item =>

                <div class="card">


                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <img src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>

                </div>
                )}

              </div>
              )}

              </Row>


              <CategoryProduct campus={this.props.campus_id}/>




              <Row>
              <Heading title = {this.trending_3} trending={true}/>

              {this.emptyResult(this.state.trendList_3) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_3.map(item =>

                <div class="card">


                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <img src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>

                </div>
                )}

              </div>
                )}

              </Row>





              <Row>
              <Heading title = {this.trending_4} trending={true}/>

              {this.emptyResult(this.state.trendList_4) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_4.map(item =>

                <div class="card">


                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <img src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>

                </div>
                )}

              </div>
                )}

              </Row>










              <Row>
              <Heading title = {this.trending_5} trending={true}/>

              {this.emptyResult(this.state.trendList_5) ? (
                  <p className="err-msg">No trends here yet</p>
                ): (

              <div class="scrolling-wrapper">

                {this.state.trendList_5.map(item =>

                <div class="card">

                  {this.setMedia(item.product_image)}

                <Link to={`/product/${ item.id } `}>
                  <img src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>

                </div>
                )}

              </div>
                )}

              </Row>








             </Col>


             </Row>
             </Grid>
           </section>
         )
       }
  }
