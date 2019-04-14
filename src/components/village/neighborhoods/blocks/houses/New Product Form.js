import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Form, Button,FormGroup, FormControl, ControlLabel,Label, HelpBlock } from 'react-bootstrap';
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
    eshop_exist: false,
    isloading: false,
    next_view: false,
    category: null,
    product_name: null,
    description: null,
    starting_price: null
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

    try {
      const res = await fetch('https://www.iwansell.com/api/eshop_exist/',{

        headers : {
          'Authorization' : 'Token ' + auth,

        },

      } );
      const eshop_exist = await res.json();
      this.setState({
        eshop_exist
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false})


  }

  nextView(){

    this.setState({
      category: document.getElementById("category").value,
      product_name: document.getElementById("product_name").value,
      description: document.getElementById("description").value,
      starting_price: document.getElementById("starting_price").value,
      next_view: true
    })

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
  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
  );
}




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

  <Heading title="Add product to marketplace"/>

  {this.state.eshop_exist ? (
  <Row>
   <Col lg={4} lgOffset={1} md={4}  sm={6} xs={6}>
    <Link to="newproduct">
    <Button  bsStyle="success">Add product to account</Button>
    </Link>
  </Col>

  <Col lg={4} lgOffset={1} md={4} sm={6} xs={6}>
  <Link to="new_eshop_product">
    <Button>Add product to eshop</Button>
  </Link>
  </Col>
  </Row>
  ) : (
  <Row>
   <Col lg={4} lgOffset={1} md={4}  sm={6} xs={6}>
    <Link to="newproduct">
    <Button  bsStyle="success">Add product to account</Button>
    </Link>
  </Col>
  </Row>
  )}

  <br />

  <form>
  
  <FormGroup>
      <ControlLabel>Categories</ControlLabel>
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

  


    <FieldGroup
      id="product_name"
      type="text"
      label="Product Name"
      name="product_name"
      placeholder="e.g Samsung s6 edge"
    />

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Describe Product</ControlLabel>
      <FormControl componentClass="textarea" placeholder="e.g Gold plated, 64gb ROM, 3gb ROM, used ..." id="description" name="description"/>
    </FormGroup>

      <FieldGroup
        id="starting_price"
        type="text"
        label="Starting Price(Naira)"
        name="starting_price"
        placeholder="e.g 60k"
      />

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
