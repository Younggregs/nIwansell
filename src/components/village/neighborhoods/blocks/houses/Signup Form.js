import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button,FormGroup, FormControl, ControlLabel, HelpBlock ,Row,Col} from 'react-bootstrap';
import { login } from './auth/Auth'
import AppName from './App Name'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class SignupForm extends React.Component {

  state={
    campuslist: [],
    statement: [],
    isLoading: false,
    isLoading2: false
  }

  async componentWillMount() {

    this.setState({ isLoading2: true})
    try {
      const res = await fetch('https://www.iwansell.com/api/campus/');
      const campuslist = await res.json();
      this.setState({
        campuslist
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading2: false})
  }



  async submitForm(){

    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var campus = document.getElementById("campus").value
    var phone = document.getElementById("phone").value
    var password = document.getElementById("password").value



    var formData = new FormData()
    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('campus', campus)
    formData.append('phone', phone)
    formData.append('password', password)


    try {
      const res = await fetch('https://www.iwansell.com/api/accounts/', {

       body :formData,
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',

      });
      const statement = await res.json();
      this.setState({
        statement
      });

    } catch (e) {
      console.log(e);
    }

    login(phone, password)


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
  <section className="signup-form">

  <Row>
  <div className="login-appname">
   <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
  <Link to="/">
    <AppName/>
  </Link>
  </Col>
  </div>
</Row><br />


  <Row>
   <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={4} smOffset={2} xs={4} xsOffset={2}>
  <Link to="/Signin">
    <Button>Signin</Button>
  </Link>
  </Col>

  <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={6} xs={6}>
  <Link to="/Signup">
    <Button bsStyle="primary">Signup</Button>
  </Link>
  </Col>
  </Row><br />

  <form>
  <Row>
   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="firstname"
      type="text"
      label="Firstname"
      name="firstname"
      placeholder="Firstname"
    />
    </Col>

    <Col lg={6} md={6} sm={12} xs={12}>
      <FieldGroup
        id="lastname"
        type="text"
        label="Lastname"
        name="lastname"
        placeholder="Lastname"
      />
    </Col>
  </Row>


<Row>
   <Col lg={6} md={6} sm={12} xs={12}>
   <FieldGroup
      id="phone"
      type="text"
      label="Phone number"
      name="phone"
      placeholder="e.g 08109599939"
    />
  </Col>

  <Col lg={6} md={6} sm={12} xs={12}>

    <FormGroup>
    <ControlLabel>Select Campus</ControlLabel>
    <p>
      {this.state.isLoading2 ? (
        <div>
        <p><b><i>Fetching Campus</i></b></p>
        <p><Spinner color="#ff0000" size={32}/></p>
        </div>
        ) : (
          <div/>
        )}
        </p>
    <FormControl componentClass="select" placeholder="select" name="campus" id="campus">
                    <option value={1}>Select Campus</option>
                   {this.state.campuslist.map(item => (
                    <option value={item.id}>{item.campus_code}</option>
                    ))}
      </FormControl>
      </FormGroup>
  </Col>
  </Row>

  <Row>
   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup id="password" label="Password" type="password" name="password" placeholder="Password"/>
    </Col>

    <Col lg={6} md={6} sm={3} smOffset={4} xs={3} xsOffset={4}>
        <br /><Button bsStyle="primary" onClick={this.submitForm.bind(this)}>Submit</Button>
    </Col>

  </Row>
  </form>

  <Row>
   {this.state.statement.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? (
       <span><Redirect to='/home'/></span>
    ) : (
      <span></span>
    )}
   </Row>
  </section>
);

    return (formInstance);
  }
}
