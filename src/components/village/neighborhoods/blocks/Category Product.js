import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button, Image, FormControl } from 'react-bootstrap'
import Heading from './houses/Heading'

export default class CategoryProduct extends React.Component {

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

    try {
      const res = await fetch('https://www.iwansell.com/api/category_product/' + this.state.campus_id + '/99');
      const categoryProductList = await res.json();
      this.setState({
        categoryProductList
      });
    } catch (e) {
      console.log(e);
    }




}


  async newCategory(id,name) {

    this.setState({category: name})

    try {
      const res = await fetch('https://www.iwansell.com/api/category_product/' + this.state.campus_id + '/' + id);
      const categoryProductList = await res.json();
      this.setState({
        categoryProductList
      });
    } catch (e) {
      console.log(e);
    }

}



  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }


       render() {
         return (
           <section className="category-product">
             <Grid>
             <Row>
              <Col lg={12} md={12} smHidden xsHidden>

                <Row>
                    <Col lg={3} md={3}>
                       <Heading title="Categories"/>

                       <div className="category-list">
                       <p className="category-item">
                            <Button onClick={this.newCategory.bind(this, 99,"All Categories")}>All Categories</Button>
                       </p>
                       {this.state.categoryList.map(item => (

                          <p className="category-item">
                               <Button onClick={this.newCategory.bind(this, item.id, item.name)}>{item.name}</Button>
                          </p>
                       ))}
                       </div>


                    </Col>

                    <Col lg={9} md={9}>
                <Heading title = {this.state.category}/>



                {this.state.categoryProductList.map(item => (

                <Col lg={4} md={4} smHidden xsHidden>

                <Link to={`/product/${ item.product_id } `}>
                <section className="product-image">
                <div class="image">
                    {this.setMedia(item.product_image)}
                    <Image alt="product-image" src= { `${this.state.media}` }/>
                </div>
                </section>
                  <p className="lg-store">{item.product_name}</p>
                  <p className="lg-store">Starting price : {item.starting_price}</p>
                </Link>


                </Col>

                ))}
                   </Col>
                </Row>

             </Col>








             <Col sm={12} xs={12} lgHidden mdHidden>

             <Row>
              <Heading title="View products by category"/>

              <div className="category-list-sm">
                       <p className="category-item">
                            <Button onClick={this.newCategory.bind(this, 99,"All Categories")}>All Categories</Button>
                       </p>
                       {this.state.categoryList.map(item => (

                          <p className="category-item">
                               <Button onClick={this.newCategory.bind(this, item.id, item.name)}>{item.name}</Button>
                          </p>
                       ))}
            </div>





              <Heading title = {this.state.category}/>

                {this.state.categoryProductList.map(item => (
                <section>

                <Link to={`/product/${ item.product_id } `}>
                <section className="product-image">
                <div class="image">
                    {this.setMedia(item.product_image)}
                    <Image alt="product-image" src= { `${this.state.media}` }/>
                </div>
                </section>
                 <div className="category-tip">
                   <p>{item.product_name}</p>
                   <p>Starting price : {item.starting_price}</p>
                 </div>
                </Link>

                </section>
                ))}


              </Row>



             </Col>


             </Row>
             </Grid>
           </section>
         )
       }
  }
