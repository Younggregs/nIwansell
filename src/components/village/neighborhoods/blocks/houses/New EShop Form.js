import React from 'react';
import  { Redirect } from 'react-router-dom'
import { Row, Col, Button,FormGroup, FormControl, Form } from 'react-bootstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import Heading from './Heading'


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
        <div>{label}</div>
        <FormControl {...props} />
        {help && <div>{help}</div>}
      </FormGroup>
  );
}




const formInstance = (
  <section className="signin-form">

  <form>
  
  <Row className="justify-content-md-center">
  <Col lg={6} md={6} sm={12} xs={12}>
  <br />
  <Heading title="Create New eShop"/>
  <div><b>Note: eShop is now in free trial mode</b></div>

  <FormGroup>
      <div>Select eshop category</div>
      {this.state.isLoading ? (
        <div className="isloading">
        <p><b><i>loading...</i></b></p>
        <p><Spinner color="#ff0000" size={32}/></p>
        </div>
      ) : (
        <Form.Control
          as="select"
          placeholder="select"
          id="category"
          name="category"
          multiple>
          {this.state.categorylist.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
          </Form.Control>
      )}

      <div>You can select multiple categories for your eshop</div>
    </FormGroup>




    <FieldGroup
      id="eshop_name"
      type="text"
      label="Name of e-shop"
      name="eshop_name"
      placeholder="e.g Simi's Closet"
    />

  <div>About eshop</div><br />

  <FormGroup controlId="formControlsTextarea">
    <Form.Label>Describe Product
      {this.state.description_err ? (
      <span className="err-msg">
       * description required 
      </span>
    ) : (
      <div/>
    )}
      </Form.Label>
  <FormControl 
    as="textarea" 
    id="about"
    name="about"
    rows="3"
    />
  </FormGroup><br />

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
    <div><b>Note: eShop is now in free trial mode</b></div>


        {this.state.isLoading ? (
          <div className="isloading">
          <p><b><i>loading...</i></b></p>
          <p><Spinner color="#ff0000" size={32}/></p>
          </div>
        ) : (
          <div/>
        )}


    <Button variant="success" onClick={this.newEShop.bind(this)}>create eShop[trial mode]</Button>
    </Col>
   </Row>
  </form>
  </section>
);

    return (formInstance);
  }
}
