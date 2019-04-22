import React from 'react';
import  { Redirect } from 'react-router-dom'
import { Row, Col, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class NewEShopForm extends React.Component {

  state = {
    isLoading: false,
    statement: [],
    categorylist: []

  }


async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      const res = await fetch('https://www.iwansell.com/api/category/');
      const categorylist = await res.json();
      this.setState({
        categorylist
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })

  }
















  async newEShop(){

    this.setState({ isLoading: true })

    var category = document.getElementById('category').value
    var eshop_name = document.getElementById('eshop_name').value
    var about = document.getElementById('about').value

    var formData = new FormData()

    formData.append('category', category)
    formData.append('eshop_name', eshop_name)
    formData.append('about', about)


    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('https://www.iwansell.com/api/new_eshop/', {

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

    this.setState({ isLoading: false })

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
  <HelpBlock><b>Note: eShop is now in free trial mode</b></HelpBlock>
  <Row>
  <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>

  <FormGroup>
      <ControlLabel>Select eshop category</ControlLabel>
      {this.state.isLoading ? (
        <div className="isloading">
        <p><b><i>loading...</i></b></p>
        <p><Spinner color="#ff0000" size={32}/></p>
        </div>
      ) : (
        <FormControl
          componentClass="select"
          placeholder="select"
          id="category"
          name="category"
          multiple>
          {this.state.categorylist.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
          </FormControl>
      )}

      <HelpBlock>You can select multiple categories for your eshop</HelpBlock>
    </FormGroup>




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
       <span><Redirect to={`/eshop/${ this.state.statement.code }`}/></span>
    ) : (
      <span></span>
    )}
    <HelpBlock><b>Note: eShop is now in free trial mode</b></HelpBlock>


        {this.state.isLoading ? (
          <div className="isloading">
          <p><b><i>loading...</i></b></p>
          <p><Spinner color="#ff0000" size={32}/></p>
          </div>
        ) : (
          <div/>
        )}


    <Button bsStyle="success" onClick={this.newEShop.bind(this)}>create eShop[trial mode]</Button>
    </Col>
   </Row>
  </form>
  </section>
);

    return (formInstance);
  }
}
