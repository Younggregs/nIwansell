import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

import loadable from '@loadable/component'

const CategoryProduct = loadable(() => import('./blocks/Category Product'))
const ProductImage = loadable(() => import('./blocks/houses/Product Image'))


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

  trending_3 = 'Accessories'
  trending_url_3='accessories'

  trending_4 = 'Phones/Tablets'
  trending_url_4='phones_and_tablets'

  trending_5 = 'Computers/Laptops'
  trending_url_5 ='computers_laptops'


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
      <Container fluid='true'>
       {this.state.isLoading ? (
           <div className="isloading">
           <p><b><i>loading...</i></b></p>
           <p><Spinner color="#ff0000" size={32}/></p>
           </div>
         ) : (
           <section>


           <Col lg={12} md={12} sm={12} xs={12}>
           
           <section className='trending-box'>
           <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_1}</p> 
           </div>
           </Row>

           {this.emptyResult(this.state.trendList_1) ? (
             <section className="product-image">
             <div class="image">

             <Link to="/signup"><Image src={ require ('./blocks/houses/images/empty.png') } alt="product_image"/></Link>
               )}
              </div>
              
           </section>
           
           ): (
             <Row>
             {this.state.trendList_1.map(item =>

               <Col lg={3} md={3} sm={6} xs={6}>



                 {this.setMedia(item.product_image)}
                 <Link to={`/product/${ item.id } `}>
                 <section className="product-container">
                   <ProductImage media={this.state.media}/>
                   <div className="product-tip">
                     <Button variant='outline-dark'>{item.product_name}</Button><br />
                     <Button variant='dark'>{item.starting_price}</Button>
                   </div>
                 </section>
                 </Link>


               </Col>

               )}
                </Row>


           )}
           

           



           
           <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_2}</p> 
           </div>
           </Row>

           {this.emptyResult(this.state.trendList_2) ? (
             <section className="product-image">
             <div class="image">

             <Link to="/signup"><Image src={ require ('./blocks/houses/images/empty1.png') } alt="product_image"/></Link>
               )}
              </div>
           </section>
           ): (
             <Row>

           {this.state.trendList_2.map(item =>

           <Col lg={3} md={3} sm={6} xs={6}>
            <div className="image-size">

             {this.setMedia(item.product_image)}

             <Link to={`/product/${ item.id } `}>
             <section className="product-container">
                   <ProductImage media={this.state.media}/>
                   <div className="product-tip">
                     <Button variant='outline-dark'>{item.product_name}</Button><br />
                     <Button variant='dark'>{item.starting_price}</Button>
                   </div>
                 </section>
             </Link>

            </div>
           </Col>

           )}
           </Row>

           )}
           

           </section>




           <Row>
           <Col lg={12} md={12} className="d-none d-md-block">

             <CategoryProduct campus_id={this.props.campus_id} show_more={true}/>
           </Col>
           </Row>



           <section className='trending-box'>
          
           <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_3}</p> 
           </div>
           </Row>


           {this.emptyResult(this.state.trendList_3) ? (
             <section className="product-image">
             <div class="image">

             <Link to="/signup"><Image src={ require ('./blocks/houses/images/empty2.png') } alt="product_image"/></Link>
               )}
              </div>
           </section>
           ): (
             <Row>
           {this.state.trendList_3.map(item =>

           <Col lg={3} md={3} sm={6} xs={6}>
            <div className="image-size">

             {this.setMedia(item.product_image)}

             <Link to={`/product/${ item.id } `}>
             <section className="product-container">
                   <ProductImage media={this.state.media}/>
                   <div className="product-tip">
                     <Button variant='outline-dark'>{item.product_name}</Button><br />
                     <Button variant='dark'>{item.starting_price}</Button>
                   </div>
                 </section>
             </Link>

            </div>
           </Col>

           )}
           </Row>
           )}




           
           <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_4}</p> 
           </div>
           </Row>

           {this.emptyResult(this.state.trendList_4) ? (
             <section className="product-image">
             <div class="image">

             <Link to="/signup"><Image src={ require ('./blocks/houses/images/empty3.png') } alt="product_image"/></Link>
               )}
              </div>
           </section>
           ): (
             <Row>

           {this.state.trendList_4.map(item =>

           <Col lg={3} md={3} sm={6} xs={6}>
            <div className="image-size">

             {this.setMedia(item.product_image)}

             <Link to={`/product/${ item.id } `}>
             <section className="product-container">
                   <ProductImage media={this.state.media}/>
                   <div className="product-tip">
                     <Button variant='outline-dark'>{item.product_name}</Button><br />
                     <Button variant='dark'>{item.starting_price}</Button>
                   </div>
                 </section>
             </Link>

            </div>
           </Col>

           )}
           </Row>
           )}



           
           <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_5}</p> 
           </div>
           </Row>

           {this.emptyResult(this.state.trendList_5) ? (
             <section className="product-image">
               <div class="image">

               <Link to="/signup"><Image src={ require ('./blocks/houses/images/empty4.png') } alt="product_image"/></Link>
                 )}
                </div>
             </section>
           ): (
             <Row>

           {this.state.trendList_5.map(item =>

           <Col lg={3} md={3} sm={6} xs={6}>
            <div className="image-size">


             {this.setMedia(item.product_image)}

             <Link to={`/product/${ item.id } `}>
             <section className="product-container">
                   <ProductImage media={this.state.media}/>
                   <div className="product-tip">
                     <Button variant='outline-dark'>{item.product_name}</Button><br />
                     <Button variant='dark'>{item.starting_price}</Button>
                   </div>
                 </section>
             </Link>

            </div>
           </Col>

           )}
           </Row>
           )}
           </section>





        </Col>

