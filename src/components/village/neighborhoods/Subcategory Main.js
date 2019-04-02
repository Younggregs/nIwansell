import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image, Thumbnail } from 'react-bootstrap'
import Heading from './blocks/houses/Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class SubcategoryMain extends React.Component {

  state = {
    isLoading: true,
    category : 'Never stop dreaming, and working at it',
    categoryList: [],
    categoryProductList: [],
    campus_id: 1,
    media: null
  }


  async componentWillMount() {

    try {
        const res = await fetch('https://www.iwansell.com/api/subcategory_main/');
        const categoryList = await res.json();
        this.setState({
          categoryList
        });
      } catch (e) {
        console.log(e);
      }

    try {
      const res = await fetch('https://www.iwansell.com/api/subcategory_product/' + this.props.campus_id + '/' + this.props.subcategory_id + '/');
      const categoryProductList = await res.json();
      this.setState({
        categoryProductList
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false})




}


  async newCategory(id,name) {

    this.setState({category: name, isLoading: true })

    try {
      const res = await fetch('https://www.iwansell.com/api/subcategory_product/' + this.state.campus_id + '/' + id);
      const categoryProductList = await res.json();
      this.setState({
        categoryProductList
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })

}



  setMediaIcon(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }


       render() {
         return (
           <section className="category-product">
              <Col lg={12} md={12} smHidden xsHidden>

                <Row>
                    <Col lg={3} md={3}>
                       <Heading title="Subcategory Items"/>

                       <div className="category-list">
                       <p className="category-item">
                            <Button onClick={this.newCategory.bind(this, 99,"All Categories")}>All Categories</Button>
                       </p>
                       {this.state.categoryList.map(item => (

                          <div className="category-item">
                            <Row>
                              <Col lg={8} md={8}>
                               <Button onClick={this.newCategory.bind(this, item.id, item.name)}>{item.name}</Button>
                               {this.setMediaIcon(item.icon)}
                              </Col>
                              <Col lg={4} md={4}>
                                <Image width="50px" height="50px" src= { `${this.state.media}` } alt="iwansell" responsive/>
                              </Col>
                            </Row>
                          </div>
                       ))}
                       </div>


                    </Col>

                <Col lg={9} md={9}>
                <Heading title = {this.state.category}/>


              {this.state.isLoading ? (
                <Spinner/>
              ) : (
                <div id="main">
                  {this.state.categoryProductList.map(item => (
                   <div class="box">
                   <div class="pic">

                  <Link to={`/product/${ item.product_id } `}>

                      {this.setMedia(item.product_image)}
                      <Thumbnail alt="product-image" src= { `${this.state.media}` }>

                          <p>{item.product_name}</p>
                          <p className="price">Starting price : {item.starting_price}</p>
                      </Thumbnail>
                  </Link>

                  </div></div>
                  ))}
                  </div>
              )}

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
            </Row>




              <Heading title = {this.state.category}/>

              {this.state.isLoading ? (
                <Spinner/>
              ) : (
                <div id="main-sm">
               {this.state.categoryProductList.map(item => (
                  <div class="box-sm">
                     <div class="pic-sm">

                <Link to={`/product/${ item.product_id } `}>
                  {this.setMedia(item.product_image)}
                  <Thumbnail alt="product-image" src= { `${this.state.media}` }>
                    <p>{item.product_name}</p>
                    <p className="price">Starting price : {item.starting_price}</p>
                  </Thumbnail>
                </Link>

                </div></div>
               ))}
               </div>


              )}

             </Col>
           </section>
         )
       }
  }
