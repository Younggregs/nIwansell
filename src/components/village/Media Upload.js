import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Form, Button,FormGroup, FormControl, Label } from 'react-bootstrap';
import Heading from './neighborhoods/blocks/houses/Heading'
import AppName from './neighborhoods/blocks/houses/App Name'
import MyUploader from './neighborhoods/Upload Media'




export default class MediaUpload extends React.Component {

  state = {
    categorylist: [],
    product_image:null,
    account_id: null,
    message: [],
    media:[],
    eshop_exist: false,
  };

  async componentDidMount() {

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


  }


render(){
  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <div>{label}</div>
        <FormControl {...props} />
        {help && <div>{help}</div>}
      </FormGroup>
  );
}







 return (
    <section className="new-product-form">
    <Row>
    <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
    
      <Row>
      <div className="login-appname">
       <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
      <Link to="/home">
        <AppName logged_in = {true}/>
      </Link>
      </Col>
      </div>
    </Row><br />
    
    <Row>
      <Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={10} smOffset={2} xs={10} xsOffset={2}>
      <Heading title="Upload product images"/>
      </Col>
    </Row>
      
      <br />

      <Row>
      <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={10} smOffset={2} xs={10} xsOffset={2}>
          <MyUploader product_id={this.props.match.params.product_id}/>
      </Col>
      </Row>
    
    </Col>
    </Row>
      </section>
    );
  }
}
