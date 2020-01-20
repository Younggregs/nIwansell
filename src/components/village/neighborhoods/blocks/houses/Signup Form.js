import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, FormControl, Row, Col, InputGroup} from 'react-bootstrap';
import { login } from './auth/Auth'
import AppName from './App Name'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class SignupForm extends React.Component {

  state={
    campuslist: [],
    statement: [],
    isLoading: false,
    isLoading2: false,
    firstname_err: false,
    lastname_err: false,
    phone_err: false,
    password_err: false,
    campus_err: false,
    phone_invalid_err: false,
    verify: false,
    phone: '08109599597'
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



  isValidPhone(phone) {
    var valid = phone.search(/^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im);
    if(valid > -1) {
        return true;
    }
    else {
        return false;
    }
}



  async submitForm(){

    this.setState({ 
      firstname_err: false,
      lastname_err: false,
      campus_err: false,
      phone_err: false,
      password_err: false,
      isLoading: true
    })

    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var campus = document.getElementById("campus").value
    var phone = document.getElementById("phone").value
    var password = document.getElementById("password").value

    this.setState({ phone })

    var valid = this.isValidPhone(phone)

    if(firstname){

      if(lastname){

        if(phone){

          if(password){

            if(campus){

              if(valid){

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
            
            login(phone, password)
            this.setState({ verify: true })

          } catch (e) {
            console.log(e);
          }

              }else{
                this.setState({phone_invalid_err: true})
              }

            }else{
              this.setState({campus_err: true})
            }
          }else{
            this.setState({password_err: true})
          }  

        }else{
          this.setState({phone_err: true})
        }

      }else{
        this.setState({lastname_err: true})
      }

    }else{
      this.setState({firstname_err: true})
    }

    this.setState({isLoading: false})

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

  <Row className="justify-content-center">
  <div className="login-appname">
   <Col lg={6} md={6} sm={12} xs={12}>
  <Link to="/">
    <AppName/>
  </Link>
  </Col>
  </div>
</Row><br />


  <Row className="justify-content-center">
   <Col lg={4} md={4} sm={4} xs={4}>
  <Link to="/Signin">
    <Button variant="outline-warning">Signin</Button>
  </Link>
  </Col>

  <Col lg={4} md={4} sm={4} xs={4}>
  <Link to="/Signup">
    <Button variant="info">Signup</Button>
  </Link>
  </Col>
  </Row><br />

  <form>
  <Row className="justify-content-center">
   <Col lg={6} md={6} sm={12} xs={12}>
   <FormGroup>
      <div>Firstname
      {this.state.firstname_err ? (
      <span className="err-msg">
       * firstname required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl 
        id="firstname" 
        name="firstname"
        type="text"
        />
    </FormGroup>
    </Col>


    <Col lg={6} md={6} sm={12} xs={12}>
      <FormGroup>
      <div>Lastname
      {this.state.lastname_err ? (
      <span className="err-msg">
       * lastname required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl 
        id="lastname" 
        name="lastname"
        type="text"
        />
    </FormGroup>
    </Col>
  </Row>

<Row className="justify-content-center">
   <Col lg={6} md={6} sm={12} xs={12}>
   <Form.Label>Phone
   {this.state.phone_err ? (
      <span className="err-msg">
       * phone required 
      </span>
    ) : (
      <div/>
    )}
    {this.state.phone_invalid_err ? (
      <span className="err-msg">
       * enter valid phone number
      </span>
    ) : (
      <div/>
    )}
   </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">+234</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              id="phone"
              name="phone"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a phone number.
            </Form.Control.Feedback>
          </InputGroup>
  </Col>

  <Col lg={6} md={6} sm={12} xs={12}>

    <FormGroup>
      <div>Select Campus
      {this.state.campus_err ? (
      <span className="err-msg">
       * campus required 
      </span>
    ) : (
      <div/>
    )}
      </div>
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
        <Form.Control as="select" id="campus" name="campus">
                   {this.state.campuslist.map(item => (
                    <option value={item.id}>{item.campus_code}</option>
                    ))}
        </Form.Control>
      </FormGroup>
  </Col>
  </Row>

  <Row className="justify-content-center">
   <Col lg={6} md={6} sm={12} xs={12}>
   <FormGroup>
      <div>Password
      {this.state.password_err ? (
      <span className="err-msg">
       * password required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl 
        id="password" 
        name="password"
        type="password"
        />
    </FormGroup>
    </Col>

    <Col lg={6} md={6} sm={3} smOffset={4} xs={3} xsOffset={4}>
        <br /><Button variant="success" onClick={this.submitForm.bind(this)}>Submit</Button>
    </Col>

  </Row>
  </form>

  <Row className="justify-content-center">
  {this.state.isLoading ? (
              
              <Row>
              <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                  <Spinner color="#01579b" size={20}/>
                </Col>
              </Row>
          ) : (
            <div>
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

            </div>
          )}
   
   </Row>
  </section>
);

    return ( formInstance );
  }
}
