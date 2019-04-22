import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button, Image, FormControl, Thumbnail } from 'react-bootstrap'
import Heading from './houses/Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class CategoryProduct extends React.Component {

  state = {
    isLoading: true,
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

    
    if (this.props.show_more){
      try {
        const res = await fetch('https://www.iwansell.com/api/category_product/' + this.props.campus_id + '/99' + '/1');
        const categoryProductList = await res.json();
        this.setState({
          categoryProductList
        });
      } catch (e) {
        console.log(e);
      }
    }else{
      try {
        const res = await fetch('https://www.iwansell.com/api/category_product/' + this.props.campus_id + '/99' + '/0');
        const categoryProductList = await res.json();
        this.setState({
          categoryProductList
        });
      } catch (e) {
        console.log(e);
      }
    }

    this.setState({ isLoading: false })




}


  async newCategory(id,name) {

    this.setState({category: name, isLoading: true})

    try {
      const res = await fetch('https://www.iwansell.com/api/category_product/' + this.props.campus_id + '/' + id);
      const categoryProductList = await res.json();
      this.setState({
        categoryProductList
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })

}



  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }

  setMediaIcon(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }


  emptyResult(){

   var empty_set = false

   if(this.state.categoryProductList.length <= 0 ){
     empty_set = true
   }

   return empty_set


 }


       render() {
         return (
           <section className="category-product">
              <Col lg={12} md={12} smHidden xsHidden>

                <Row>
                    <Col lg={3} md={3}>
                       <Heading title="Categories"/>

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
                  <div className="isloading">
                  <p><b><i>loading...</i></b></p>
                  <p><Spinner color="#ff0000" size={32}/></p>
                  </div>
                ) : (

                  <div>
                  {this.emptyResult() ? (
                 <section className="product-image">
                 <div class="image">

                    <Image src={ require ('./houses/images/empty.png') } alt="product_image"/>
                   )}
                  </div>
                  </section>
                ) : (

                  <div id="main">
                                {this.state.categoryProductList.map(item => (
                                 <div class="box">
                                 <div class="pic">

                                <Link to={`/product/${ item.id }`}>

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
                    </div>
                    )}

                  {this.props.show_more ? (
                    <Link to='/view_more'>
                    <Heading title="View More"/>
                  </Link>
                  ) : (
                    <div/>
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
            </Row>


              <Row>
              <Heading title = {this.state.category}/>

              {this.state.isLoading ? (
                <div className="isloading">
                <p><b><i>loading...</i></b></p>
                <p><Spinner color="#ff0000" size={32}/></p>
                </div>
              ) : (

                <div>
                {this.emptyResult() ? (
                 <Thumbnail alt="product-image" src={ require ('./houses/images/empty.png') } />
              ) : (

                <div id="main-sm">
                {this.state.categoryProductList.map(item => (
                   <div class="box-sm">
                      <div class="pic-sm">

                 <Link to={`/product/${ item.id }`}>
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
              </div>
              )}

                {this.props.show_more ? (
                    <Link to='/view_more'>
                    <Heading title="View More"/>
                  </Link>
                  ) : (
                    <div/>
                )}



          </Row>



             </Col>
           </section>
         )
       }
  }
