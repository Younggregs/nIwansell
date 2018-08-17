import React from 'react';
import  { Redirect } from 'react-router-dom'
import { Row, Col, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class NewEShopForm extends React.Component {

  state = {
    statement: []
  }

  async newEShop(){

    var eshop_name = document.getElementById('eshop_name').value
    var about = document.getElementById('about').value

    var formData = new FormData()
    formData.append('eshop_name', eshop_name)
    formData.append('about', about)


    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('http://199.192.21.172:8000/new_eshop/', {

      body: formData,
      method: 'POST',
      headers : {
        'Authorization' : 'Token ' + auth,

      },

      });
      const statement = await res.json();
      this.setState({
        statement
      });
      console.log('console log :' + this.state.statement.code)

    } catch (e) {
      console.log(e);
    }

}

redirect(){

    return <Redirect to='/eshop'/>

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
  <section className="signin-form">

  <form>
  <Row>
  <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
    <FieldGroup
      id="eshop_name"
      type="text"
      label="Name of e-shop"
      name="eshop_name"
      placeholder="e.g Iceprince' Wardrope "
    />

  <ControlLabel>About eshop</ControlLabel><br />

    <textarea
    name="about"
    id="about"
    placeholder="What are you selling">
    </textarea><br />

    {this.state.statement.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? (
       <span><Redirect to={`/eshop/${ this.state.statement.code } `}/></span>
    ) : (
      <span></span>
    )}



    <Button bsStyle="success" onClick={this.newEShop.bind(this)}>create eshop</Button>
    </Col>
   </Row>
  </form>
  </section>
);

    return (formInstance);
  }
}
