import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Form, Button,FormGroup, FormControl, Label } from 'react-bootstrap';
import Heading from './Heading'
import AppName from './App Name'
import NewProductMedia from './New Product Media'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class NewProductForm extends React.Component {

  state = {
    categorylist: [],
    product_image:null,
    account_id: null,
    message: [],
    media:[],
    isloading: false,
    next_view: false,
    category: null,
    product_name: null,
    description: null,
    starting_price: null,
    product_name_err: false,
    description_err: false,
    starting_price_err: false
  };

  async componentDidMount() {

    this.setState({ isLoading: true})
    
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/myaccount_id/', {

        headers : {
          'Authorization' : 'Token ' + auth,

        },

      });
      const account_id = await res.json();
      this.setState({
        account_id
      });
    } catch (e) {
      console.log(e);
    }



    

    try {
      const res = await fetch('https://www.iwansell.com/api/category/');
      const categorylist = await res.json();
      this.setState({
        categorylist
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({ isLoading: false})


  }

  nextView(){

    this.setState({ 
      product_name_err: false,
      description: false,
      starting_price: false
    })
    
    var category = document.getElementById("category").value
    var product_name = document.getElementById("product_name").value
    var description = document.getElementById("description").value
    var starting_price = document.getElementById("starting_price").value

      if(product_name){

        if(description){

          if(starting_price){

            this.setState({
              category: category,
              product_name: product_name,
              description: description,
              starting_price: starting_price,
              next_view: true
            })

          }else{
            this.setState({starting_price_err: true})
          }

        }else{
          this.setState({description_err: true})
        }

      }else{
        this.setState({product_name_err: true})
      }
 

}







  async submitForm(){

    this.setState({ isLoading: true})

    var category= document.getElementById("category").value
    var product_name= document.getElementById("product_name").value
    var description= document.getElementById("description").value
    var starting_price= document.getElementById("starting_price").value

    var formData = new FormData()

    formData.append('category', category)
    formData.append('product_name', product_name)
    formData.append('description', description)
    formData.append('starting_price', starting_price)

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/newproduct/' + this.state.account_id + '/', {

       body : formData,
       method: 'POST',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const message = await res.json();
        this.setState({
          message
        });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false})


  }




  


render(){



const formInstance = (
  <section className="new-product-form">

  <Row>
  <div className="login-appname">
   <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
  <Link to="/home">
    <AppName logged_in = {true}/>
  </Link>
  </Col>
  </div>
</Row><br />

  <Heading title="Upload product to marketplace"/>

  
  <Row>
  <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
    <Link to="newproduct">
    <Button  bsStyle="success">Add product to marketplace</Button>
    </Link>
  </Col>
  </Row>

  <br />


  <form>
  
  <FormGroup>
      <div>Categories</div>
      <p>
      {this.state.isLoading ? (
        <div>
        <p><b><i>Fetching Categories</i></b></p>
        <p><Spinner color="#ff0000" size={32}/></p>
        </div>
        ) : (
          <div/>
        )}
        </p>
      <FormControl componentClass="select" placeholder="select" id="category" name="category">
      {this.state.categorylist.map(item => (
        <option value={item.id}>{item.name}</option>
      ))}
      </FormControl>
    </FormGroup>

  

    <FormGroup>
      <div>Product Name
      {this.state.product_name_err ? (
      <span className="err-msg">
       * product name required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl placeholder="e.g Samsung s6 edge" id="product_name" name="product_name"/>
    </FormGroup>


  
    <FormGroup controlId="formControlsTextarea">
      <div>Describe Product
      {this.state.description_err ? (
      <span className="err-msg">
       * description required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl componentClass="textarea" placeholder="e.g Gold plated, 64gb ROM, 3gb ROM, used ..." id="description" name="description"/>
    </FormGroup>

      
    <FormGroup>
      <div>Starting Price
      {this.state.starting_price_err ? (
      <span className="err-msg">
       * starting price required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl placeholder="e.g 70k" id="starting_price" name="starting_price"/>
      <div>Set a reasonable price, as low as you can get. Its proven to work!</div>
    </FormGroup>



 <FormGroup>
   <Button bsStyle="success" onClick={this.nextView.bind(this)}>Continue</Button>
 </FormGroup>
 </form>
  </section>
);

 return (
    <div>
      {this.state.next_view ? (
        <NewProductMedia
          account_id={this.state.account_id}
          category={this.state.category}
          product_name={this.state.product_name}
          description={this.state.description}
          starting_price={this.state.starting_price}
        />
      ) : (
          formInstance
      )}
    </div>);

  }
}