{/* 
        <Col sm={12} xs={12} className="d-lg-block d-md-block">

        <Row>
        <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_1}</p> 
           </div>
           </Row>

         {this.emptyResult(this.state.trendList_1) ? (
            <Link to="/signup"><img  height="100" width="auto" src={ require ('./blocks/houses/images/empty.png') } alt="img"/></Link>
           ): (

         <div class="scrolling-wrapper">

           {this.state.trendList_1.map(item =>

           <div class="card">
             {this.setMedia(item.product_image)}

           <Link to={`/product/${ item.id } `}>
             <img  height="100" width="auto" src= { `${this.state.media}` } alt="img"/>
             <p>{item.product_name}</p>
           </Link>

           </div>
           )}

         </div>
         )}

         </Row>




         <Row>
         <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_2}</p> 
           </div>
           </Row>

         {this.emptyResult(this.state.trendList_2) ? (
              <Link to="/signup"><img  height="100" width="auto" src={ require ('./blocks/houses/images/empty1.png') } alt="img"/></Link>
           ): (


         <div class="scrolling-wrapper">

           {this.state.trendList_2.map(item =>

           <div class="card">
           {this.setMedia(item.product_image)}

         <Link to={`/product/${ item.id } `}>
           <img  height="100" width="auto" src= { `${this.state.media}` } alt="img"/>
           <p>{item.product_name}</p>
         </Link>

         </div>
           )}

         </div>
         )}

         </Row>


         <Row>
         <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_3}</p> 
           </div>
           </Row>

         {this.emptyResult(this.state.trendList_3) ? (
              <Link to="/signup"><img  height="100" width="auto" src={ require ('./blocks/houses/images/empty2.png') } alt="img"/></Link>
           ): (

         <div class="scrolling-wrapper">

           {this.state.trendList_3.map(item =>

           <div class="card">
           {this.setMedia(item.product_image)}

         <Link to={`/product/${ item.id } `}>
           <img  height="100" width="auto" src= { `${this.state.media}` } alt="img"/>
           <p>{item.product_name}</p>
         </Link>

         </div>
           )}

         </div>
           )}

         </Row>





         <Row>
         <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_4}</p> 
           </div>
           </Row>

         {this.emptyResult(this.state.trendList_4) ? (
              <Link to="/signup"><img  height="100" width="auto" src={ require ('./blocks/houses/images/empty3.png') } alt="img"/></Link>
           ): (

         <div class="scrolling-wrapper">

           {this.state.trendList_4.map(item =>
           <div class="card">
           {this.setMedia(item.product_image)}

         <Link to={`/product/${ item.id } `}>
           <img  height="100" width="auto" src= { `${this.state.media}` } alt="img"/>
           <p>{item.product_name}</p>
         </Link>

         </div>
           )}

         </div>
           )}

         </Row>










         <Row>
         <Row className="justify-content-md-center">
           <div className="trending-header">
             <p className="trending-title">{this.trending_5}</p> 
           </div>
           </Row>

         {this.emptyResult(this.state.trendList_5) ? (
              <Link to="/signup"><img  height="100" width="auto" src={ require ('./blocks/houses/images/empty4.png') } alt="img"/></Link>
           ): (

         <div class="scrolling-wrapper">

           {this.state.trendList_5.map(item =>

           <div class="card">
             {this.setMedia(item.product_image)}

           <Link to={`/product/${ item.id } `}>
             <Image  height="100" width="auto" src= { `${this.state.media}` } alt="img" responsive/>
             <p>{item.product_name}</p>
           </Link>

           </div>
           )}

         </div>
           )}

         </Row>








        </Col>
           */}
       </section>
         )}

       </Container>
    )
  }
  }
