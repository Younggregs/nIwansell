import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button,FormGroup, FormControl, ControlLabel,Label, HelpBlock } from 'react-bootstrap';
import Heading from './Heading'
import AppName from './App Name'


export default class NewProductForm extends React.Component {

  state = {
    categorylist: [],
    product_image:null,
    account_id: null,
    media:[],
    eshop_exist: {},
  };

  async componentDidMount() {

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('http://199.192.21.172:8000/myaccount_id/', {
    
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
      const res = await fetch('http://199.192.21.172:8000/category/');
      const categorylist = await res.json();
      this.setState({
        categorylist
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const res = await fetch('http://199.192.21.172:8000/eshop_exist/');
      const eshop_exist = await res.json();
      this.setState({
        eshop_exist
      });
    } catch (e) {
      console.log(e);
    }


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

  <Heading title="Add product"/>

  { this.state.eshop_exist ? (
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
    <div></div>
  )}

  <br />

  <form method="POST" enctype="multipart/form-data" action={"http://199.192.21.172:8000/newproduct/" + this.state.account_id + "/"}>  
  <FormGroup>
      <ControlLabel>Categories</ControlLabel>
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

    <ControlLabel>Product image</ControlLabel>
    <FormGroup>
        <FormControl
            id="product_image"
            type="file"
            name="product_image"
            value={null}
            {...this.state.product_image}
        
        />
        <HelpBlock>This is the image that would be displayed as the product</HelpBlock>
</FormGroup>


  <ControlLabel>More media( Optional )</ControlLabel>
  <FormGroup>
        <FormControl
            multiple
            id="media"
            type="file"
            name="media"
            value={null}
            {...this.state.media}
          
        />
        <HelpBlock>Convince the buyer with more media(multiple images and video clips)</HelpBlock>
</FormGroup>

 <FormGroup>
   <Button bsStyle="success" type="submit">submit</Button>
 </FormGroup>
 </form>
  </section>
);

 return (formInstance);
   
  }
}
